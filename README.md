# NW Drone & Media

Marketing site for NW Drone & Media, DJ Riley's wedding, event and drone videography business. It was founded in Woodland, WA and serves Portland, Vancouver WA and the surrounding areas. It's built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), and the design is a faithful port of the original single-file site (`_legacy/index.html`).

## Commands

| Command           | What it does                                      |
| ----------------- | ------------------------------------------------- |
| `npm install`     | Install dependencies                              |
| `npm run dev`     | Start the dev server at http://localhost:4321     |
| `npm run build`   | Build the production site to `dist/`              |
| `npm run preview` | Serve the production build locally                |

## Project structure

```
public/                  Served as-is at the site root
  images/                Photos, referenced as /images/<folder>/<file>
    about/               DJ Riley photos (dj-riley-portrait.jpg is the main photo)
    hero/ gallery/ services/   Drop footage stills here
  videos/                Clips, referenced as /videos/<file>.mp4
  og-default.jpg         Default social share image (1200×630)
.github/workflows/deploy-pages.yml   Builds and deploys the GitHub Pages preview
integrations/prefix-base.mjs         Adds the sub-path to root URLs on the Pages preview build
netlify.toml             Build settings for the later move to Netlify
src/
  components/
    Header, Footer, Logo     Fixed pill nav (darkens on scroll) and footer
    Landscape.astro      Media slot: shows an image, or the seeded mountain placeholder
    NotchCard.astro      Rounded card with the cut-out corner + arrow link
    SectionTitle.astro   "*Italic* rest" display headings
    PageHero.astro       Short spruce hero for inner pages
    BookingForm.astro    "Check your date" form
    PricingCard.astro    One pricing plan card
    YouTube.astro        Click-to-play YouTube embed (loads the player only on click)
    SEO.astro            Meta, OpenGraph, Twitter and JSON-LD tags
  data/
    home.ts              Home page copy: stats, what we film, steps, FAQ, reviews
    pricing.ts           All prices (Pricing page, home summary, booking form options)
    videos.ts            YouTube videos and portfolio categories
    media.ts             Photo paths and alt text
  layouts/
    BaseLayout.astro     HTML shell, fonts, nav and footer
    LegalPage.astro      Shared layout for the legal pages
  pages/                 index, about, services (Pricing), portfolio, contact, privacy, terms, flight-safety, 404
  styles/global.css      Theme tokens (spruce, fog, cream, brass, ink) and custom utilities
  consts.ts              Business info, nav/footer/legal links, form endpoint
```

## Adding your own media

**Photos.** Put images in `public/images/<folder>/` and always reference them by root path, e.g. `/images/gallery/hannah-ben.jpg`. Never use relative paths; the Pages preview build adds its sub-path automatically.

Every dark mountain tile on the site is a placeholder "media slot". To put a real still in one, add `image` and `alt` to that item in `src/data/home.ts` (or `services.ts`):

```ts
{ c: 'wedding', t: 'Hannah & Ben', l: 'Columbia Gorge', d: '6:41', seed: 2,
  image: '/images/gallery/hannah-ben.jpg', alt: 'Ceremony overlooking the Columbia Gorge' },
```

Files in `public/` are served exactly as they are, with no automatic resizing. Export stills for the web first: about 2000px on the long edge, JPG quality ~80 or WebP, ideally under 400 KB each.

**Videos.** Astro doesn't transcode video. Export web-ready H.264 MP4s (1080p, around 8–10 Mbps, no audio for background loops) and put them in `public/videos/`. For large libraries, host them on YouTube, Vimeo or a CDN and embed them.

**Social share image.** Replace `public/og-default.jpg` with a 1200×630 photo. A page can use its own image with `<BaseLayout image="/my-image.jpg">`.

## Updating content

- **Prices:** edit `src/data/pricing.ts`. The Pricing page, the home page summary cards and the booking form all read from it.
- **Videos:** add an entry to `src/data/videos.ts` with the YouTube ID (the part after `watch?v=` or `shorts/`), a category (`weddings`, `events` or `drone`), and `vertical: true` for Shorts. Set `featured: true` to also show it on the home page.
- **Reviews:** add real quotes to `REVIEWS` in `src/data/home.ts`. The "What couples say" section appears once the list has entries.
- **Phone:** set `phone` in `src/consts.ts`. It's hidden everywhere while empty.

## SEO

- Per-page `title` and `description` props on `BaseLayout` produce the `<title>`, meta description, canonical URL, OpenGraph and Twitter tags (`src/components/SEO.astro`).
- LocalBusiness JSON-LD structured data is generated from `src/consts.ts`.
- `@astrojs/sitemap` writes `sitemap-index.xml` on build. `public/robots.txt` points to it.
- The production domain defaults to `https://nwdroneandmedia.com` in `astro.config.mjs`.
- Legal pages: `/privacy/`, `/terms/` and `/flight-safety/`, linked in the footer. Their "last updated" date is `LEGAL_UPDATED` in `src/consts.ts`.

