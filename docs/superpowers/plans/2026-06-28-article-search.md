# Article Search Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add an animated, lightweight article search (magnifier icon + input + underline + results dropdown) to the runcheck site, available globally in the header and prominently on the `/articles` page.

**Architecture:** Pure search logic (index building + query filtering) lives in `src/data/searchIndex.mjs` as a single source of truth. A static Astro endpoint prerenders the index to `/articles/search-index.json`. One reusable `ArticleSearch.astro` component renders both placements via a `variant` prop, fetches the index lazily on first use, and reuses the same `searchArticles` function client-side.

**Tech Stack:** Astro 6.4.8 (`output: 'static'`), Tailwind CSS v4, plain ESM (no search libraries). Tests are standalone Node scripts using `node:assert/strict`, run with `node scripts/<name>.test.mjs`.

## Global Constraints

- No external dependencies — pure JS only (matches existing `package.json`; no Pagefind/Fuse).
- Node `>=22.12.0` (uses `Array.prototype.at`, `??=`).
- Search scope: article `title`, `description`, and `tags` only. No full-text.
- Results: max **8** matches in a dropdown; no separate results page.
- Empty query → dropdown hidden. Query with no matches → muted "No results" row.
- Use existing design tokens only: `run-*` colors, `rounded-panel`, `shadow-panel`, `ring-run-border`. No new hardcoded colors.
- Animations must be `motion-safe:` and respect `motion-reduce:` (match existing Header menu pattern).
- Article URL shape (verbatim): `/articles/${hub}/${slug}/` where `slug = entry.id.split('/').at(-1)`.
- The header magnifier/icon/search markup must NOT leak into the articles dropdown menu's monochrome assertion (`scripts/articles-menu.test.mjs`).

---

### Task 1: `searchArticles` query function (pure)

**Files:**
- Create: `src/data/searchIndex.mjs`
- Test: `scripts/article-search-query.test.mjs`

**Interfaces:**
- Consumes: nothing.
- Produces:
  - `searchArticles(index, query, options?)` where
    - `index: Array<{ title: string, description: string, hub: string, tags: string[], url: string }>`
    - `query: string`
    - `options?: { limit?: number }` (default limit `8`)
    - returns `Array<index item>` sorted by relevance, length ≤ limit. Empty/whitespace query returns `[]`.

- [ ] **Step 1: Write the failing test**

Create `scripts/article-search-query.test.mjs`:

```js
import assert from 'node:assert/strict';

import { searchArticles } from '../src/data/searchIndex.mjs';

const index = [
  { title: 'Battery health explained', description: 'How capacity fades', hub: 'battery', tags: ['health'], url: '/articles/battery/battery-health-explained/' },
  { title: 'Why your phone overheats', description: 'Thermal throttling basics', hub: 'thermal', tags: ['heat', 'battery'], url: '/articles/thermal/why-your-phone-overheats/' },
  { title: 'Samsung battery tips', description: 'One UI power settings', hub: 'brands', tags: ['samsung'], url: '/articles/brands/samsung-battery-tips/' },
];

// Empty / whitespace query returns nothing.
assert.deepEqual(searchArticles(index, ''), []);
assert.deepEqual(searchArticles(index, '   '), []);

// Title match is found, case-insensitive.
const battery = searchArticles(index, 'BATTERY');
assert.ok(battery.length >= 2, 'should match multiple battery entries');

// Title matches rank above description/tag-only matches.
assert.equal(battery[0].title, 'Battery health explained', 'title hit should rank first');

// Tag-only match is found even when title/description do not contain the term.
const samsung = searchArticles(index, 'samsung');
assert.equal(samsung.length, 1);
assert.equal(samsung[0].hub, 'brands');

// Description match is found.
const thermal = searchArticles(index, 'throttling');
assert.equal(thermal.length, 1);
assert.equal(thermal[0].hub, 'thermal');

// limit is honored.
const limited = searchArticles(index, 'battery', { limit: 1 });
assert.equal(limited.length, 1);

console.log('article-search-query.test.mjs passed');
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node scripts/article-search-query.test.mjs`
Expected: FAIL — `Cannot find module '../src/data/searchIndex.mjs'` (or `searchArticles is not a function`).

- [ ] **Step 3: Write minimal implementation**

