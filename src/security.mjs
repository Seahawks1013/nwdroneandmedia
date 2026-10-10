// Security policy for the site — one source of truth.
//
// - The Content Security Policy goes into a <meta> tag on every page (production
//   builds), so it also protects hosts that can't set headers (GitHub Pages).
// - The build also writes dist/_headers, which Netlify serves as real HTTP headers,
//   adding the protections a <meta> tag can't provide (frame-ancestors, HSTS, etc.).
//
// If you embed something new (another video host, analytics, a different form
// service), add its origin to the matching directive below.

/** @type {Record<string, string[]>} */
export const CSP_DIRECTIVES = {
  'default-src': ["'self'"],
  'script-src': ["'self'"],
  // 'unsafe-inline' is for style="" attributes (image focal points, card notches);
  // no inline <script> is allowed.
  'style-src': ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
  'font-src': ["'self'", 'https://fonts.gstatic.com'],
  'img-src': ["'self'", 'data:', 'https://i.ytimg.com'],
  'frame-src': ['https://www.youtube-nocookie.com', 'https://www.google.com', 'https://calendly.com'],
  'connect-src': ["'self'"],
  'form-action': ["'self'", 'https://formspree.io'],
  'base-uri': ["'self'"],
  'object-src': ["'none'"],
  'upgrade-insecure-requests': [],
};

const serialize = (directives) =>
  Object.entries(directives)
    .map(([k, v]) => (v.length ? `${k} ${v.join(' ')}` : k))
    .join('; ');

/** CSP for the <meta> tag (frame-ancestors is ignored in meta, so it's header-only). */
export const CSP_META = serialize(CSP_DIRECTIVES);

/** CSP for the HTTP header. */
export const CSP_HEADER = serialize({ ...CSP_DIRECTIVES, 'frame-ancestors': ["'none'"] });

/** Headers applied to every response on Netlify. */
export const SECURITY_HEADERS = {
  'Content-Security-Policy': CSP_HEADER,
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Strict-Transport-Security': 'max-age=63072000; includeSubDomains',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()',
  'Cross-Origin-Opener-Policy': 'same-origin',
};
