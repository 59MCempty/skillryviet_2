/**
 * Component 01: Tubelight Floating Pill Navbar
 * Zero-dependency ES Module.
 */

function escapeHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Render and initialize a Tubelight Floating Pill Navbar inside `mount`.
 * @param {HTMLElement} mount
 * @param {object} options
 * @param {{ name: string, href?: string, logoSrc?: string, logoAlt?: string } | null} [options.brand]
 * @param {Array<{ label: string, href?: string, active?: boolean, children?: Array<{ label: string, href: string, active?: boolean }> }>} options.items
 * @param {string} [options.ariaLabel='Điều hướng chính']
 * @param {string} [options.mobileLabel='Menu']
 * @param {string} [options.storageKey='cmp_tn_pill_prev']
 * @param {(item: object, index: number, event: Event) => void} [options.onSelect]
 */
export function createTubelightNavbar(mount, options = {}) {
  if (!mount) return null;
  const {
    brand = null,
    items = [],
    ariaLabel = 'Điều hướng chính',
    mobileLabel = 'Menu',
    storageKey = 'cmp_tn_pill_prev',
    onSelect = null
  } = options;

  const uid = `cmp-tn-${Math.random().toString(36).slice(2, 8)}`;

  const brandHtml = brand ? `
    <a href="${escapeHtml(brand.href || '#')}" class="cmp-tn-brand">
      ${brand.logoSrc ? `<img src="${escapeHtml(brand.logoSrc)}" alt="${escapeHtml(brand.logoAlt || brand.name)}" class="cmp-tn-brand-img" />` : ''}
      <span>${escapeHtml(brand.name || '')}</span>
    </a>
    <span class="cmp-tn-divider" aria-hidden="true"></span>
  ` : '';

  const desktopItemsHtml = items.map((item, idx) => {
    const hasChildren = Array.isArray(item.children) && item.children.length > 0;
    const isActive = Boolean(item.active) || (hasChildren && item.children.some((c) => c.active));
    if (hasChildren) {
      const menuId = `${uid}-dd-${idx}`;
      const childrenHtml = item.children.map((child) => `
        <a href="${escapeHtml(child.href || '#')}" class="cmp-tn-dropdown-link ${child.active ? 'is-active' : ''}">${escapeHtml(child.label)}</a>
      `).join('');
      return `
        <div class="cmp-tn-dropdown-wrap" data-tn-dropdown-wrap>
          <button type="button" class="cmp-tn-tab ${isActive ? 'is-active' : ''}" aria-expanded="false" aria-controls="${menuId}" data-tn-tab data-tn-index="${idx}" data-tn-dropdown-btn>${escapeHtml(item.label)} ▾</button>
          <div class="cmp-tn-dropdown" id="${menuId}" data-tn-dropdown-menu>
            ${childrenHtml}
          </div>
        </div>
      `;
    }
    return `<a href="${escapeHtml(item.href || '#')}" class="cmp-tn-tab ${isActive ? 'is-active' : ''}" data-tn-tab data-tn-index="${idx}">${escapeHtml(item.label)}</a>`;
  }).join('');

  const mobileItemsHtml = items.map((item, idx) => {
    const hasChildren = Array.isArray(item.children) && item.children.length > 0;
    const isActive = Boolean(item.active) || (hasChildren && item.children.some((c) => c.active));
    if (hasChildren) {
      const subId = `${uid}-msub-${idx}`;
      const childrenHtml = item.children.map((child) => `
        <a href="${escapeHtml(child.href || '#')}" class="cmp-tn-mobile-sub-link ${child.active ? 'is-active' : ''}">${escapeHtml(child.label)}</a>
      `).join('');
      return `
        <button type="button" class="cmp-tn-mobile-sub-toggle ${isActive ? 'is-active' : ''}" aria-expanded="false" aria-controls="${subId}" data-tn-mobile-sub-btn>
          <span>${escapeHtml(item.label)} ▾</span>
        </button>
        <div class="cmp-tn-mobile-sub" id="${subId}" data-tn-mobile-sub-list>
          ${childrenHtml}
        </div>
      `;
    }
    return `<a href="${escapeHtml(item.href || '#')}" class="cmp-tn-mobile-link ${isActive ? 'is-active' : ''}" data-tn-mobile-index="${idx}">${escapeHtml(item.label)}</a>`;
  }).join('');

  mount.innerHTML = `
    <header class="cmp-tn-header" data-tn-root>
      <div class="cmp-tn-inner">
        <div class="cmp-tn-pill ${brand ? '' : 'cmp-tn-pill--no-brand'}">
          ${brandHtml}
          <nav class="cmp-tn-track" aria-label="${escapeHtml(ariaLabel)}" data-tn-track>
            <span class="cmp-tn-indicator" aria-hidden="true" data-tn-indicator>
              <span class="cmp-tn-lamp"></span>
            </span>
            ${desktopItemsHtml}
          </nav>
          <button type="button" class="cmp-tn-mobile-btn" aria-expanded="false" aria-controls="${uid}-drawer" data-tn-mobile-btn>${escapeHtml(mobileLabel)}</button>
        </div>
        <nav class="cmp-tn-mobile-drawer" id="${uid}-drawer" aria-label="${escapeHtml(ariaLabel)} (di động)" data-tn-mobile-drawer>
          ${mobileItemsHtml}
        </nav>
      </div>
    </header>
  `;

  return initTubelightNavbar(mount.querySelector('[data-tn-root]'), {
    storageKey,
    items,
    onSelect
  });
}

