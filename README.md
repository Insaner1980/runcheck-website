# Runcheck Website

Static Astro 7 foundation for `https://runcheckapp.com`.

## Stack

- Astro 7 static output
- Tailwind v4 through `@tailwindcss/vite`
- Astro content collections for articles
- `@astrojs/sitemap`
- Self-hosted Fontsource fonts

## Project Structure

```text
/
|-- public/
|   |-- robots.txt
|-- src/
|   |-- components/
|   |-- content/
|   |-- layouts/
|   |-- pages/
|   |-- styles/
|-- astro.config.mjs
|-- package.json
```

## Commands

All commands run from the project root.

| Command | Action |
| :-- | :-- |
| `npm install` | Install dependencies |
| `npm run dev -- --host 127.0.0.1` | Start local dev server |
| `npm run build` | Build static output to `dist` |
| `npm run preview` | Preview built output |
| `npm run astro -- --help` | Show Astro CLI help |
