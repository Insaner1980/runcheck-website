# Project architecture memory

## Localized article publishing

- Supported article locales are English (`en`), Finnish (`fi`), Swedish (`sv`), Norwegian Bokmål (`nb`), German (`de`), and Danish (`da`).
- `sourceNumber` is the stable cross-language identity. Localized filenames are SEO slugs derived from the translated H1 and are not used for pairing.
- `src/data/articleLocales.mjs` owns locale roots, UI copy, Open Graph locales, search endpoints, localized hub presentation, and cross-language alternate generation. `src/data/articlePaths.mjs` owns localized hub path segments.
- `src/pages/[locale]/[articles]/` statically generates the Swedish, Norwegian, German, and Danish index, hub, detail, and search-index routes. English and Finnish keep their existing concrete routes.
- `scripts/import-runcheck-articles.mjs` reads translated Obsidian folders and writes normalized copies below `src/content/articles/<locale>/`. It localizes tags because tags feed the site search index; tags are not emitted as HTML meta keywords.
- Source translations are never removed. Identical duplicate source-number files are collapsed during import. Every published locale currently contains source numbers 1–160.

## Hero phone mark

- The hero phone screen's runcheck mark is a live inline SVG, not part of the photo. `scripts/make-hero-plate.mjs` removes the baked mark from `public/assets/runcheck-phone-condition-hero.webp` and writes `…-hero-plate.webp`, which `Hero.astro` renders; the source image stays only as the script's input.
- The script separates mark from glow by the green channel (glow ≤ 68, mark ≥ 155 — the red channel does not separate them), then fills the thin strokes by diffusion so the surrounding glow is preserved rather than reconstructed.
- The same script fits the SVG onto the mark by maximizing IoU and prints the `.hero-logo` placement percentages for `global.css`. Those percentages are a fit result, not hand-tuned values.
- `src/assets/runcheck-logo.svg` splits the mark into `.rc-hook` and `.rc-arrow`, both drawing one shared `#rcPaint` layer through separate clip paths, so the hero can animate the arrow rising through the hook without duplicating the artwork. Header and Footer load the same file as an image.