/**
 * Enhance existing Tubelight Navbar markup inside `root`.
 */
export function initTubelightNavbar(root, { storageKey = 'cmp_tn_pill_prev', items = [], onSelect = null } = {}) {
  if (!root) return null;
  const track = root.querySelector('[data-tn-track]');
  const indicator = root.querySelector('[data-tn-indicator]');
  const tabs = Array.from(root.querySelectorAll('[data-tn-tab]'));

  let activeTab = tabs.find((t) => t.classList.contains('is-active')) || tabs[0] || null;

  const getOpenDropdownBtn = () => {
    const openMenu = root.querySelector('[data-tn-dropdown-menu].is-open');
    return openMenu ? openMenu.parentElement.querySelector('[data-tn-dropdown-btn]') : null;
  };

  const getRestTab = () => getOpenDropdownBtn() || activeTab;

  const measure = (el) => {
    if (!track || !el) return null;
    const tRect = track.getBoundingClientRect();
    const eRect = el.getBoundingClientRect();
    if (!eRect.width) return null;
    return { left: eRect.left - tRect.left, width: eRect.width };
  };

  const applyRect = (rect, instant = false) => {
    if (!indicator || !rect) return;
    if (instant) indicator.classList.add('no-transition');
    indicator.style.transform = `translateX(${rect.left}px)`;
    indicator.style.width = `${rect.width}px`;
    indicator.classList.add('is-ready');
    if (instant) {
      indicator.getBoundingClientRect();
      indicator.classList.remove('no-transition');
    }
  };

  const moveTo = (el, instant = false) => {
    const rect = measure(el);
    if (rect) applyRect(rect, instant);
  };

  const setActiveIndex = (index) => {
    const next = tabs[index];
    if (!next) return;
    tabs.forEach((t) => t.classList.remove('is-active'));
    next.classList.add('is-active');
    activeTab = next;
    moveTo(activeTab, false);
  };

  const persistRect = () => {
    if (!storageKey) return;
    try {
      const rect = measure(getRestTab());
      if (rect) sessionStorage.setItem(storageKey, JSON.stringify(rect));
    } catch {
      // Ignore storage restrictions
    }
  };

  if (track && indicator && tabs.length > 0) {
    const init = () => {
      const targetRect = measure(activeTab);
      if (!targetRect) return;
      let prevRect = null;
      if (storageKey) {
        try {
          const raw = sessionStorage.getItem(storageKey);
          if (raw) {
            prevRect = JSON.parse(raw);
            sessionStorage.removeItem(storageKey);
          }
        } catch {
          prevRect = null;
        }
      }

      const prefersReduced = Boolean(
        window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
      );

      if (prevRect && !prefersReduced && typeof prevRect.left === 'number' && typeof prevRect.width === 'number') {
        applyRect(prevRect, true);
        requestAnimationFrame(() => requestAnimationFrame(() => applyRect(targetRect, false)));
      } else {
        applyRect(targetRect, true);
      }
    };

    tabs.forEach((tab, idx) => {
      tab.addEventListener('mouseenter', () => moveTo(tab, false));
      tab.addEventListener('focus', () => moveTo(tab, false));
      tab.addEventListener('click', (e) => {
        persistRect();
        if (typeof onSelect === 'function' && !tab.hasAttribute('data-tn-dropdown-btn')) {
          onSelect(items[idx] || { label: tab.textContent.trim() }, idx, e);
          setActiveIndex(idx);
        }
      });
    });

    track.addEventListener('mouseleave', () => moveTo(getRestTab(), false));
    track.addEventListener('focusout', (e) => {
      if (!track.contains(e.relatedTarget)) moveTo(getRestTab(), false);
    });

    window.addEventListener('resize', () => moveTo(getRestTab(), true), { passive: true });
    requestAnimationFrame(init);
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => moveTo(getRestTab(), true));
    }
  }

  // Dropdown menus
  const dropdownWraps = Array.from(root.querySelectorAll('[data-tn-dropdown-wrap]'));
  const closeAllDropdowns = (returnFocus = false) => {
    dropdownWraps.forEach((wrap) => {
      const btn = wrap.querySelector('[data-tn-dropdown-btn]');
      const menu = wrap.querySelector('[data-tn-dropdown-menu]');
      if (!btn || !menu) return;
      const wasOpen = menu.classList.contains('is-open');
      menu.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
      if (returnFocus && wasOpen) btn.focus();
    });
    moveTo(getRestTab(), false);
  };

  dropdownWraps.forEach((wrap) => {
    const btn = wrap.querySelector('[data-tn-dropdown-btn]');
    const menu = wrap.querySelector('[data-tn-dropdown-menu]');
    if (!btn || !menu) return;

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const willOpen = !menu.classList.contains('is-open');
      closeAllDropdowns(false);
      if (willOpen) {
        menu.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
        moveTo(btn, false);
      }
    });

    [btn, menu].forEach((el) => {
      el.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeAllDropdowns(true);
      });
    });

    menu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', persistRect);
    });
  });

  document.addEventListener('click', (e) => {
    if (!root.contains(e.target)) closeAllDropdowns(false);
  });

  // Mobile drawer
  const mobileBtn = root.querySelector('[data-tn-mobile-btn]');
  const mobileDrawer = root.querySelector('[data-tn-mobile-drawer]');
  if (mobileBtn && mobileDrawer) {
    mobileBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('is-open');
      mobileBtn.setAttribute('aria-expanded', String(isOpen));
    });
    mobileDrawer.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        mobileDrawer.classList.remove('is-open');
        mobileBtn.setAttribute('aria-expanded', 'false');
        mobileBtn.focus();
      }
    });
  }

  root.querySelectorAll('[data-tn-mobile-sub-btn]').forEach((btn) => {
    const list = btn.nextElementSibling;
    if (!list) return;
    btn.addEventListener('click', () => {
      const isOpen = list.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', String(isOpen));
    });
  });

  return {
    element: root,
    setActiveIndex,
    recalculate: () => moveTo(getRestTab(), true),
    closeAllDropdowns
  };
}
