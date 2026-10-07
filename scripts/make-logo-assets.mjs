// Builds transparent, web-ready logo files from the original logo artwork.
// Source: brand/logo-original.jpg (gold logo on a flat #161616 background).
// Usage: node scripts/make-logo-assets.mjs
//
// The logo is a single gold color, so transparency is derived from brightness:
// background pixels become fully transparent, gold pixels fully opaque, and the
// anti-aliased edges in between keep their smoothness.
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const SRC = 'brand/logo-original.jpg';
const OUT = 'public/images/brand';
mkdirSync(OUT, { recursive: true });

const { data, info } = await sharp(SRC).raw().toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;
const lum = (r, g, b) => 0.2126 * r + 0.7152 * g + 0.0722 * b;

// Background and gold reference colors, sampled from the artwork.
const bg = [data[0], data[1], data[2]];
let gold = [0, 0, 0], n = 0;
for (let i = 0; i < data.length; i += channels) {
  if (lum(data[i], data[i + 1], data[i + 2]) > 190) { gold[0] += data[i]; gold[1] += data[i + 1]; gold[2] += data[i + 2]; n++; }
}
gold = gold.map((v) => Math.round(v / n));
const bgL = lum(...bg), goldL = lum(...gold);

// RGBA buffer: constant gold color, alpha from brightness.
const rgba = Buffer.alloc(width * height * 4);
for (let p = 0, i = 0; p < width * height; p++, i += channels) {
  const a = Math.max(0, Math.min(1, (lum(data[i], data[i + 1], data[i + 2]) - bgL) / (goldL - bgL)));
  rgba.set([gold[0], gold[1], gold[2], Math.round(a * 255)], p * 4);
}
const transparent = () => sharp(rgba, { raw: { width, height, channels: 4 } });

// Content bounds (from the artwork): mark rows 222–599, wordmark rows 663–789, x 184–1099.
const pad = 8;
const crop = (left, top, right, bottom) => ({ left: left - pad, top: top - pad, width: right - left + pad * 2, height: bottom - top + pad * 2 });
const MARK = crop(459, 222, 821, 599);
const WORD = crop(184, 663, 1099, 789);
const FULL = crop(184, 222, 1099, 789);

const png = (s) => s.png({ compressionLevel: 9 });

// 1) Full stacked logo (footer).
await png(transparent().extract(FULL)).toFile(`${OUT}/logo-full.png`);
// 2) Diamond mark only (header on small phones).
await png(transparent().extract(MARK)).toFile(`${OUT}/logo-mark.png`);
// 3) Horizontal lockup: mark beside the wordmark (header).
const wordBuf = await png(transparent().extract(WORD)).toBuffer();
const markH = Math.round(WORD.height * 1.25);
const markBuf = await png(transparent().extract(MARK).resize({ height: markH })).toBuffer();
const markW = (await sharp(markBuf).metadata()).width;
const gap = 40;
await png(
  sharp({ create: { width: markW + gap + WORD.width, height: markH, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } }).composite([
    { input: markBuf, left: 0, top: 0 },
    { input: wordBuf, left: markW + gap, top: Math.round((markH - WORD.height) / 2) },
  ]),
).toFile(`${OUT}/logo-horizontal.png`);

// 4) Favicons and app icons: gold mark on the site's dark spruce, rounded.
const spruce = { r: 14, g: 22, b: 19, alpha: 1 };
async function icon(size, file, radius) {
  const inner = Math.round(size * 0.78);
  const mark = await png(transparent().extract(MARK).resize({ width: inner, height: inner, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })).toBuffer();
  const mask = Buffer.from(`<svg width="${size}" height="${size}"><rect width="${size}" height="${size}" rx="${radius}" fill="#fff"/></svg>`);
  await png(
    sharp({ create: { width: size, height: size, channels: 4, background: spruce } })
      .composite([{ input: mark, gravity: 'center' }, { input: mask, blend: 'dest-in' }]),
  ).toFile(file);
}
await icon(32, 'public/favicon-32.png', 6);
await icon(180, 'public/apple-touch-icon.png', 0); // iOS rounds the corners itself
await icon(512, 'public/icon-512.png', 96);

// 5) Social share image (1200×630): DJ's portrait on the right, logo on the left.
const fade = Buffer.from(`<svg width="1200" height="630"><defs><linearGradient id="g" x1="0" x2="1">
  <stop offset="0" stop-color="#0e1613" stop-opacity="1"/><stop offset=".42" stop-color="#0e1613" stop-opacity=".92"/>
  <stop offset=".7" stop-color="#0e1613" stop-opacity=".25"/><stop offset="1" stop-color="#0e1613" stop-opacity="0"/>
</linearGradient></defs><rect width="1200" height="630" fill="url(#g)"/></svg>`);
const ogLogo = await png(transparent().extract(FULL).resize({ width: 480 })).toBuffer();
const ogLogoH = (await sharp(ogLogo).metadata()).height;
await sharp('public/images/about/dj-riley-portrait.jpg')
  .resize(1200, 630, { fit: 'cover', position: 'right' })
  .composite([{ input: fade }, { input: ogLogo, left: 70, top: Math.round((630 - ogLogoH) / 2) }])
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile('public/og-default.jpg');

console.log('gold', gold, 'bg', bg, '→ wrote logo-full, logo-mark, logo-horizontal, favicons, og-default.jpg');
