const contacts = {
  discord: 'https://discord.gg/pfEfK8AxvQ',
  email: 'contact@elite5pads.com'
};

const catalog = {
  lineup: ['raiden', 'k83', 'hayate-otsu', 'hien', 'shidenkai-v2', 'zero', 'saturn', 'type99', 'pom-skates'],
  categories: [
    {
      slug: 'speed',
      name: 'Speed Pads',
      indicator: 'Speed category',
      description: 'Low static, glassy glide for players who float until it is time to micro-correct.',
      heroProduct: 'raiden',
      members: ['raiden', 'k83', 'hayate-otsu', 'hien', 'shidenkai-v2']
    },
    {
      slug: 'balance',
      name: 'Balance Pads',
      indicator: 'Balance category',
      description: 'Steady glide with predictable stopping—perfect for hybrid sensitivities.',
      heroProduct: 'zero',
      members: ['zero', 'saturn']
    },
    {
      slug: 'control',
      name: 'Control Pads',
      indicator: 'Control category',
      description: 'Textured cloth and grounded bases that brake on command.',
      heroProduct: 'type99',
      members: ['type99']
    },
    {
      slug: 'accessories',
      name: 'Accessories',
      indicator: 'Accessories',
      description: 'Premium mouse skates and accessories to complete your setup.',
      heroProduct: 'pom-skates',
      members: ['pom-skates']
    }
  ],
  products: {
    raiden: {
      slug: 'raiden',
      name: 'Raiden',
      category: 'speed',
      summary: 'Low-static, glassy glide that breaks only when you dig in for the shot.',
      detail: {
        blurb: 'Raiden leads the speed lab with a PU-coated weave that ignores humidity spikes and stays silent.',
        surface: 'Ultra-tight speed weave carries a hydrophobic coat for minimal static friction.',
        base: 'Mid-density foam snaps back flat, even on glass desks.',
        edge: 'Stealth stitched edges melt into the surface with zero fray risk.'
      },
      feel: 'Speed / Low static',
      price: 30,
      size: '490 × 420 mm',
      thickness: '5 mm',
      edgeFinish: 'Stealth stitched',
      baseDensity: 'Mid-density foam',
      hardness: 'XSoft / Soft / Mid',
      image: 'assets/raiden.jpg',
      gallery: [
        { label: 'Surface layer', caption: 'Upload the top-coat macro when ready.', src: 'assets/raiden.jpg' },
        { label: 'Base & edge', caption: 'Swap for the base photo later.', src: 'assets/raiden.jpg' }
      ],
      cta: contacts.discord
    },
    k83: {
      slug: 'k83',
      name: 'K83',
      category: 'speed',
      summary: 'Firm-base speed pad with add-on control when you plant the mouse feet.',
      detail: {
        blurb: 'K83 keeps a rapid initial glide but adds stopping torque from its denser base stack.',
        surface: 'Finely woven cloth rides on a friction-balanced coating for confident micro-adjustments.',
        base: 'High-density foam keeps the pad level and resists compression under palm weight.',
        edge: 'Laser-straight stitched edges resist lift.'
      },
      feel: 'Speed / Firm base',
      price: 30,
      size: '490 × 420 mm',
      thickness: '5 mm',
      edgeFinish: 'Precision stitch',
      baseDensity: 'High-density foam',
      hardness: 'XSoft / Soft / Mid',
      image: 'assets/k83.jpg',
      gallery: [
        { label: 'Surface layer', caption: 'Swap with the cloth macro later.', src: 'assets/k83.jpg' },
        { label: 'Base & edge', caption: 'Add the foam/bottom capture here.', src: 'assets/k83.jpg' }
      ],
      cta: contacts.discord
    },
    'hayate-otsu': {
      slug: 'hayate-otsu',
      name: 'Hayate Otsu',
      category: 'speed',
      summary: 'Balanced weave with lightly textured glide for medium-speed control.',
      detail: {
        blurb: 'Hayate Otsu is the most adaptable member of the speed set, perfect for mid-sens conversions.',
        surface: 'Textured nylon mix keeps a touch of feedback while staying fast.',
        base: 'Stabilized foam prevents uneven slow-downs across the pad.',
        edge: 'Micro stitch follows the pad silhouette for long-term durability.'
      },
      feel: 'Balanced speed',
      price: 30,
      size: '490 × 420 mm',
      thickness: '5 mm',
      edgeFinish: 'Micro stitched',
      baseDensity: 'Stabilized foam',
      hardness: 'XSoft / Soft / Mid',
      image: 'assets/hayate-otsu.jpg',
      gallery: [
        { label: 'Surface layer', caption: 'Replace with the weave macro.', src: 'assets/hayate-otsu.jpg' },
        { label: 'Base & edge', caption: 'Upload the backing shot.', src: 'assets/hayate-otsu.jpg' }
      ],
      cta: contacts.discord
    },
    hien: {
      slug: 'hien',
      name: 'Hien',
      category: 'speed',
      summary: 'Iconic rough texture for tactile feedback and precise braking.',
      detail: {
        blurb: 'Hien keeps the speed lineup honest with aggressive texture that still glides when you stay light.',
        surface: 'Coarse weave texture grips when feet dig in, keeping kinetic control.',
        base: 'Resilient foam resists warping and anchors the pad.',
        edge: 'Raised stitch treatment prevents unraveling without rubbing the wrist.'
      },
      feel: 'Textured speed',
      price: 30,
      size: '490 × 420 mm',
      thickness: '5 mm',
      edgeFinish: 'Raised stitch',
      baseDensity: 'Resilient foam',
      hardness: 'XSoft / Soft / Mid',
      image: 'assets/hien.jpg',
      gallery: [
        { label: 'Surface layer', caption: 'Upload the macro to highlight texture.', src: 'assets/hien.jpg' },
        { label: 'Base & edge', caption: 'Add the underside photo soon.', src: 'assets/hien.jpg' }
      ],
      cta: contacts.discord
    },
    'shidenkai-v2': {
      slug: 'shidenkai-v2',
      name: 'Shidenkai V2',
      category: 'speed',
      summary: 'Glass-weave hybrid with almost hover-like glide.',
      detail: {
        blurb: 'Shidenkai V2 translates glass-bead smoothness into a cloth format for next-level flicks.',
        surface: 'Glass-infused fibers stay slick yet consistent across humidity ranges.',
        base: 'Reinforced rubberized base keeps the pad planted.',
        edge: 'Coated edge wrap protects the fragile weave.'
      },
      feel: 'Glass hybrid speed',
      price: 30,
      size: '500 × 420 mm',
      thickness: '5 mm',
      edgeFinish: 'Edge wrap',
      baseDensity: 'Reinforced rubber',
      hardness: 'XSoft / Soft / Mid',
      image: 'assets/shidenkai-v2.jpg',
      gallery: [
        { label: 'Surface layer', caption: 'Replace with crystal weave macro.', src: 'assets/shidenkai-v2.jpg' },
        { label: 'Base & edge', caption: 'Add glass layer base shot.', src: 'assets/shidenkai-v2.jpg' }
      ],
      cta: contacts.discord
    },
    zero: {
      slug: 'zero',
      name: 'Zero',
      category: 'balance',
      summary: 'Classic balance pad with micro-control and smooth glide.',
      detail: {
        blurb: 'Zero anchors the balance category with even glide and predictable stopping at any humidity.',
        surface: 'Slightly textured cloth keeps static friction manageable while providing feedback.',
        base: 'Soft-mid foam adds comfort for long sessions.',
        edge: 'Rounded stitch ensures no abrasion during palm drifts.'
      },
      feel: 'Balance / Micro texture',
      price: 30,
      size: '490 × 420 mm',
      thickness: '5 mm',
      edgeFinish: 'Rounded stitch',
      baseDensity: 'Soft-mid foam',
      hardness: 'XSoft / Soft / Mid',
      image: 'assets/zero.jpg',
      gallery: [
        { label: 'Surface layer', caption: 'Replace with the balanced weave macro.', src: 'assets/zero.jpg' },
        { label: 'Base & edge', caption: 'Upload the underside capture soon.', src: 'assets/zero.jpg' }
      ],
      cta: contacts.discord
    },
    saturn: {
      slug: 'saturn',
      name: 'Saturn',
      category: 'balance',
      summary: 'Soft foam balance pad with muted branding and grounded glide.',
      detail: {
        blurb: 'Saturn leans slightly calmer than Zero, prioritizing stability for palm-heavy aimers.',
        surface: 'Balanced weave keeps glide neutral with mild feedback.',
        base: 'Soft foam dampens desk vibration and conforms to uneven tables.',
        edge: 'Low-profile stitch to avoid wrist rub.'
      },
      feel: 'Balance / Soft base',
      price: 30,
      size: '500 × 400 mm',
      thickness: '5 mm',
      edgeFinish: 'Low stitch',
      baseDensity: 'Soft foam',
      hardness: 'XSoft / Soft / Mid',
      image: 'assets/saturn-old.jpg',
      gallery: [
        { label: 'Surface layer', caption: 'Upload the surface close-up here.', src: 'assets/saturn-old.jpg' },
        { label: 'Base & edge', caption: 'Add the base capture when ready.', src: 'assets/saturn-old.jpg' }
      ],
      cta: contacts.discord
    },
    type99: {
      slug: 'type99',
      name: 'Type99',
      category: 'control',
      summary: 'Hybrid control pad that locks in with textured resistance.',
      detail: {
        blurb: 'Type99 caps the lineup with a thick base and tactile cloth that slows you down precisely when needed.',
        surface: 'Hybrid knit disrupts momentum quickly without feeling muddy.',
        base: 'Thick foam puckers slightly for planted control.',
        edge: 'Heavy-duty stitch stays flat across the thicker profile.'
      },
      feel: 'Control / Hybrid',
      price: 30,
      size: '500 × 420 mm',
      thickness: '5 mm',
      edgeFinish: 'Heavy stitch',
      baseDensity: 'Thick foam',
      hardness: 'XSoft / Soft / Mid',
      image: 'assets/type99.jpg',
      gallery: [
        { label: 'Surface layer', caption: 'Replace with texture macro soon.', src: 'assets/type99.jpg' },
        { label: 'Base & edge', caption: 'Upload the base detail later.', src: 'assets/type99.jpg' }
      ],
      cta: contacts.discord
    },
    'pom-skates': {
      slug: 'pom-skates',
      name: 'POM Dot Skates',
      category: 'accessories',
      summary: 'Premium POM dot skates for ultra-smooth glide and minimal friction.',
      detail: {
        blurb: 'POM Dot Skates deliver consistent, low-friction glide across all pad surfaces. Engineered for durability and precision.',
        surface: 'High-grade POM material provides smooth, consistent glide with minimal break-in period.',
        base: 'Pre-applied adhesive backing for easy installation and secure attachment.',
        edge: 'Precision-cut dots ensure even contact and balanced mouse movement.'
      },
      feel: 'Smooth / Low friction',
      price: 8,
      size: 'Universal fit',
      thickness: '0.6 mm',
      edgeFinish: 'Precision cut',
      baseDensity: 'Adhesive backed',
      hardness: 'POM material',
      image: 'assets/pom-dot-skates.jpg',
      gallery: [
        { label: 'Product view', caption: 'Premium POM dot skates.', src: 'assets/pom-dot-skates.jpg' },
        { label: 'Application', caption: 'Easy to apply with adhesive backing.', src: 'assets/pom-dot-skates.jpg' }
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
      <div class="category-pill">${category.name}</div>
      <h3>${heroProduct?.name || ''}</h3>
      <p>${category.description}</p>
      <img src="${basePath}${heroProduct?.image || ''}" alt="${heroProduct?.name || ''} pad" loading="lazy" />
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
        const lineupGrid = document.getElementById('lineup-grid');
        const products = lineupGrid?.querySelectorAll('.product-card');
        
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

function renderLineupGrid() {
  const grid = document.getElementById('lineup-grid');
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
      <div>
        <p class="eyebrow">${category?.indicator || ''}</p>
        <h3>${product.name}</h3>
        <p>${product.summary}</p>
      </div>
      <div class="product-meta">
        <span>${product.feel}</span>
        <span class="price">${priceFormatter.format(product.price)}</span>
      </div>
      <a class="buy-btn" href="${basePath}products/${product.slug}.html">Details</a>
    `;
    grid.appendChild(card);
  });
}

function renderProductPage(slug) {
  const product = catalog.products[slug];
  if (!product) return;
  const category = catalog.categories.find((cat) => cat.slug === product.category);
  const heroEl = document.getElementById('product-hero');
  if (heroEl) {
    heroEl.innerHTML = `
      <div class="product-hero-inner reveal">
        <div class="hero-copy">
          <p class="eyebrow">${category?.indicator || ''}</p>
          <h1>${product.name}</h1>
          <p>${product.detail.blurb}</p>
          <div class="hero-ctas">
            <span class="price product-page-price">${priceFormatter.format(product.price)}</span>
            <a class="btn primary" href="${product.cta}" target="_blank" rel="noreferrer">Contact</a>
            <a class="btn ghost btn-back" href="${basePath}index.html#lineup">Back</a>
          </div>
        </div>
        <div class="hero-media">
          <img src="${basePath}${product.image}" alt="${product.name} pad" />
        </div>
      </div>
    `;
  }

  const summaryEl = document.getElementById('product-summary');
  if (summaryEl) {
    summaryEl.innerHTML = `
      <div class="summary-grid">
        <article class="summary-card">
          <h3>Surface</h3>
          <p>${product.detail.surface}</p>
        </article>
        <article class="summary-card">
          <h3>Base</h3>
          <p>${product.detail.base}</p>
        </article>
        <article class="summary-card">
          <h3>Edges</h3>
          <p>${product.detail.edge}</p>
        </article>
      </div>
    `;
  }

  const specsEl = document.getElementById('product-specs');
  if (specsEl) {
    const specs = [
      { label: 'Feel', value: product.feel },
      { label: 'Thickness', value: product.thickness },
      { label: 'Size', value: product.size },
      { label: 'Edge finish', value: product.edgeFinish },
      { label: 'Base density', value: product.baseDensity },
      { label: 'Hardness options', value: product.hardness }
    ];
    specsEl.innerHTML = `
      <h3>Specs</h3>
      <dl class="spec-list">
        ${specs
          .map(
            (spec) => `
              <div>
                <dt>${spec.label}</dt>
                <dd>${spec.value}</dd>
              </div>
            `
          )
          .join('')}
      </dl>
    `;
  }

  const galleryEl = document.getElementById('product-gallery');
  if (galleryEl) {
    galleryEl.innerHTML = `
      <div class="gallery-grid">
        ${product.gallery
          .map(
            (item) => `
              <figure class="gallery-item reveal">
                <img src="${basePath}${item.src}" alt="${product.name} ${item.label.toLowerCase()}" />
                <figcaption>${item.label} — ${item.caption}</figcaption>
              </figure>
            `
          )
          .join('')}
      </div>
      <p class="gallery-note">Need to update the imagery? Replace the files in /assets/ and adjust catalog data.</p>
    `;
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

function initPage() {
  if (pageType === 'home') {
    renderHeroCarousel();
    renderCategoryGrid();
    renderLineupGrid();
  } else if (pageType === 'product') {
    renderProductPage(body.dataset.product);
  }
}

// Product filtering with category buttons
function initProductFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const lineupGrid = document.getElementById('lineup-grid');
  const noResults = document.getElementById('no-results');

  if (!filterButtons.length || !lineupGrid) return;

  function filterProducts(category) {
    const products = lineupGrid.querySelectorAll('.product-card');
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
      const lineupGrid = document.getElementById('lineup-grid');
      const products = lineupGrid?.querySelectorAll('.product-card');
      
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

// Elite5 pads mapping
const elite5Pads = {
  'raiden': { name: 'Raiden', slug: 'raiden', spectrum: 0, category: 'Super fast' },
  'shidenkai': { name: 'Shidenkai V2', slug: 'shidenkai-v2', spectrum: 0, category: 'Super fast' },
  'hayate-otsu': { name: 'Hayate Otsu', slug: 'hayate-otsu', spectrum: 20, category: 'Speed' },
  'hien': { name: 'Hien', slug: 'hien', spectrum: 0, category: 'Super fast' },
  'k83': { name: 'K83', slug: 'k83', spectrum: 0, category: 'Super fast' },
  'zero': { name: 'Zero', slug: 'zero', spectrum: 40, category: 'Balance-speed' },
  'saturn': { name: 'Saturn', slug: 'saturn', spectrum: 70, category: 'Balance-control' },
  'type99': { name: 'Type99', slug: 'type99', spectrum: 100, category: 'Control' }
};

// Load matcher data
async function loadMatcherData() {
  try {
    const response = await fetch(basePath + 'mousepad-spectrum.json');
    const data = await response.json();
    matcherData = data.data;
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
  
  // Live autocomplete
  input.addEventListener('input', (e) => {
    const query = e.target.value.trim();
    const queryLower = query.toLowerCase();
    
    if (query.length < 2) {
      suggestions.style.display = 'none';
      return;
    }
    
    // Find matches with fuzzy search
    const matches = matcherData.filter(pad => {
      const nameLower = pad.name.toLowerCase();
      // Check if pad name contains the query or any word from the query
      return nameLower.includes(queryLower) || 
             queryLower.split(/\s+/).some(word => word.length > 1 && nameLower.includes(word));
    }).slice(0, 4);
    
    if (matches.length > 0) {
      suggestions.innerHTML = matches.map(pad => 
        `<div class="suggestion-item" data-name="${pad.name}">${pad.name}</div>`
      ).join('');
      suggestions.style.display = 'block';
      
      // Click suggestion to fill input and find match
      suggestions.querySelectorAll('.suggestion-item').forEach(item => {
        item.addEventListener('click', () => {
          input.value = item.dataset.name;
          suggestions.style.display = 'none';
          findMatchByName(item.dataset.name);
        });
      });
    } else {
      suggestions.style.display = 'none';
    }
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
  
  Object.values(elite5Pads).forEach(e5pad => {
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
            </div>
            <svg class="arrow-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
            <div class="pad-info elite5-info">
              <span class="pad-label">Elite5 Match</span>
              <strong>${closestPad.name}</strong>
              <span class="pad-category">${closestPad.category}</span>
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
