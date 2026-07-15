import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import test from 'node:test';

import { ARTICLE_SLUG_MIGRATIONS } from '../src/data/articleSlugMigrations.mjs';

const outputFile = (urlPath) => path.resolve('dist', urlPath.replace(/^\//, ''), 'index.html');

test('13 hyväksyttyä slug-migraatiota ovat suoria pysyviä uudelleenohjauksia', () => {
  assert.equal(ARTICLE_SLUG_MIGRATIONS.length, 13);
  const redirects = readFileSync('public/_redirects', 'utf8').split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  const rules = new Map(redirects.map((line) => {
    const [source, destination, status] = line.split(/\s+/);
    return [source, { destination, status }];
  }));

  for (const migration of ARTICLE_SLUG_MIGRATIONS) {
    const rule = rules.get(migration.oldPath);
    assert.deepEqual(rule, { destination: migration.newPath, status: '301' }, migration.oldPath);
    assert.ok(!rules.has(migration.newPath), `${migration.newPath} ei saa aloittaa redirect-ketjua.`);
    assert.ok(!existsSync(outputFile(migration.oldPath)), `${migration.oldPath} ei saa jäädä julkaistuksi sivuksi.`);
    assert.ok(existsSync(outputFile(migration.newPath)), `${migration.newPath} pitää rakentua sivuksi.`);

    const html = readFileSync(outputFile(migration.newPath), 'utf8');
    assert.match(html, new RegExp(`<link rel="canonical" href="https://runcheckapp\\.com${migration.newPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`));
    assert.ok(html.includes(`hreflang="${migration.locale}" href="https://runcheckapp.com${migration.newPath}"`));
  }
});
