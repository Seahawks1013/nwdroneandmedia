// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Production URL — used for canonical links, OpenGraph URLs and the sitemap.
  site: 'https://nwdroneandmedia.com',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    // Generates srcset + sizes automatically for every <Image>/<Picture>.
    layout: 'constrained',
    responsiveStyles: true,
  },
});