## Deployment

**GitHub Pages (preview).** Every push to `main` runs `.github/workflows/deploy-pages.yml` and publishes to https://seahawks1013.github.io/nwdroneandmedia/. That build sets three environment variables:

| Variable          | Value                          | Effect                                              |
| ----------------- | ------------------------------ | --------------------------------------------------- |
| `SITE_URL`        | `https://seahawks1013.github.io` | Absolute URLs (canonical, OpenGraph, sitemap)       |
| `BASE_PATH`       | `/nwdroneandmedia`             | Sub-path; `integrations/prefix-base.mjs` adds it to every root path in the HTML |
| `PREVIEW_NOINDEX` | `true`                         | Adds `noindex` so search engines skip the preview   |

One-time setup: repo **Settings → Pages → Source: GitHub Actions**.

**Netlify (production).** Connect the repo in Netlify; `netlify.toml` already has the build command, output folder and Node version. Don't set any of the variables above, so the site builds for the domain root. Then point the domain at Netlify and disable the Pages workflow (delete the file or turn Pages off).

To test the preview build locally (in Git Bash, `MSYS_NO_PATHCONV=1` stops it from rewriting `/nwdroneandmedia` into a Windows path):

```bash
MSYS_NO_PATHCONV=1 SITE_URL=https://seahawks1013.github.io BASE_PATH=/nwdroneandmedia npm run build
```

## Accessibility (WCAG 2.1 AA)

- **Structure:** every page has one `<h1>`, headings never skip a level, and landmarks are in place: a `<header>` (banner) holding the main `<nav>`, `<main>`, a `<footer>`, and labelled navs. A "Skip to content" link comes first in the tab order.
- **Contrast:** small text is at least 4.5:1 against its background, and form field borders are at least 3:1. When adding text, use `text-inkk/70` or darker on light sections, and `text-fog/70` or lighter on dark sections. Lighter tints (`/40`–`/60`) fail.
- **Type:** font sizes use `rem`, so they follow the reader's browser text-size setting.
- **Images:** every `<img>` has `alt` text. Decorative images use `alt=""`. Set alt text for photos in `src/data/media.ts`.
- **Keyboard:** everything is reachable with Tab. The two-tone focus ring (brass outline + dark inner ring) shows on both light and dark sections. Closed FAQ answers are `inert`, so screen readers and Tab skip them.
- **Forms:** every field has a `<label for>`, and required fields are marked visually and with `required`.
- **Motion:** "reduce motion" turns off smooth scrolling, transitions and animations.

## Security

- **No secrets in the code.** The form endpoint is a public URL by design. Never commit API keys; use the host's environment variables if you ever need one.
- **Content Security Policy:** defined once in `src/security.mjs`. Production builds add it as a `<meta>` tag, so it also applies on GitHub Pages, and write `dist/_headers` for Netlify. Netlify sends real HTTP headers: the CSP plus `frame-ancestors 'none'`, `X-Frame-Options: DENY`, `Strict-Transport-Security`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy` and `Cross-Origin-Opener-Policy`. No inline scripts are allowed, because Astro is set to emit every script as a file. **If you embed a new service** (another video host, analytics, a different form provider), add its origin to the matching directive in `src/security.mjs`, or the browser will block it.
- **Booking form:** submissions go to a hosted provider (`SITE.form` in `src/consts.ts`), which stores and escapes them. The form has a honeypot field for spam, length limits on every field, and `type="email"` validation. Switch `provider` to `'netlify'` after moving to Netlify; it then uses Netlify Forms and the `/thanks/` page.
- **HTTPS:** Netlify serves the site over HTTPS and redirects HTTP automatically. The HSTS header tells browsers to always use HTTPS.
- **Dependencies:** `npm audit` reports 0 vulnerabilities. `.github/dependabot.yml` opens weekly pull requests for npm and GitHub Actions updates.

## Before launch

- [ ] Set up the booking form: paste a Formspree endpoint into `SITE.form.endpoint`, or set `provider: 'netlify'` after moving to Netlify. Send a test request either way.
- [ ] Add a phone number in `src/consts.ts` (optional) and real reviews in `src/data/home.ts`
- [ ] Replace DJ's story on the About page with his own words (marked with a comment)
- [ ] Add drone footage to `src/data/videos.ts` (the Drone section shows "coming soon" until then)
- [ ] Have the Privacy, Terms and Flight Safety pages reviewed by an attorney, and confirm the certificate and insurance details
- [ ] Add real stills to the media slots, and update the copy marked `<!-- Replace ... -->` on the About page
- [ ] Update the gear list on the About page to match the actual fleet
- [ ] Confirm the production domain in `astro.config.mjs` and `public/robots.txt`

## Legacy

`_legacy/index.html` is the previous single-file site, kept for reference only. It isn't part of the build.