Create `src/data/searchIndex.mjs`:

```js
const slugFromId = (id) => id.split('/').at(-1);

/**
 * Build the client search index from Astro content-collection entries.
 * @param {Array<{ id: string, data: { title: string, description: string, hub: string, tags?: string[], draft?: boolean } }>} entries
 */
export function buildSearchIndex(entries) {
  return entries
    .filter((entry) => !entry.data.draft)
    .map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      hub: entry.data.hub,
      tags: entry.data.tags ?? [],
      url: `/articles/${entry.data.hub}/${slugFromId(entry.id)}/`,
    }));
}

/**
 * Score and filter the index for a query.
 * Title hits rank highest, then tag hits, then description hits.
 * Word-start matches get a small boost.
 * @param {Array<{ title: string, description: string, hub: string, tags: string[], url: string }>} index
 * @param {string} query
 * @param {{ limit?: number }} [options]
 */
export function searchArticles(index, query, { limit = 8 } = {}) {
  const q = query.trim().toLowerCase();
  if (q === '') {
    return [];
  }

  const startsWord = (haystack) =>
    haystack.startsWith(q) || haystack.includes(` ${q}`);

  const scored = [];

  for (const item of index) {
    const title = item.title.toLowerCase();
    const description = item.description.toLowerCase();
    const tags = item.tags.map((tag) => tag.toLowerCase());

    let score = 0;
    if (title.includes(q)) {
      score += startsWord(title) ? 6 : 5;
    }
    if (tags.some((tag) => tag.includes(q))) {
      score += 3;
    }
    if (description.includes(q)) {
      score += startsWord(description) ? 2 : 1;
    }

    if (score > 0) {
      scored.push({ item, score });
    }
  }

  scored.sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title));

  return scored.slice(0, limit).map((entry) => entry.item);
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `node scripts/article-search-query.test.mjs`
Expected: PASS — prints `article-search-query.test.mjs passed`.

- [ ] **Step 5: Commit**

```bash
git add src/data/searchIndex.mjs scripts/article-search-query.test.mjs
git commit -m "Lisää artikkelihaun suodatuslogiikka ja testi

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
```

---

### Task 2: `buildSearchIndex` index builder (pure)

**Files:**
- Modify: `src/data/searchIndex.mjs` (already created in Task 1 — `buildSearchIndex` is present; this task adds its test)
- Test: `scripts/article-search-index.test.mjs`

**Interfaces:**
- Consumes: `buildSearchIndex(entries)` from `src/data/searchIndex.mjs`.
- Produces: nothing new (verifies Task 1's `buildSearchIndex`).

- [ ] **Step 1: Write the failing test**

Create `scripts/article-search-index.test.mjs`:

```js
import assert from 'node:assert/strict';

import { buildSearchIndex } from '../src/data/searchIndex.mjs';

const entries = [
  { id: 'battery/battery-health-explained.md', data: { title: 'Battery health explained', description: 'Capacity', hub: 'battery', tags: ['health'] } },
  { id: 'brands/samsung-battery-tips.md', data: { title: 'Samsung battery tips', description: 'One UI', hub: 'brands' } },
  { id: 'thermal/draft-article.md', data: { title: 'Draft', description: 'x', hub: 'thermal', draft: true } },
];

const index = buildSearchIndex(entries);

// Drafts are excluded.
assert.equal(index.length, 2, 'draft entries should be filtered out');

// URL is built from hub + slug with leading/trailing slashes.
assert.equal(index[0].url, '/articles/battery/battery-health-explained/');
assert.equal(index[1].url, '/articles/brands/samsung-battery-tips/');

// Missing tags default to an empty array.
assert.deepEqual(index[1].tags, []);

// Required fields are carried through.
for (const item of index) {
  assert.ok(item.title && item.description && item.hub, 'core fields present');
  assert.match(item.url, /^\/articles\/[a-z0-9-]+\/[a-z0-9-]+\/$/, 'url shape');
}

