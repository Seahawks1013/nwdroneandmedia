// Generates gradient placeholder JPGs so the site builds before real media exists.
// Replace any file in src/assets/images/ with a real photo of the same name.
// Usage: node scripts/make-placeholders.mjs
import sharp from 'sharp';
import { mkdirSync, existsSync } from 'node:fs';
import { dirname } from 'node:path';

const files = {
  'src/assets/images/hero/hero-aerial.jpg': ['#0b1220', '#1e3a5f', '#d97706', 'AERIAL HERO'],
  'src/assets/images/gallery/wheat-fields.jpg': ['#3f2f12', '#a16207', '#fde68a', 'WHEAT FIELDS'],
  'src/assets/images/gallery/vineyard-sunset.jpg': ['#2a0f1f', '#7c2d12', '#fb923c', 'VINEYARD'],
  'src/assets/images/gallery/blue-mountains.jpg': ['#0f172a', '#1e40af', '#93c5fd', 'BLUE MOUNTAINS'],
  'src/assets/images/gallery/downtown-main-st.jpg': ['#111827', '#374151', '#fbbf24', 'MAIN STREET'],
  'src/assets/images/gallery/snake-river.jpg': ['#042f2e', '#0f766e', '#99f6e4', 'SNAKE RIVER'],
  'src/assets/images/gallery/construction-site.jpg': ['#1c1917', '#57534e', '#f59e0b', 'CONSTRUCTION'],
  'src/assets/images/services/real-estate.jpg': ['#1e293b', '#334155', '#38bdf8', 'REAL ESTATE'],
  'src/assets/images/services/commercial.jpg': ['#172554', '#1d4ed8', '#e0f2fe', 'COMMERCIAL'],
  'src/assets/images/services/inspection.jpg': ['#18181b', '#3f3f46', '#facc15', 'INSPECTION'],
  'src/assets/images/services/post-production.jpg': ['#1e1b4b', '#4c1d95', '#f0abfc', 'POST'],
  'src/assets/images/about/pilot.jpg': ['#0c0a09', '#44403c', '#fdba74', 'PILOT'],
  'src/assets/images/about/gear.jpg': ['#020617', '#1e293b', '#94a3b8', 'GEAR'],
  'public/og-default.jpg': ['#0b1220', '#1e3a5f', '#d97706', 'NW DRONE & MEDIA'],
};

for (const [path, [a, b, c, label]] of Object.entries(files)) {
  if (existsSync(path)) continue; // never overwrite real media
  const [w, h] = path.includes('og-default') ? [1200, 630] : [2400, 1600];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
    <defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${a}"/><stop offset="0.65" stop-color="${b}"/><stop offset="1" stop-color="${c}"/>
    </linearGradient></defs>
    <rect width="100%" height="100%" fill="url(#g)"/>
    <text x="50%" y="50%" fill="rgba(255,255,255,0.35)" font-family="Arial, sans-serif" font-size="${Math.round(w / 24)}"
      font-weight="700" letter-spacing="8" text-anchor="middle" dominant-baseline="middle">${label.replace('&', '&amp;')}</text>
  </svg>`;
  mkdirSync(dirname(path), { recursive: true });
  await sharp(Buffer.from(svg)).jpeg({ quality: 80 }).toFile(path);
  console.log('created', path);
}
