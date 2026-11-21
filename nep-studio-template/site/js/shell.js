import { escapeHtml, getFeaturedProject } from './data-loader.js';

/**
 * shell.js
 * Render Header 5 mục (Trang chủ · Giới thiệu ▾ · Đặt lịch · Blog · Liên hệ),
 * Mobile Drawer và Footer mới đồng bộ 9/9 trang.
 */

export function renderShell(data, activePage) {
  const brand = data.brand || { name: 'Nếp Studio' };
  const featured = getFeaturedProject(data);
  const projectDetailHref = featured
    ? `du-an.html?slug=${encodeURIComponent(featured.slug)}`
    : 'bo-suu-tap.html';

  const introActive = ['bo-suu-tap', 'du-an', 'dich-vu'].includes(activePage) ? 'active' : '';
  const blogActive = ['blog', 'bai-viet'].includes(activePage) ? 'active' : '';

  const brandVisual = brand.logoImage
    ? `<img src="${escapeHtml(brand.logoImage)}" alt="${escapeHtml(brand.logoAlt || brand.name)}" class="brand-logo-img" /><span>${escapeHtml(brand.name)}</span>`
    : escapeHtml(brand.name);

  const headerMount = document.getElementById('site-header-mount');
  if (headerMount) {
    headerMount.innerHTML = `
      <a href="#main-content" class="skip-link">Bỏ qua đến nội dung chính</a>
      <header class="site-header">
        <div class="header-inner">
          <a href="index.html" class="brand-link">${brandVisual}</a>
          <nav class="desktop-nav" aria-label="Điều hướng chính">
            <a href="index.html" class="nav-item ${activePage === 'index' ? 'active' : ''}">Trang chủ</a>
            <div class="dropdown-wrap">
              <button type="button" class="nav-dropdown-btn ${introActive}" aria-expanded="false" aria-controls="intro-dropdown-menu" data-action="toggle-dropdown">Giới thiệu ▾</button>
              <div class="dropdown-menu" id="intro-dropdown-menu" data-dropdown-menu>
                <a href="bo-suu-tap.html" class="dropdown-link ${activePage === 'bo-suu-tap' ? 'active' : ''}">Bộ sưu tập</a>
                <a href="${projectDetailHref}" class="dropdown-link ${activePage === 'du-an' ? 'active' : ''}">Chi tiết dự án</a>
                <a href="dich-vu.html" class="dropdown-link ${activePage === 'dich-vu' ? 'active' : ''}">Dịch vụ và bảng giá</a>
              </div>
            </div>
            <a href="dat-lich.html" class="nav-item ${activePage === 'dat-lich' ? 'active' : ''}">Đặt lịch</a>
            <a href="blog.html" class="nav-item ${blogActive}">Blog</a>
            <a href="lien-he.html" class="nav-item ${activePage === 'lien-he' ? 'active' : ''}">Liên hệ</a>
          </nav>
          <button type="button" class="mobile-menu-btn" aria-expanded="false" aria-controls="mobile-nav-drawer" data-action="toggle-mobile-menu">Menu</button>
        </div>
        <nav class="mobile-drawer" id="mobile-nav-drawer" aria-label="Điều hướng di động" data-mobile-drawer>
          <a href="index.html" class="mobile-nav-link">Trang chủ</a>
          <button type="button" class="mobile-sub-toggle" aria-expanded="false" aria-controls="mobile-intro-sub" data-action="toggle-mobile-sub">
            <span>Giới thiệu ▾</span>
          </button>
          <div class="mobile-sub-list" id="mobile-intro-sub">
            <a href="bo-suu-tap.html" class="mobile-sub-link">Bộ sưu tập</a>
            <a href="${projectDetailHref}" class="mobile-sub-link">Chi tiết dự án</a>
            <a href="dich-vu.html" class="mobile-sub-link">Dịch vụ và bảng giá</a>
          </div>
          <a href="dat-lich.html" class="mobile-nav-link">Đặt lịch</a>
          <a href="blog.html" class="mobile-nav-link">Blog</a>
          <a href="lien-he.html" class="mobile-nav-link" style="border-bottom:none;">Liên hệ</a>
        </nav>
      </header>
    `;
  }

  const footerMount = document.getElementById('site-footer-mount');
  if (footerMount) {
    const contact = data.contact || {};
    const phoneTrim = (contact.phone || '').trim();
    const emailTrim = (contact.email || '').trim();
    const phoneHref = phoneTrim ? `tel:${phoneTrim.replace(/\s+/g, '')}` : '';
    const emailHref = emailTrim ? `mailto:${emailTrim}` : '';
    const year = data.meta?.copyrightYear || '2026';

    const quickLinks = Array.isArray(brand.footerQuickLinks) && brand.footerQuickLinks.length > 0
      ? brand.footerQuickLinks
      : [
          { label: 'Về Nếp', href: 'gioi-thieu.html' },
          { label: 'Bộ sưu tập', href: 'bo-suu-tap.html' },
          { label: 'Đặt lịch', href: 'dat-lich.html' }
        ];

    const quickLinksHtml = quickLinks
      .map((item) => `<a href="${escapeHtml(item.href)}" class="footer-inline-link">${escapeHtml(item.label)}</a>`)
      .join('<span class="footer-dot" aria-hidden="true">·</span>');

    const icon = (pathD) => `
      <svg class="footer-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="miter" aria-hidden="true">
        ${pathD}
      </svg>
    `;

    const ICONS = {
      grid: icon('<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>'),
      home: icon('<path d="M3 10.5L12 3l9 7.5"/><path d="M5 9.5V20h14V9.5"/>'),
      book: icon('<path d="M4 5h6a3 3 0 0 1 3 3v12a2 2 0 0 0-2-2H4z"/><path d="M20 5h-6a3 3 0 0 0-3 3v12a2 2 0 0 1 2-2h7z"/>'),
      compass: icon('<circle cx="12" cy="12" r="9"/><polygon points="15.5,8.5 13.5,13.5 8.5,15.5 10.5,10.5"/>'),
      plan: icon('<rect x="3" y="4" width="18" height="16"/><line x1="9" y1="4" x2="9" y2="20"/><line x1="9" y1="12" x2="21" y2="12"/>'),
      layers: icon('<polygon points="12,3 21,8 12,13 3,8"/><polyline points="3,13 12,18 21,13"/><polyline points="3,17.5 12,22 21,17.5"/>'),
      check: icon('<rect x="4" y="4" width="16" height="16"/><polyline points="8.5,12.5 11,15 16,9.5"/>'),
      tag: icon('<rect x="3" y="6" width="18" height="12"/><line x1="3" y1="10.5" x2="21" y2="10.5"/>'),
      calendar: icon('<rect x="3" y="5" width="18" height="16"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="8" y1="3" x2="8" y2="7"/><line x1="16" y1="3" x2="16" y2="7"/>'),
      mail: icon('<rect x="3" y="5" width="18" height="14"/><polyline points="3,6 12,13 21,6"/>'),
      help: icon('<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 0 1 5 .5c0 1.8-2.5 2-2.5 3.5"/><line x1="12" y1="17" x2="12.01" y2="17"/>'),
      phone: icon('<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1C10.5 20 4 13.5 4 5a1 1 0 0 1 1-1z"/>')
    };

    const demoNoteHtml = data.meta?.isDemo
      ? `<span class="footer-demo-note">${escapeHtml(data.meta.demoNotice || 'Dự án minh họa · Giá minh họa')}</span>`
      : '';

    footerMount.innerHTML = `
      <footer class="site-footer">
        <div class="footer-inner">
          <div class="footer-columns">
            <div class="footer-brand-col">
              <a href="index.html" class="footer-brand-name serif">${escapeHtml(brand.name)}</a>
              <p class="footer-tagline">${escapeHtml(brand.tagline || 'Thiết kế không gian sống xoay quanh nhịp sống thường ngày.')}</p>
              <div class="footer-inline-links" aria-label="Liên kết nhanh">
                ${quickLinksHtml}
              </div>
            </div>

            <div class="footer-col">
              <div class="footer-col-title">Khám phá</div>
              <ul class="footer-list">
                <li><a href="bo-suu-tap.html" class="footer-icon-link">${ICONS.grid}<span>Bộ sưu tập dự án</span></a></li>
                <li><a href="${projectDetailHref}" class="footer-icon-link">${ICONS.home}<span>Chi tiết dự án</span></a></li>
                <li><a href="blog.html" class="footer-icon-link">${ICONS.book}<span>Chuyện bố trí nhà</span></a></li>
                <li><a href="gioi-thieu.html" class="footer-icon-link">${ICONS.compass}<span>Về ${escapeHtml(brand.name)}</span></a></li>
              </ul>
            </div>

            <div class="footer-col">
              <div class="footer-col-title">Dịch vụ</div>
              <ul class="footer-list">
                <li><a href="dich-vu.html?goi=G01#G01" class="footer-icon-link">${ICONS.plan}<span>Tư vấn mặt bằng</span></a></li>
                <li><a href="dich-vu.html?goi=G02#G02" class="footer-icon-link">${ICONS.layers}<span>Thiết kế nội thất</span></a></li>
                <li><a href="dich-vu.html?goi=G03#G03" class="footer-icon-link">${ICONS.check}<span>Đồng hành thi công</span></a></li>
                <li><a href="dich-vu.html" class="footer-icon-link">${ICONS.tag}<span>Dịch vụ và bảng giá</span></a></li>
              </ul>
            </div>

            <div class="footer-col">
              <div class="footer-col-title">Hỗ trợ</div>
              <ul class="footer-list">
                <li><a href="dat-lich.html" class="footer-icon-link">${ICONS.calendar}<span>Đặt lịch tư vấn</span></a></li>
                <li><a href="lien-he.html" class="footer-icon-link">${ICONS.mail}<span>Liên hệ</span></a></li>
                <li><a href="blog.html#hoi-nep" class="footer-icon-link">${ICONS.help}<span>Hỏi Nếp (FAQ)</span></a></li>
                ${phoneTrim ? `<li><a href="${escapeHtml(phoneHref)}" class="footer-icon-link tabular">${ICONS.phone}<span>${escapeHtml(phoneTrim)}</span></a></li>` : ''}
                ${emailTrim ? `<li><a href="${escapeHtml(emailHref)}" class="footer-icon-link">${ICONS.mail}<span>${escapeHtml(emailTrim)}</span></a></li>` : ''}
              </ul>
            </div>
          </div>

          <div class="footer-bottom">
            <span class="footer-copyright">${escapeHtml(brand.name)} © ${escapeHtml(year)}</span>
            ${demoNoteHtml}
          </div>
        </div>
      </footer>
    `;
  }

  bindShellEvents();
}

