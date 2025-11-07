const contacts = {
  discord: 'https://discord.gg/pfEfK8AxvQ',
  email: 'contact@elite5pads.com'
};

const catalog = {
  categories: {
    speed: {
      slug: 'speed',
      name: 'Speed Pads',
      indicator: 'Low static · Fast glide',
      heroHeadline: 'Speed pads led by Raiden',
      description:
        'Lightning-fast top coats, low static friction, and airy bases for players who never want to feel drag.',
      heroProduct: 'raiden',
      lineup: ['raiden', 'k83', 'hayate-otsu', 'hien', 'shidenkai-v2']
    },
    balance: {
      slug: 'balance',
      name: 'Balance Pads',
      indicator: 'Controlled speed · Measured stop',
      heroHeadline: 'Balanced control with Zero',
      description:
        'The balance collection pairs steady stopping power with effortless updates for mid-sensitivity aimers.',
      heroProduct: 'zero',
      lineup: ['zero', 'saturn']
    },
    control: {
      slug: 'control',
      name: 'Control Pads',
      indicator: 'High friction · Firm bases',
      heroHeadline: 'Deliberate glide via Type99',
      description: 'Textured cloth and grounded bases that keep your crosshair locked in under pressure.',
      heroProduct: 'type99',
      lineup: ['type99']
    }
  },
  products: {
    raiden: {
      slug: 'raiden',
      name: 'Elite5 Raiden',
      category: 'speed',
      summary: 'Low-static, glassy glide that breaks only when you dig in for the shot.',
      detail: {
        blurb: 'Raiden leads the speed lab with a PU-coated weave that ignores humidity spikes and stays silent.',
        surface: 'Ultra-tight speed weave carries a hydrophobic coat for minimal static friction.',
        base: '3.5 mm mid-density foam snaps back flat, even on glass desks.',
        edge: 'Stealth stitched edges melt into the surface with zero fray risk.'
      },
      feel: 'Speed / Low static',
      price: 30,
      size: '490 x 420 mm',
      thickness: '3.5 mm',
      edge: 'Stealth stitched',
      base: 'Mid-density foam',
      image: 'assets/raiden.jpg',
      gallery: [
        {
          label: 'Surface layer',
          caption: 'Upload your top-coat macro here when it is ready.',
          src: 'assets/raiden.jpg'
        },
        {
          label: 'Base & edge',
          caption: 'Add the base/bottom photo once captured.',
          src: 'assets/raiden.jpg'
        }
      ],
      cta: contacts.discord
    },
    k83: {
      slug: 'k83',
      name: 'Elite5 K83',
      category: 'speed',
      summary: 'Firm-base speed pad with add-on control when you plant the mouse feet.',
      detail: {
        blurb: 'K83 keeps a rapid initial glide but adds stopping torque from its denser base stack.',
        surface: 'Finely woven cloth rides on a friction-balanced coating for confident micro-adjustments.',
        base: 'Firm foam keeps the pad level and resists compression under palm weight.',
        edge: 'Laser-straight stitched edges resist lift.'
      },
      feel: 'Speed / Firm base',
      price: 30,
      size: '490 x 420 mm',
      thickness: '4 mm',
      edge: 'Precision stitch',
      base: 'High-density foam',
      image: 'assets/k83.jpg',
      gallery: [
        { label: 'Surface layer', caption: 'Swap with the cloth macro later.', src: 'assets/k83.jpg' },
        { label: 'Base & edge', caption: 'Add the foam/bottom capture here.', src: 'assets/k83.jpg' }
      ],
      cta: contacts.discord
    },
    'hayate-otsu': {
      slug: 'hayate-otsu',
      name: 'Elite5 Hayate Otsu',
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
      size: '490 x 420 mm',
      thickness: '4 mm',
      edge: 'Micro stitched',
      base: 'Stabilized foam',
      image: 'assets/hayate-otsu.jpg',
      gallery: [
        { label: 'Surface layer', caption: 'Replace with the weave macro.', src: 'assets/hayate-otsu.jpg' },
        { label: 'Base & edge', caption: 'Upload the backing shot.', src: 'assets/hayate-otsu.jpg' }
      ],
      cta: contacts.discord
    },
    hien: {
      slug: 'hien',
      name: 'Elite5 Hien',
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
      size: '490 x 420 mm',
      thickness: '4 mm',
      edge: 'Raised stitch',
      base: 'Resilient foam',
      image: 'assets/hien.jpg',
      gallery: [
        { label: 'Surface layer', caption: 'Upload the macro to highlight texture.', src: 'assets/hien.jpg' },
        { label: 'Base & edge', caption: 'Add the underside photo soon.', src: 'assets/hien.jpg' }
      ],
      cta: contacts.discord
    },
    'shidenkai-v2': {
      slug: 'shidenkai-v2',
      name: 'Elite5 Shidenkai V2',
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
      size: '500 x 420 mm',
      thickness: '3 mm',
      edge: 'Edge wrap',
      base: 'Reinforced rubber',
      image: 'assets/shidenkai-v2.jpg',
      gallery: [
        { label: 'Surface layer', caption: 'Replace with crystal weave macro.', src: 'assets/shidenkai-v2.jpg' },
        { label: 'Base & edge', caption: 'Add glass layer base shot.', src: 'assets/shidenkai-v2.jpg' }
      ],
      cta: contacts.discord
    },
    zero: {
      slug: 'zero',
      name: 'Elite5 Zero',
      category: 'balance',
      summary: 'Classic balance pad with micro-control and smooth glide.',
      detail: {
        blurb: 'Zero anchors the balance category with even glide and predictable stopping at any humidity.',
        surface: 'Slightly textured cloth keeps static friction manageable while providing feedback.',
        base: 'Soft-mid foam adds comfort for long sessions.',
        edge: 'Rounded stitch ensures no abrasion during palm drifts.'
      },
      feel: 'Balanced / Micro texture',
      price: 30,
      size: '490 x 420 mm',
      thickness: '3.5 mm',
      edge: 'Rounded stitch',
      base: 'Soft-mid foam',
      image: 'assets/zero.jpg',
      gallery: [
        { label: 'Surface layer', caption: 'Swap with balanced weave macro.', src: 'assets/zero.jpg' },
        { label: 'Base & edge', caption: 'Upload base shot later.', src: 'assets/zero.jpg' }
      ],
      cta: contacts.discord
    },
    saturn: {
      slug: 'saturn',
      name: 'Elite5 Saturn',
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
      size: '500 x 400 mm',
      thickness: '4 mm',
      edge: 'Low stitch',
      base: 'Soft foam',
      image: 'assets/saturn-old.jpg',
      gallery: [
        { label: 'Surface layer', caption: 'Upload the surface close-up here.', src: 'assets/saturn-old.jpg' },
        { label: 'Base & edge', caption: 'Add the base capture when ready.', src: 'assets/saturn-old.jpg' }
      ],
      cta: contacts.discord
    },
    type99: {
      slug: 'type99',
      name: 'Elite5 Type99',
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
      size: '500 x 420 mm',
      thickness: '4.5 mm',
      edge: 'Heavy stitch',
      base: 'Thick foam',
      image: 'assets/type99.jpg',
      gallery: [
        { label: 'Surface layer', caption: 'Replace with texture macro soon.', src: 'assets/type99.jpg' },
        { label: 'Base & edge', caption: 'Upload the base detail later.', src: 'assets/type99.jpg' }
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

function highlightHero(productSlug) {
  const heroImg = document.getElementById('hero-highlight');
  const indicatorLabel = document.getElementById('hero-indicator-label');
  const indicatorName = document.getElementById('hero-indicator-name');
  const product = catalog.products[productSlug];
  const category = product ? catalog.categories[product.category] : null;
  if (product && heroImg) {
    heroImg.src = product.image;
    heroImg.alt = `${product.name} mousepad`;
  }
  if (category && indicatorLabel) {
    indicatorLabel.textContent = category.indicator;
  }
  if (product && indicatorName) {
    indicatorName.textContent = product.name;
  }
}

function renderCategoryGrid() {
  const grid = document.getElementById('category-grid');
  if (!grid) return;
  const order = ['speed', 'balance', 'control'];
  grid.innerHTML = '';
  order.forEach((slug) => {
    const category = catalog.categories[slug];
    if (!category) return;
    const heroProduct = catalog.products[category.heroProduct];
    const card = document.createElement('article');
    card.className = 'category-card reveal';
    card.innerHTML = `
      <div class="category-pill">${category.name}</div>
      <h3>${heroProduct?.name || ''}</h3>
      <p>${category.description}</p>
      <ul class="category-list">
        ${category.lineup
          .map((productSlug) => `<li>${catalog.products[productSlug].name}</li>`)
          .join('')}
      </ul>
      <a class="btn primary" href="${basePath}categories/${category.slug}.html">View ${category.name}</a>
      <img src="${heroProduct?.image || ''}" alt="${heroProduct?.name || ''} pad" loading="lazy" />
    `;
    grid.appendChild(card);
  });
}

function renderCategoryPage(slug) {
  const category = catalog.categories[slug];
  if (!category) return;
  const heroProduct = catalog.products[category.heroProduct];
  const heroEl = document.getElementById('category-hero');
  if (heroEl && heroProduct) {
    heroEl.innerHTML = `
      <div class="category-hero-inner reveal">
        <div class="hero-copy">
          <p class="eyebrow">${category.name}</p>
          <h1>${category.heroHeadline}</h1>
          <p>${category.description}</p>
          <div class="hero-ctas">
            <a class="btn primary" href="${basePath}products/${heroProduct.slug}.html">Open ${heroProduct.name}</a>
            <a class="btn ghost" href="${contacts.discord}" target="_blank" rel="noreferrer">Join Discord</a>
          </div>
        </div>
        <div class="hero-media">
          <img src="${basePath}${heroProduct.image}" alt="${heroProduct.name} pad" />
          <div class="category-indicator">
            <span class="indicator-label">${category.indicator}</span>
            <strong>${heroProduct.name}</strong>
          </div>
        </div>
      </div>
    `;
  }
  const eyebrowEl = document.getElementById('category-eyebrow');
  const titleEl = document.getElementById('category-title');
  const descEl = document.getElementById('category-description');
  if (eyebrowEl) eyebrowEl.textContent = category.name;
  if (titleEl) titleEl.textContent = category.heroHeadline;
  if (descEl) descEl.textContent = category.description;

  const grid = document.getElementById('category-product-grid');
  if (!grid) return;
  grid.innerHTML = '';
  category.lineup.forEach((productSlug) => {
    const product = catalog.products[productSlug];
    if (!product) return;
    const card = document.createElement('article');
    card.className = 'product-card reveal';
    card.innerHTML = `
      <img src="${basePath}${product.image}" alt="${product.name} pad" loading="lazy" />
      <div>
        <h3>${product.name}</h3>
        <p>${product.summary}</p>
      </div>
      <div class="product-meta">
        <span>${product.feel}</span>
        <span class="price">${priceFormatter.format(product.price)}</span>
      </div>
      <a class="buy-btn" href="${basePath}products/${product.slug}.html">
        View detail
      </a>
    `;
    grid.appendChild(card);
  });
}

function renderProductPage(slug) {
  const product = catalog.products[slug];
  if (!product) return;
  const category = catalog.categories[product.category];
  const heroEl = document.getElementById('product-hero');
  if (heroEl) {
    heroEl.innerHTML = `
      <div class="product-hero-inner reveal">
        <div class="hero-copy">
          <p class="eyebrow">${category?.name || ''}</p>
          <h1>${product.name}</h1>
          <p>${product.detail.blurb}</p>
          <div class="hero-ctas">
            <span class="price">${priceFormatter.format(product.price)}</span>
            <a class="btn primary" href="${product.cta}" target="_blank" rel="noreferrer">Buy / Contact</a>
            <a class="btn ghost" href="${basePath}categories/${product.category}.html">Back to ${category?.name}</a>
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
      { label: 'Edge finish', value: product.edge },
      { label: 'Base density', value: product.base }
    ];
    specsEl.innerHTML = `
      <h3>Specs</h3>
      <dl class="spec-list">
        ${specs.map((spec) => `
            <div>
              <dt>${spec.label}</dt>
              <dd>${spec.value}</dd>
            </div>
          `)
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
      <p class="gallery-note">Need to swap imagery? Replace the files in /assets/ and update catalog data.</p>
    `;
  }
}

function initPage() {
  if (pageType === 'home') {
    highlightHero(catalog.categories.speed.heroProduct);
    renderCategoryGrid();
  } else if (pageType === 'category') {
    renderCategoryPage(body.dataset.category);
  } else if (pageType === 'product') {
    renderProductPage(body.dataset.product);
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

setYear();
initPage();
initReveal();
initSmoothScroll();
