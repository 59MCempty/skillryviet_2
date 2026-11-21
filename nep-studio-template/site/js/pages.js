import {
  escapeHtml,
  formatVnd,
  formatPackageRate,
  calculatePackageFee,
  interpolatePriceTokens,
  getPackageById,
  getPublishedProjects,
  getFeaturedProject,
  getProjectBySlug,
  getPublishedPosts,
  getPostBySlug
} from './data-loader.js';
import { getProjectFloorplanSvg, SVG_WORKDESK, SVG_CHAIR_PULL } from './drawings.js';

function observeReveal(el) {
  if (!el) return;
  const prefersReduced = Boolean(
    window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  if (!prefersReduced && 'IntersectionObserver' in window) {
    el.classList.add('has-motion');
    let revealed = false;
    let observer = null;

    const reveal = () => {
      if (revealed) return;
      revealed = true;
      el.classList.add('is-visible');
      if (observer) observer.disconnect();
      window.removeEventListener('scroll', checkInView);
    };

    const checkInView = () => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 40 && rect.bottom > -40) {
        reveal();
      }
    };

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) reveal();
      });
    }, { threshold: 0.01, rootMargin: '0px 0px 40px 0px' });
    observer.observe(el);

    window.addEventListener('scroll', checkInView, { passive: true });
    requestAnimationFrame(() => requestAnimationFrame(checkInView));
  } else {
    el.classList.add('is-visible');
  }
}