console.log('article-search-index.test.mjs passed');
```

- [ ] **Step 2: Run test to verify it fails first, then passes**

Run: `node scripts/article-search-index.test.mjs`
Expected: PASS immediately (the `buildSearchIndex` implementation already exists from Task 1). If it FAILS, fix `buildSearchIndex` in `src/data/searchIndex.mjs` until it passes. (Writing the test second here is acceptable because the function was implemented in Task 1; the test locks in its contract.)

- [ ] **Step 3: Commit**

```bash
git add scripts/article-search-index.test.mjs
git commit -m "Lisää artikkelihaun indeksinrakennuksen testi

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
```

---

### Task 3: Static search-index endpoint

**Files:**
- Create: `src/pages/articles/search-index.json.ts`
- Test: `scripts/article-search-endpoint.test.mjs`

**Interfaces:**
- Consumes: `buildSearchIndex` from `src/data/searchIndex.mjs`; `getCollection` from `astro:content`.
- Produces: a prerendered file at `/articles/search-index.json` containing the JSON array described in Task 1.

- [ ] **Step 1: Write the failing test**

Create `scripts/article-search-endpoint.test.mjs` (textual assertion on the source, matching the repo's existing markup-test convention):

```js
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync('src/pages/articles/search-index.json.ts', 'utf8');

