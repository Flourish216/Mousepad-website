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

  // Generate timeline from Elite5 pads
  function generateTimeline() {
    const timelineContainer = document.querySelector('.journey-timeline');
    if (!timelineContainer) return;
    
    const elite5Pads = allMousepads.filter(pad => pad.brand === 'elite5');
    if (elite5Pads.length === 0) return;
    
    // Sort by spectrum value (fastest to slowest)
    elite5Pads.sort((a, b) => a.spectrum - b.spectrum);
    
    // Define color classes based on spectrum ranges (0=slowest, 100=fastest)
    function getColorClass(spectrum) {
      if (spectrum >= 80) return 'extreme-speed'; // 80-100: fastest
      if (spectrum >= 60) return 'high-speed';    // 60-80: fast
      if (spectrum >= 40) return 'balanced';      // 40-60: balanced
      return 'control';                           // 0-40: slowest
    }
    
    // Generate markers HTML
    const markersHTML = elite5Pads.map((pad, index) => {
      const position = (pad.spectrum / 100) * 100; // Convert to percentage
      const adjustedPosition = position * 0.9 + 2; // Scale to 2-92% range
      const colorClass = getColorClass(pad.spectrum);
      
      return `
        <div class="timeline-marker" style="left: ${adjustedPosition}%">
          <div class="marker-dot ${colorClass}"></div>
          <div class="marker-label">
            <strong>${pad.name}</strong>
            <span>${pad.spectrum}</span>
          </div>
        </div>
      `;
    }).join('');
    
    // Add rail HTML
    const railHTML = `
      <div class="timeline-rail">
        <div class="rail-gradient"></div>
        <div class="rail-labels">
          <span>Fastest</span>
          <span>Slowest</span>
        </div>
      </div>
    `;
    
    timelineContainer.innerHTML = markersHTML + railHTML;
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
    let variants1 = [];
    let variants2 = [];

    // Setup autocomplete
    function setupAutocomplete(input, suggestionsDiv, onSelect) {
      input.addEventListener('input', () => {
        const query = input.value.trim();
        const queryLower = query.toLowerCase();
        
        if (query.length < 2) {
          suggestionsDiv.style.display = 'none';
          return;
        }
        
        // Get unique base names (include Elite5)
        const uniquePads = new Map();
        allMousepads.forEach(pad => {
          const nameLower = pad.name.toLowerCase();
          if (nameLower.includes(queryLower) || queryLower.split(/\s+/).some(word => word.length > 1 && nameLower.includes(word))) {
            const key = `${pad.brand}-${pad.name}`;
            if (!uniquePads.has(key)) {
              uniquePads.set(key, pad);
            }
          }
        });
        
        const matches = Array.from(uniquePads.values()).slice(0, 3);
        
        if (matches.length > 0) {
          suggestionsDiv.innerHTML = matches.map(pad => 
            `<div class="suggestion-item" data-name="${pad.name}" data-brand="${pad.brand}">
              ${pad.brand} ${pad.name}
            </div>`
          ).join('');
          suggestionsDiv.style.display = 'block';
          
          suggestionsDiv.querySelectorAll('.suggestion-item').forEach(item => {
            item.addEventListener('click', () => {
              const padName = item.dataset.name;
              const padBrand = item.dataset.brand;
              input.value = `${padBrand} ${padName}`;
              suggestionsDiv.style.display = 'none';
              
              // Find variants and auto-select mid or first available
              const variants = allMousepads.filter(pad => 
                pad.name === padName && pad.brand === padBrand
              );
              
              const selectedPad = variants.find(v => v.hardness === 'mid') || variants[0];
              
              if (selectedPad) {
                onSelect(selectedPad, variants);
              }
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

    setupAutocomplete(input1, suggestions1, (pad, variants) => {
      selectedPad1 = pad;
      variants1 = variants;
      comparedPad1 = pad;
      compareProducts();
      updateCanvas();
    });

    setupAutocomplete(input2, suggestions2, (pad, variants) => {
      selectedPad2 = pad;
      variants2 = variants;
      comparedPad2 = pad;
      compareProducts();
      updateCanvas();
    });

    // Compare products
    function compareProducts() {
      if (!selectedPad1 || !selectedPad2) {
        resultsDiv.style.display = 'none';
        return;
      }

      const hardnessOptions1 = [...new Set(variants1.map(v => v.hardness))];
      const hardnessOptions2 = [...new Set(variants2.map(v => v.hardness))];

      resultsDiv.innerHTML = `
        <div class="comparison-grid">
          <div class="compare-card">
            <div class="compare-header">
              <div class="hardness-selector">
                ${hardnessOptions1.map(h => `
                  <button class="hardness-option ${h === selectedPad1.hardness ? 'active' : ''}" data-hardness="${h}" data-pad="1" ${hardnessOptions1.length === 1 ? 'disabled' : ''}>
                    ${h.toUpperCase()}
                  </button>
                `).join('')}
              </div>
              <span class="match-badge">${selectedPad1.brand}</span>
            </div>
            <h3>${selectedPad1.brand} ${selectedPad1.name}</h3>
            <p class="compare-tagline">${selectedPad1.category}</p>
            <div class="compare-specs">
              <div class="spec-row">
                <span class="spec-label">Spectrum Value:</span>
                <span>${selectedPad1.spectrum}</span>
              </div>
            </div>
          </div>

          <div class="compare-card">
            <div class="compare-header">
              <div class="hardness-selector">
                ${hardnessOptions2.map(h => `
                  <button class="hardness-option ${h === selectedPad2.hardness ? 'active' : ''}" data-hardness="${h}" data-pad="2" ${hardnessOptions2.length === 1 ? 'disabled' : ''}>
                    ${h.toUpperCase()}
                  </button>
                `).join('')}
              </div>
              <span class="match-badge">${selectedPad2.brand}</span>
            </div>
            <h3>${selectedPad2.brand} ${selectedPad2.name}</h3>
            <p class="compare-tagline">${selectedPad2.category}</p>
            <div class="compare-specs">
              <div class="spec-row">
                <span class="spec-label">Spectrum Value:</span>
                <span>${selectedPad2.spectrum}</span>
              </div>
            </div>
          </div>
        </div>
      `;
      resultsDiv.style.display = 'block';
      
      // Add click handlers for hardness buttons
      resultsDiv.querySelectorAll('.hardness-option').forEach(btn => {
        btn.addEventListener('click', () => {
          const newHardness = btn.dataset.hardness;
          const padNum = btn.dataset.pad;
          
          if (padNum === '1') {
            const newPad = variants1.find(v => v.hardness === newHardness);
            if (newPad) {
              selectedPad1 = newPad;
              comparedPad1 = newPad;
              compareProducts();
              updateCanvas();
            }
          } else {
            const newPad = variants2.find(v => v.hardness === newHardness);
            if (newPad) {
              selectedPad2 = newPad;
              comparedPad2 = newPad;
              compareProducts();
              updateCanvas();
            }
          }
        });
      });
    }
  }

  // Track compared pads globally
  let comparedPad1 = null;
  let comparedPad2 = null;
  let canvasDrawFunction = null; // Store reference to draw function

  // Function to trigger canvas redraw from outside
  function updateCanvas() {
    if (canvasDrawFunction) {
      canvasDrawFunction();
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
    
    // Get Elite5 pads from data (brand === 'elite5')
    const elite5Pads = allMousepads.filter(pad => pad.brand === 'elite5');
    
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
      const paddingX = 10; // Minimal padding to use full canvas width
      const paddingY = 80;
      const usableWidth = width - (paddingX * 2);
      const usableHeight = height - (paddingY * 2);
      
      padPositions.length = 0;
      
      // Find actual min/max spectrum values in the data
      const spectrumValues = allMousepads.map(p => p.spectrum);
      const minSpectrum = Math.min(...spectrumValues);
      const maxSpectrum = Math.max(...spectrumValues);
      const spectrumRange = maxSpectrum - minSpectrum;
      
      // Calculate vertical wave pattern to stagger pads
      const waveAmplitude = usableHeight * 0.3; // 30% of usable height for wave
      const centerY = height / 2;
      
      // Position each pad with wave-based vertical offset
      allMousepads.forEach((pad, index) => {
        // Map spectrum to full canvas width using actual data range
        const normalizedX = (pad.spectrum - minSpectrum) / spectrumRange;
        const x = paddingX + (normalizedX * usableWidth);
        
        // Create a wave pattern based on spectrum position for vertical distribution
        // Use sine wave to create smooth up/down variation across the spectrum
        const waveFrequency = 3; // Controls how many waves across the spectrum (higher = more waves)
        const waveOffset = Math.sin(normalizedX * Math.PI * 2 * waveFrequency) * waveAmplitude;
        const y = centerY + waveOffset;
        
        const isElite5 = pad.brand === 'elite5';
        
        padPositions.push({
          pad,
          x,
          y,
          radius: isElite5 ? 5 : 4,
          isElite5
        });
      });
    }

    function draw() {
      const width = canvas.width / dpr;
      const height = canvas.height / dpr;
      
      ctx.clearRect(0, 0, width, height);

      // Draw gradient background (now left=slow/blue, right=fast/red)
      const gradient = ctx.createLinearGradient(0, 0, width, 0);
      gradient.addColorStop(0, 'rgba(0, 170, 255, 0.15)');
      gradient.addColorStop(0.2, 'rgba(68, 255, 136, 0.15)');
      gradient.addColorStop(0.4, 'rgba(255, 170, 0, 0.15)');
      gradient.addColorStop(0.6, 'rgba(255, 68, 68, 0.15)');
      gradient.addColorStop(1, 'rgba(255, 0, 128, 0.15)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Draw category zones (now 0=slow/left, 100=fast/right)
      const zones = [
        { start: 0, end: 0.2, label: 'CONTROL', color: 'rgba(0, 170, 255, 0.05)' },
        { start: 0.2, end: 0.4, label: 'BALANCE-CONTROL', color: 'rgba(68, 255, 136, 0.05)' },
        { start: 0.4, end: 0.6, label: 'BALANCED', color: 'rgba(255, 170, 0, 0.05)' },
        { start: 0.6, end: 0.8, label: 'SPEED', color: 'rgba(255, 68, 68, 0.05)' },
        { start: 0.8, end: 1, label: 'EXTREME SPEED', color: 'rgba(255, 0, 128, 0.05)' }
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
        const isCompared1 = comparedPad1 && pad.name === comparedPad1.name && pad.brand === comparedPad1.brand && pad.hardness === comparedPad1.hardness;
        const isCompared2 = comparedPad2 && pad.name === comparedPad2.name && pad.brand === comparedPad2.brand && pad.hardness === comparedPad2.hardness;
        
        // Draw dot
        ctx.beginPath();
        const drawRadius = (isCompared1 || isCompared2) ? radius * 1.5 : (isHovered ? radius * 1.5 : radius);
        ctx.arc(x, y, drawRadius, 0, Math.PI * 2);
        
        if (isCompared1) {
          // First comparison pad - cyan/blue
          ctx.fillStyle = 'rgba(0, 200, 255, 0.9)';
          ctx.fill();
          ctx.strokeStyle = 'rgba(0, 200, 255, 1)';
          ctx.lineWidth = 2;
          ctx.stroke();
        } else if (isCompared2) {
          // Second comparison pad - pink/magenta
          ctx.fillStyle = 'rgba(255, 0, 200, 0.9)';
          ctx.fill();
          ctx.strokeStyle = 'rgba(255, 0, 200, 1)';
          ctx.lineWidth = 2;
          ctx.stroke();
        } else if (isElite5) {
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
          const hardnessText = (hoveredPad.hardness || 'mid').toUpperCase();
          const hardnessWidth = ctx.measureText(hardnessText).width;
          const categoryWidth = ctx.measureText(hoveredPad.category).width;
          const spectrumText = `${hoveredPad.spectrum}`;
          const spectrumWidth = ctx.measureText(spectrumText).width;
          const tooltipWidth = Math.max(nameWidth, hardnessWidth, categoryWidth, spectrumWidth) + paddingX * 2;
          const tooltipHeight = paddingY * 2 + 13 + (lineSpacing + 11) * 3; // 4 lines total
          
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
          
          // Tooltip text - name only
          ctx.fillStyle = '#fff';
          ctx.font = 'bold 13px Inter, sans-serif';
          ctx.textAlign = 'left';
          ctx.fillText(hoveredPad.name, tooltipX + paddingX, tooltipY + paddingY + 13);
          
          // Tooltip text - hardness (no label)
          ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
          ctx.font = '11px Inter, sans-serif';
          ctx.fillText((hoveredPad.hardness || 'mid').toUpperCase(), tooltipX + paddingX, tooltipY + paddingY + 13 + lineSpacing + 11);
          
          // Tooltip text - category
          ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
          ctx.fillText(hoveredPad.category, tooltipX + paddingX, tooltipY + paddingY + 13 + (lineSpacing + 11) * 2);
          
          // Tooltip text - spectrum value
          ctx.fillStyle = 'rgba(255, 200, 0, 0.9)';
          ctx.fillText(`${hoveredPad.spectrum}`, tooltipX + paddingX, tooltipY + paddingY + 13 + (lineSpacing + 11) * 3);
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
    
    // Store draw function reference for external updates
    canvasDrawFunction = draw;
    
    resize();
  }

  // Parse CSV data
  function parseCSV(text) {
    const lines = text.trim().split(/\r?\n/);
    const headers = lines[0].split(',').map(h => h.trim());
    const data = [];
    
    for (let i = 1; i < lines.length; i++) {
      if (!lines[i].trim()) continue; // Skip empty lines
      const values = lines[i].split(',');
      if (values.length < headers.length) continue; // Skip incomplete lines
      
      const obj = {};
      headers.forEach((header, index) => {
        const value = (values[index] || '').trim();
        // Convert spectrum to number (supports decimals)
        obj[header] = header === 'spectrum' ? parseFloat(value) : value;
      });
      data.push(obj);
    }
    
    return data;
  }

  // Load mousepad data from CSV
  async function loadMousepadData() {
    try {
      const response = await fetch(basePath + 'mousepad-spectrum.csv');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const text = await response.text();
      allMousepads = parseCSV(text);
      
      console.log('Loaded mousepads:', allMousepads.length);
      
      // Count Elite5 products (including hardness variants)
      const elite5Count = allMousepads.filter(pad => pad.brand === 'elite5').length;
      
      // Update stat counters if available
      const statNumbers = document.querySelectorAll('.stat-number');
      statNumbers.forEach(stat => {
        const label = stat.nextElementSibling;
        if (label && label.textContent.includes('Mousepads Mapped')) {
          stat.dataset.target = allMousepads.length;
        }
        if (label && label.textContent.includes('Elite5 Pads')) {
          stat.dataset.target = elite5Count;
        }
      });
      
      // Initialize counters AFTER updating data targets
      initCounters();
      
      // Initialize components after data loads
      generateTimeline();
      initComparison();
      initSpectrum();
    } catch (error) {
      console.error('Failed to load mousepad spectrum data:', error);
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      loadMousepadData(); // initCounters will be called after data loads
    });
  } else {
    loadMousepadData(); // initCounters will be called after data loads
  }
})();
