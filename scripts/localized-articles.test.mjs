import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import test from 'node:test';

test('localized article content and routes', () => {
const root = path.resolve('src/content/articles');
const expectedCounts = { fi: 160, sv: 160, nb: 160, de: 160, da: 160, fr: 160 };
const markdownFiles = (directory) => readdirSync(directory, { withFileTypes: true }).flatMap((entry) => entry.isDirectory() ? markdownFiles(path.join(directory, entry.name)) : entry.name.endsWith('.md') ? [path.join(directory, entry.name)] : []);

for (const [locale, expected] of Object.entries(expectedCounts)) {
  const files = markdownFiles(path.join(root, locale));
  assert.equal(files.length, expected, `${locale} should contain the expected number of available translations.`);
  const sourceNumbers = new Set();
  for (const file of files) {
    const source = readFileSync(file, 'utf8');
    assert.ok(source.includes(`locale: "${locale}"`), `${file} should declare locale ${locale}.`);
    assert.doesNotMatch(path.basename(file), /^\d+-/, `${locale} filenames should be localized SEO slugs.`);
    const listSummary = source.match(/^listSummary: (.+)$/m)?.[1];
    assert.ok(listSummary, `${locale} article cards should have their own summary.`);
    const parsedSummary = JSON.parse(listSummary);
    assert.ok(parsedSummary.length <= 110, `${locale} card summary should stay compact.`);
    assert.doesNotMatch(parsedSummary, /[·—]/, `${locale} card summary should not use dot separators or em dashes.`);
    const number = Number(source.match(/^sourceNumber: (\d+)$/m)?.[1]);
    assert.ok(number >= 1 && number <= 160);
    assert.ok(!sourceNumbers.has(number), `${locale} sourceNumber ${number} should be unique.`);
    sourceNumbers.add(number);
  }
}

assert.ok(!readFileSync(markdownFiles(path.join(root, 'fi'))[0], 'utf8').includes('tags: ["battery"'), 'Finnish search tags should be localized.');

const routeChecks = [
  ['sv/artiklar/index.html', 'lang="sv"'], ['nb/artikler/index.html', 'lang="nb"'],
  ['de/artikel/index.html', 'lang="de"'], ['da/artikler/index.html', 'lang="da"'],
  ['fr/articles/index.html', 'lang="fr"'],
  ['sv/artiklar/sokindex.json', '"url":"/sv/artiklar/'], ['nb/artikler/sokeindeks.json', '"url":"/nb/artikler/'],
  ['de/artikel/suchindex.json', '"url":"/de/artikel/'], ['da/artikler/soegeindeks.json', '"url":"/da/artikler/'],
  ['fr/articles/index-recherche.json', '"url":"/fr/articles/'],
];
for (const [relative, marker] of routeChecks) assert.ok(readFileSync(path.resolve('dist', relative), 'utf8').includes(marker), `${relative} should be generated for its locale.`);

console.log('localized-articles.test.mjs passed');
});
