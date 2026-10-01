# NW Drone & Media

Marketing site for NW Drone & Media: wedding films, aerial coverage and drone services in the Pacific Northwest. It's built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), and the design is a faithful port of the original single-file site (`_legacy/index.html`).

## Commands

| Command           | What it does                                      |
| ----------------- | ------------------------------------------------- |
| `npm install`     | Install dependencies                              |
| `npm run dev`     | Start the dev server at http://localhost:4321     |
| `npm run build`   | Build the production site to `dist/`              |
| `npm run preview` | Serve the production build locally                |

## Project structure

```
public/                  Served as-is (favicon, robots.txt, OG image, videos)
  og-default.jpg         Default social share image (1200×630)
  videos/                Drop .mp4/.webm clips here, reference as /videos/name.mp4
src/
  assets/images/         Photos, optimized at build time (WebP + responsive srcset)
    about/owner.jpg      Owner photo used in the hero and "How we shoot it"
    hero/ gallery/ services/   Drop footage stills here
  components/
    Header, Footer, Logo     Fixed pill nav (darkens on scroll) and footer
    Landscape.astro      Media slot: shows an image, or the seeded mountain placeholder
    NotchCard.astro      Rounded card with the cut-out corner + arrow link
    SectionTitle.astro   "*Italic* rest" display headings
    PageHero.astro       Short spruce hero for inner pages
    BookingForm.astro    "Check your date" form
    SEO.astro            Meta, OpenGraph, Twitter and JSON-LD tags
  data/
    home.ts              All home page copy: stats, films, packages, FAQ, reviews…
    services.ts          Commercial/aerial services on the Services page
    media.ts             Image imports and alt text
  layouts/BaseLayout.astro   HTML shell, fonts, nav and footer
  pages/                 index, about, services, contact, 404
  styles/global.css      Theme tokens (spruce, fog, cream, brass, ink) and custom utilities
  consts.ts              Business info, nav and footer links, form endpoint
```

## Adding your own media

**Photos.** Every dark mountain tile on the site is a placeholder "media slot". To put a real still in one, drop a full-resolution JPG into `src/assets/images/<folder>/`, import it in `src/data/home.ts` (or `services.ts`), and add `image` and `alt` to that item:

```ts
import ceremony from '../assets/images/gallery/hannah-ben.jpg';
// …
{ c: 'wedding', t: 'Hannah & Ben', l: 'Columbia Gorge', d: '6:41', seed: 2, image: ceremony, alt: 'Ceremony at the Gorge' },
```

Astro resizes and converts images to WebP at build time, so don't pre-shrink them; just keep the originals under about 20 MB.

**Videos.** Astro doesn't transcode video. Export web-ready H.264 MP4s (1080p, around 8–10 Mbps, no audio for background loops) and put them in `public/videos/`. For large libraries, host them on YouTube, Vimeo or a CDN and embed them.

**Social share image.** Replace `public/og-default.jpg` with a 1200×630 photo. A page can use its own image with `<BaseLayout image="/my-image.jpg">`.

## SEO

- Per-page `title` and `description` props on `BaseLayout` produce the `<title>`, meta description, canonical URL, OpenGraph and Twitter tags (`src/components/SEO.astro`).
- LocalBusiness JSON-LD structured data is generated from `src/consts.ts`.
- `@astrojs/sitemap` writes `sitemap-index.xml` on build. `public/robots.txt` points to it.
- The production domain is set by `site` in `astro.config.mjs`. Update it if the domain changes.

## Before launch

- [ ] Set `formEndpoint` in `src/consts.ts` (Formspree, Basin, Netlify Forms, …)
- [ ] Replace the placeholder phone `(360) 555-0134` and the social links in `src/consts.ts`
- [ ] Replace the placeholder reviews and film titles in `src/data/home.ts`
- [ ] Check the Vancouver-area references in the copy (travel FAQ, film locations) against the Walla Walla base
- [ ] Add real stills to the media slots, and update the copy marked `<!-- Replace ... -->` on the About page
- [ ] Update the gear list on the About page to match the actual fleet
- [ ] Confirm the production domain in `astro.config.mjs` and `public/robots.txt`

## Legacy

`_legacy/index.html` is the previous single-file site, kept for reference only. It isn't part of the build.
