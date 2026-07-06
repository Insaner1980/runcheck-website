import assert from 'node:assert/strict';

import { searchArticles } from '../src/data/searchIndex.mjs';

const index = [
  { title: 'Battery health explained', description: 'How capacity fades', hub: 'battery', tags: ['health'], url: '/articles/battery/battery-health-explained/' },
  { title: 'Why your phone overheats', description: 'Thermal throttling basics', hub: 'thermal', tags: ['heat', 'battery'], url: '/articles/thermal/why-your-phone-overheats/' },
  { title: 'Samsung battery tips', description: 'One UI power settings', hub: 'brands', tags: ['samsung'], url: '/articles/brands/samsung-battery-tips/' },
];

assert.deepEqual(searchArticles(index, ''), []);
assert.deepEqual(searchArticles(index, '   '), []);

const battery = searchArticles(index, 'BATTERY');
assert.ok(battery.length >= 2, 'should match multiple battery entries');
assert.equal(battery[0].title, 'Battery health explained', 'title hit should rank first');

const samsung = searchArticles(index, 'samsung');
assert.equal(samsung.length, 1);
assert.equal(samsung[0].hub, 'brands');

const thermal = searchArticles(index, 'throttling');
assert.equal(thermal.length, 1);
assert.equal(thermal[0].hub, 'thermal');

const limited = searchArticles(index, 'battery', { limit: 1 });
assert.equal(limited.length, 1);

console.log('article-search-query.test.mjs passed');
