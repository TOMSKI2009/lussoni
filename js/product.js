/**
 * LUSSONI — Product Page JavaScript
 * Gallery, swatches, quantity, add-to-cart, wishlist
 */

/* ════════════════════════════════════════════════════════════
   IMAGE GALLERY
   ════════════════════════════════════════════════════════════ */
function initGallery() {
  const mainImg  = document.getElementById('gallery-main-img');
  const thumbs   = document.querySelectorAll('.gallery__thumb');
  if (!mainImg || !thumbs.length) return;

  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      const src = thumb.dataset.src;
      if (!src) return;

      // Fade out / in
      mainImg.style.opacity = '0';
      mainImg.style.transform = 'scale(1.03)';
      setTimeout(() => {
        mainImg.src = src;
        mainImg.style.opacity = '1';
        mainImg.style.transform = 'scale(1)';
      }, 220);
      mainImg.style.transition = 'opacity 0.22s ease, transform 0.22s ease';

      // Update active thumb
      thumbs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      thumb.classList.add('active');
      thumb.setAttribute('aria-selected', 'true');
    });
  });
}

/* ════════════════════════════════════════════════════════════
   SWATCHES
   ════════════════════════════════════════════════════════════ */
function initSwatches() {
  const optionGroups = document.querySelectorAll('.product-option-group');
  const upholsterySwatches = optionGroups[0] ? optionGroups[0].querySelectorAll('.swatch') : [];
  const upholsteryLabel    = document.getElementById('upholstery-label');
  const priceDisplay       = document.querySelector('.product-info__price');

  const frameSwatches = optionGroups[1] ? optionGroups[1].querySelectorAll('.swatch') : [];
  const frameLabel    = document.getElementById('frame-label');

  function getActiveLabel(swatch, lang) {
    if (!swatch) return '';
    return lang === 'ka'
      ? (swatch.dataset.labelKa || swatch.dataset.label)
      : (swatch.dataset.labelEn || swatch.dataset.label);
  }

  upholsterySwatches.forEach(swatch => {
    swatch.addEventListener('click', () => {
      upholsterySwatches.forEach(s => {
        s.classList.remove('active');
        s.setAttribute('aria-checked', 'false');
      });
      swatch.classList.add('active');
      swatch.setAttribute('aria-checked', 'true');

      const lang = window.LussoniI18n?.getCurrentLanguage() || 'ka';
      if (upholsteryLabel) {
        upholsteryLabel.textContent = getActiveLabel(swatch, lang);
      }

      if (priceDisplay && swatch.dataset.price) {
        const price = parseInt(swatch.dataset.price).toLocaleString('de-DE');
        priceDisplay.textContent = `€ ${price}`;
      }
    });
  });

  frameSwatches.forEach(swatch => {
    swatch.addEventListener('click', () => {
      frameSwatches.forEach(s => {
        s.classList.remove('active');
        s.setAttribute('aria-checked', 'false');
      });
      swatch.classList.add('active');
      swatch.setAttribute('aria-checked', 'true');

      const lang = window.LussoniI18n?.getCurrentLanguage() || 'ka';
      if (frameLabel) {
        frameLabel.textContent = getActiveLabel(swatch, lang);
      }
    });
  });

  // Re-translate labels on language change
  window.addEventListener('lussoni:langchange', (e) => {
    const lang = e.detail?.lang || 'ka';
    const activeUpholstery = optionGroups[0]?.querySelector('.swatch.active');
    const activeFrame = optionGroups[1]?.querySelector('.swatch.active');
    if (upholsteryLabel && activeUpholstery) {
      upholsteryLabel.textContent = getActiveLabel(activeUpholstery, lang);
    }
    if (frameLabel && activeFrame) {
      frameLabel.textContent = getActiveLabel(activeFrame, lang);
    }
  });
}

/* ════════════════════════════════════════════════════════════
   QUANTITY
   ════════════════════════════════════════════════════════════ */
function initQuantity() {
  const minusBtn  = document.getElementById('qty-minus');
  const plusBtn   = document.getElementById('qty-plus');
  const display   = document.getElementById('qty-display');
  if (!minusBtn || !plusBtn || !display) return;

  let qty = 1;

  minusBtn.addEventListener('click', () => {
    if (qty > 1) {
      qty--;
      display.textContent = qty;
    }
  });

  plusBtn.addEventListener('click', () => {
    if (qty < 10) {
      qty++;
      display.textContent = qty;
    }
  });
}

/* ════════════════════════════════════════════════════════════
   ADD TO CART
   ════════════════════════════════════════════════════════════ */
function initAddToCart() {
  const btn = document.getElementById('add-to-cart-btn');
  if (!btn) return;

  let cartCount = 0;
  const badge = document.getElementById('cart-count-badge');

  btn.addEventListener('click', () => {
    const lang = window.LussoniI18n?.getCurrentLanguage() || 'ka';
    const qty = parseInt(document.getElementById('qty-display')?.textContent) || 1;
    const upholstery = document.getElementById('upholstery-label')?.textContent || '';
    const frame = document.getElementById('frame-label')?.textContent || '';

    cartCount += qty;
    if (badge) badge.textContent = cartCount;

    // Animate button
    const span = btn.querySelector('span');
    span.textContent = lang === 'ka' ? '✓ დაემატა კალათაში' : '✓ Added to Cart';
    btn.style.pointerEvents = 'none';

    setTimeout(() => {
      span.textContent = lang === 'ka' ? 'კალათაში დამატება' : 'Add to Cart';
      btn.style.pointerEvents = '';
    }, 2000);

    const productName = lang === 'ka' ? 'ორმაგი ტუმბო Renard' : 'The Renard Double Vanity';
    const message = lang === 'ka'
      ? `${qty}× ${productName} (${upholstery}, ${frame}) დაემატა კალათაში.`
      : `${qty}× ${productName} (${upholstery}, ${frame}) added to cart.`;

    window.Lussoni?.showToast(message);
  });
}

/* ════════════════════════════════════════════════════════════
   WISHLIST
   ════════════════════════════════════════════════════════════ */
function initWishlist() {
  const btn = document.getElementById('wishlist-btn');
  if (!btn) return;

  let wishlisted = false;
  btn.addEventListener('click', () => {
    const lang = window.LussoniI18n?.getCurrentLanguage() || 'ka';
    wishlisted = !wishlisted;
    btn.classList.toggle('active', wishlisted);
    btn.setAttribute('aria-label', wishlisted 
      ? (lang === 'ka' ? 'რჩეულებიდან ამოშლა' : 'Remove from wishlist')
      : (lang === 'ka' ? 'რჩეულებში დამატება' : 'Add to wishlist')
    );

    const productName = lang === 'ka' ? 'ორმაგი ტუმბო Renard' : 'The Renard Double Vanity';
    const savedMsg = lang === 'ka' ? `${productName} შენახულია თქვენს რჩეულებში.` : `${productName} saved to your wishlist.`;
    const removedMsg = lang === 'ka' ? 'წაიშალა რჩეულებიდან.' : 'Removed from wishlist.';

    window.Lussoni?.showToast(wishlisted ? savedMsg : removedMsg);
  });
}

/* ════════════════════════════════════════════════════════════
   INIT
   ════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initGallery();
  initSwatches();
  initQuantity();
  initAddToCart();
  initWishlist();
});