function bindShellEvents() {
  const dropBtn = document.querySelector('[data-action="toggle-dropdown"]');
  const dropMenu = document.querySelector('[data-dropdown-menu]');

  if (dropBtn && dropMenu) {
    const closeDropdown = (returnFocus = false) => {
      dropMenu.classList.remove('open');
      dropBtn.setAttribute('aria-expanded', 'false');
      if (returnFocus) dropBtn.focus();
    };

    dropBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = dropMenu.classList.toggle('open');
      dropBtn.setAttribute('aria-expanded', String(isOpen));
    });

    dropBtn.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeDropdown(true);
      }
    });

    dropMenu.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeDropdown(true);
      }
    });

    document.addEventListener('click', (e) => {
      if (!dropBtn.parentElement.contains(e.target)) {
        closeDropdown(false);
      }
    });
  }

  const mobileBtn = document.querySelector('[data-action="toggle-mobile-menu"]');
  const mobileDrawer = document.querySelector('[data-mobile-drawer]');
  if (mobileBtn && mobileDrawer) {
    mobileBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      mobileBtn.setAttribute('aria-expanded', String(isOpen));
    });
    mobileDrawer.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        mobileDrawer.classList.remove('open');
        mobileBtn.setAttribute('aria-expanded', 'false');
        mobileBtn.focus();
      }
    });
  }

  const subToggle = document.querySelector('[data-action="toggle-mobile-sub"]');
  if (subToggle) {
    const subList = subToggle.nextElementSibling;
    subToggle.addEventListener('click', () => {
      const isOpen = subList.classList.toggle('open');
      subToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }
}
