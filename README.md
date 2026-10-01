# NW Drone & Media

Marketing site for NW Drone & Media, an aerial photography, video production and drone services company in Walla Walla, WA. It's built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

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
scripts/
  make-placeholders.mjs  Regenerates placeholder images (never overwrites real files)
src/
  assets/images/         Photos, optimized at build time (WebP + responsive srcset)
    hero/ gallery/ services/ about/
  components/            Header, Footer, SEO, CallToAction, SectionHeading
  data/
    media.ts             Every image import and its alt text, all in one place
    services.ts          Service offerings shown on Home and Services
  layouts/BaseLayout.astro   HTML shell, <head>/SEO, nav and footer
  pages/                 index, about, services, contact, 404
  styles/global.css      Tailwind import, brand colors, fonts, button utilities
  consts.ts              Business info: email, phone, location, form endpoint
```

## Adding your own media

**Photos.** Drop full-resolution JPGs into `src/assets/images/<folder>/`. The simplest way is to overwrite a placeholder with a file of the same name. Then update the matching `alt` text in `src/data/media.ts`. Astro resizes and converts them to WebP at build time, so don't pre-shrink them; just keep the originals under about 20 MB.

**Videos.** Astro doesn't transcode video. Export web-ready H.264 MP4s (1080p, around 8–10 Mbps, no audio for background loops) and put them in `public/videos/`. For large libraries, host them on YouTube, Vimeo or a CDN and embed them. The home page has a commented-out `<video>` block in the hero, ready to use.

**Social share image.** Replace `public/og-default.jpg` with a 1200×630 photo. A page can use its own image with `<BaseLayout image="/my-image.jpg">`.

## SEO

- Per-page `title` and `description` props on `BaseLayout` produce the `<title>`, meta description, canonical URL, OpenGraph and Twitter tags (`src/components/SEO.astro`).
- LocalBusiness JSON-LD structured data is generated from `src/consts.ts`.
- `@astrojs/sitemap` writes `sitemap-index.xml` on build. `public/robots.txt` points to it.
- The production domain is set by `site` in `astro.config.mjs`. Update it if the domain changes.

## Before launch

- [ ] Set `formEndpoint` in `src/consts.ts` (Formspree, Basin, Netlify Forms, …)
- [ ] Add a phone number and social links in `src/consts.ts`
- [ ] Replace placeholder images and alt text, and the copy marked with `<!-- Replace ... -->` on the About page
- [ ] Update the gear list on the About page to match the actual fleet
- [ ] Confirm the production domain in `astro.config.mjs` and `public/robots.txt`

## Legacy

`_legacy/index.html` is the previous single-file site, kept for reference only. It isn't part of the build.
