// Converts photos for the home page hero backdrop into WebP at two sizes.
// Usage: node scripts/make-hero-images.mjs <source-folder>
// Files are matched by the names in the MAP below; output goes to public/images/hero/.
import sharp from 'sharp';
import { mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const src = process.argv[2];
if (!src) throw new Error('Pass the folder that contains the source photos.');

// source file -> output name (or [name, quality] for photos that need stronger compression)
const MAP = {
  '15.jpg': 'camera-gimbal-wedding',
  '16.jpg': 'church-exit-applause',
  '17.jpg': 'night-ceremony-kiss',
  '18.jpg': 'couple-on-stairs',
  '19.jpg': ['aerial-couple-on-grass', 58], // grass texture compresses poorly
  '20.jpg': ['aerial-reception-tables', 58],
  // DJ's own photos, reused as hero tiles
  '../../../public/images/about/dj-riley-shooting.jpg': 'dj-riley-shooting',
  '../../../public/images/about/gear-sony-camera.jpg': 'gear-sony-camera',
};

const OUT = 'public/images/hero';
mkdirSync(OUT, { recursive: true });

for (const [file, entry] of Object.entries(MAP)) {
  const [name, quality] = Array.isArray(entry) ? entry : [entry, 72];
  const input = file.startsWith('../') ? file.replace(/^(\.\.\/)+/, '') : join(src, file);
  for (const width of [640, 1200]) {
    const out = `${OUT}/${name}-${width}.webp`;
    await sharp(input).rotate().resize({ width, withoutEnlargement: true }).webp({ quality, effort: 6 }).toFile(out);
    console.log(out, Math.round(statSync(out).size / 1024) + 'KB');
  }
}
