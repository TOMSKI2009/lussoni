/**
 * LUSSONI — Homepage JavaScript
 * Testimonials slider + newsletter form
 */

/* ════════════════════════════════════════════════════════════
   TESTIMONIALS SLIDER
   ════════════════════════════════════════════════════════════ */
function initTestimonials() {
  const slides = document.querySelectorAll('.testimonials-slide');
  const dots   = document.querySelectorAll('.testimonials-dot');
  if (!slides.length) return;

  let current = 0;
  let timer;

  function goTo(idx) {
    slides[current].classList.remove('active');
    slides[current].setAttribute('aria-hidden', 'true');
    dots[current].classList.remove('active');
    dots[current].setAttribute('aria-selected', 'false');

    current = idx;

    slides[current].classList.add('active');
    slides[current].setAttribute('aria-hidden', 'false');
    dots[current].classList.add('active');
    dots[current].setAttribute('aria-selected', 'true');
  }

  function next() {
    goTo((current + 1) % slides.length);
  }

  function startAuto() {
    timer = setInterval(next, 5000);
  }

  function stopAuto() {
    clearInterval(timer);
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      stopAuto();
      goTo(parseInt(dot.dataset.idx));
      startAuto();
    });
  });

  startAuto();
}

/* ════════════════════════════════════════════════════════════
   NEWSLETTER FORM
   ════════════════════════════════════════════════════════════ */
function initNewsletter() {
  const form = document.getElementById('newsletter-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.querySelector('#newsletter-email').value.trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      const errMsg = window.LussoniI18n?.t('toasts.newsletterValid') || 'Please enter a valid email address.';
      window.Lussoni?.showToast(errMsg);
      return;
    }
    form.querySelector('#newsletter-email').value = '';
    const successMsg = window.LussoniI18n?.t('toasts.newsletterSuccess') || "You're on the list. Welcome to Lussoni.";
    window.Lussoni?.showToast(successMsg);
  });
}

/* ════════════════════════════════════════════════════════════
   HERO PARALLAX (supplement main.js parallax)
   ════════════════════════════════════════════════════════════ */
function initHeroParallax() {
  const heroBg = document.querySelector('.hero__bg');
  if (!heroBg) return;

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (scrolled > window.innerHeight) return;
    heroBg.style.transform = `translateY(${scrolled * 0.3}px)`;
  }, { passive: true });
}

/* ════════════════════════════════════════════════════════════
   QUICK VIEW (product cards — homepage preview)
   ════════════════════════════════════════════════════════════ */
function initQuickViews() {
  document.querySelectorAll('.product-card__quick-view').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = 'product.html';
    });
  });
}

/* ════════════════════════════════════════════════════════════
   INIT
   ════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initTestimonials();
  initNewsletter();
  initHeroParallax();
  initQuickViews();
});
