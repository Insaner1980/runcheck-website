import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import test from 'node:test';

import { localizedSeoSlug } from '../src/data/articleSlugs.mjs';

const generatedRoot = path.resolve('src/content/articles/it');
const sourceRoot = 'C:/Users/emmah/Documents/ObsidianVault/Projects/Active/runcheck/artikkelit/it-IT';
const markdownFiles = (root) => readdirSync(root, { withFileTypes: true }).flatMap((entry) => entry.isDirectory() ? markdownFiles(path.join(root, entry.name)) : entry.name.endsWith('.md') ? [path.join(root, entry.name)] : []);
const parseFrontmatter = (source) => {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  assert.ok(match, 'Generoitu Italian artikkeli tarvitsee frontmatterin.');
  const data = Object.fromEntries(match[1].split(/\r?\n/).filter(Boolean).map((line) => {
    const separator = line.indexOf(':');
    const key = line.slice(0, separator);
    const value = line.slice(separator + 1).trim();
    try { return [key, JSON.parse(value)]; } catch { return [key, value]; }
  }));
  return { data, body: source.slice(match[0].length) };
};
const sourceTitles = new Map(readdirSync(sourceRoot).filter((name) => name.endsWith('.md')).map((name) => {
  const source = readFileSync(path.join(sourceRoot, name), 'utf8');
  return [Number(name.match(/^(\d+)-/)?.[1]), source.match(/^#\s+(.+)$/m)?.[1].replace(/`([^`]+)`/g, '$1')];
}));

test('Italian 160 preview-artikkelia täyttävät metadata-, slug- ja kieliportin', () => {
  const files = markdownFiles(generatedRoot);
  const ids = new Set();
  const routeSlugs = new Set();
  const englishWords = new Set('the and to of is are that with for you your phone battery can if on in from or this when how what why does should'.split(' '));
  const italianWords = new Set('il lo la i gli le e di che con per tu tuo telefono batteria può se su in da o questo quando come cosa perché'.split(' '));
  const suspiciousEnglish = [];

  assert.equal(files.length, 160);
  for (const file of files) {
    const source = readFileSync(file, 'utf8');
    const { data, body } = parseFrontmatter(source);
    const slug = path.basename(file, '.md');
    const routeKey = `${data.hub}/${slug}`;

    assert.equal(data.locale, 'it');
    assert.equal(data.draft, false);
    assert.ok(Number.isInteger(data.sourceNumber) && data.sourceNumber >= 1 && data.sourceNumber <= 160);
    assert.ok(!ids.has(data.sourceNumber), `sourceNumber ${data.sourceNumber} esiintyy kahdesti.`);
    assert.equal(data.title, sourceTitles.get(data.sourceNumber), `ID ${data.sourceNumber}: title ei vastaa Italian lähde-H1:tä.`);
    assert.ok(typeof data.description === 'string' && data.description.length > 0);
    assert.ok(typeof data.listSummary === 'string' && data.listSummary.length > 0 && data.listSummary.length <= 110);
    assert.ok(Array.isArray(data.tags));
    assert.ok(typeof data.hub === 'string' && data.hub.length > 0);
    assert.ok(Number.isInteger(data.order) && data.order > 0);
    assert.equal(slug, localizedSeoSlug(data.title, 'it', data.sourceNumber));
    assert.ok(slug.length <= 90);
    assert.match(slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    assert.ok(!routeSlugs.has(routeKey), `${routeKey} törmää toiseen Italian reittiin.`);
    assert.doesNotMatch(data.listSummary, /[·—]/);
    assert.notEqual(data.listSummary, new Intl.ListFormat('it', { style: 'long', type: 'conjunction' }).format(data.tags.slice(0, 3)), `ID ${data.sourceNumber}: listSummary ei saa olla tagiluettelo.`);
    assert.doesNotMatch(body, /^#\s/m);
    assert.doesNotMatch(body, /Meta description:/i);
    assert.doesNotMatch(body, /—/);

    for (const paragraph of body.split(/\r?\n\s*\r?\n/)) {
      if (paragraph.startsWith('#') || paragraph.startsWith('```') || paragraph.length < 100) continue;
      const words = paragraph.toLowerCase().match(/[a-zà-ÿ]+/g) ?? [];
      const englishScore = new Set(words.filter((word) => englishWords.has(word))).size;
      const italianScore = new Set(words.filter((word) => italianWords.has(word))).size;
      if (englishScore >= 7 && englishScore > italianScore * 1.5) suspiciousEnglish.push({ file, paragraph });
    }

    ids.add(data.sourceNumber);
    routeSlugs.add(routeKey);
  }

  assert.deepEqual([...ids].sort((a, b) => a - b), Array.from({ length: 160 }, (_, index) => index + 1));
  assert.deepEqual(suspiciousEnglish, []);
  const corpus = files.map((file) => readFileSync(file, 'utf8')).join('\n').toLowerCase();
  assert.ok((corpus.match(/stato della batteria/g) ?? []).length > 100);
  assert.doesNotMatch(corpus, /salute della batteria|punteggio di salute|capacità di progetto|prosenttia/);
});
