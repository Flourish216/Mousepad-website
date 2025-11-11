const contacts = {
  discord: 'https://discord.gg/pfEfK8AxvQ',
  email: 'contact@elite5pads.com'
};

const catalog = {
  lineup: ['raiden', 'key83', 'hayate-otsu', 'hien', 'shidenkai-v2', 'zero', 'saturn', 'type99', 'pom-skates'],
  categories: [
    {
      slug: 'speed',
      name: 'Speed',
      indicator: 'Speed',
      description: 'Low friction surfaces for fast glide and quick movements.',
      heroProduct: 'raiden',
      members: ['raiden', 'key83', 'hayate-otsu', 'hien', 'shidenkai-v2']
    },
    {
      slug: 'balance',
      name: 'Balance',
      indicator: 'Balance',
      description: 'Smooth glide with good stopping power for all playstyles.',
      heroProduct: 'zero',
      members: ['zero', 'saturn']
    },
    {
      slug: 'control',
      name: 'Control',
      indicator: 'Control',
      description: 'High friction for maximum control and precise stopping.',
      heroProduct: 'type99',
      members: ['type99']
    },
    {
      slug: 'accessories',
      name: 'Accessories',
      indicator: 'Accessories',
      description: 'Low-friction skates and accessories for your mouse.',
      heroProduct: 'pom-skates',
      members: ['pom-skates']
    }
  ],
  products: {
    raiden: {
      slug: 'raiden',
      name: 'Raiden',
      modelCode: 'E5-RD',
      category: 'speed',
      tagline: 'Ultra-fast cloth with silky glide.',
      summary: 'Densely woven polyester for extreme speed and low friction.',
      
      // Detailed specifications
      surface: {
        type: 'Silky smooth, minimal texture',
        material: 'Densely woven tricot knit polyester with thin threads',
        description: 'Ultra-smooth surface with virtually no texture. The tight weave creates a gliding sensation similar to silk while maintaining enough structure for precise control when pressure is applied.'
      },
      
      performance: {
        speedRating: 'Extremely Fast',
        speedDescription: 'Fastest cloth option',
        friction: {
          static: 'Extremely low',
          dynamic: 'Very low',
          stopping: 'Low to moderate'
        }
      },
      
      baseOptions: [
        { name: 'XSOFT', thickness: '4mm', firmness: 'Very Soft', description: 'Micro-adjustments, maximum stopping power, comfortable' },
        { name: 'SOFT', thickness: '4mm', firmness: 'Moderately Soft', description: 'Most versatile, recommended for most players' },
        { name: 'MID', thickness: '3mm', firmness: 'Firm', description: 'Tracking-heavy gameplay, consistent glide' }
      ],
      
      bestFor: [
        'High-speed FPS gameplay',
        'Tracking-heavy games',
        'Speed-focused players'
      ],
      
      specs: {
        size: '490 × 420 mm',
        weight: '~180g',
        material: '100% Polyester',
        base: 'Japanese Poron urethane foam',
        bottom: 'Non-slip suction grip',
        edges: 'Stitched (below surface on SOFT/XSOFT, slightly raised on MID)'
      },
      
      price: 30,
      image: 'assets/raiden.jpg',
      gallery: [
        { label: 'View 1', src: 'assets/raiden.jpg' },
        { label: 'View 2', src: 'assets/raiden.jpg' },
        { label: 'View 3', src: 'assets/raiden.jpg' }
      ],
      cta: contacts.discord
    },
    key83: {
      slug: 'key83',
      name: 'Key83',
      modelCode: 'E5-K83',
      category: 'speed',
      tagline: 'Speed with control.',
      summary: 'Hexagonal weave for uniform glide and stopping power.',
      
      surface: {
        type: 'Lightly textured with hexagonal pattern',
        material: 'Unique hexagonal weave with conductive threads',
        description: 'Distinctive hexagonal pattern visible on the surface. The conductive threads reduce static buildup while the geometric weave provides uniform glide in all directions with consistent stopping power.'
      },
      
      performance: {
        speedRating: 'Balanced Speed',
        speedDescription: 'Speed-oriented with control',
        friction: {
          static: 'Medium',
          dynamic: 'Medium',
          stopping: 'Good'
        }
      },
      
      baseOptions: [
        { name: 'XSOFT', thickness: '4mm', firmness: 'Very Soft', description: 'Micro-adjustments, maximum stopping power, comfortable' },
        { name: 'SOFT', thickness: '4mm', firmness: 'Moderately Soft', description: 'Most versatile, recommended for most players' },
        { name: 'MID', thickness: '3mm', firmness: 'Firm', description: 'Tracking-heavy gameplay, consistent glide' }
      ],
      
      bestFor: [
        'Balanced gameplay',
        'Tactical shooters',
        'Low humidity environments'
      ],
      
      specs: {
        size: '490 × 420 mm',
        weight: '~185g',
        material: '100% Polyester',
        base: 'Japanese Poron urethane foam',
        bottom: 'Non-slip suction grip',
        edges: 'Stitched (below surface on SOFT/XSOFT, slightly raised on MID)'
      },
      
      price: 30,
      image: 'assets/k83.jpg',
      gallery: [
        { label: 'View 1', src: 'assets/k83.jpg' },
        { label: 'View 2', src: 'assets/k83.jpg' },
        { label: 'View 3', src: 'assets/k83.jpg' }
      ],
      cta: contacts.discord
    },
    'hayate-otsu': {
      slug: 'hayate-otsu',
      name: 'Hayate Otsu',
      modelCode: 'E5-HO',
      category: 'speed',
      tagline: 'Balanced speed and control.',
      summary: 'Fine grainy texture with conductive threads for balanced performance.',
      
      surface: {
        type: 'Fine grainy texture, smooth yet controlled',
        material: 'Balanced weave with V2 conductive threads',
        description: 'Subtle grainy surface that feels smooth but not slick. The conductive V2 threads eliminate static in dry conditions. Provides tactile feedback without being rough, making it easy to control while maintaining good glide speed.'
      },
      
      performance: {
        speedRating: 'Balanced Speed',
        speedDescription: 'Medium-fast with control',
        friction: {
          static: 'Medium-low',
          dynamic: 'Medium',
          stopping: 'Good'
        }
      },
      
      baseOptions: [
        { name: 'XSOFT', thickness: '4mm', firmness: 'Very Soft', description: 'Micro-adjustments, maximum stopping power, comfortable' },
        { name: 'SOFT', thickness: '4mm', firmness: 'Moderately Soft', description: 'Most versatile, recommended for most players' },
        { name: 'MID', thickness: '3mm', firmness: 'Firm', description: 'Tracking-heavy gameplay, consistent glide' }
      ],
      
      bestFor: [
        'All-around versatile gameplay',
        'Speed and control balance',
        'FPS games'
      ],
      
      specs: {
        size: '490 × 420 mm',
        weight: '~190g',
        material: '100% Polyester',
        base: 'Japanese Poron urethane foam',
        bottom: 'Non-slip suction grip',
        edges: 'Stitched (below surface on SOFT/XSOFT, slightly raised on MID)'
      },
      
      price: 30,
      image: 'assets/hayate-otsu.jpg',
      gallery: [
        { label: 'View 1', src: 'assets/hayate-otsu.jpg' },
        { label: 'View 2', src: 'assets/hayate-otsu.jpg' },
        { label: 'View 3', src: 'assets/hayate-otsu.jpg' }
      ],
      cta: contacts.discord
    },
    hien: {
      slug: 'hien',
      name: 'Hien',
      modelCode: 'E5-HI',
      category: 'speed',
      tagline: 'Textured speed with tactile control.',
      summary: 'Rough textured surface for fast glide with excellent stopping power.',
      warning: 'Rough texture may be abrasive on skin',
      
      surface: {
        type: 'Very rough, highly textured',
        material: 'Pear skin-like nashi-ji weave (Japanese textile method)',
        description: 'Aggressive textured surface resembling pear skin. The raised weave pattern provides strong tactile feedback and friction. Excellent for precise micro-adjustments but may feel abrasive on bare skin during extended use.'
      },
      
      performance: {
        speedRating: 'Textured Speed',
        speedDescription: 'Fast with tactile control',
        friction: {
          static: 'Low',
          dynamic: 'Medium-high',
          stopping: 'Excellent'
        }
      },
      
      baseOptions: [
        { name: 'XSOFT', thickness: '4mm', firmness: 'Very Soft', description: 'Micro-adjustments, maximum stopping power, comfortable' },
        { name: 'SOFT', thickness: '4mm', firmness: 'Moderately Soft', description: 'Most versatile, recommended for most players' },
        { name: 'MID', thickness: '3mm', firmness: 'Firm', description: 'Tracking-heavy gameplay, consistent glide' }
      ],
      
      bestFor: [
        'Tracking-heavy FPS games',
        'Maximum texture feedback',
        'Precision aiming'
      ],
      
      specs: {
        size: '490 × 420 mm',
        weight: '~185g',
        material: '100% Polyester',
        base: 'Japanese Poron urethane foam',
        bottom: 'Non-slip suction grip',
        edges: 'Stitched (below surface on SOFT/XSOFT, slightly raised on MID)'
      },
      
      price: 30,
      image: 'assets/hien.jpg',
      gallery: [
        { label: 'View 1', src: 'assets/hien.jpg' },
        { label: 'View 2', src: 'assets/hien.jpg' },
        { label: 'View 3', src: 'assets/hien.jpg' }
      ],
      cta: contacts.discord
    },
    'shidenkai-v2': {
      slug: 'shidenkai-v2',
      name: 'Shidenkai',
      modelCode: 'E5-SK',
      category: 'speed',
      tagline: 'Glass-coated hybrid speed.',
      summary: 'Micro glass beads on cloth for ultra-low friction.',
      durability: '3-6 months lifespan (coating wears over time)',
      warning: 'NOT for glass skates, wears faster with POM skates',
      
      surface: {
        type: 'Lightly textured glass surface',
        material: 'Cloth base with thousands of micro glass beads',
        description: 'Hybrid surface combining cloth comfort with glass-like speed. Thousands of tiny glass beads are fused to the cloth creating an extremely low-friction surface. Coating gradually wears over 3-6 months of use.'
      },
      
      performance: {
        speedRating: 'Glass Hybrid Speed',
        speedDescription: 'Fastest Artisan offering',
        friction: {
          static: 'Extremely low',
          dynamic: 'Very low',
          stopping: 'Low to moderate'
        }
      },
      
      baseOptions: [
        { name: 'MID', thickness: '3.31mm', firmness: 'Firm', description: 'Recommended for best compatibility', recommended: true }
      ],
      
      bestFor: [
        'Maximum speed gameplay',
        'Hard pad feel with cloth comfort',
        'Competitive play'
      ],
      
      specs: {
        size: '500 × 420 mm',
        weight: '~200g',
        material: 'Glass-infused cloth',
        base: 'Japanese Poron urethane foam',
        bottom: 'Non-slip suction grip',
        edges: 'Stitched (slightly raised on MID)'
      },
      
      price: 30,
      image: 'assets/shidenkai-v2.jpg',
      gallery: [
        { label: 'View 1', src: 'assets/shidenkai-v2.jpg' },
        { label: 'View 2', src: 'assets/shidenkai-v2.jpg' },
        { label: 'View 3', src: 'assets/shidenkai-v2.jpg' }
      ],
      cta: contacts.discord
    },
    zero: {
      slug: 'zero',
      name: 'Zero',
      modelCode: 'E5-ZR',
      category: 'balance',
      tagline: 'Versatile balanced control.',
      summary: 'Twisted yarn weave for smooth glide with excellent control.',
      
      surface: {
        type: 'Fine woven surface with subtle grain',
        material: 'Twisted polyester yarn weave with micro-texture',
        description: 'Tight woven surface with twisted yarn creating subtle raised texture. Feels crisp and responsive with clear directional feedback. The micro-texture provides consistent stopping power while maintaining smooth initial glide.'
      },
      
      performance: {
        speedRating: 'Balanced',
        speedDescription: 'Medium speed with control',
        friction: {
          static: 'Low',
          dynamic: 'Medium',
          stopping: 'Excellent'
        }
      },
      
      baseOptions: [
        { name: 'XSOFT', thickness: '4mm', firmness: 'Very Soft', description: 'Micro-adjustments, maximum stopping power, comfortable' },
        { name: 'SOFT', thickness: '4mm', firmness: 'Moderately Soft', description: 'Most versatile, recommended for most players' },
        { name: 'MID', thickness: '3mm', firmness: 'Firm', description: 'Tracking-heavy gameplay, consistent glide' }
      ],
      
      bestFor: [
        'All-around versatile gaming',
        'Players new to Artisan',
        'Professional competitive gaming'
      ],
      
      specs: {
        size: '490 × 420 mm',
        weight: '~190g',
        material: '100% Polyester',
        base: 'Japanese Poron urethane foam',
        bottom: 'Non-slip suction grip',
        edges: 'Stitched (below surface on SOFT/XSOFT, slightly raised on MID)'
      },
      
      price: 30,
      image: 'assets/zero.jpg',
      gallery: [
        { label: 'View 1', src: 'assets/zero.jpg' },
        { label: 'View 2', src: 'assets/zero.jpg' },
        { label: 'View 3', src: 'assets/zero.jpg' }
      ],
      cta: contacts.discord
    },
    saturn: {
      slug: 'saturn',
      name: 'Saturn',
      modelCode: 'E5-ST',
      brand: 'Lethal Gaming Gear (LGG)',
      category: 'balance',
      tagline: 'Soft balanced control.',
      summary: 'Smooth textured surface with soft Poron foam for comfort.',
      
      surface: {
        type: 'Mostly smooth with light texture',
        material: '100% polyester fabric with subtle texture',
        description: 'Predominantly smooth surface with light texture elements. Softer foam base compared to similar pads provides more cushion and comfort. The polyester weave offers medium glide with predictable stopping power.'
      },
      
      performance: {
        speedRating: 'Control/Medium',
        speedDescription: 'Balanced with control emphasis',
        friction: {
          static: 'Medium-low',
          dynamic: 'Medium',
          stopping: 'Good'
        }
      },
      
      baseOptions: [
        { name: 'XSOFT', thickness: '4mm', firmness: 'Very Soft', description: 'Micro-adjustments, maximum stopping power, comfortable' },
        { name: 'SOFT', thickness: '4mm', firmness: 'Moderately Soft', description: 'Most versatile, recommended for most players' },
        { name: 'FIRM', thickness: '3mm', firmness: 'Firm', description: 'Tracking-heavy gameplay, consistent glide' }
      ],
      
      bestFor: [
        'Balanced gameplay',
        'Comfortable extended sessions',
        'Control-focused play'
      ],
      
      specs: {
        size: '500 × 400 mm',
        weight: '~195g',
        material: '100% Polyester',
        base: 'Japanese Poron urethane foam',
        bottom: 'Non-slip suction grip',
        edges: 'Stitched (below surface on SOFT/XSOFT, slightly raised on FIRM)'
      },
      
      price: 30,
      image: 'assets/saturn-old.jpg',
      gallery: [
        { label: 'View 1', src: 'assets/saturn-old.jpg' },
        { label: 'View 2', src: 'assets/saturn-old.jpg' },
        { label: 'View 3', src: 'assets/saturn-old.jpg' }
      ],
      cta: contacts.discord
    },
    type99: {
      slug: 'type99',
      name: 'Type99',
      modelCode: 'E5-T99',
      category: 'control',
      tagline: 'Maximum control and stopping power.',
      summary: 'Slowest pad with smooth surface and high friction for precise control.',
      specialNote: 'Texture becomes prominent under pressure',
      warning: 'Not recommended with arm sleeves',
      
      surface: {
        type: 'Smooth with high stopping power',
        material: 'Water-absorbing quick-dry fiber with twisted yarn',
        description: 'Deceptively smooth surface that becomes grippy under pressure. Special water-absorbing fibers combined with twisted yarn create maximum friction for stopping power. Micro-texture becomes more prominent when pressure is applied.'
      },
      
      performance: {
        speedRating: 'Control/Low Speed',
        speedDescription: 'Slowest Artisan pad',
        friction: {
          static: 'Medium',
          dynamic: 'High',
          stopping: 'Maximum'
        }
      },
      
      baseOptions: [
        { name: 'XSOFT', thickness: '4mm', firmness: 'Very Soft', description: 'Micro-adjustments, maximum stopping power, comfortable' },
        { name: 'SOFT', thickness: '4mm', firmness: 'Moderately Soft', description: 'Most versatile, recommended for most players' },
        { name: 'MID', thickness: '3mm', firmness: 'Firm', description: 'Tracking-heavy gameplay, consistent glide' }
      ],
      
      bestFor: [
        'Low-sensitivity tactical FPS',
        'Maximum control priority',
        'Humid environments'
      ],
      
      specs: {
        size: '500 × 420 mm',
        weight: '~195g',
        material: '100% Polyester',
        base: 'Japanese Poron urethane foam',
        bottom: 'Non-slip suction grip',
        edges: 'Stitched (below surface on SOFT/XSOFT, slightly raised on MID)'
      },
      
      price: 30,
      image: 'assets/type99.jpg',
      gallery: [
        { label: 'View 1', src: 'assets/type99.jpg' },
        { label: 'View 2', src: 'assets/type99.jpg' },
        { label: 'View 3', src: 'assets/type99.jpg' }
      ],
      cta: contacts.discord
    },
    'pom-skates': {
      slug: 'pom-skates',
      name: 'POM Dot Skates',
      modelCode: 'E5-POM',
      category: 'accessories',
      tagline: 'Low-friction POM dots for cloth pads.',
      summary: 'Duracon POM dots with multi-curve design for faster glide on cloth.',
      specialNote: 'Recommended for MID base mousepads',
      warning: 'Cloth pads ONLY - NOT for glass pads',
      
      surface: {
        type: 'Duracon POM material',
        material: '8mm dots with multi-curve shape and rounded edges',
        description: 'Premium Duracon POM (Polyoxymethylene) material with innovative multi-curve design. The rounded edges reduce drag while the curved surface maintains consistent contact with cloth pads. Much faster than standard PTFE skates.'
      },
      
      performance: {
        speedRating: 'Very Low Friction',
        speedDescription: 'Faster than PTFE',
        friction: {
          static: 'Very low',
          dynamic: 'Very low',
          stopping: 'Low'
        }
      },
      
      baseOptions: [
        { name: '16 Dots', thickness: '0.8mm', firmness: 'Peel & Stick', description: 'Apply 4-8 dots per mouse' }
      ],
      
      specs: {
        size: '8mm diameter',
        weight: '~0.03g per dot',
        material: 'Duracon POM',
        quantity: '16 dots per pack',
        application: 'Peel-and-stick adhesive'
      },
      
      price: 8,
      image: 'assets/pom-dot-skates.jpg',
      gallery: [
        { label: 'View 1', src: 'assets/pom-dot-skates.jpg' },
        { label: 'View 2', src: 'assets/pom-dot-skates.jpg' },
        { label: 'View 3', src: 'assets/pom-dot-skates.jpg' }
      ],
      cta: contacts.discord
    }
  }
};

const priceFormatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
const body = document.body;
const pageType = body.dataset.page || 'home';
const basePath = body.dataset.base || './';

function setYear() {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

function renderHeroCarousel() {
  const scroll = document.getElementById('hero-scroll');
  if (!scroll) return;
  // Show all category leaders
  const featured = catalog.categories.map(cat => cat.heroProduct);
  scroll.innerHTML = '';
  featured.forEach((slug) => {
    const product = catalog.products[slug];
    const category = catalog.categories.find((cat) => cat.slug === product.category);
    if (!product) return;
    const slide = document.createElement('article');
    slide.className = 'hero-slide';
    slide.innerHTML = `
      <a href="${basePath}products/${product.slug}.html" class="hero-slide-link" aria-label="View ${product.name} details">
        <img src="${basePath}${product.image}" alt="${product.name} pad" loading="lazy" />
        <div class="category-indicator">
          <span class="indicator-label">${category?.indicator || ''}</span>
          <strong>${product.name}</strong>
        </div>
      </a>
    `;
    scroll.appendChild(slide);
  });
  
  // Initialize auto-scroll after carousel is rendered
  initCarouselAutoScroll(scroll);
}

function initCarouselAutoScroll(scrollElement) {
  if (!scrollElement) return;
  
  let scrollDirection = 1; // 1 for right, -1 for left
  let scrollSpeed = 0.5; // pixels per frame
  let isPaused = false;
  let animationFrameId = null;
  
  function autoScroll() {
    if (!isPaused) {
      scrollElement.scrollLeft += scrollSpeed * scrollDirection;
      
      // Reverse direction at boundaries
      const maxScroll = scrollElement.scrollWidth - scrollElement.clientWidth;
      if (scrollElement.scrollLeft >= maxScroll) {
        scrollDirection = -1;
      } else if (scrollElement.scrollLeft <= 0) {
        scrollDirection = 1;
      }
    }
    
    animationFrameId = requestAnimationFrame(autoScroll);
  }
  
  // Pause on hover
  scrollElement.addEventListener('mouseenter', () => {
    isPaused = true;
  });
  
  scrollElement.addEventListener('mouseleave', () => {
    isPaused = false;
  });
  
  // Pause on touch
  scrollElement.addEventListener('touchstart', () => {
    isPaused = true;
  });
  
  scrollElement.addEventListener('touchend', () => {
    setTimeout(() => {
      isPaused = false;
    }, 2000); // Resume after 2 seconds
  });
  
  // Start auto-scroll
  autoScroll();
  
  // Cleanup on page unload
  window.addEventListener('beforeunload', () => {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }
  });
}

