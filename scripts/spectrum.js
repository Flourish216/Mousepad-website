// Spectrum page functionality
(function() {
  'use strict';

  // Wait for main.js to load product data
  if (typeof catalog === 'undefined') {
    console.error('catalog not found - main.js may not be loaded');
    return;
  }

  // Get base path
  const basePath = document.body.dataset.base || './';
  
  // Store loaded mousepad data
  let allMousepads = [];

  // Counter animation for stats
  function animateCounter(element) {
    const target = parseInt(element.dataset.target);
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        element.textContent = target;
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current);
      }
    }, 16);
  }

  // Initialize stat counters
  function initCounters() {
    document.querySelectorAll('.stat-number').forEach(el => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });
      observer.observe(el);
    });
  }

  // Initialize comparison with autocomplete
  function initComparison() {
    const input1 = document.getElementById('compare-pad-1');
    const input2 = document.getElementById('compare-pad-2');
    const suggestions1 = document.getElementById('suggestions-1');
    const suggestions2 = document.getElementById('suggestions-2');
    const resultsDiv = document.getElementById('comparison-results');
    
    if (!input1 || !input2 || allMousepads.length === 0) return;

    let selectedPad1 = null;
    let selectedPad2 = null;

    // Setup autocomplete for input 1
    function setupAutocomplete(input, suggestionsDiv, onSelect) {
      input.addEventListener('input', () => {
        const query = input.value.trim();
        const queryLower = query.toLowerCase();
        
        if (query.length < 2) {
          suggestionsDiv.style.display = 'none';
          return;
        }
        
        const matches = allMousepads.filter(pad => 
          pad.name.toLowerCase().includes(queryLower)
        ).slice(0, 4);
        
        if (matches.length > 0) {
          suggestionsDiv.innerHTML = matches.map(pad => 
            `<div class="suggestion-item" data-name="${pad.name}">${pad.name}</div>`
          ).join('');
          suggestionsDiv.style.display = 'block';
          
          suggestionsDiv.querySelectorAll('.suggestion-item').forEach(item => {
            item.addEventListener('click', () => {
              const name = item.dataset.name;
              input.value = name;
              suggestionsDiv.style.display = 'none';
              const pad = allMousepads.find(p => p.name === name);
              onSelect(pad);
            });
          });
        } else {
          suggestionsDiv.style.display = 'none';
        }
      });
      
      // Close suggestions on blur
      input.addEventListener('blur', () => {
        setTimeout(() => suggestionsDiv.style.display = 'none', 200);
      });
    }

    setupAutocomplete(input1, suggestions1, (pad) => {
      selectedPad1 = pad;
      compareProducts();
    });

    setupAutocomplete(input2, suggestions2, (pad) => {
      selectedPad2 = pad;
      compareProducts();
    });

    // Compare products
    function compareProducts() {
      if (!selectedPad1 || !selectedPad2) {
        resultsDiv.style.display = 'none';
        return;
      }

      resultsDiv.innerHTML = `
        <div class="comparison-grid">
          <div class="compare-card">
            <h3>${selectedPad1.name}</h3>
            <p class="compare-tagline">${selectedPad1.category}</p>
            <div class="compare-specs">
              <div class="spec-row">
                <span class="spec-label">Category:</span>
                <span>${selectedPad1.category}</span>
              </div>
              <div class="spec-row">
                <span class="spec-label">Spectrum Value:</span>
                <span>${selectedPad1.spectrum}</span>
              </div>
            </div>
          </div>

          <div class="compare-card">
            <h3>${selectedPad2.name}</h3>
            <p class="compare-tagline">${selectedPad2.category}</p>
            <div class="compare-specs">
              <div class="spec-row">
                <span class="spec-label">Category:</span>
                <span>${selectedPad2.category}</span>
              </div>
              <div class="spec-row">
                <span class="spec-label">Spectrum Value:</span>
                <span>${selectedPad2.spectrum}</span>
              </div>
            </div>
          </div>
        </div>
      `;
      resultsDiv.style.display = 'block';
    }
  }

  // Canvas visualization with all mousepads
  function initSpectrum() {
    const canvas = document.getElementById('spectrum-canvas');
    if (!canvas || allMousepads.length === 0) return;

    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    let hoveredPad = null;
    let mousePos = { x: 0, y: 0 };
    
    // Elite5 pad names to highlight
    const elite5Names = ['Artisan Raiden', 'Artisan Shidenkai', 'Artisan Hien', 'Artisan k83',
                         'tisan hayate otsu', 'Artisan Zero', 'LGG Saturn', 'Artisan type99'];
    
    // Store pad positions for hit detection
    const padPositions = [];
    
    function resize() {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      calculatePositions();
      draw();
    }

    function calculatePositions() {
      const width = canvas.width / dpr;
      const height = canvas.height / dpr;
      
      // Add padding to prevent edge clipping
      const paddingX = 80;
      const paddingY = 80;
      const usableWidth = width - (paddingX * 2);
      const usableHeight = height - (paddingY * 2);
      
      // Group pads by spectrum value
      const spectrumGroups = {};
      allMousepads.forEach(pad => {
        if (!spectrumGroups[pad.spectrum]) spectrumGroups[pad.spectrum] = [];
        spectrumGroups[pad.spectrum].push(pad);
      });
      
      padPositions.length = 0;
      
      // Calculate positions for each group
      Object.keys(spectrumGroups).forEach(spectrum => {
        const group = spectrumGroups[spectrum];
        const groupSize = group.length;
        
        group.forEach((pad, index) => {
          // Map spectrum (0=fastest, 100=slowest) to x position (left to right)
          const normalizedX = pad.spectrum / 100;
          const x = paddingX + (normalizedX * usableWidth);
          
          // Spread pads vertically within their spectrum column
          const verticalSpacing = Math.min(25, usableHeight / Math.max(groupSize, 1));
          const groupHeight = (groupSize - 1) * verticalSpacing;
          const startY = (height - groupHeight) / 2;
          const y = startY + (index * verticalSpacing);
          
          const isElite5 = elite5Names.some(name => pad.name.toLowerCase().includes(name.toLowerCase()));
          
          padPositions.push({
            pad,
            x,
            y,
            radius: isElite5 ? 8 : 4,
            isElite5
          });
        });
      });
    }

    function draw() {
      const width = canvas.width / dpr;
      const height = canvas.height / dpr;
      
      ctx.clearRect(0, 0, width, height);

      // Draw gradient background
      const gradient = ctx.createLinearGradient(0, 0, width, 0);
      gradient.addColorStop(0, 'rgba(255, 0, 128, 0.15)');
      gradient.addColorStop(0.2, 'rgba(255, 68, 68, 0.15)');
      gradient.addColorStop(0.4, 'rgba(255, 170, 0, 0.15)');
      gradient.addColorStop(0.6, 'rgba(68, 255, 136, 0.15)');
      gradient.addColorStop(1, 'rgba(0, 170, 255, 0.15)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Draw category zones
      const zones = [
        { start: 0, end: 0.2, label: 'EXTREME SPEED', color: 'rgba(255, 0, 128, 0.05)' },
        { start: 0.2, end: 0.4, label: 'SPEED', color: 'rgba(255, 68, 68, 0.05)' },
        { start: 0.4, end: 0.6, label: 'BALANCED', color: 'rgba(255, 170, 0, 0.05)' },
        { start: 0.6, end: 0.8, label: 'BALANCE-CONTROL', color: 'rgba(68, 255, 136, 0.05)' },
        { start: 0.8, end: 1, label: 'CONTROL', color: 'rgba(0, 170, 255, 0.05)' }
      ];
      
      zones.forEach(zone => {
        const startX = zone.start * width;
        const zoneWidth = (zone.end - zone.start) * width;
        
        // Zone background
        ctx.fillStyle = zone.color;
        ctx.fillRect(startX, 0, zoneWidth, height);
        
        // Zone label
        ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
        ctx.font = 'bold 11px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(zone.label, startX + zoneWidth / 2, 25);
      });

      // Draw all mousepads
      padPositions.forEach(({ pad, x, y, radius, isElite5 }) => {
        const isHovered = hoveredPad === pad;
        
        // Draw dot
        ctx.beginPath();
        ctx.arc(x, y, isHovered ? radius * 1.5 : radius, 0, Math.PI * 2);
        
        if (isElite5) {
          ctx.fillStyle = isHovered ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.9)';
          ctx.fill();
          ctx.strokeStyle = isHovered ? 'rgba(255, 200, 0, 1)' : 'rgba(255, 255, 255, 0.4)';
          ctx.lineWidth = 2;
          ctx.stroke();
        } else {
          ctx.fillStyle = isHovered ? 'rgba(255, 255, 255, 0.6)' : 'rgba(255, 255, 255, 0.25)';
          ctx.fill();
        }
      });

      // Draw tooltip
      if (hoveredPad) {
        const padPos = padPositions.find(p => p.pad === hoveredPad);
        if (padPos) {
          const paddingX = 12;
          const paddingY = 10;
          const lineSpacing = 4;
          
          // Calculate text metrics
          ctx.font = 'bold 13px Inter, sans-serif';
          const nameWidth = ctx.measureText(hoveredPad.name).width;
          ctx.font = '11px Inter, sans-serif';
          const categoryWidth = ctx.measureText(hoveredPad.category).width;
          const spectrumText = `Spectrum: ${hoveredPad.spectrum}`;
          const spectrumWidth = ctx.measureText(spectrumText).width;
          const tooltipWidth = Math.max(nameWidth, categoryWidth, spectrumWidth) + paddingX * 2;
          const tooltipHeight = paddingY * 2 + 13 + lineSpacing + 11 + lineSpacing + 11;
          
          // Smart positioning - flip to left if too close to right edge
          let tooltipX = mousePos.x + 15;
          let tooltipY = mousePos.y - tooltipHeight - 10;
          
          // Check right boundary
          if (tooltipX + tooltipWidth > width - 10) {
            tooltipX = mousePos.x - tooltipWidth - 15;
          }
          
          // Check top boundary
          if (tooltipY < 10) {
            tooltipY = mousePos.y + 15;
          }
          
          // Check bottom boundary
          if (tooltipY + tooltipHeight > height - 10) {
            tooltipY = height - tooltipHeight - 10;
          }
          
          // Check left boundary
          if (tooltipX < 10) {
            tooltipX = 10;
          }
          
          // Tooltip shadow
          ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
          ctx.shadowBlur = 15;
          ctx.shadowOffsetX = 0;
          ctx.shadowOffsetY = 4;
          
          // Tooltip background with border
          ctx.fillStyle = 'rgba(5, 5, 5, 0.98)';
          ctx.fillRect(tooltipX, tooltipY, tooltipWidth, tooltipHeight);
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
          ctx.lineWidth = 1;
          ctx.strokeRect(tooltipX, tooltipY, tooltipWidth, tooltipHeight);
          
          // Reset shadow
          ctx.shadowColor = 'transparent';
          ctx.shadowBlur = 0;
          
          // Tooltip text - name
          ctx.fillStyle = '#fff';
          ctx.font = 'bold 13px Inter, sans-serif';
          ctx.textAlign = 'left';
          ctx.fillText(hoveredPad.name, tooltipX + paddingX, tooltipY + paddingY + 13);
          
          // Tooltip text - category
          ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
          ctx.font = '11px Inter, sans-serif';
          ctx.fillText(hoveredPad.category, tooltipX + paddingX, tooltipY + paddingY + 13 + lineSpacing + 11);
          
          // Tooltip text - spectrum value
          ctx.fillStyle = 'rgba(255, 200, 0, 0.9)';
          ctx.fillText(`Spectrum: ${hoveredPad.spectrum}`, tooltipX + paddingX, tooltipY + paddingY + 13 + lineSpacing + 11 + lineSpacing + 11);
        }
      }
    }

    // Mouse move handler
    function handleMouseMove(e) {
      const rect = canvas.getBoundingClientRect();
      mousePos.x = e.clientX - rect.left;
      mousePos.y = e.clientY - rect.top;
      
      let foundHover = null;
      for (const { pad, x, y, radius } of padPositions) {
        const dx = mousePos.x - x;
        const dy = mousePos.y - y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < radius * 2) {
          foundHover = pad;
          break;
        }
      }
      
      if (foundHover !== hoveredPad) {
        hoveredPad = foundHover;
        canvas.style.cursor = hoveredPad ? 'pointer' : 'crosshair';
        draw();
      }
    }

    canvas.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', resize);
    
    resize();
  }

  // Load mousepad data from JSON
  async function loadMousepadData() {
    try {
      const response = await fetch(basePath + 'mousepad-spectrum.json');
      const data = await response.json();
      allMousepads = data.data;
      
      // Update stat counter if available
      const statNumbers = document.querySelectorAll('.stat-number');
      statNumbers.forEach(stat => {
        const label = stat.nextElementSibling;
        if (label && label.textContent.includes('Mousepads Mapped') && data.total_mousepads) {
          stat.dataset.target = data.total_mousepads;
        }
      });
      
      // Initialize components after data loads
      initComparison();
      initSpectrum();
    } catch (error) {
      console.error('Failed to load mousepad spectrum data:', error);
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initCounters();
      loadMousepadData();
    });
  } else {
    initCounters();
    loadMousepadData();
  }
})();