function renderAnimatedFaqSection({ id, title, subtitlePrefix, items, data, idPrefix = 'cost-faq' }) {
  const contactEmail = (data.contact?.email || '').trim();
  const faqContactLink = contactEmail
    ? `<a href="mailto:${escapeHtml(contactEmail)}" class="cost-faq-contact-link">${escapeHtml(contactEmail)}</a>`
    : `<a href="lien-he.html" class="cost-faq-contact-link">trao đổi trực tiếp với ${escapeHtml(data.brand?.name || 'Nếp Studio')}</a>`;

  const titleWordsHtml = String(title || '')
    .split(' ')
    .map((word, i) => `<span class="cost-faq-word" style="--word-delay:${i * 75}ms">${escapeHtml(word)}</span>`)
    .join(' ');

  const plusSvg = `
    <svg class="cost-faq-plus" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="square" aria-hidden="true">
      <line x1="12" y1="5" x2="12" y2="19"/>
      <line x1="5" y1="12" x2="19" y2="12"/>
    </svg>
  `;

  let openedAlready = false;
  const faqsHtml = (items || []).map((faq, idx) => {
    const panelId = `${idPrefix}-panel-${idx}`;
    const btnId = `${idPrefix}-btn-${idx}`;
    const isDefaultOpen = Boolean(faq.defaultOpen) && !openedAlready;
    if (isDefaultOpen) openedAlready = true;

    const paragraphs = Array.isArray(faq.paragraphs) && faq.paragraphs.length > 0
      ? faq.paragraphs
      : [faq.answer || ''];
    const bodyHtml = paragraphs
      .map((para) => `<p>${escapeHtml(interpolatePriceTokens(para, data))}</p>`)
      .join('');
    const linkHtml = faq.linkLabel && faq.linkHref
      ? `<p class="cost-faq-box-link"><a href="${escapeHtml(faq.linkHref)}" class="text-link" style="min-height:auto;">${escapeHtml(faq.linkLabel)}</a></p>`
      : '';

    return `
      <div class="cost-faq-item ${isDefaultOpen ? 'is-open' : ''}" style="--item-delay:${180 + idx * 65}ms" data-cost-faq-item>
        <button type="button" class="cost-faq-trigger" id="${btnId}" aria-expanded="${isDefaultOpen ? 'true' : 'false'}" aria-controls="${panelId}" data-cost-faq-trigger>
          <span class="cost-faq-trigger-text">${escapeHtml(interpolatePriceTokens(faq.question, data))}</span>
          ${plusSvg}
        </button>
        <div class="cost-faq-panel" id="${panelId}" role="region" aria-labelledby="${btnId}" aria-hidden="${isDefaultOpen ? 'false' : 'true'}">
          <div class="cost-faq-panel-inner">
            <div class="cost-faq-box">
              ${bodyHtml}
              ${linkHtml}
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  return `
    <div class="section-rule" id="${escapeHtml(id)}">
      <div class="cost-faq-wrap" data-cost-faq-wrap>
        <div class="cost-faq-header">
          <h2 class="cost-faq-title">${titleWordsHtml}</h2>
          <p class="cost-faq-sub">${escapeHtml(subtitlePrefix)} ${faqContactLink}.</p>
        </div>
        <div class="cost-faq-list">
          ${faqsHtml}
        </div>
      </div>
    </div>
  `;
}

function wireAnimatedFaqSection(faqWrap) {
  if (!faqWrap) return;
  observeReveal(faqWrap);

  const faqItems = Array.from(faqWrap.querySelectorAll('[data-cost-faq-item]'));
  faqItems.forEach((item) => {
    const trigger = item.querySelector('[data-cost-faq-trigger]');
    const panel = item.querySelector('.cost-faq-panel');
    if (!trigger || !panel) return;
    trigger.addEventListener('click', () => {
      const willOpen = !item.classList.contains('is-open');
      faqItems.forEach((other) => {
        other.classList.remove('is-open');
        const t = other.querySelector('[data-cost-faq-trigger]');
        const p = other.querySelector('.cost-faq-panel');
        if (t) t.setAttribute('aria-expanded', 'false');
        if (p) p.setAttribute('aria-hidden', 'true');
      });
      if (willOpen) {
        item.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
        panel.setAttribute('aria-hidden', 'false');
      }
    });
  });
}

function renderProcessSteps(steps, large = false) {
  return (steps || []).map((step) => `
    <div class="${large ? 'step-row-lg' : 'step-row'}">
      ${large ? `<div class="tabular muted" style="font-size:13px;">${escapeHtml(step.number)}</div>` : ''}
      ${large
        ? `<h3 style="margin-bottom:4px;">${escapeHtml(step.title)}</h3><p class="muted" style="margin:0;font-size:15px;">${escapeHtml(step.description)}</p>`
        : `<span class="tabular muted">${escapeHtml(step.number)}.</span> ${escapeHtml(step.title)}`}
    </div>
  `).join('');
}

export function renderHome(data, mount) {
  const featured = getFeaturedProject(data);
  const brand = data.brand || {};
  const hero = brand.hero || {};
  const packages = data.packages || [];

  const studioHeroSection = `
    <section class="studio-hero" data-studio-hero aria-label="Giới thiệu studio">
      <div class="studio-hero-copy">
        <p class="studio-hero-side">${escapeHtml(hero.sideNote || 'Bố trí mặt bằng, thiết kế nội thất và hồ sơ thi công cho căn hộ sống gọn')}</p>
        <div class="studio-hero-main">
          <h1 class="studio-hero-headline">${escapeHtml(hero.headline || brand.aboutTitle || 'Một studio nội thất cho những gia chủ muốn căn nhà thật có nếp.')}</h1>
          <p class="studio-hero-desc">${escapeHtml(hero.description || brand.aboutLead || brand.tagline || '')}</p>
        </div>
      </div>
      <div class="studio-hero-stage">
        <img src="${escapeHtml(hero.image || 'assets/images/hero-landscape.jpg')}" alt="${escapeHtml(hero.imageAlt || brand.name || 'Nếp Studio')}" class="studio-hero-artwork" data-hero-parallax />
        <div class="studio-hero-mist-top" aria-hidden="true"></div>
        <div class="studio-hero-mist-bottom" aria-hidden="true"></div>
      </div>
    </section>
  `;

  const featuredSection = featured ? `
    <div class="grid-hero" id="du-an-minh-hoa">
      <div>
        <span class="eyebrow tabular">${escapeHtml(featured.label || 'Dự án tiêu biểu')} · ${escapeHtml(featured.areaM2)} m²</span>
        <h2 class="home-featured-heading">${escapeHtml(featured.name)}</h2>
        <p class="muted">${escapeHtml(featured.heroLead || featured.summary)}</p>
        <div class="actions-row">
          <a href="du-an.html?slug=${encodeURIComponent(featured.slug)}" class="btn-primary">Xem căn hộ</a>
          <a href="dich-vu.html" class="text-link">Xem bảng giá</a>
        </div>
      </div>
      <div class="hero-media">
        <img src="${escapeHtml(featured.images.hero)}" alt="${escapeHtml(featured.images.heroAlt || featured.name)}" class="photo" />
      </div>
    </div>
  ` : `
    <div class="prose">
      <span class="eyebrow">${escapeHtml(brand.name)}</span>
      <h2 class="home-featured-heading">${escapeHtml(brand.aboutTitle || brand.name)}</h2>
      <p class="muted">${escapeHtml(brand.tagline || '')}</p>
      <div class="actions-row">
        <a href="dich-vu.html" class="btn-primary">Xem dịch vụ và bảng giá</a>
        <a href="dat-lich.html" class="text-link">Đặt lịch tư vấn</a>
      </div>
    </div>
  `;

  const detailSection = featured ? `
    <div class="section-rule">
      <div class="grid-2" style="align-items:center;">
        <div class="grid-2" style="gap:20px;align-items:center;">
          <div>${getProjectFloorplanSvg(featured.floorplanType)}</div>
          <img src="${escapeHtml(featured.images.bookshelf)}" alt="${escapeHtml(featured.images.bookshelfAlt || featured.name)}" class="photo" />
        </div>
        <div>
          <span class="eyebrow">${escapeHtml(featured.detailHighlight?.label || 'Chi tiết đáng nhìn')}</span>
          <h2>${escapeHtml(featured.detailHighlight?.homeTitle || featured.detailHighlight?.title || '')}</h2>
          <p class="muted">${escapeHtml(featured.detailHighlight?.homeBody || featured.detailHighlight?.body || '')}</p>
          <div class="actions-row">
            <a href="du-an.html?slug=${encodeURIComponent(featured.slug)}" class="text-link">Khám phá ${escapeHtml(featured.shortName || featured.name)}</a>
          </div>
        </div>
      </div>
    </div>
  ` : '';

  const servicesHtml = packages.map((pkg) => `
    <div>
      <span class="eyebrow tabular">${escapeHtml(pkg.number)}</span>
      <h3>${escapeHtml(pkg.name)}</h3>
      <p class="muted">${escapeHtml(interpolatePriceTokens(pkg.scopeSummary, data))}</p>
      <div class="tabular" style="font-weight:500;">${escapeHtml(formatPackageRate(pkg))}</div>
    </div>
  `).join('');

  mount.innerHTML = `
    ${studioHeroSection}
    <section class="container">
      ${featuredSection}
      ${detailSection}
      <div class="section-rule">
        <span class="eyebrow">Dịch vụ của ${escapeHtml(brand.name || 'Nếp Studio')}</span>
        <div class="grid-3" style="margin-top:24px;">
          ${servicesHtml}
        </div>
        <div class="actions-row">
          <a href="dich-vu.html" class="text-link">Xem dịch vụ và bảng giá</a>
        </div>
      </div>
      <div class="section-rule">
        <div class="grid-2" style="align-items:center;">
          <div>
            <span class="eyebrow">Về ${escapeHtml(brand.name || 'Nếp Studio')}</span>
            <h2>${escapeHtml(brand.tagline || '')}</h2>
            <div class="step-list">
              ${renderProcessSteps(brand.processSteps, false)}
            </div>
            <div class="actions-row">
              <a href="gioi-thieu.html" class="text-link">Về ${escapeHtml(brand.name || 'Nếp Studio')}</a>
            </div>
          </div>
          <div>
            <img src="${escapeHtml(brand.aboutImage)}" alt="${escapeHtml(brand.aboutImageAlt || brand.name)}" class="photo" />
          </div>
        </div>
      </div>
    </section>
  `;

  // Wire calm hero entrance + gentle scroll parallax
  const heroEl = mount.querySelector('[data-studio-hero]');
  observeReveal(heroEl);

  const parallaxImg = mount.querySelector('[data-hero-parallax]');
  const prefersReduced = Boolean(
    window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  if (parallaxImg && !prefersReduced) {
    let ticking = false;
    const updateParallax = () => {
      ticking = false;
      const stage = parallaxImg.parentElement;
      if (!stage) return;
      const rect = stage.getBoundingClientRect();
      if (rect.bottom < -100 || rect.top > window.innerHeight + 100) return;
      const progress = Math.max(-1, Math.min(1, (window.innerHeight * 0.5 - rect.top) / (window.innerHeight + rect.height)));
      const shiftY = progress * 34;
      parallaxImg.style.transform = `translate3d(0, ${shiftY.toFixed(1)}px, 0)`;
    };
    window.addEventListener('scroll', () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateParallax);
      }
    }, { passive: true });
    updateParallax();
  }
}

export function renderAbout(data, mount) {
  const brand = data.brand || {};
  const featured = getFeaturedProject(data);
  const projectHref = featured ? `du-an.html?slug=${encodeURIComponent(featured.slug)}` : 'bo-suu-tap.html';
  const projectLabel = featured ? `Xem căn hộ ${featured.shortName || featured.name}` : 'Xem bộ sưu tập';

  mount.innerHTML = `
    <section class="container">
      <div class="grid-2" style="align-items:center;">
        <div>
          <span class="eyebrow">Về ${escapeHtml(brand.name || 'Nếp Studio')}</span>
          <h1>${escapeHtml(brand.aboutTitle || '')}</h1>
          <p class="muted">${escapeHtml(brand.aboutLead || '')}</p>
        </div>
        <div>
          <img src="${escapeHtml(brand.aboutImage)}" alt="${escapeHtml(brand.aboutImageAlt || brand.name)}" class="photo" />
        </div>
      </div>

      <div class="section-rule">
        <div class="grid-2" style="align-items:center;">
          <div>${SVG_WORKDESK}</div>
          <div>
            <span class="eyebrow">Quy trình làm việc</span>
            <div class="step-list" style="margin-top:0;">
              ${renderProcessSteps(brand.processSteps, true)}
            </div>
          </div>
        </div>
      </div>

      <div class="cta-band">
        <p style="margin-bottom:4px;">${escapeHtml(brand.serviceArea || '')}</p>
        <div class="actions-row">
          <a href="${projectHref}" class="btn-primary">${escapeHtml(projectLabel)}</a>
          <a href="dich-vu.html" class="text-link">Xem dịch vụ và bảng giá</a>
        </div>
      </div>
    </section>
  `;
}

export function renderCollection(data, mount) {
  const projects = getPublishedProjects(data);

  let content = '';
  if (projects.length === 0) {
    content = `
      <div class="cta-band">
        <h2>Các dự án đang được cập nhật</h2>
        <p class="muted">Hiện chưa có công trình công khai trong bộ sưu tập. Bạn có thể xem dịch vụ hoặc gửi yêu cầu tư vấn trực tiếp.</p>
        <div class="actions-row">
          <a href="dich-vu.html" class="btn-primary">Xem dịch vụ và bảng giá</a>
          <a href="dat-lich.html" class="text-link">Đặt lịch tư vấn</a>
        </div>
      </div>
    `;
  } else {
    const featured = projects.find((p) => p.featured) || projects[0];
    const others = projects.filter((p) => p.slug !== featured.slug);
    const featPkg = getPackageById(data, featured.primaryPackageId);

    const featuredHtml = `
      <article class="collection-lead" style="margin-top:32px;padding-bottom:40px;border-bottom:1px solid var(--rule-hairline);">
        <div class="grid-2" style="align-items:center;">
          <a href="du-an.html?slug=${encodeURIComponent(featured.slug)}" style="display:block;">
            <img src="${escapeHtml(featured.images.hero)}" alt="${escapeHtml(featured.images.heroAlt || featured.name)}" class="photo" />
          </a>
          <div>
            <span class="eyebrow tabular" style="margin-bottom:8px;">${escapeHtml(featured.areaM2)} m² · ${escapeHtml(featured.label || 'Dự án')}${featPkg ? ` · ${escapeHtml(featPkg.name)}` : ''}</span>
            <h2 style="margin-bottom:12px;">${escapeHtml(featured.name)}</h2>
            <p class="muted" style="margin-bottom:10px;">${escapeHtml(featured.heroLead || featured.summary)}</p>
            <p class="muted" style="font-size:14px;margin-bottom:20px;">Không gian: ${escapeHtml(featured.spaces || '')}</p>
            <a href="du-an.html?slug=${encodeURIComponent(featured.slug)}" class="btn-primary">Xem căn hộ</a>
          </div>
        </div>
      </article>
    `;

    const othersHtml = others.length > 0 ? `
      <div class="grid-2" style="margin-top:44px;">
        ${others.map((proj) => {
          const pkg = getPackageById(data, proj.primaryPackageId);
          return `
            <article style="display:flex;flex-direction:column;">
              <a href="du-an.html?slug=${encodeURIComponent(proj.slug)}" style="display:block;">
                <img src="${escapeHtml(proj.images.hero)}" alt="${escapeHtml(proj.images.heroAlt || proj.name)}" class="photo" style="aspect-ratio:4/3;" />
              </a>
              <div style="border-bottom:1px solid var(--rule-hairline);padding:20px 0 28px;flex:1;display:flex;flex-direction:column;justify-content:space-between;">
                <div>
                  <span class="eyebrow tabular" style="margin-bottom:6px;">${escapeHtml(proj.areaM2)} m² · ${escapeHtml(proj.label || 'Dự án')}${pkg ? ` · ${escapeHtml(pkg.name)}` : ''}</span>
                  <h2 style="margin-bottom:8px;">${escapeHtml(proj.name)}</h2>
                  <p class="muted" style="margin-bottom:16px;">${escapeHtml(proj.summary)}</p>
                </div>
                <div>
                  <a href="du-an.html?slug=${encodeURIComponent(proj.slug)}" class="text-link">Xem căn hộ</a>
                </div>
              </div>
            </article>
          `;
        }).join('')}
      </div>
    ` : '';

    content = `${featuredHtml}${othersHtml}`;
  }

  mount.innerHTML = `
    <section class="container">
      <span class="eyebrow">Bộ sưu tập</span>
      <h1>Những căn hộ và cách chúng được sử dụng</h1>
      <p class="muted" style="max-width:60ch;">Ba câu chuyện bố trí lại phòng sinh hoạt chung, góc làm việc và khu bếp theo diện tích thực tế tại Việt Nam.</p>
      ${content}
    </section>
  `;
}

export function renderProjectDetail(data, mount) {
  const params = new URLSearchParams(window.location.search);
  const requestedSlug = params.get('slug');
  const proj = getProjectBySlug(data, requestedSlug);

  if (!proj) {
    mount.innerHTML = `
      <section class="container">
        <span class="eyebrow">Chi tiết dự án</span>
        <h1>Các dự án đang được cập nhật</h1>
        <p class="muted">Công trình bạn đang tìm hiện chưa có trong danh sách hoặc đường dẫn đã thay đổi.</p>
        <div class="actions-row">
          <a href="bo-suu-tap.html" class="btn-primary">Về Bộ sưu tập</a>
          <a href="dich-vu.html" class="text-link">Xem dịch vụ và bảng giá</a>
        </div>
      </section>
    `;
    return;
  }

  document.title = `${proj.shortName || proj.name} · ${data.brand?.name || 'Nếp Studio'}`;

  const primaryPkg = getPackageById(data, proj.primaryPackageId) || data.packages[1] || data.packages[0];
  const secondaryPkg = getPackageById(data, proj.secondaryPackageId) || data.packages[0];
  const designFee = calculatePackageFee(primaryPkg, proj.areaM2).amount;

  const primaryHref = `dich-vu.html?goi=${encodeURIComponent(primaryPkg.id)}&du-an=${encodeURIComponent(proj.slug)}#${primaryPkg.id}`;
  const secondaryHref = `dich-vu.html?goi=${encodeURIComponent(secondaryPkg.id)}&du-an=${encodeURIComponent(proj.slug)}#${secondaryPkg.id}`;

  mount.innerHTML = `
    <section class="container">
      <span class="eyebrow">Chi tiết dự án</span>
      <h1>${escapeHtml(proj.shortName || proj.name)}</h1>
      <div class="spec-bar tabular">
        <div class="spec-cell"><div class="spec-label">Diện tích</div><div class="spec-val">${escapeHtml(proj.areaM2)} m²</div></div>
        <div class="spec-cell"><div class="spec-label">Không gian</div><div class="spec-val">${escapeHtml(proj.spaces)}</div></div>
        <div class="spec-cell"><div class="spec-label">Gói thực hiện</div><div class="spec-val">${escapeHtml(primaryPkg.name)}</div></div>
        <div class="spec-cell"><div class="spec-label">Chi phí thiết kế</div><div class="spec-val">${escapeHtml(formatVnd(designFee))}</div></div>
      </div>

      <img src="${escapeHtml(proj.images.hero)}" alt="${escapeHtml(proj.images.heroAlt || proj.name)}" class="photo" />

      <div class="section-rule prose">
        <h2>${escapeHtml(proj.story?.headline || '')}</h2>
        <p>${escapeHtml(proj.story?.need || '')}</p>
        <p>${escapeHtml(proj.story?.decision || '')}</p>
      </div>

      <div class="section-rule">
        <div class="grid-2">
          <div>
            ${getProjectFloorplanSvg(proj.floorplanType)}
            <p class="muted" style="font-size:14px;margin-top:12px;">${escapeHtml(proj.floorplanCaption || 'Mặt bằng 2D phương án bố trí không gian.')}</p>
          </div>
          <div>
            <img src="${escapeHtml(proj.images.kitchen)}" alt="${escapeHtml(proj.images.kitchenAlt || proj.name)}" class="photo" />
            <p class="muted" style="font-size:14px;margin-top:12px;">${escapeHtml(proj.images.kitchenCaption || '')}</p>
          </div>
        </div>
      </div>

      <div class="section-rule">
        <div class="grid-2" style="align-items:center;">
          <img src="${escapeHtml(proj.images.bookshelf)}" alt="${escapeHtml(proj.images.bookshelfAlt || proj.name)}" class="photo" />
          <div>
            <span class="eyebrow">${escapeHtml(proj.detailHighlight?.label || 'Chi tiết đáng nhìn')}</span>
            <h2>${escapeHtml(proj.detailHighlight?.title || '')}</h2>
            <p class="muted">${escapeHtml(proj.detailHighlight?.body || '')}</p>
          </div>
        </div>
      </div>

      <div class="cta-band">
        <h2>${escapeHtml(proj.story?.ctaPrompt || 'Bạn muốn xem gói dịch vụ phù hợp?')}</h2>
        <div class="actions-row">
          <a href="${primaryHref}" class="btn-primary">Xem gói ${escapeHtml(primaryPkg.name)}</a>
          <a href="${secondaryHref}" class="text-link">Xem ${escapeHtml(secondaryPkg.name)}</a>
        </div>
      </div>

      ${(() => {
        const otherProjects = getPublishedProjects(data).filter((p) => p.slug !== proj.slug);
        if (otherProjects.length === 0) return '';
        return `
          <div class="section-rule">
            <div style="display:flex;justify-content:space-between;align-items:baseline;flex-wrap:wrap;gap:12px;margin-bottom:24px;">
              <h2 style="margin:0;">Các căn hộ khác trong bộ sưu tập</h2>
              <a href="bo-suu-tap.html" class="text-link">Xem toàn bộ</a>
            </div>
            <div class="grid-2">
              ${otherProjects.map((other) => {
                const otherPkg = getPackageById(data, other.primaryPackageId);
                return `
                  <article style="border-top:1px solid var(--rule-hairline);padding-top:20px;">
                    <span class="eyebrow tabular" style="margin-bottom:6px;">${escapeHtml(other.areaM2)} m²${otherPkg ? ` · ${escapeHtml(otherPkg.name)}` : ''}</span>
                    <h3 style="margin-bottom:8px;">${escapeHtml(other.name)}</h3>
                    <p class="muted" style="font-size:14px;margin-bottom:12px;">${escapeHtml(other.summary)}</p>
                    <a href="du-an.html?slug=${encodeURIComponent(other.slug)}" class="text-link">Xem căn hộ</a>
                  </article>
                `;
              }).join('')}
            </div>
          </div>
        `;
      })()}
    </section>
  `;
}

export function renderServices(data, mount) {
  const params = new URLSearchParams(window.location.search);
  const hashId = window.location.hash ? window.location.hash.replace('#', '') : '';
  const highlightPkg = params.get('goi') || hashId || '';
  const sourceProj = params.get('du-an') || '';

  const rowsHtml = (data.packages || []).map((pkg) => {
    const isHighlighted = highlightPkg === pkg.id;
    const isPrimaryBtn = pkg.featured || isHighlighted;
    const bookHref = `dat-lich.html?goi=${encodeURIComponent(pkg.id)}${sourceProj ? `&du-an=${encodeURIComponent(sourceProj)}` : ''}`;

    let metaHtml = '';
    if (pkg.pricingType === 'per_m2' && pkg.minPrice > 0) {
      metaHtml = `<div class="fee-meta tabular">Tối thiểu ${escapeHtml(formatVnd(pkg.minPrice))}/căn (tính trên diện tích thực tế thiết kế).</div>`;
    } else if (pkg.pricingType === 'per_session' && pkg.sessionBundle > 1) {
      const bundle = Number(pkg.unitPrice) * Number(pkg.sessionBundle);
      metaHtml = `<div class="fee-meta tabular">Gói ${escapeHtml(pkg.sessionBundle)} buổi trong phạm vi: ${escapeHtml(formatVnd(bundle))}.</div>`;
    } else if (pkg.examples && pkg.examples.length > 0) {
      metaHtml = `<div class="fee-meta">${escapeHtml(interpolatePriceTokens(pkg.examples[0], data))}</div>`;
    }

    const exampleBlock = pkg.pricingType === 'per_m2' && pkg.examples && pkg.examples.length > 0
      ? `<div class="fee-example tabular">${pkg.examples.map((ex) => `<div>${escapeHtml(interpolatePriceTokens(ex, data))}</div>`).join('')}</div>`
      : '';

    return `
      <div class="fee-row ${isHighlighted ? 'is-highlighted' : ''}" id="${escapeHtml(pkg.id)}" data-pkg-row="${escapeHtml(pkg.id)}">
        <div>
          <span class="fee-num tabular">${escapeHtml(pkg.number)}</span>
          <h2>${escapeHtml(pkg.name)}</h2>
          <p>${escapeHtml(interpolatePriceTokens(pkg.deliverables, data))}</p>
          <p class="muted" style="font-size:14px;">Phát sinh: ${escapeHtml(interpolatePriceTokens(pkg.extras, data))}</p>
        </div>
        <div>
          <div class="fee-price tabular">${escapeHtml(formatPackageRate(pkg))}</div>
          ${metaHtml}
          ${exampleBlock}
          <div class="actions-row">
            <a href="${bookHref}" class="${isPrimaryBtn ? 'btn-primary' : 'btn-outline'}">Đặt lịch tư vấn</a>
          </div>
        </div>
      </div>
    `;
  }).join('');

  const costFaqHtml = renderAnimatedFaqSection({
    id: 'hoi-nhanh-chi-phi',
    title: 'Hỏi nhanh về chi phí',
    subtitlePrefix: 'Giải đáp những câu hỏi thường gặp trước khi chọn gói. Nếu bạn cần hỏi riêng cho căn hộ của mình, hãy',
    items: data.serviceFaqs || [],
    data,
    idPrefix: 'cost-faq'
  });

  mount.innerHTML = `
    <section class="container">
      <span class="eyebrow">${escapeHtml(data.meta?.isDemo ? 'Giá minh họa cho template' : 'Dịch vụ và bảng giá')}</span>
      <h1>Dịch vụ và bảng giá</h1>
      <p class="muted" style="max-width:60ch;margin-bottom:36px;">${escapeHtml(data.meta?.priceDisclaimer || '')}</p>

      ${rowsHtml}

      ${costFaqHtml}
    </section>
  `;

  wireAnimatedFaqSection(mount.querySelector('[data-cost-faq-wrap]'));

  if (highlightPkg) {
    const targetRow = mount.querySelector(`[data-pkg-row="${CSS.escape(highlightPkg)}"]`);
    if (targetRow) {
      requestAnimationFrame(() => {
        targetRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
    }
  }
}

export function renderContact(data, mount) {
  const contact = data.contact || {};
  const phone = (contact.phone || '').trim();
  const email = (contact.email || '').trim();
  const address = (contact.address || '').trim();
  const hours = (contact.hours || '').trim();

  const metaRows = [];
  if (phone) {
    metaRows.push(`
      <div class="contact-meta-row">
        <span class="contact-meta-label">Điện thoại</span>
        <a href="tel:${escapeHtml(phone.replace(/\s+/g, ''))}" class="text-link tabular" style="min-height:auto;">${escapeHtml(phone)}</a>
      </div>
    `);
  }
  if (email) {
    metaRows.push(`
      <div class="contact-meta-row">
        <span class="contact-meta-label">Email</span>
        <a href="mailto:${escapeHtml(email)}" class="text-link" style="min-height:auto;">${escapeHtml(email)}</a>
      </div>
    `);
  }
  if (address) {
    metaRows.push(`
      <div class="contact-meta-row">
        <span class="contact-meta-label">Địa chỉ</span>
        <span>${escapeHtml(address)}</span>
      </div>
    `);
  }
  if (hours) {
    metaRows.push(`
      <div class="contact-meta-row">
        <span class="contact-meta-label">Giờ tiếp nhận</span>
        <span>${escapeHtml(hours)}</span>
      </div>
    `);
  }

  const partners = contact.partners || null;
  let partnersHtml = '';
  if (partners && Array.isArray(partners.rows) && partners.rows.length > 0) {
    let logoIndex = 0;
    const rowsMarkup = partners.rows.map((row) => {
      const itemsMarkup = (row || []).map((item) => {
        const delay = 140 + logoIndex * 85;
        logoIndex += 1;
        const styleClass = `partner-style-${escapeHtml(item.style || 'sans-medium')}`;
        return `<span class="partner-wordmark ${styleClass}" style="--logo-delay:${delay}ms">${escapeHtml(item.name)}</span>`;
      }).join('');
      return `<div class="partner-cloud-row">${itemsMarkup}</div>`;
    }).join('');

    partnersHtml = `
      <div class="section-rule" id="doi-tac-dong-hanh">
        <div class="partner-cloud" data-partner-cloud>
          <div class="partner-cloud-header">
            <p class="partner-cloud-eyebrow">${escapeHtml(partners.eyebrow || 'ĐỐI TÁC VẬT LIỆU & XƯỞNG ĐỒNG HÀNH')}</p>
            <p class="partner-cloud-sub">${escapeHtml(partners.subtitle || '')}</p>
          </div>
          <div class="partner-cloud-rows">
            ${rowsMarkup}
          </div>
        </div>
      </div>
    `;
  }

  mount.innerHTML = `
    <section class="container">
      <div class="contact-grid">
        <div>
          <span class="eyebrow">Liên hệ</span>
          <h1>${escapeHtml(contact.headline || 'Trao đổi với Nếp')}</h1>
          <p class="muted">${escapeHtml(contact.lead || '')}</p>
          ${metaRows.length > 0 ? `<div class="contact-meta-list">${metaRows.join('')}</div>` : ''}
          <div class="actions-row">
            <a href="dat-lich.html" class="btn-primary">Gửi yêu cầu tư vấn</a>
            <a href="dich-vu.html" class="text-link">Xem dịch vụ và bảng giá</a>
          </div>
        </div>
        <div>
          <img src="${escapeHtml(contact.image || 'assets/images/hien-nang-cua-so.jpg')}" alt="${escapeHtml(contact.imageAlt || 'Góc cửa sổ')}" class="photo" />
        </div>
      </div>
      ${partnersHtml}
    </section>
  `;

  observeReveal(mount.querySelector('[data-partner-cloud]'));
}

export function renderBlog(data, mount) {
  const blog = data.blog || {};
  const posts = getPublishedPosts(data);
  const faqs = blog.faqs || [];

  const postsHtml = posts.length === 0 ? `
    <p class="muted">Bài viết đang được cập nhật.</p>
  ` : posts.map((post, idx) => `
    <div class="section-rule" style="${idx === 0 ? 'margin-top:24px;' : ''}">
      <div class="grid-2" style="align-items:center;">
        <div>${SVG_CHAIR_PULL}</div>
        <div>
          <span class="eyebrow">${escapeHtml(post.eyebrow || 'Ghi chép bố trí')}</span>
          <h2>${escapeHtml(post.title)}</h2>
          <p class="muted">${escapeHtml(post.excerpt)}</p>
          <div class="actions-row">
            <a href="bai-viet.html?slug=${encodeURIComponent(post.slug)}" class="text-link">Đọc bài viết</a>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  const hoiNepFaqHtml = renderAnimatedFaqSection({
    id: 'hoi-nep',
    title: 'Hỏi Nếp',
    subtitlePrefix: 'Giải đáp những thắc mắc thường gặp trước khi bắt đầu thiết kế. Nếu bạn cần hỏi riêng cho căn hộ của mình, hãy',
    items: faqs,
    data,
    idPrefix: 'hoi-nep-faq'
  });

  mount.innerHTML = `
    <section class="container">
      <span class="eyebrow">Blog</span>
      <h1>${escapeHtml(blog.title || 'Chuyện bố trí nhà')}</h1>
      ${postsHtml}
      ${hoiNepFaqHtml}
    </section>
  `;

  wireAnimatedFaqSection(mount.querySelector('[data-cost-faq-wrap]'));
}

export function renderPost(data, mount) {
  const params = new URLSearchParams(window.location.search);
  const post = getPostBySlug(data, params.get('slug'));

  if (!post) {
    mount.innerHTML = `
      <section class="container">
        <span class="eyebrow">Blog</span>
        <h1>Bài viết đang được cập nhật</h1>
        <p class="muted">Bài viết bạn đang tìm hiện chưa có hoặc đường dẫn đã thay đổi.</p>
        <div class="actions-row">
          <a href="blog.html" class="btn-primary">Về trang Blog</a>
        </div>
      </section>
    `;
    return;
  }

  document.title = `${post.title} · ${data.brand?.name || 'Nếp Studio'}`;

  const relProj = getProjectBySlug(data, post.relatedProjectSlug);
  const relPkg = getPackageById(data, post.relatedPackageId) || data.packages[0];

  const projHref = relProj ? `du-an.html?slug=${encodeURIComponent(relProj.slug)}` : 'bo-suu-tap.html';
  const projLabel = relProj ? `Xem góc bàn ăn ${relProj.shortName || relProj.name}` : 'Xem Bộ sưu tập';
  const pkgHref = relPkg ? `dich-vu.html?goi=${encodeURIComponent(relPkg.id)}#${relPkg.id}` : 'dich-vu.html';
  const pkgLabel = relPkg ? `Xem gói ${relPkg.name}` : 'Xem dịch vụ và bảng giá';

  const sectionsHtml = (post.sections || []).map((sec) => `
    <p><strong>${escapeHtml(sec.heading)}</strong> ${escapeHtml(sec.body)}</p>
  `).join('');

  mount.innerHTML = `
    <section class="container">
      <div style="margin-bottom:24px;">
        <a href="blog.html" class="text-link">${escapeHtml(data.blog?.title || 'Chuyện bố trí nhà')}</a>
      </div>
      <div class="prose">
        <h1>${escapeHtml(post.title)}</h1>
        <div style="margin:28px 0;">${SVG_CHAIR_PULL}</div>
        <p>${escapeHtml(post.lead)}</p>
        ${sectionsHtml}
      </div>
      <div class="cta-band" style="max-width:66ch;">
        <div class="actions-row" style="margin-top:0;">
          <a href="${projHref}" class="btn-primary">${escapeHtml(projLabel)}</a>
          <a href="${pkgHref}" class="text-link">${escapeHtml(pkgLabel)}</a>
        </div>
      </div>
    </section>
  `;
}
