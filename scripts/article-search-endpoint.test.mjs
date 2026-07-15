import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

test('article search endpoint', () => {
const source = readFileSync('src/pages/articles/search-index.json.ts', 'utf8');

assert.match(source, /export const GET/, 'endpoint must export a GET handler');
assert.match(source, /from ['"]astro:content['"]/, 'endpoint must use getCollection');
assert.match(source, /buildSearchIndex/, 'endpoint must reuse the shared index builder');
assert.match(source, /from ['"](\.\.\/)+data\/searchIndex\.mjs['"]/, 'endpoint must import the shared module');
assert.match(source, /application\/json/, 'endpoint must set a JSON content type');

console.log('article-search-endpoint.test.mjs passed');
});
