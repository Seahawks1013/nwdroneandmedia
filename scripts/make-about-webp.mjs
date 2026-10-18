// Converts the About photos in public/images/about/ from JPG to WebP (smaller files,
// same look) and deletes the JPGs. Usage: node scripts/make-about-webp.mjs
import sharp from 'sharp';
import { readdirSync, statSync, unlinkSync } from 'node:fs';

const DIR = 'public/images/about';
for (const file of readdirSync(DIR).filter((f) => f.endsWith('.jpg'))) {
  const input = `${DIR}/${file}`;
  const out = input.replace(/\.jpg$/, '.webp');
  // Landscape shots: 1600px wide is ~2x their largest on-screen size. Portrait: 1200px.
  const { width, height } = await sharp(input).metadata();
  const resize = width >= height ? { width: 1600 } : { width: 1200 };
  await sharp(input).rotate().resize({ ...resize, withoutEnlargement: true }).webp({ quality: 74, effort: 6 }).toFile(out);
  const meta = await sharp(out).metadata();
  console.log(out, `${meta.width}x${meta.height}`, Math.round(statSync(input).size / 1024) + 'KB ->', Math.round(statSync(out).size / 1024) + 'KB');
  unlinkSync(input);
}
