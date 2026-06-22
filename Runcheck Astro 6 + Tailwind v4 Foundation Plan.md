# Runcheck Astro 6 + Tailwind v4 Foundation Plan

## Summary
- Scaffold `C:\Dev\runcheck-website` as a new static Astro site using the minimal template, TypeScript, Tailwind v4, content collections, sitemap, and Cloudflare Pages-compatible `dist` output.
- Keep the visible shell minimal: real `Header`/`Footer`, article index/detail pages, and placeholder-only `Hero`, `Features`, `Pricing`, `FAQ`, and `CTA` sections.
- Verified current local/runtime facts: folder is empty, not a git repo, Node is `v24.15.0`, npm is `11.13.0`.
- Verified current package versions on 2026-06-21: `astro@6.4.8`, `tailwindcss@4.3.1`, `@tailwindcss/vite@4.3.1`, `@tailwindcss/typography@0.5.20`, `@astrojs/sitemap@3.7.3`, fontsource packages `5.2.8`.
- Official docs checked: [Astro install](https://docs.astro.build/en/install-and-setup/), [deprecated Astro Tailwind integration note](https://docs.astro.build/en/guides/integrations-guide/tailwind/), [Tailwind Astro guide](https://tailwindcss.com/docs/installation/framework-guides/astro), [Tailwind `@theme`](https://tailwindcss.com/docs/theme), [Astro content collections](https://docs.astro.build/en/guides/content-collections/), [Astro sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/), [Cloudflare Pages Astro guide](https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/).

## Implementation Changes
- Scaffold with the verified command form:
  `npm create astro@latest -- -- . --template minimal --yes --install --no-git --skip-houston`
- Add integrations and pin exact versions:
  `npx astro add tailwind --yes`
  `npx astro add sitemap --yes`
  `npm install --save-exact astro@6.4.8 @astrojs/sitemap@3.7.3 @fontsource-variable/manrope@5.2.8 @fontsource/jetbrains-mono@5.2.8`
  `npm install --save-dev --save-exact tailwindcss@4.3.1 @tailwindcss/vite@4.3.1 @tailwindcss/typography@0.5.20`
- Configure `astro.config.mjs` with `site: "https://runcheckapp.com"`, `output: "static"`, `integrations: [sitemap()]`, and `vite.plugins: [tailwindcss()]`; do not add `@astrojs/tailwind`, `@astrojs/cloudflare`, or any SSR adapter.
- Create `src/styles/global.css` with `@import "tailwindcss";`, `@plugin "@tailwindcss/typography";`, and `@theme` tokens for the provided colors and fonts. Set `html/body` dark-only background/text defaults there.
- Import self-hosted fonts in `BaseLayout.astro` from `@fontsource-variable/manrope` and `@fontsource/jetbrains-mono`; no Google Fonts or external font URLs.
- Avoid scoped CSS and avoid `@apply`; if a future scoped style needs `@apply`, it must start with `@reference "tailwindcss";`.

## File And Interface Plan
- `src/layouts/BaseLayout.astro`: owns `Header`, `<slot />`, and `Footer`; imports global CSS and fonts; requires `title` and `description` props, accepts optional `canonicalPath` and `ogType`; emits charset, viewport, canonical, sitemap link, Open Graph, and Twitter meta.
- `src/components/Header.astro`: wordmark/logo, nav links `/#features`, `/#pricing`, `/articles/`, and Download CTA to `/#download`; responsive via Tailwind only.
- `src/components/Footer.astro`: simple footer with wordmark, article/home links, and current year.
- `src/components/Hero.astro`, `Features.astro`, `Pricing.astro`, `FAQ.astro`, `CTA.astro`: section stubs only, each with an internal Finnish TODO comment and a visible placeholder heading; IDs: `hero`, `features`, `pricing`, `faq`, `download`.
- `src/pages/index.astro`: imports `BaseLayout` and the five placeholder sections only; no direct `Header`/`Footer` import to avoid duplicates.
- `src/content.config.ts`: define `articles` collection with `glob({ pattern: "**/*.md", base: "./src/content/articles" })` and schema:
  `title`, `description`, `category: z.enum(["Battery","Thermal","Network","Storage","General"])`, `publishDate: z.coerce.date()`, `draft: z.boolean().default(false)`.
- `src/content/articles/runcheck-foundation-placeholder.md`: one non-draft placeholder article dated `2026-06-21`, category `General`.
- `src/pages/articles/index.astro`: list non-draft articles sorted newest first.
- `src/pages/articles/[...slug].astro`: generate static paths for non-draft articles using `article.id`, render with `render(article)`, and wrap body in Tailwind Typography `prose prose-invert`.
- `public/robots.txt`: permissive crawler policy and `Sitemap: https://runcheckapp.com/sitemap-index.xml`.
- `AGENTS.md`: create/update project-local architecture notes: Astro 6 static site, Tailwind v4 CSS-first tokens in `global.css`, article collection shape, Cloudflare Pages build/output settings, and “no hero/features design in this foundation” guardrail.
- Memory update: because this introduces architecture, add one ad-hoc memory note under `C:\Users\emmah\.codex\memories\extensions\ad_hoc\notes\...`; do not edit `MEMORY.md` directly.

## Verification Plan
- Before installing, re-run `npm view` for the listed packages; if newer latest versions exist, use the newer exact versions and record them.
- Run `npm run build`; expected result: Astro builds static output to `dist`, including `sitemap-index.xml`, article pages, and `robots.txt`.
- Start dev server with `npm run dev -- --host 127.0.0.1`; if port `4321` is busy, rerun with `--port 4322`.
- Verify these URLs in the dev server: `/`, `/articles/`, `/articles/runcheck-foundation-placeholder/`, `/robots.txt`.
- Final implementation report must list created files, pinned versions, dev server URL, and any uncertainty. Expected uncertainty after this plan: none; canonical domain is locked to `https://runcheckapp.com`.

## Assumptions
- Canonical production domain is `https://runcheckapp.com`.
- No git initialization or commit is required unless separately requested; if committed later, use a Finnish commit message.
- Placeholder section content is intentionally minimal and not a marketing design pass.
- No extra dependencies, UI libraries, images, animation libraries, tests, CMS, SSR, Cloudflare adapter, or hero/feature design work belongs in this foundation task.
