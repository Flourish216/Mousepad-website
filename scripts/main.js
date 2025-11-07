const products = [
  {
    name: 'EaseBuy Shidenkai V2',
    description: 'Updated static-control glass weave with effortless glide and low stopping force.',
    feel: 'Speed / Glass weave',
    price: 30,
    image: 'assets/shidenkai-v2.jpg',
    cta: 'https://discord.gg/pfEfK8AxvQ'
  },
  {
    name: 'EaseBuy K83',
    description: 'Firm base control pad tuned for micro-adjustments and clutch tracking.',
    feel: 'Control / Firm base',
    price: 30,
    image: 'assets/k83.jpg',
    cta: 'mailto:easebuypads@gmail.com'
  },
  {
    name: 'EaseBuy Hayate Otsu',
    description: 'Balanced weave with a lightly textured topsheet for predictable medium glide.',
    feel: 'Balanced / Textured',
    price: 30,
    image: 'assets/hayate-otsu.jpg',
    cta: 'https://discord.gg/pfEfK8AxvQ'
  },
  {
    name: 'EaseBuy Zero',
    description: 'Classic control cloth reissued with modern edge stitching and humidity seal.',
    feel: 'Control / Micro texture',
    price: 30,
    image: 'assets/zero.jpg',
    cta: 'https://discord.gg/pfEfK8AxvQ'
  },
  {
    name: 'EaseBuy Saturn OG',
    description: 'Soft base comfort pad with tuned static friction for palm-heavy aimers.',
    feel: 'Balanced / Soft foam',
    price: 30,
    image: 'assets/saturn-old.jpg',
    cta: 'mailto:easebuypads@gmail.com'
  },
  {
    name: 'EaseBuy Type 99',
    description: 'Mid-speed hybrid surface offering fast glide with confident stopping.',
    feel: 'Hybrid / Mid speed',
    price: 30,
    image: 'assets/type99.jpg',
    cta: 'https://discord.gg/pfEfK8AxvQ'
  },
  {
    name: 'EaseBuy Hien',
    description: 'Iconic rough texture with crisp feedback and consistent kinetic control.',
    feel: 'Textured / Control',
    price: 30,
    image: 'assets/hien.jpg',
    cta: 'mailto:easebuypads@gmail.com'
  },
  {
    name: 'EaseBuy Raiden',
    description: 'Low static friction speed cloth that still brakes with deliberate pressure.',
    feel: 'Speed / Low static',
    price: 30,
    image: 'assets/raiden.jpg',
    cta: 'https://discord.gg/pfEfK8AxvQ'
  },
  {
    name: 'EaseBuy Pom Dot Skates',
    description: 'Pre-cut POM dots for custom tuning—pair with any pad for ultra-light glide.',
    feel: 'POM / Low-friction',
    price: 8,
    image: 'assets/pom-dot-skates.jpg',
    cta: 'https://discord.gg/pfEfK8AxvQ'
  }
];

const grid = document.getElementById('product-grid');

function createProductCard(product) {
  const card = document.createElement('article');
  card.className = 'product-card reveal';
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name} mousepad" loading="lazy" />
    <div>
      <h3>${product.name}</h3>
      <p>${product.description}</p>
    </div>
    <div class="product-meta">
      <span>${product.feel}</span>
      <span class="price">$${product.price}</span>
    </div>
    <a class="buy-btn" href="${product.cta}" target="_blank" rel="noreferrer">
      Buy / Contact
    </a>
  `;
  return card;
}

if (grid) {
  products.forEach((product) => {
    grid.appendChild(createProductCard(product));
  });
}

const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealElements = () => document.querySelectorAll('.reveal');

if (!prefersReducedMotion && 'IntersectionObserver' in window) {
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
} else {
  revealElements().forEach((el) => el.classList.add('in-view'));
}

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
