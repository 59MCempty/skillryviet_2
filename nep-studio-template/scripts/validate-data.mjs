#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const siteDir = path.join(rootDir, 'site');
const dataPath = path.join(siteDir, 'data', 'site-data.json');

const errors = [];

if (!fs.existsSync(dataPath)) {
  console.error(`Khong tim thay file du lieu: ${dataPath}`);
  process.exit(1);
}

let raw;
let data;
try {
  raw = fs.readFileSync(dataPath, 'utf8');
  data = JSON.parse(raw);
} catch (err) {
  console.error(`Loi cu phap JSON trong site-data.json: ${err.message}`);
  process.exit(1);
}

// 1. Cam chuoi "CHƯA CHỐT"
if (/CHƯA CHỐT/i.test(raw)) {
  errors.push('site-data.json van con chuoi "CHƯA CHỐT".');
}

// 2. Kiem tra 6 nhom chinh
for (const key of ['meta', 'brand', 'contact', 'packages', 'projects', 'blog', 'booking']) {
  if (!(key in data)) errors.push(`Thieu nhom du lieu "${key}".`);
}

// 3. Kiem tra du 3 goi G01-G03
const pkgIds = new Set((data.packages || []).map(p => p.id));
for (const requiredId of ['G01', 'G02', 'G03']) {
  if (!pkgIds.has(requiredId)) errors.push(`Thieu goi dich vu bat buoc "${requiredId}".`);
}

// 4. Kiem tra che do booking
const mode = data.booking?.submission?.mode;
if (!['demo', 'formspree', 'web3forms'].includes(mode)) {
  errors.push(`booking.submission.mode khong hop le: "${mode}".`);
}
if ((mode === 'formspree' || mode === 'web3forms') && !data.booking?.submission?.endpoint) {
  errors.push(`Che do "${mode}" can co booking.submission.endpoint.`);
}

// 5. Kiem tra 100% duong dan anh ton tai trong site/
function checkImagePath(relPath, label) {
  if (!relPath) return;
  if (/^https?:\/\//i.test(relPath)) return;
  const fullPath = path.resolve(siteDir, relPath);
  if (!fs.existsSync(fullPath)) {
    errors.push(`Anh khong ton tai (${label}): ${relPath} -> ${fullPath}`);
  }
}

checkImagePath(data.brand?.logoImage, 'brand.logoImage');
checkImagePath(data.brand?.aboutImage, 'brand.aboutImage');
checkImagePath(data.contact?.image, 'contact.image');

for (const proj of data.projects || []) {
  if (!proj.slug) errors.push('Mot du an thieu "slug".');
  if (proj.primaryPackageId && !pkgIds.has(proj.primaryPackageId)) {
    errors.push(`Du an "${proj.slug}" tham chieu goi khong ton tai: ${proj.primaryPackageId}`);
  }
  if (proj.secondaryPackageId && !pkgIds.has(proj.secondaryPackageId)) {
    errors.push(`Du an "${proj.slug}" tham chieu goi phu khong ton tai: ${proj.secondaryPackageId}`);
  }
  for (const [k, v] of Object.entries(proj.images || {})) {
    if (typeof v === 'string' && /\.(jpe?g|png|webp|avif|svg)$/i.test(v)) {
      checkImagePath(v, `projects[${proj.slug}].images.${k}`);
    }
  }
}

// 6. Kiem tra 9 file HTML trong site/
const expectedHtml = [
  'index.html', 'gioi-thieu.html', 'bo-suu-tap.html', 'du-an.html',
  'dich-vu.html', 'dat-lich.html', 'lien-he.html', 'blog.html', 'bai-viet.html'
];
for (const file of expectedHtml) {
  if (!fs.existsSync(path.join(siteDir, file))) {
    errors.push(`Thieu trang HTML: site/${file}`);
  }
}

if (errors.length > 0) {
  console.error('KIEM TRA THAT BAI:');
  for (const e of errors) console.error(` - ${e}`);
  process.exit(1);
}

console.log('validate-data.mjs: HOP LE (du G01-G03, 9/9 trang HTML, 100% anh ton tai, khong co "CHƯA CHỐT").');
