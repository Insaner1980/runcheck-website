# Runcheck Website Project Notes

## Architecture

- This project is an Astro 6 static site for `https://runcheckapp.com`.
- Cloudflare Pages target: build command `npm run build`, output directory `dist`.
- Keep `astro.config.mjs` static-only: `output: "static"`, `site: "https://runcheckapp.com"`, `integrations: [sitemap()]`, and Tailwind v4 through `@tailwindcss/vite`.
- Do not add `@astrojs/tailwind`, `@astrojs/cloudflare`, SSR adapters, CMS tooling, animation libraries, or UI component libraries for the foundation.

## Styling

- Tailwind v4 is CSS-first. Design tokens live in `src/styles/global.css` via `@theme`.
- Use self-hosted fonts imported in `src/layouts/BaseLayout.astro`: Manrope and JetBrains Mono from Fontsource packages.
- Avoid scoped CSS and avoid `@apply`. If a future scoped style must use `@apply`, it needs `@reference "tailwindcss";` first.
- Keep dark-only page defaults in `src/styles/global.css`.

## Site Structure

- `src/layouts/BaseLayout.astro` owns `Header`, `<slot />`, `Footer`, global CSS, self-hosted fonts, canonical metadata, sitemap link, Open Graph, and Twitter metadata.
- `src/pages/index.astro` imports `BaseLayout` and the five placeholder sections only. It must not import `Header` or `Footer` directly.
- `src/components/Hero.astro`, `Features.astro`, `Pricing.astro`, `FAQ.astro`, and `CTA.astro` are intentional foundation stubs. Do not turn them into final marketing design in this phase.
- Shared placeholder section markup belongs in `src/components/PlaceholderSection.astro`.

## Content

- Articles use the Astro content collection in `src/content.config.ts`.
- Article Markdown files live under `src/content/articles`.
- Article frontmatter schema:
  - `title: string`
  - `description: string`
  - `category: "Battery" | "Thermal" | "Network" | "Storage" | "General"`
  - `publishDate: Date`
  - `draft: boolean`
- `src/pages/articles/index.astro` lists non-draft articles newest first.
- `src/pages/articles/[...slug].astro` generates static paths from non-draft `article.id` values and renders body content with Tailwind Typography.

## Verification

- Use `npm run build` as the foundation gate.
- Verify `/`, `/articles/`, `/articles/runcheck-foundation-placeholder/`, and `/robots.txt` on the local dev server after structural changes.
