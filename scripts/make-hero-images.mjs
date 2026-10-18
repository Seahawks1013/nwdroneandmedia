// Converts photos for the hero backdrops (home page + page headers) into WebP at two sizes.
// Usage: node scripts/make-hero-images.mjs <source-folder>
// Files are matched by the names in the MAP below; output goes to public/images/hero/.
import sharp from 'sharp';
import { mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const src = process.argv[2];
if (!src) throw new Error('Pass the folder that contains the source photos.');

// source file -> output name (or [name, quality] for photos that need stronger compression)
const MAP = {
  // DJ's wedding work
  '31.jpg': 'sunset-kiss-backlit',
  '32.jpg': 'golden-hour-embrace',
  '33.jpg': 'ceremony-kiss-oak-tree',
  '34.jpg': 'reception-family-string-lights',
  '35.jpg': ['aerial-circle-ceremony', 62], // drone shot; grass compresses poorly
  '36.jpg': 'forest-ceremony-floral-arches',
  // About page backdrop (DJ's own footage stills and photos)
  'dj 1.png': 'drone-chase-forest-road',
  'dj 2.png': 'aerial-ridge-road',
  'dj 3.png': ['dj-riley-sunset-silhouette', 66], // smooth sky gradients stay clean at 66
  '46.jpg': 'dj-riley-camera-treeline',
  // Portfolio backdrop
  '40.webp': 'band-on-stage',
  '41.webp': 'concert-crowd-on-lawn',
  '42.jpg': 'beaver-stadium-night',
  '43.webp': ['aerial-car-show', 62], // busy aerial; compresses poorly
  '44.webp': 'snowy-ridge-aerial',
  '45.webp': ['aerial-ceremony-overhead', 62],
  // DJ's own photos, reused as hero tiles
  '../../../public/images/about/dj-riley-shooting.webp': 'dj-riley-shooting',
  '../../../public/images/about/gear-sony-camera.webp': 'gear-sony-camera',
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
