// Lets the codebase use plain root paths ("/images/x.jpg", "/about/") everywhere,
// even when the site is deployed under a sub-path such as
// https://user.github.io/nwdroneandmedia/.
//
// After the build, it prefixes every root-relative href/src/srcset/action/content
// in the generated HTML with Astro's `base`. When base is "/" (local dev, Netlify,
// a custom domain), it does nothing.
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

async function* htmlFiles(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) yield* htmlFiles(p);
    else if (entry.name.endsWith('.html')) yield p;
  }
}

export default function prefixBase() {
  let base = '/';
  return {
    name: 'prefix-base',
    hooks: {
      'astro:config:done': ({ config }) => {
        base = config.base.replace(/\/$/, '');
      },
      'astro:build:done': async ({ dir, logger }) => {
        if (!base) return;
        const root = fileURLToPath(dir);
        // Root-relative ("/x", not "//x") and not already prefixed.
        const path = new RegExp(`^/(?!/)(?!${base.slice(1)}(?:/|$))`);
        const fix = (url) => (path.test(url) ? base + url : url);
        let count = 0;
        for await (const file of htmlFiles(root)) {
          const html = await readFile(file, 'utf8');
          const out = html
            .replace(/\b(href|src|action|poster|content)="([^"]*)"/g, (m, attr, url) => `${attr}="${fix(url)}"`)
            .replace(/\bsrcset="([^"]*)"/g, (m, set) =>
              `srcset="${set.split(',').map((s) => s.trim().replace(/^\S+/, fix)).join(', ')}"`,
            );
          if (out !== html) {
            await writeFile(file, out);
            count++;
          }
        }
        logger.info(`Prefixed root paths with "${base}" in ${count} page(s).`);
      },
    },
  };
}
