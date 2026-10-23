// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";
import inlineScriptCsp from "./scripts/inline-script-csp.mjs";
import { isProductionSitemapUrl } from "./src/data/articleLocaleConfig.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://runcheckapp.com",
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://www.googletagmanager.com https://cloudflareinsights.com",
        "img-src 'self' data: https://www.google-analytics.com https://www.googletagmanager.com",
        "frame-src 'none'",
        "object-src 'none'",
      ],
      scriptDirective: {
        resources: ["'self'", "https://www.googletagmanager.com", "https://static.cloudflareinsights.com"],
      },
      styleDirective: { resources: ["'self'", "'unsafe-inline'"] },
    },
  },
  output: "static",
  vite: {
    plugins: [tailwindcss()],
    build: {
      // Keep fonts compatible with the same-origin font-src policy.
      assetsInlineLimit: (filePath) =>
        /\.woff2?$/i.test(filePath) ? false : undefined,
    },
  },

  integrations: [sitemap({ filter: isProductionSitemapUrl }), inlineScriptCsp()],
});