function renderCategoryGrid() {
  const grid = document.getElementById('category-grid');
  if (!grid) return;
  grid.innerHTML = '';
  catalog.categories.forEach((category) => {
    const heroProduct = catalog.products[category.heroProduct];
    const card = document.createElement('article');
    card.className = 'category-card reveal';
    card.dataset.category = category.slug;
    card.innerHTML = `
      <div class="category-info">
        <h3>${category.name}</h3>
        <p>${category.description}</p>
      </div>
      <div class="category-leader">
        <p class="leader-label">Recommendation</p>
        <img src="${basePath}${heroProduct?.image || ''}" alt="${heroProduct?.name || ''} pad" loading="lazy" />
        <p class="leader-name">${heroProduct?.name || ''}</p>
      </div>
    `;
    
    // Make entire card clickable to filter by category
    card.addEventListener('click', () => {
      // Filter products by category first
      const filterButtons = document.querySelectorAll('.filter-btn');
      const targetButton = document.querySelector(`.filter-btn[data-category="${category.slug}"]`);
      
      if (targetButton) {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to target button
        targetButton.classList.add('active');
        // Trigger filter
        const galleryGrid = document.getElementById('gallery-grid');
        const products = galleryGrid?.querySelectorAll('.product-card');
        
        products?.forEach(productCard => {
          const productCategory = productCard.dataset.category || '';
          if (productCategory === category.slug) {
            productCard.style.display = '';
          } else {
            productCard.style.display = 'none';
          }
        });
      }
      
      // Then scroll to filter buttons area
      setTimeout(() => {
        const filterButtons = document.querySelector('.category-filter-buttons');
        if (filterButtons) {
          filterButtons.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    });
    
    grid.appendChild(card);
  });
}

function renderGalleryGrid() {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;
  grid.innerHTML = '';
  catalog.lineup.forEach((slug) => {
    const product = catalog.products[slug];
    const category = catalog.categories.find((cat) => cat.slug === product.category);
    if (!product) return;
    const card = document.createElement('article');
    card.className = 'product-card reveal';
    card.dataset.category = product.category;
    card.innerHTML = `
      <img src="${basePath}${product.image}" alt="${product.name} pad" loading="lazy" />
      <div class="product-info">
        <p class="eyebrow">${category?.indicator || ''}</p>
        <h3>${product.name}</h3>
        <p class="product-summary">${product.summary}</p>
      </div>
      <div class="product-meta">
        <span>${product.modelCode}</span>
        <span class="price">${priceFormatter.format(product.price)}</span>
      </div>
    `;
    
    // Make entire card clickable
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
      window.location.href = `${basePath}products/${product.slug}.html`;
    });
    
    grid.appendChild(card);
  });
}

function renderProductPage(slug) {
  const product = catalog.products[slug];
  if (!product) return;
  const category = catalog.categories.find((cat) => cat.slug === product.category);
  
  // HERO SECTION
  const heroEl = document.getElementById('product-hero');
  if (heroEl) {
    heroEl.innerHTML = `
      <div class="product-hero-inner reveal">
        <div class="hero-copy">
          ${product.isPopular ? `<div class="popular-badge"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg> Popular Choice</div>` : ''}
          <p class="eyebrow">${product.modelCode || category?.indicator || ''}</p>
          <h1>${product.name}</h1>
          <p class="tagline">${product.tagline}</p>
          <p class="product-description">${product.summary}</p>
          <div class="hero-ctas">
            <span class="price product-page-price">${priceFormatter.format(product.price)}</span>
            <a class="btn primary" href="${product.cta}" target="_blank" rel="noreferrer">Order on Discord</a>
            <a class="btn ghost btn-back" href="${basePath}index.html#gallery">← Back to Gallery</a>
          </div>
        </div>
        <div class="hero-media">
          <img src="${basePath}${product.image}" alt="${product.name}" />
        </div>
      </div>
    `;
  }

  // SURFACE & SPEED SECTION
  const summaryEl = document.getElementById('product-summary');
  if (summaryEl && product.performance) {
    const frictionLevel = {
      'Extremely low': 95,
      'Very low': 85,
      'Low': 70,
      'Medium-low': 60,
      'Medium': 50,
      'Medium-high': 40,
      'High': 25
    };
    
    summaryEl.innerHTML = `
      <div class="compact-grid">
        <div class="compact-section">
          <h2>Surface</h2>
          <p class="surface-type">${product.surface?.type || 'Premium cloth'}</p>
          <p class="surface-material">${product.surface?.material || ''}</p>
          <p class="surface-desc">${product.surface?.description || ''}</p>
        </div>
        
        <div class="compact-section">
          <h2>Speed</h2>
          <p class="speed-rating">${product.performance.speedRating}</p>
          <div class="friction-bars-compact">
            <div class="friction-row">
              <dt>Static</dt>
              <div class="friction-bar"><div class="friction-fill" style="width: ${frictionLevel[product.performance.friction.static] || 50}%"></div></div>
            </div>
            <div class="friction-row">
              <dt>Dynamic</dt>
              <div class="friction-bar"><div class="friction-fill" style="width: ${frictionLevel[product.performance.friction.dynamic] || 50}%"></div></div>
            </div>
            <div class="friction-row">
              <dt>Stopping</dt>
              <div class="friction-bar"><div class="friction-fill" style="width: ${frictionLevel[product.performance.friction.stopping] || 50}%"></div></div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // BASE SECTION
  const specsEl = document.getElementById('product-specs');
  if (specsEl && product.baseOptions) {
    specsEl.innerHTML = `
      <h2>Base</h2>
      <div class="base-options-compact">
        ${product.baseOptions.map(base => `
          <div class="base-option-compact ${base.recommended ? 'recommended' : ''}">
            ${base.recommended ? '<span class="rec-badge">REC</span>' : ''}
            <h4>${base.name}</h4>
            <p>${base.thickness} • ${base.firmness}</p>
          </div>
        `).join('')}
      </div>
    `;
  }
  
  // GALLERY SECTION
  const galleryEl = document.getElementById('product-gallery');
  if (galleryEl) {
    // Check if product has gallery images
    if (product.gallery && product.gallery.length > 0) {
      galleryEl.innerHTML = `
        <div class="gallery-grid-compact">
          ${product.gallery.map(item => `
            <figure class="gallery-item-compact">
              <img src="${basePath}${item.src}" alt="${product.name} ${item.label}" loading="lazy" />
              <figcaption>${item.label}</figcaption>
            </figure>
          `).join('')}
        </div>
      `;
    } else {
      // Show instructions if no gallery images yet
      galleryEl.innerHTML = `
        <div class="gallery-instructions">
          <p>📸 <strong>Add product images:</strong></p>
          <ol>
            <li>Place your product images in the <code>assets/</code> folder</li>
            <li>Update the <code>gallery</code> array in <code>scripts/main.js</code> for this product</li>
            <li>Example format:
              <pre>gallery: [
  { label: 'Top view', src: 'assets/${product.slug}-top.jpg' },
  { label: 'Surface texture', src: 'assets/${product.slug}-texture.jpg' },
  { label: 'Edge detail', src: 'assets/${product.slug}-edge.jpg' }
]</pre>
            </li>
          </ol>
        </div>
      `;
    }
  }
}

function initSmoothScroll() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const localLinks = document.querySelectorAll('a[href^="#"]');
  localLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const target = document.querySelector(targetId);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    });
  });
}

function initReveal() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealElements = () => document.querySelectorAll('.reveal');
  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealElements().forEach((el) => el.classList.add('in-view'));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  revealElements().forEach((el) => observer.observe(el));
}

// Interactive base selector
function initBaseSelector() {
  const baseCards = document.querySelectorAll('.base-option-compact');
  if (!baseCards.length) return;
  
  baseCards.forEach(card => {
    card.addEventListener('click', () => {
      // Remove selected class from all cards
      baseCards.forEach(c => c.classList.remove('selected'));
      // Add selected class to clicked card
      card.classList.add('selected');
    });
  });
  
  // Pre-select recommended option
  const recommendedCard = document.querySelector('.base-option-compact.recommended');
  if (recommendedCard) {
    recommendedCard.classList.add('selected');
  }
}

// Animate friction bars on load
function animateFrictionBars() {
  const frictionFills = document.querySelectorAll('.friction-fill');
  if (!frictionFills.length) return;
  
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;
  
  // Reset widths to 0
  frictionFills.forEach(fill => {
    const targetWidth = fill.style.width;
    fill.dataset.targetWidth = targetWidth;
    fill.style.width = '0%';
  });
  
  // Animate to target widths with stagger
  setTimeout(() => {
    frictionFills.forEach((fill, index) => {
      setTimeout(() => {
        fill.style.width = fill.dataset.targetWidth;
      }, index * 150);
    });
  }, 300);
}

function initPage() {
  if (pageType === 'home') {
    renderHeroCarousel();
    renderCategoryGrid();
    renderGalleryGrid();
  } else if (pageType === 'product') {
    renderProductPage(body.dataset.product);
    // Initialize product page interactivity after rendering
    setTimeout(() => {
      initBaseSelector();
      animateFrictionBars();
    }, 100);
  }
}

// Product filtering with category buttons
function initProductFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryGrid = document.getElementById('gallery-grid');
  const noResults = document.getElementById('no-results');

  if (!filterButtons.length || !galleryGrid) return;

  function filterProducts(category) {
    const products = galleryGrid.querySelectorAll('.product-card');
    let visibleCount = 0;

    products.forEach((card) => {
      const productCategory = card.dataset.category || '';
      const matchesCategory = category === 'all' || productCategory === category;

      if (matchesCategory) {
        card.style.display = '';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    // Show/hide no results message
    if (noResults) {
      noResults.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  }

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove('active'));
      // Add active class to clicked button
      button.classList.add('active');
      // Filter products
      const category = button.dataset.category;
      filterProducts(category);
    });
  });
}

// Back to top button
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  function toggleBackToTop() {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', toggleBackToTop);
  toggleBackToTop(); // Check initial position

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

setYear();
initPage();

initReveal();
initSmoothScroll();
initProductFilters();
initBackToTop();

// Handle Explore Pads button - same behavior as category leaders
const explorePadsBtn = document.getElementById('explore-pads-btn');
if (explorePadsBtn) {
  explorePadsBtn.addEventListener('click', () => {
    // Filter products to show all - same logic as category cards
    const filterButtons = document.querySelectorAll('.filter-btn');
    const targetButton = document.querySelector('.filter-btn[data-category="all"]');
    
    if (targetButton) {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to target button
      targetButton.classList.add('active');
      // Trigger filter
      const galleryGrid = document.getElementById('gallery-grid');
      const products = galleryGrid?.querySelectorAll('.product-card');
      
      products?.forEach(productCard => {
        productCard.style.display = '';
      });
    }
    
    // Then scroll to filter buttons area - exact same code as category cards
    setTimeout(() => {
      const filterButtons = document.querySelector('.category-filter-buttons');
      if (filterButtons) {
        filterButtons.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  });
}

// Elite5 Pad Matcher
let matcherData = [];
let elite5Pads = [];

// Generate slug from name
function generateSlug(name) {
  return name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
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
      // Convert spectrum to number
      obj[header] = header === 'spectrum' ? parseInt(value, 10) : value;
    });
    data.push(obj);
  }
  
  return data;
}

// Load matcher data
async function loadMatcherData() {
  try {
    const response = await fetch(basePath + 'mousepad-spectrum.csv');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const text = await response.text();
    matcherData = parseCSV(text);
    
    // Extract Elite5 pads dynamically from CSV
    elite5Pads = matcherData
      .filter(pad => pad.brand === 'elite5')
      .map(pad => ({
        name: pad.name,
        slug: generateSlug(pad.name),
        spectrum: pad.spectrum,
        category: pad.category
      }));
    
    console.log('Loaded matcher data:', matcherData.length, 'pads');
    console.log('Elite5 pads:', elite5Pads.length);
    initPadMatcher();
  } catch (error) {
    console.error('Failed to load matcher data:', error);
  }
}

// Initialize pad matcher
function initPadMatcher() {
  const input = document.getElementById('current-pad');
  const suggestions = document.getElementById('suggestions');
  const resultContainer = document.getElementById('match-result');
  
  if (!input || !suggestions || !resultContainer) {
    console.error('Matcher elements not found');
    return;
  }
  
  let selectedBasePad = null;
  
  // Live autocomplete
  input.addEventListener('input', (e) => {
    const query = e.target.value.trim();
    const queryLower = query.toLowerCase();
    selectedBasePad = null;
    
    if (query.length < 2) {
      suggestions.style.display = 'none';
      return;
    }
    
    // Find unique base names - only show non-Elite5 pads
    const uniquePads = new Map();
    matcherData.forEach(pad => {
      if (pad.brand === 'elite5') return;
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
      suggestions.innerHTML = matches.map(pad => 
        `<div class="suggestion-item" data-name="${pad.name}" data-brand="${pad.brand}">${pad.brand} ${pad.name}</div>`
      ).join('');
      suggestions.style.display = 'block';
      
      // Click suggestion to auto-select mid hardness
      suggestions.querySelectorAll('.suggestion-item').forEach(item => {
        item.addEventListener('click', () => {
          const padName = item.dataset.name;
          const padBrand = item.dataset.brand;
          input.value = `${padBrand} ${padName}`;
          suggestions.style.display = 'none';
          
          // Find variants and auto-select mid or first available
          const variants = matcherData.filter(pad => 
            pad.name === padName && pad.brand === padBrand
          );
          
          let selectedPad = variants.find(v => v.hardness === 'mid') || variants[0];
          
          if (selectedPad) {
            findMatchByPadWithHardnessOptions(selectedPad, variants);
          }
        });
      });
    } else {
      suggestions.style.display = 'none';
    }
  });
  
}

// Find match by pad with hardness options in badge
function findMatchByPadWithHardnessOptions(userPad, variants) {
  const resultContainer = document.getElementById('match-result');
  if (!resultContainer) return;
  
  // Find closest Elite5 pad based on spectrum value
  let closestPad = null;
  let smallestDiff = Infinity;
  
  elite5Pads.forEach(e5pad => {
    const diff = Math.abs(e5pad.spectrum - userPad.spectrum);
    if (diff < smallestDiff) {
      smallestDiff = diff;
      closestPad = e5pad;
    }
  });
  
  if (!closestPad) return;
  
  // Get unique hardness options
  const hardnessOptions = [...new Set(variants.map(v => v.hardness))];
  
  resultContainer.innerHTML = `
    <div class="match-found">
      <div class="match-header">
        <div class="hardness-selector">
          ${hardnessOptions.map(h => `
            <button class="hardness-option ${h === userPad.hardness ? 'active' : ''}" data-hardness="${h}" ${hardnessOptions.length === 1 ? 'disabled' : ''}>
              ${h.toUpperCase()}
            </button>
          `).join('')}
        </div>
        <span class="match-badge">${userPad.brand}</span>
      </div>
      <div class="match-details">
        <div class="match-comparison">
          <div class="pad-info">
            <span class="pad-label">Your Pad</span>
            <strong>${userPad.brand} ${userPad.name}</strong>
            <span class="pad-category">${userPad.category}</span>
            <span class="pad-spectrum">Spectrum Value: ${userPad.spectrum}</span>
          </div>
          <svg class="arrow-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
          <div class="pad-info elite5-info" onclick="window.location.href='${basePath}products/${closestPad.slug}.html'" style="cursor: pointer;">
            <span class="pad-label">Elite5 Match</span>
            <strong>${closestPad.name}</strong>
            <span class="pad-category">${closestPad.category}</span>
            <span class="pad-spectrum">Spectrum Value: ${closestPad.spectrum}</span>
          </div>
        </div>
      </div>
    </div>
  `;
  
  resultContainer.style.display = 'block';
  resultContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  // Add click handlers for hardness buttons
  resultContainer.querySelectorAll('.hardness-option').forEach(btn => {
    btn.addEventListener('click', () => {
      const newHardness = btn.dataset.hardness;
      const newPad = variants.find(v => v.hardness === newHardness);
      if (newPad) {
        findMatchByPadWithHardnessOptions(newPad, variants);
      }
    });
  });
}

// Find match by pad name
function findMatchByName(padName) {
  const resultContainer = document.getElementById('match-result');
  if (!resultContainer) return;
  
  // Find user's pad in database
  const userPad = matcherData.find(pad => 
    pad.name.toLowerCase() === padName.toLowerCase()
  );
  
  if (!userPad) {
    resultContainer.innerHTML = `
      <div class="no-match">
        <p>Couldn't find "${padName}" in our database.</p>
        <p>Try searching for similar pads or contact us for a recommendation.</p>
      </div>
    `;
    resultContainer.style.display = 'block';
    return;
  }
  
  findMatchByPad(userPad);
}

// Find match by pad object
function findMatchByPad(userPad) {
  const resultContainer = document.getElementById('match-result');
  if (!resultContainer) return;
  
  // Find closest Elite5 pad based on spectrum value
  let closestPad = null;
  let smallestDiff = Infinity;
  
  elite5Pads.forEach(e5pad => {
    const diff = Math.abs(e5pad.spectrum - userPad.spectrum);
    if (diff < smallestDiff) {
      smallestDiff = diff;
      closestPad = e5pad;
    }
  });
  
  if (closestPad) {
    resultContainer.innerHTML = `
      <div class="match-found">
        <div class="match-header">
          <h3>Your Match</h3>
          <span class="match-badge">Elite5 ${closestPad.name}</span>
        </div>
        <div class="match-details">
          <div class="match-comparison">
            <div class="pad-info">
              <span class="pad-label">Your Pad</span>
              <strong>${userPad.name}</strong>
              <span class="pad-category">${userPad.category}</span>
              <span class="pad-spectrum">Spectrum Value: ${userPad.spectrum}</span>
            </div>
            <svg class="arrow-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
            <div class="pad-info elite5-info">
              <span class="pad-label">Elite5 Match</span>
              <strong>${closestPad.name}</strong>
              <span class="pad-category">${closestPad.category}</span>
              <span class="pad-spectrum">Spectrum Value: ${closestPad.spectrum}</span>
            </div>
          </div>
          <a href="${basePath}products/${closestPad.slug}.html" class="btn primary match-cta">
            View ${closestPad.name} Details
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </a>
        </div>
      </div>
    `;
    resultContainer.style.display = 'block';
    resultContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

// Load matcher on home page
if (pageType === 'home') {
  loadMatcherData();
}
