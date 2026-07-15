// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';
import { isProductionSitemapUrl } from './src/data/articleLocaleConfig.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://runcheckapp.com',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap({ filter: isProductionSitemapUrl })]
});