assert.match(source, /export const GET/, 'endpoint must export a GET handler');
assert.match(source, /from ['"]astro:content['"]/, 'endpoint must use getCollection');
assert.match(source, /buildSearchIndex/, 'endpoint must reuse the shared index builder');
assert.match(source, /from ['"](\.\.\/)+data\/searchIndex\.mjs['"]/, 'endpoint must import the shared module');
assert.match(source, /application\/json/, 'endpoint must set a JSON content type');

console.log('article-search-endpoint.test.mjs passed');
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node scripts/article-search-endpoint.test.mjs`
Expected: FAIL — `ENOENT` (file does not exist yet).

- [ ] **Step 3: Write the endpoint**

Create `src/pages/articles/search-index.json.ts`:

```ts
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

import { buildSearchIndex } from '../../data/searchIndex.mjs';

export const GET: APIRoute = async () => {
  const entries = await getCollection('articles');
  const index = buildSearchIndex(entries);

  return new Response(JSON.stringify(index), {
    headers: { 'Content-Type': 'application/json' },
  });
};
```

- [ ] **Step 4: Run test to verify it passes**

Run: `node scripts/article-search-endpoint.test.mjs`
Expected: PASS — prints `article-search-endpoint.test.mjs passed`.

- [ ] **Step 5: Verify the endpoint actually builds and emits data**

Run: `npm run build`
Then confirm the file exists and is a non-empty JSON array:
Run: `node -e "const a=require('./dist/articles/search-index.json'); if(!Array.isArray(a)||a.length<100){throw new Error('index too small: '+a.length)}; console.log('index entries:', a.length); console.log(a[0])"`
Expected: prints around 160 entries and a sample object with `title`, `description`, `hub`, `tags`, `url`.

- [ ] **Step 6: Commit**

```bash
git add src/pages/articles/search-index.json.ts scripts/article-search-endpoint.test.mjs
git commit -m "Lisää staattinen artikkelihaun indeksin endpoint

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
```

---

### Task 4: `ArticleSearch.astro` component

**Files:**
- Create: `src/components/ArticleSearch.astro`
- Test: `scripts/article-search-component.test.mjs`

**Interfaces:**
- Consumes: `searchArticles` from `src/data/searchIndex.mjs` (imported inside the component `<script>`); fetches `/articles/search-index.json` at runtime.
- Produces: `<ArticleSearch variant="header" | "page" />`. Markup contracts relied on by Tasks 5–6:
  - root element has `data-article-search` and `data-variant="header|page"`
  - header variant includes a toggle button with `data-search-toggle` and `aria-label="Search articles"`
  - a text input with `type="search"`, `data-search-input`, unique `id`
  - a results container with `data-search-results` and `role="listbox"`

- [ ] **Step 1: Write the failing test**

Create `scripts/article-search-component.test.mjs`:

```js
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync('src/components/ArticleSearch.astro', 'utf8');

// Props / variant handling.
assert.match(source, /variant/, 'component should accept a variant prop');
assert.match(source, /data-variant=/, 'root should expose the variant');
assert.match(source, /data-article-search/, 'root should carry the search hook');

// Header toggle (collapsed magnifier).
assert.match(source, /data-search-toggle/, 'header variant needs a toggle button');
assert.match(source, /aria-label="Search articles"/, 'toggle must be labelled');

// Input + results contracts.
assert.match(source, /type="search"/, 'must use a search input');
assert.match(source, /data-search-input/, 'input hook required');
assert.match(source, /data-search-results/, 'results container hook required');
assert.match(source, /role="listbox"/, 'results must be a listbox');

// Accessibility + motion.
assert.match(source, /aria-expanded/, 'expandable state exposed');
assert.match(source, /sr-only/, 'a hidden label for the input');
assert.match(source, /motion-safe:/, 'animate only when motion is allowed');
assert.match(source, /motion-reduce:/, 'reduced-motion fallback');

// Reuses the shared search function (no duplicated logic).
assert.match(source, /searchArticles/, 'client script must reuse searchArticles');
assert.match(source, /search-index\.json/, 'client script must fetch the index');

// Uses design tokens, not raw hex.
assert.doesNotMatch(source, /#[0-9a-fA-F]{3,6}/, 'no hardcoded hex colors');

console.log('article-search-component.test.mjs passed');
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node scripts/article-search-component.test.mjs`
Expected: FAIL — `ENOENT` (component does not exist).

- [ ] **Step 3: Write the component**

Create `src/components/ArticleSearch.astro`:

```astro
---
interface Props {
  variant?: 'header' | 'page';
}

const { variant = 'header' } = Astro.props;
const isHeader = variant === 'header';
const inputId = `article-search-input-${variant}`;
const resultsId = `article-search-results-${variant}`;
---

<div
  class:list={[
    'article-search relative',
    isHeader ? 'flex items-center justify-end' : 'block w-full',
  ]}
  data-article-search
  data-variant={variant}
>
  {isHeader && (
    <button
      type="button"
      class="grid size-9 place-items-center rounded-panel text-run-white outline-none hover:bg-run-white/8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-run-white/70"
      aria-label="Search articles"
      aria-expanded="false"
      aria-controls={inputId}
      data-search-toggle
    >
      <svg class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="7"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    </button>
  )}

  <div
    class:list={[
      'search-field',
      isHeader
        ? 'pointer-events-none absolute right-0 top-1/2 w-0 -translate-y-1/2 overflow-hidden opacity-0 motion-safe:transition-all motion-safe:duration-200 motion-safe:ease-out motion-reduce:transition-none data-[open=true]:pointer-events-auto data-[open=true]:w-72 data-[open=true]:opacity-100 md:data-[open=true]:w-80'
        : 'w-full max-w-xl',
    ]}
    data-search-field
    data-open="false"
  >
    <label class="sr-only" for={inputId}>Search articles</label>
    <div class="flex items-center gap-2 text-run-white">
      <svg class="size-5 shrink-0 text-run-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="7"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
      <input
        id={inputId}
        type="search"
        class="w-full bg-transparent py-1.5 text-base text-run-text placeholder:text-run-muted focus:outline-none"
        placeholder="Search articles…"
        autocomplete="off"
        role="combobox"
        aria-expanded="false"
        aria-controls={resultsId}
        aria-autocomplete="list"
        data-search-input
      />
    </div>
    <div
      class="h-px origin-left scale-x-0 bg-run-border motion-safe:transition-transform motion-safe:duration-200 motion-reduce:transition-none data-[active=true]:scale-x-100 data-[active=true]:bg-run-white/60"
      data-search-underline
      data-active="false"
      aria-hidden="true"
    ></div>

    <ul
      id={resultsId}
      class="search-results pointer-events-none absolute left-0 right-0 z-50 mt-2 max-h-80 overflow-y-auto rounded-panel bg-run-bg/95 p-1.5 opacity-0 shadow-panel ring-1 ring-run-border/80 backdrop-blur -translate-y-1 motion-safe:transition motion-safe:duration-150 motion-reduce:transition-none data-[open=true]:pointer-events-auto data-[open=true]:translate-y-0 data-[open=true]:opacity-100"
      role="listbox"
      aria-label="Search results"
      data-search-results
      data-open="false"
    ></ul>
  </div>
</div>

<script>
  import { searchArticles } from '../data/searchIndex.mjs';

  let indexPromise = null;
  const loadIndex = () => (indexPromise ??= fetch('/articles/search-index.json').then((response) => response.json()));

  const widgets = document.querySelectorAll('[data-article-search]');

  widgets.forEach((widget) => {
    const toggle = widget.querySelector('[data-search-toggle]');
    const field = widget.querySelector('[data-search-field]');
    const input = widget.querySelector('[data-search-input]');
    const underline = widget.querySelector('[data-search-underline]');
    const results = widget.querySelector('[data-search-results]');

    if (!(input instanceof HTMLInputElement) || !(field instanceof HTMLElement) || !(results instanceof HTMLElement)) {
      return;
    }

    const isHeader = widget.getAttribute('data-variant') === 'header';
    let index = [];
    let current = [];
    let activeIndex = -1;

    const setFieldOpen = (open) => {
      field.dataset.open = String(open);
      if (toggle instanceof HTMLButtonElement) {
        toggle.setAttribute('aria-expanded', String(open));
      }
    };

    const setResultsOpen = (open) => {
      results.dataset.open = String(open);
      input.setAttribute('aria-expanded', String(open));
      if (!open) {
        activeIndex = -1;
        input.removeAttribute('aria-activedescendant');
      }
    };

    const optionId = (i) => `${results.id}-option-${i}`;

    const render = () => {
      if (current.length === 0) {
        if (input.value.trim() === '') {
          results.innerHTML = '';
          setResultsOpen(false);
          return;
        }
        results.innerHTML = '<li class="px-3 py-2 text-sm text-run-muted" role="option" aria-disabled="true">No results</li>';
        setResultsOpen(true);
        return;
      }

      results.innerHTML = current
        .map((item, i) => `
          <li id="${optionId(i)}" role="option" aria-selected="${i === activeIndex}">
            <a href="${item.url}" class="block rounded-panel px-3 py-2 text-run-white outline-none hover:bg-run-white/8 aria-[current=true]:bg-run-white/8" ${i === activeIndex ? 'aria-current="true"' : ''}>
              <span class="block text-sm font-semibold leading-5">${item.title}</span>
              <span class="block truncate text-xs leading-5 text-run-muted">${item.hub}</span>
            </a>
          </li>
        `)
        .join('');
      setResultsOpen(true);
    };

    const runQuery = async () => {
      if (index.length === 0) {
        index = await loadIndex();
      }
      current = searchArticles(index, input.value);
      activeIndex = -1;
      render();
    };

    const move = (delta) => {
      if (current.length === 0) {
        return;
      }
      activeIndex = (activeIndex + delta + current.length) % current.length;
      input.setAttribute('aria-activedescendant', optionId(activeIndex));
      render();
      const active = results.querySelector('[aria-selected="true"] a');
      if (active instanceof HTMLElement) {
        active.scrollIntoView({ block: 'nearest' });
      }
    };

    const go = () => {
      const target = current[activeIndex >= 0 ? activeIndex : 0];
      if (target) {
        window.location.href = target.url;
      }
    };

    const closeAll = () => {
      setResultsOpen(false);
      if (underline instanceof HTMLElement) {
        underline.dataset.active = 'false';
      }
      if (isHeader && input.value.trim() === '') {
        setFieldOpen(false);
      }
    };

    input.addEventListener('focus', () => {
      void loadIndex();
      if (underline instanceof HTMLElement) {
        underline.dataset.active = 'true';
      }
      if (input.value.trim() !== '') {
        void runQuery();
      }
    });

    input.addEventListener('input', () => {
      void runQuery();
    });

    input.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        move(1);
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        move(-1);
      } else if (event.key === 'Enter') {
        event.preventDefault();
        go();
      } else if (event.key === 'Escape') {
        event.preventDefault();
        input.value = '';
        current = [];
        closeAll();
        if (isHeader && toggle instanceof HTMLButtonElement) {
          toggle.focus();
        }
      }
    });

    if (toggle instanceof HTMLButtonElement) {
      toggle.addEventListener('click', () => {
        const open = field.dataset.open !== 'true';
        setFieldOpen(open);
        if (open) {
          void loadIndex();
          input.focus();
        }
      });
    }

    document.addEventListener('pointerdown', (event) => {
      if (event.target instanceof Node && widget.contains(event.target)) {
        return;
      }
      closeAll();
    });
  });
</script>
```

- [ ] **Step 4: Run test to verify it passes**

Run: `node scripts/article-search-component.test.mjs`
Expected: PASS — prints `article-search-component.test.mjs passed`.

- [ ] **Step 5: Commit**

```bash
git add src/components/ArticleSearch.astro scripts/article-search-component.test.mjs
git commit -m "Lisää jaettu ArticleSearch-komponentti

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
```

---

### Task 5: Wire search into the header (and keep the menu test robust)

**Files:**
- Modify: `src/components/Header.astro` (import + place `<ArticleSearch variant="header" />` after the articles menu, before `</nav>`)
- Modify: `scripts/articles-menu.test.mjs:8` (scope the menu extraction to the dropdown panel so a sibling search widget can't leak into the monochrome assertion)
- Test: `scripts/articles-menu.test.mjs` (existing, must still pass)

**Interfaces:**
- Consumes: `ArticleSearch.astro` from Task 4.
- Produces: header renders a global search widget.

- [ ] **Step 1: Make the menu extraction robust (do this first so the existing test won't break)**

In `scripts/articles-menu.test.mjs`, replace line 8:

```js
const menuMarkup = header.match(/<div class="articles-menu[\s\S]*?<\/div>\s*<\/div>\s*<\/nav>/)?.[0] ?? '';
```

with a panel-scoped extraction (anchored on the unique panel id, ending at the panel's own close — robust to any sibling added later in the nav):

```js
const menuMarkup = header.match(/<div\s+id="articles-menu-panel"[\s\S]*?<\/div>\s*<\/div>/)?.[0] ?? '';
```

- [ ] **Step 2: Run the menu test to confirm it still passes against the CURRENT header**

Run: `node scripts/articles-menu.test.mjs`
Expected: PASS (no output / no assertion error). This proves the regex change still captures the dropdown panel (grid-cols, motion, monochrome assertions all still hold) before we touch the header markup.

- [ ] **Step 3: Add the search widget to the header**

In `src/components/Header.astro`, add the import after the existing imports (after line 4):

```astro
import ArticleSearch from './ArticleSearch.astro';
```

Then insert the widget inside `<nav>`, immediately after the articles menu `</div>` and before `</nav>` (currently between lines 77 and 78):

```astro
      </div>

      <ArticleSearch variant="header" />
    </nav>
```

(The widget must come AFTER the `[data-articles-menu]` block so tab order reads Features → Articles → Search and the panel-scoped menu regex remains anchored on its own id.)

- [ ] **Step 4: Run the menu test again to confirm no regression**

Run: `node scripts/articles-menu.test.mjs`
Expected: PASS. The `search`/`svg`/`Icon` monochrome assertion (line 32) still only inspects the dropdown panel, which contains no search markup.

- [ ] **Step 5: Build to confirm the component compiles in the header**

Run: `npm run build`
Expected: build completes with no errors.

- [ ] **Step 6: Commit**

```bash
git add src/components/Header.astro scripts/articles-menu.test.mjs
git commit -m "Lisää globaali haku headeriin ja vahvista valikkotestin rajaus

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
```

---

### Task 6: Wire search into the articles index page

**Files:**
- Modify: `src/pages/articles/index.astro` (import + place `<ArticleSearch variant="page" />` under the `<h1>`)
- Test: `scripts/article-search-page.test.mjs`

**Interfaces:**
- Consumes: `ArticleSearch.astro` from Task 4.
- Produces: the `/articles` page renders the page-variant search above the hub list.

- [ ] **Step 1: Write the failing test**

Create `scripts/article-search-page.test.mjs`:

```js
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const page = readFileSync('src/pages/articles/index.astro', 'utf8');

assert.match(page, /import ArticleSearch from ['"](\.\.\/)+components\/ArticleSearch\.astro['"]/, 'page must import ArticleSearch');
assert.match(page, /<ArticleSearch\s+variant="page"\s*\/>/, 'page must render the page variant');

// The search must appear after the <h1> and before the hub list grid.
const h1Index = page.indexOf('<h1');
const searchIndex = page.indexOf('<ArticleSearch');
const listIndex = page.indexOf('ARTICLE_HUBS.map');
assert.ok(h1Index < searchIndex, 'search should come after the heading');
assert.ok(searchIndex < listIndex, 'search should come before the hub list');

console.log('article-search-page.test.mjs passed');
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node scripts/article-search-page.test.mjs`
Expected: FAIL — `import ArticleSearch` assertion fails (not present yet).

- [ ] **Step 3: Add the search widget to the page**

In `src/pages/articles/index.astro`, add the import after line 4:

```astro
import ArticleSearch from '../../components/ArticleSearch.astro';
```

Then insert the widget between the `<h1>` (line 18) and the `<div class="mt-10 grid gap-12">` (line 19):

```astro
      <h1 class="max-w-3xl text-4xl font-semibold text-run-text sm:text-5xl">runcheck articles</h1>
      <div class="mt-8">
        <ArticleSearch variant="page" />
      </div>
      <div class="mt-10 grid gap-12">
```

- [ ] **Step 4: Run test to verify it passes**

Run: `node scripts/article-search-page.test.mjs`
Expected: PASS — prints `article-search-page.test.mjs passed`.

- [ ] **Step 5: Commit**

```bash
git add src/pages/articles/index.astro scripts/article-search-page.test.mjs
git commit -m "Lisää haku articles-sivun yläosaan

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
```

---

### Task 7: Full verification (all tests + build + manual smoke)

**Files:**
- None (verification only).

**Interfaces:**
- Consumes: everything above.
- Produces: confidence that the feature works end-to-end.

- [ ] **Step 1: Run every test script**

Run: `for f in scripts/*.test.mjs; do echo "== $f =="; node "$f" || exit 1; done`
Expected: every test prints its pass line / exits 0. (Use the Bash tool — this is POSIX sh.)

- [ ] **Step 2: Production build**

Run: `npm run build`
Expected: completes with no errors; `dist/articles/search-index.json` exists.

- [ ] **Step 3: Manual smoke test (dev server)**

Run: `npm run dev` (background), open `http://localhost:4321/`.
Verify in the header:
- Clicking the magnifier expands the input with animation; the underline draws in.
- Typing `battery` shows a dropdown of ≤8 matching titles.
- Arrow keys move the highlight; Enter navigates to the highlighted article; Escape clears and collapses the field.
- Clicking outside closes the dropdown.
Then open `http://localhost:4321/articles/`:
- The page-variant search is visible under the heading, always expanded.
- Typing a nonsense string shows the muted "No results" row.
- A tag-only term (e.g. a brand name present in tags) returns the expected article.

- [ ] **Step 4: Reduced-motion check**

In the browser devtools, emulate `prefers-reduced-motion: reduce` and confirm the field/dropdown appear without transitions but remain fully functional.

- [ ] **Step 5: Final commit (only if any fixes were needed during verification)**

```bash
git add -A
git commit -m "Korjaa artikkelihaun varmennuksessa havaitut puutteet

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
```

---

## Self-Review

**Spec coverage:**
- Both placements (header + page) → Tasks 5, 6. ✓
- Shared single component → Task 4 (`variant` prop). ✓
- Lightweight JSON index, build-time, lazy fetch → Tasks 1–3 + component fetch. ✓
- Search over title + description + **tags** → `searchArticles` (Task 1). ✓
- Dropdown, max 8, click-through → component render (Task 4), limit in Task 1. ✓
- Enter / icon click / arrow keys / Esc → Task 4 keyboard + toggle handlers. ✓
- "No results" empty state; hidden on empty query → Task 4 `render()`. ✓
- Stripped uiverse style (magnifier + input + underline, no decorative widget, no extra labels) → Task 4 markup. ✓
- Animations motion-safe + reduced-motion → Task 4 classes; verified Task 7 Step 4. ✓
- Design tokens only, no hex → Task 4 test asserts no hex. ✓
- Does not break the articles menu monochrome test → Task 5 panel-scoped regex. ✓

**Placeholder scan:** No TBD/TODO; all code blocks complete. ✓

**Type/name consistency:** `buildSearchIndex(entries)` and `searchArticles(index, query, {limit})` names match across endpoint, component, and tests. Data hooks (`data-article-search`, `data-search-toggle`, `data-search-input`, `data-search-results`, `data-search-field`, `data-search-underline`) are consistent between Task 4 markup and its script. URL shape identical across `searchIndex.mjs`, tests, and existing pages. ✓
