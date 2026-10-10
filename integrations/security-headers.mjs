// Writes dist/_headers (Netlify's header file) from src/security.mjs at build time,
// so the header policy and the <meta> CSP can never drift apart.
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { SECURITY_HEADERS } from '../src/security.mjs';

export default function securityHeaders() {
  let base = '/';
  return {
    name: 'security-headers',
    hooks: {
      'astro:config:done': ({ config }) => {
        base = config.base.endsWith('/') ? config.base : `${config.base}/`;
      },
      'astro:build:done': async ({ dir, logger }) => {
        const lines = ['/*', ...Object.entries(SECURITY_HEADERS).map(([k, v]) => `  ${k}: ${v}`), ''];
        // Fingerprinted build assets never change, so they can be cached for a year.
        lines.push(`${base}_astro/*`, '  Cache-Control: public, max-age=31536000, immutable', '');
        // Photos and logos: browsers reuse their copy for 7 days instead of re-checking on
        // every visit. When replacing a photo, give the new file a new name so it shows
        // immediately (same-name replacements can take up to 7 days for repeat visitors).
        lines.push(`${base}images/*`, '  Cache-Control: public, max-age=604800', '');
        await writeFile(new URL('_headers', dir), lines.join('\n'));
        logger.info(`Wrote ${fileURLToPath(new URL('_headers', dir))}`);
      },
    },
  };
}
