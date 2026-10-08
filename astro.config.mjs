// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";
import { isProductionSitemapUrl } from "./src/data/articleLocaleConfig.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://runcheckapp.com",
  output: "static",
  vite: {
    plugins: [tailwindcss()],
    build: {
      // Keep fonts compatible with the same-origin font-src policy.
      assetsInlineLimit: (filePath) =>
        /\.woff2?$/i.test(filePath) ? false : undefined,
    },
  },

  integrations: [sitemap({ filter: isProductionSitemapUrl })],
});
