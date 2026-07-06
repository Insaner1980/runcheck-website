import assert from 'node:assert/strict';

import { buildSearchIndex } from '../src/data/searchIndex.mjs';

const entries = [
  { id: 'battery/battery-health-explained.md', data: { title: 'Battery health explained', description: 'Capacity', hub: 'battery', tags: ['health'] } },
  { id: 'brands/samsung-battery-tips.md', data: { title: 'Samsung battery tips', description: 'One UI', hub: 'brands' } },
  { id: 'thermal/draft-article.md', data: { title: 'Draft', description: 'x', hub: 'thermal', draft: true } },
];

const index = buildSearchIndex(entries);

assert.equal(index.length, 2, 'draft entries should be filtered out');
assert.equal(index[0].url, '/articles/battery/battery-health-explained/');
assert.equal(index[1].url, '/articles/brands/samsung-battery-tips/');
assert.deepEqual(index[1].tags, []);

for (const item of index) {
  assert.ok(item.title && item.description && item.hub, 'core fields present');
  assert.match(item.url, /^\/articles\/[a-z0-9-]+\/[a-z0-9-]+\/$/, 'url shape');
}

console.log('article-search-index.test.mjs passed');
