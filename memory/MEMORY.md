# Project architecture memory

## Localized article publishing

- Supported article locales are English (`en`), Finnish (`fi`), Swedish (`sv`), Norwegian Bokmål (`nb`), German (`de`), and Danish (`da`).
- `sourceNumber` is the stable cross-language identity. Localized filenames are SEO slugs derived from the translated H1 and are not used for pairing.
- `src/data/articleLocales.mjs` owns locale roots, UI copy, Open Graph locales, search endpoints, localized hub presentation, and cross-language alternate generation. `src/data/articlePaths.mjs` owns localized hub path segments.
- `src/pages/[locale]/[articles]/` statically generates the Swedish, Norwegian, German, and Danish index, hub, detail, and search-index routes. English and Finnish keep their existing concrete routes.
- `scripts/import-runcheck-articles.mjs` reads translated Obsidian folders and writes normalized copies below `src/content/articles/<locale>/`. It localizes tags because tags feed the site search index; tags are not emitted as HTML meta keywords.
- Source translations are never removed. Identical duplicate source-number files are collapsed during import. Every published locale currently contains source numbers 1–160.
