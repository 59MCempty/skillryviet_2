/**
 * data-loader.js
 * Tải site-data.json, chuẩn hóa tiền tệ VND, tính giá gói (bao gồm mức tối thiểu G02)
 * và nội suy token giá động cho cả bảng giá lẫn FAQ.
 */

export async function loadSiteData() {
  if (window.location.protocol === 'file:') {
    throw new Error('FILE_PROTOCOL');
  }
  const res = await fetch('data/site-data.json', { cache: 'no-store' });
  if (!res.ok) {
    throw new Error(`HTTP_${res.status}`);
  }
  return res.json();
}

export function renderFileProtocolNotice(container) {
  if (!container) return;
  container.innerHTML = `
    <section class="container">
      <div class="confirm-box" role="alert">
        <span class="eyebrow">Hướng dẫn xem trước cục bộ</span>
        <h1>Cần mở qua máy chủ cục bộ</h1>
        <p>Trình duyệt không cho phép tải tệp <code>data/site-data.json</code> khi mở trực tiếp bằng đường dẫn <code>file://</code>.</p>
        <p>Hãy chạy lệnh sau trong thư mục <code>nep-studio-template</code> rồi mở lại trình duyệt:</p>
        <p><code>./scripts/preview.sh</code> (sau đó truy cập <code>http://127.0.0.1:4173</code>)</p>
      </div>
    </section>
  `;
}

export function formatNumber(amount) {
  return Number(amount || 0).toLocaleString('vi-VN');
}

export function formatVnd(amount) {
  return `${formatNumber(amount)} đ`;
}

export function getPackageById(data, id) {
  if (!id || !data?.packages) return null;
  return data.packages.find((p) => p.id === id) || null;
}

export function calculatePackageFee(pkg, areaM2) {
  if (!pkg) return { amount: 0, raw: 0, appliedMin: false };
  if (pkg.pricingType === 'per_m2') {
    const area = Number(areaM2) || 0;
    const raw = area * Number(pkg.unitPrice || 0);
    const min = Number(pkg.minPrice || 0);
    const appliedMin = min > 0 && raw < min;
    return {
      amount: appliedMin ? min : raw,
      raw,
      appliedMin
    };
  }
  if (pkg.pricingType === 'per_session') {
    const sessions = Number(areaM2) || 1;
    const total = sessions * Number(pkg.unitPrice || 0);
    return { amount: total, raw: total, appliedMin: false };
  }
  const flat = Number(pkg.unitPrice || 0);
  return { amount: flat, raw: flat, appliedMin: false };
}

export function formatPackageRate(pkg) {
  if (!pkg) return '';
  return `${formatNumber(pkg.unitPrice)} ${pkg.unitLabel}`;
}

export function formatPackageSummaryLine(pkg) {
  if (!pkg) return '';
  if (pkg.pricingType === 'per_m2' && pkg.minPrice > 0) {
    return `${formatPackageRate(pkg)} (tối thiểu ${formatVnd(pkg.minPrice)}/căn)`;
  }
  if (pkg.pricingType === 'per_session' && pkg.sessionBundle > 1) {
    const bundleTotal = Number(pkg.unitPrice) * Number(pkg.sessionBundle);
    return `${formatPackageRate(pkg)} (gói ${pkg.sessionBundle} buổi: ${formatVnd(bundleTotal)})`;
  }
  return formatPackageRate(pkg);
}

export function interpolatePriceTokens(text, data) {
  if (!text || !data) return text || '';
  const g01 = getPackageById(data, 'G01');
  const g02 = getPackageById(data, 'G02');
  const g03 = getPackageById(data, 'G03');

  const g02BreakEven = g02 && g02.unitPrice > 0 && g02.minPrice > 0
    ? Math.ceil(g02.minPrice / g02.unitPrice)
    : 0;

  const fee62 = g02 ? calculatePackageFee(g02, 62) : { amount: 0 };
  const fee32 = g02 ? calculatePackageFee(g02, 32) : { amount: 0, appliedMin: false };
  const g03Bundle = g03 ? Number(g03.unitPrice) * Number(g03.sessionBundle || 2) : 0;

  const tokens = {
    'G01.price': g01 ? formatPackageRate(g01) : '',
    'G02.price': g02 ? formatPackageRate(g02) : '',
    'G02.minPrice': g02 ? formatVnd(g02.minPrice) : '',
    'G02.minAreaBreakEven': `${g02BreakEven} m²`,
    'G02.example62': g02
      ? `Hiên Nắng 62 m²: 62 × ${formatNumber(g02.unitPrice)} = ${formatVnd(fee62.amount)}`
      : '',
    'G02.example32': g02
      ? (fee32.appliedMin
          ? `Căn 32 m²: áp mức tối thiểu ${formatVnd(fee32.amount)}`
          : `Căn 32 m²: 32 × ${formatNumber(g02.unitPrice)} = ${formatVnd(fee32.amount)}`)
      : '',
    'G02.raw32': g02
      ? `32 × ${formatNumber(g02.unitPrice)} = ${formatVnd(32 * Number(g02.unitPrice || 0))}`
      : '',
    'G03.price': g03 ? formatPackageRate(g03) : '',
    'G03.twoSessions': formatVnd(g03Bundle),
    'contact.phone': data.contact?.phone || '',
    'contact.email': data.contact?.email || '',
    'contact.address': data.contact?.address || ''
  };

  return String(text).replace(/\{\{([^}]+)\}\}/g, (_, key) => {
    const trimmed = key.trim();
    return trimmed in tokens ? tokens[trimmed] : '';
  });
}

export function getPublishedProjects(data) {
  return (data?.projects || []).filter((p) => p.published !== false);
}

export function getFeaturedProject(data) {
  const published = getPublishedProjects(data);
  if (published.length === 0) return null;
  const featured = published.filter((p) => p.featured === true);
  if (featured.length > 0) return featured[featured.length - 1];
  return published[published.length - 1];
}

export function getProjectBySlug(data, slug) {
  const published = getPublishedProjects(data);
  if (!slug) return getFeaturedProject(data);
  return published.find((p) => p.slug === slug) || null;
}

export function getPublishedPosts(data) {
  return (data?.blog?.posts || []).filter((p) => p.published !== false);
}

export function getPostBySlug(data, slug) {
  const posts = getPublishedPosts(data);
  if (!slug) return posts[0] || null;
  return posts.find((p) => p.slug === slug) || null;
}

export function escapeHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
