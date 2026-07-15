import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import test from 'node:test';

const SOURCE_BASE = 'C:/Users/emmah/Documents/ObsidianVault/Projects/Active/runcheck/artikkelit';
const roots = { en: path.join(SOURCE_BASE, 'Valmiit'), it: path.join(SOURCE_BASE, 'it-IT') };
const utf8 = new TextDecoder('utf-8', { fatal: true });

const markdownFiles = (root) => readdirSync(root).filter((name) => name.endsWith('.md')).map((name) => path.join(root, name));
const sourceNumber = (file) => Number(path.basename(file).match(/^(\d+)-/)?.[1]);
const bySourceNumber = (root) => new Map(markdownFiles(root).map((file) => [sourceNumber(file), file]));
const readUtf8 = (file) => utf8.decode(readFileSync(file));
const headingLevels = (source) => [...source.matchAll(/^(#{1,6})\s+/gm)].map((match) => match[1].length);
const linkTargets = (source) => [...source.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)].map((match) => match[1]).sort();
const canonicalFilenameStem = (file) => {
  let stem = decodeURIComponent(path.basename(file, '.md')).replace(/^\d+-/, '').replace(/-it-IT$/i, '');
  while (/\(\d+\)(?:\(\d+\))?$/.test(stem)) stem = stem.replace(/\(\d+\)(?:\(\d+\))?$/, '');
  return stem;
};

test('Italian lähdeaineisto on eheä ja vastaa ID-kohtaisia englanninkielisiä lähteitä', () => {
  const italianFiles = markdownFiles(roots.it);
  const italianById = bySourceNumber(roots.it);
  const englishById = bySourceNumber(roots.en);
  const expectedIds = Array.from({ length: 160 }, (_, index) => index + 1);

  assert.equal(italianFiles.length, 160);
  assert.equal(italianById.size, 160);
  assert.deepEqual([...italianById.keys()].sort((a, b) => a - b), expectedIds);
  assert.deepEqual([...englishById.keys()].sort((a, b) => a - b), expectedIds);

  let validFrontmatter = 0;
  let absentFrontmatter = 0;
  for (const id of expectedIds) {
    const italianFile = italianById.get(id);
    const englishFile = englishById.get(id);
    const italian = readUtf8(italianFile);
    const english = readUtf8(englishFile);

    assert.equal(canonicalFilenameStem(italianFile), canonicalFilenameStem(englishFile), `ID ${id}: tiedostonimi ei vastaa englanninkielistä lähdettä.`);
    assert.match(italian, /^#\s+\S.+$/m, `ID ${id}: Italian H1 puuttuu.`);
    assert.deepEqual(headingLevels(italian), headingLevels(english), `ID ${id}: otsikkotasot eivät vastaa lähdettä.`);
    assert.deepEqual(linkTargets(italian), linkTargets(english), `ID ${id}: Markdown-linkkien kohteet poikkeavat lähteestä.`);

    if (italian.startsWith('---')) {
      assert.match(italian, /^---\r?\n[\s\S]*?\r?\n---\r?\n/, `ID ${id}: frontmatter ei sulkeudu oikein.`);
      validFrontmatter += 1;
    } else {
      absentFrontmatter += 1;
    }
  }

  assert.equal(validFrontmatter, 159);
  assert.equal(absentFrontmatter, 1, 'ID 1 käyttää sallittua lähde-Markdownia ilman lähdefrontmatteria; generoitu tiedosto saa täydellisen frontmatterin importerilta.');
});
