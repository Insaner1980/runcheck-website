import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import test from 'node:test';

import {
  ARTICLE_LOCALE_CONTRACTS,
  ARTICLE_SOURCE_LOCALE_CODES,
  LOCALIZED_ARTICLE_LOCALES,
  PUBLISHED_ARTICLE_LOCALE_CODES,
  ROUTED_ARTICLE_LOCALE_CODES,
  isProductionSitemapUrl,
} from '../src/data/articleLocaleConfig.mjs';

test('tuotannon locale-portti julkaisee kahdeksan localea eikä Italiaa', () => {
  assert.deepEqual(PUBLISHED_ARTICLE_LOCALE_CODES, ['en', 'fi', 'sv', 'nb', 'de', 'da', 'fr', 'es']);
  assert.deepEqual(ROUTED_ARTICLE_LOCALE_CODES, PUBLISHED_ARTICLE_LOCALE_CODES);
  assert.deepEqual(LOCALIZED_ARTICLE_LOCALES, ['sv', 'nb', 'de', 'da', 'fr', 'es']);
  assert.ok(ARTICLE_SOURCE_LOCALE_CODES.includes('it'));
  assert.equal(ARTICLE_LOCALE_CONTRACTS.it.sourceSupported, true);
  assert.equal(ARTICLE_LOCALE_CONTRACTS.it.previewAllowed, true);
  assert.equal(ARTICLE_LOCALE_CONTRACTS.it.productionPublished, false);
  assert.equal(isProductionSitemapUrl('https://runcheckapp.com/it/articoli/'), false);
  assert.equal(isProductionSitemapUrl('https://runcheckapp.com/es/articulos/'), true);

  for (const contract of Object.values(ARTICLE_LOCALE_CONTRACTS)) {
    for (const field of ['code', 'regionalProfile', 'root', 'articleIndexSlug', 'searchIndex', 'importerSource', 'sourceSupported', 'previewAllowed', 'productionPublished', 'lang', 'og', 'tagMap', 'index', 'cta']) {
      assert.notEqual(contract[field], undefined, `${contract.code}.${field} puuttuu locale-sopimuksesta.`);
    }
    if (contract.code !== 'en') assert.equal(Object.keys(contract.hubSlugs).length, 13);
  }
});

test('Italian preview-reitit vaativat eksplisiittisen portin', () => {
  const script = "import('./src/data/articleLocaleConfig.mjs').then(m => process.stdout.write(JSON.stringify(m.ROUTED_ARTICLE_LOCALE_CODES)))";
  const output = execFileSync(process.execPath, ['-e', script], {
    encoding: 'utf8',
    env: { ...process.env, RUNCHECK_PREVIEW_ARTICLE_LOCALES: 'it' },
  });
  assert.deepEqual(JSON.parse(output), ['en', 'fi', 'sv', 'nb', 'de', 'da', 'fr', 'es', 'it']);
});
