// =============================================================
// Lenguajes Clandestinos · main.js
// =============================================================

// --- 1. Reveal-on-scroll for sections + blocks ---------------
const revealTargets = document.querySelectorAll(
  '.essay__body, .essay__margin, .object__plate, .object__header, .object__sheet, .block, .object__quote, .graffiti-stage, .object__placeholder-note, .coda, .colophon'
);
revealTargets.forEach((el) => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
);
revealTargets.forEach((el) => revealObserver.observe(el));

// --- 2. Active rail link based on section in view ------------
const sections = document.querySelectorAll('main > section[id]');
const railLinks = document.querySelectorAll('.rail__link');
const linkBySection = new Map();
railLinks.forEach((a) => {
  const id = a.getAttribute('href').slice(1);
  linkBySection.set(id, a);
});

const railObserver = new IntersectionObserver(
  (entries) => {
    // pick the section with the largest intersectionRatio currently visible
    const visible = entries
      .filter((e) => e.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
    if (!visible.length) return;
    const id = visible[0].target.id;
    railLinks.forEach((a) => a.classList.remove('is-active'));
    const active = linkBySection.get(id);
    if (active) active.classList.add('is-active');
  },
  {
    rootMargin: '-30% 0px -55% 0px',
    threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
  }
);
sections.forEach((s) => railObserver.observe(s));

// --- 3. Graffiti · expandable reading column ----------------
const readerRest = document.querySelector('.reader__rest');
const readerToggle = document.querySelector('.reader__toggle');
if (readerRest && readerToggle) {
  readerToggle.addEventListener('click', () => {
    const expanded = readerRest.classList.toggle('is-expanded');
    readerToggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
  });
}

// --- 4. Subtle parallax on hero rule + title ----------------
const hero = document.querySelector('.hero');
const heroTitle = document.querySelector('.hero__title');
const heroRule = document.querySelector('.hero__rule');
let raf = 0;

if (hero && heroTitle) {
  const onScroll = () => {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      const y = window.scrollY;
      const max = window.innerHeight * 0.6;
      const t = Math.min(y / max, 1);
      heroTitle.style.transform = `translateY(${y * -0.12}px)`;
      heroTitle.style.opacity = String(1 - t * 0.55);
      if (heroRule) heroRule.style.transform = `translateX(${y * 0.08}px)`;
      raf = 0;
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
}

// --- 5. (Marisol parallax removed in favor of static photograph) ---

// --- 6. (Bravo curtain removed; photograph displays directly) ---

// --- 7. Hermanos · play on click (lazy iframe inject) --------
const cinemaStage = document.querySelector('.object--hermanos .cinema-stage');
const cinemaCover = cinemaStage?.querySelector('.cinema-stage__cover');
const cinemaMedia = cinemaStage?.querySelector('.cinema-stage__media');

if (cinemaStage && cinemaCover && cinemaMedia) {
  cinemaCover.addEventListener('click', () => {
    const src = cinemaMedia.getAttribute('data-embed');
    if (!src) return;
    const iframe = document.createElement('iframe');
    iframe.src = src;
    iframe.title = 'Hermanos · cortometraje de Santiago A. Zannou';
    iframe.allow =
      'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    iframe.allowFullscreen = true;
    iframe.setAttribute('frameborder', '0');
    cinemaMedia.appendChild(iframe);
    cinemaStage.classList.add('is-playing');
  });
}

// --- 8. Disable copy / cut / context-menu / drag ------------
['copy', 'cut', 'contextmenu', 'dragstart', 'selectstart'].forEach((evt) => {
  window.addEventListener(evt, (e) => { e.preventDefault(); e.stopPropagation(); return false; }, { capture: true });
  document.addEventListener(evt, (e) => { e.preventDefault(); e.stopPropagation(); return false; }, { capture: true });
});

// --- 9. Mark js-enabled (in case we add fallbacks later) -----
document.documentElement.classList.add('js');
