// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import prefixBase from './integrations/prefix-base.mjs';

// Where the site is served. Defaults are for the production domain (Netlify or
// any host at a domain root). The GitHub Pages preview workflow overrides both:
//   SITE_URL=https://seahawks1013.github.io  BASE_PATH=/nwdroneandmedia
const site = process.env.SITE_URL || 'https://nwdroneandmedia.com';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  integrations: [sitemap(), prefixBase()],
  vite: {
    plugins: [tailwindcss()],
  },
});
