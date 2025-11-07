const contacts = {
  discord: 'https://discord.gg/pfEfK8AxvQ',
  email: 'contact@elite5pads.com'
};

const catalog = {
  categories: [
    {
      slug: 'speed',
      name: 'Speed Pads',
      indicator: 'Speed category',
      description: 'Low static, glassy glide for players who float until it is time to micro-correct.',
      heroProduct: 'raiden',
      members: ['Raiden', 'K83', 'Hayate Otsu', 'Hien', 'Shidenkai V2']
    },
    {
      slug: 'balance',
      name: 'Balance Pads',
      indicator: 'Balance category',
      description: 'Steady glide with predictable stopping—perfect for hybrid sensitivities.',
      heroProduct: 'zero',
      members: ['Zero', 'Saturn']
    },
    {
      slug: 'control',
      name: 'Control Pads',
      indicator: 'Control category',
      description: 'Textured cloth and grounded bases that brake on command.',
      heroProduct: 'type99',
      members: ['Type99']
    }
  ],
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
      size: '490 × 420 mm',
      thickness: '3.5 mm',
      edgeFinish: 'Stealth stitched',
      baseDensity: 'Mid-density foam',
      image: 'assets/raiden.jpg',
      gallery: [
        { label: 'Surface layer', caption: 'Upload the top-coat macro when ready.', src: 'assets/raiden.jpg' },
        { label: 'Base & edge', caption: 'Swap for the base photo later.', src: 'assets/raiden.jpg' }
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
      feel: 'Balance / Micro texture',
      price: 30,
      size: '490 × 420 mm',
      thickness: '3.5 mm',
      edgeFinish: 'Rounded stitch',
      baseDensity: 'Soft-mid foam',
      image: 'assets/zero.jpg',
      gallery: [
        { label: 'Surface layer', caption: 'Replace with the balanced weave macro.', src: 'assets/zero.jpg' },
        { label: 'Base & edge', caption: 'Upload the underside capture soon.', src: 'assets/zero.jpg' }
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
      size: '500 × 420 mm',
      thickness: '4.5 mm',
      edgeFinish: 'Heavy stitch',
      baseDensity: 'Thick foam',
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
  const category = product ? catalog.categories.find((cat) => cat.slug === product.category) : null;
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
  grid.innerHTML = '';
  catalog.categories.forEach((category) => {
    const heroProduct = catalog.products[category.heroProduct];
    const card = document.createElement('article');
    card.className = 'category-card reveal';
    card.innerHTML = `
      <div class="category-pill">${category.name}</div>
      <h3>${heroProduct?.name || ''}</h3>
      <p>${category.description}</p>
      <ul class="category-list">
        ${category.members.map((member) => `<li>${member}</li>`).join('')}
      </ul>
      <a class="btn primary" href="${basePath}products/${heroProduct?.slug}.html">Open detail</a>
      <img src="${heroProduct?.image || ''}" alt="${heroProduct?.name || ''} pad" loading="lazy" />
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
            <span class="price">${priceFormatter.format(product.price)}</span>
            <a class="btn primary" href="${product.cta}" target="_blank" rel="noreferrer">Buy / Contact</a>
            <a class="btn ghost" href="${basePath}index.html#categories">Back to categories</a>
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
      { label: 'Base density', value: product.baseDensity }
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
    highlightHero('raiden');
    renderCategoryGrid();
  } else if (pageType === 'product') {
    renderProductPage(body.dataset.product);
  }
}

setYear();
initPage();
initReveal();
initSmoothScroll();
