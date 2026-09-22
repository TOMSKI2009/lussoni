/**
 * LUSSONI — Collection Page JavaScript
 * Category filtering, view toggle, sort, load more
 */

/* ════════════════════════════════════════════════════════════
   CATEGORY TABS
   ════════════════════════════════════════════════════════════ */
function initCategoryTabs() {
  const tabs    = document.querySelectorAll('.category-tab');
  const items   = document.querySelectorAll('#products-grid [role="listitem"]');
  const counter = document.getElementById('product-count');
  const empty   = document.getElementById('collection-empty');
  const loadMore = document.getElementById('load-more-wrap');

  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Update active tab
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const cat = tab.dataset.category;
      let visible = 0;

      items.forEach(item => {
        const match = cat === 'all' || item.dataset.category === cat;
        item.classList.toggle('hidden', !match);
        if (match) visible++;
      });

      // Update count
      if (counter) {
        const lang = window.LussoniI18n?.getCurrentLanguage() || 'ka';
        if (lang === 'ka') {
          counter.innerHTML = `<span data-i18n="collectionPage.showingPrefix">ნაჩვენებია</span> <strong>${visible}</strong> <span data-i18n="collectionPage.piecePlural">ნივთი</span>`;
        } else {
          counter.innerHTML = `<span data-i18n="collectionPage.showingPrefix">Showing</span> <strong>${visible}</strong> <span data-i18n="collectionPage.piecePlural">${visible === 1 ? 'piece' : 'pieces'}</span>`;
        }
      }

      // Show/hide empty state
      if (empty) empty.hidden = visible > 0;
      if (loadMore) loadMore.style.display = visible > 0 ? '' : 'none';
    });
  });

  // Re-render counter on language change
  window.addEventListener('lussoni:langchange', (e) => {
    const lang = e.detail?.lang || 'ka';
    const activeTab = document.querySelector('.category-tab.active');
    const cat = activeTab ? activeTab.dataset.category : 'all';
    let visible = 0;
    items.forEach(item => {
      if (cat === 'all' || item.dataset.category === cat) visible++;
    });
    if (counter) {
      if (lang === 'ka') {
        counter.innerHTML = `<span data-i18n="collectionPage.showingPrefix">ნაჩვენებია</span> <strong>${visible}</strong> <span data-i18n="collectionPage.piecePlural">ნივთი</span>`;
      } else {
        counter.innerHTML = `<span data-i18n="collectionPage.showingPrefix">Showing</span> <strong>${visible}</strong> <span data-i18n="collectionPage.piecePlural">${visible === 1 ? 'piece' : 'pieces'}</span>`;
      }
    }
  });
}

/* ════════════════════════════════════════════════════════════
   VIEW TOGGLE (grid / list)
   ════════════════════════════════════════════════════════════ */
function initViewToggle() {
  const gridBtn  = document.getElementById('grid-view-btn');
  const listBtn  = document.getElementById('list-view-btn');
  const grid     = document.getElementById('products-grid');
  if (!gridBtn || !listBtn || !grid) return;

  gridBtn.addEventListener('click', () => {
    grid.classList.remove('list-view');
    gridBtn.classList.add('active');
    listBtn.classList.remove('active');
    gridBtn.setAttribute('aria-pressed', 'true');
    listBtn.setAttribute('aria-pressed', 'false');
  });

  listBtn.addEventListener('click', () => {
    grid.classList.add('list-view');
    listBtn.classList.add('active');
    gridBtn.classList.remove('active');
    listBtn.setAttribute('aria-pressed', 'true');
    gridBtn.setAttribute('aria-pressed', 'false');
  });
}

/* ════════════════════════════════════════════════════════════
   FILTER CLEAR
   ════════════════════════════════════════════════════════════ */
function initFilterClear() {
  const clearBtns = document.querySelectorAll('#filter-clear-btn, #clear-filters-btn');
  clearBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Uncheck all checkboxes
      document.querySelectorAll('.filter-option input').forEach(cb => {
        cb.checked = false;
      });
      // Reset to "all" tab
      const allTab = document.querySelector('.category-tab[data-category="all"]');
      if (allTab) allTab.click();
    });
  });
}

/* ════════════════════════════════════════════════════════════
   SORT
   ════════════════════════════════════════════════════════════ */
function initSort() {
  const select = document.getElementById('sort-select');
  const grid   = document.getElementById('products-grid');
  if (!select || !grid) return;

  select.addEventListener('change', () => {
    const val = select.value;
    const items = [...grid.querySelectorAll('[role="listitem"]:not(.hidden)')];

    items.sort((a, b) => {
      const priceA = parseInt(a.dataset.price) || 0;
      const priceB = parseInt(b.dataset.price) || 0;
      const nameA  = a.querySelector('.product-card__name')?.textContent || '';
      const nameB  = b.querySelector('.product-card__name')?.textContent || '';

      switch (val) {
        case 'price-asc':  return priceA - priceB;
        case 'price-desc': return priceB - priceA;
        case 'name':       return nameA.localeCompare(nameB);
        default:           return 0; // featured / newest: leave as-is
      }
    });

    items.forEach(item => grid.appendChild(item));
  });
}

/* ════════════════════════════════════════════════════════════
   LOAD MORE (simulated)
   ════════════════════════════════════════════════════════════ */
function initLoadMore() {
  const btn = document.getElementById('load-more-btn');
  if (!btn) return;

  let clicked = false;
  btn.addEventListener('click', () => {
    const lang = window.LussoniI18n?.getCurrentLanguage() || 'ka';
    if (clicked) {
      btn.textContent = lang === 'ka' ? 'ყველა ნივთი ჩატვირთულია' : 'All pieces loaded';
      btn.disabled = true;
      return;
    }
    clicked = true;
    btn.textContent = lang === 'ka' ? 'იტვირთება…' : 'Loading…';
    setTimeout(() => {
      btn.textContent = lang === 'ka' ? 'მეტი ნივთი არ არის' : 'No more pieces';
      btn.disabled = true;
      btn.style.opacity = '0.4';
    }, 800);
  });
}

/* ════════════════════════════════════════════════════════════
   INIT
   ════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initCategoryTabs();
  initViewToggle();
  initFilterClear();
  initSort();
  initLoadMore();
});
