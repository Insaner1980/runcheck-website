import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import test from 'node:test';

import { articlePath } from '../src/data/articlePaths.mjs';

const contentRoot = 'src/content/articles';
const publishedLocalizedLocales = ['fi', 'sv', 'nb', 'da', 'de', 'fr', 'es'];
const profileByLocale = { fi: 'fi-FI', sv: 'sv-SE', nb: 'nb-NO', da: 'da-DK', de: 'de-DE', fr: 'fr-FR', es: 'es-ES' };
const pilotIds = {
  fi: [4, 6, 48, 53, 80, 87, 138, 159],
  sv: [4, 6, 48, 80, 87, 122, 159],
  nb: [2, 4, 48, 53, 87, 138, 159],
  da: [4, 48, 87, 122, 138, 159],
  de: [2, 4, 6, 48, 53, 80, 87, 122, 123, 138],
  fr: [4, 6, 48, 53, 87, 91, 122],
  es: [4, 48, 53, 80, 87, 122, 123, 138],
};

const expectedTitles = new Map([
  ['fi:122', 'Näin tarkistat Androidin tietoturvapäivitykset'],
  ['sv:122', 'Så kontrollerar du Androids säkerhetsuppdateringar'],
  ['fr:123', 'Votre téléphone est-il encore pris en charge ? Vérifier la durée du suivi logiciel et des mises à jour de sécurité'],
  ['es:123', '¿Sigue teniendo soporte tu móvil? Cómo comprobar el periodo de soporte y las actualizaciones de seguridad'],
]);

const expectedMetaTitles = new Map([
  ['es:1', 'Comprobar el estado de un móvil Android'],
  ['es:11', 'Cómo comprobar el estado de la batería en Android'],
  ['es:21', 'Por qué la batería del móvil se agota rápido'],
  ['es:53', 'Por qué se sobrecalienta tu móvil Android'],
  ['es:104', 'Cómo probar el hardware de un móvil Android (2026)'],
  ['fi:122', 'Androidin tietoturvapäivitysten tarkistaminen'],
  ['sv:122', 'Kontrollera Androids säkerhetsuppdateringar'],
  ['fr:123', 'Votre téléphone Android est-il encore pris en charge ?'],
  ['es:123', '¿Sigue teniendo soporte tu móvil Android?'],
]);

const expectedMetaDescriptions = new Map([
  ['es:1', 'Comprueba batería, almacenamiento, temperatura, red, sensores y rendimiento para saber si tu móvil Android está en buen estado.'],
  ['es:11', 'Aprende a comprobar el estado y la capacidad de la batería en Android y a reconocer las señales de una batería deteriorada.'],
  ['es:123', 'Comprueba hasta cuándo recibe tu móvil Android actualizaciones del sistema y parches de seguridad, y qué hacer cuando termina el soporte.'],
]);

const markdownFiles = (directory) => readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
  const file = path.join(directory, entry.name);
  return entry.isDirectory() ? markdownFiles(file) : entry.name.endsWith('.md') ? [file] : [];
});

const value = (source, key) => {
  const raw = source.match(new RegExp(`^${key}: (.+)$`, 'm'))?.[1];
  if (raw === undefined) return undefined;
  try {
    return JSON.parse(raw);
  } catch {
    return raw;
  }
};

const htmlEscape = (text) => String(text)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#39;');

const builtHtml = (article) => {
  const hub = value(article.source, 'hub');
  const route = articlePath(hub, path.basename(article.file, '.md'), article.locale);
  return readFileSync(path.join('dist', route.replace(/^\//, ''), 'index.html'), 'utf8');
};

const articles = publishedLocalizedLocales.flatMap((locale) => markdownFiles(path.join(contentRoot, locale)).map((file) => {
  const source = readFileSync(file, 'utf8');
  return { file, source, locale, sourceNumber: value(source, 'sourceNumber') };
}));
const byKey = new Map(articles.map((article) => [`${article.locale}:${article.sourceNumber}`, article]));
const tagListPattern = /^[^.!?]+,\s+[^.!?]+\s+(?:and|ja|och|og|und|et|y)\s+[^.!?]+$/i;

test('neljä REVISION-titleä ja H1:tä vastaavat hyväksyttyä CSV-ehdotusta', () => {
  for (const [key, title] of expectedTitles) {
    const article = byKey.get(key);
    assert.ok(article, `${key} puuttuu.`);
    assert.equal(value(article.source, 'title'), title);
  }

  const priorityRows = readFileSync('reports/priority-article-keyword-review.csv', 'utf8');
  assert.match(priorityRows, /REVISION RECOMMENDED/);
  assert.match(byKey.get('fi:122').source, /^## Mistä tietoturvapäivityksen päivämäärä löytyy$/m);
  assert.match(byKey.get('fi:122').source, /^## Kuinka tuore tietoturvapäivityksen pitäisi olla\?$/m);
  assert.match(byKey.get('sv:122').source, /^## Hur aktuell bör säkerhetsuppdateringen vara\?$/m);
  assert.match(byKey.get('fi:122').source, /Android security patch level/);
  assert.match(byKey.get('sv:122').source, /Androids säkerhetskorrigeringsnivå/);
});

test('yhdeksän metaTitle- ja kolme metaDescription-ehdotusta on toteutettu täsmällisesti', () => {
  assert.equal(expectedMetaTitles.size, 9);
  assert.equal(expectedMetaDescriptions.size, 3);
  for (const [key, metaTitle] of expectedMetaTitles) assert.equal(value(byKey.get(key).source, 'metaTitle'), metaTitle, key);
  for (const [key, metaDescription] of expectedMetaDescriptions) assert.equal(value(byKey.get(key).source, 'metaDescription'), metaDescription, key);
});

test('hyväksytyt H1- ja metadata-arvot näkyvät tuotantobuildin HTML:ssä', () => {
  for (const [key, title] of expectedTitles) {
    const html = builtHtml(byKey.get(key));
    assert.ok(html.includes(`>${htmlEscape(title)}</h1>`), `${key}: H1 ei näy buildissa.`);
  }
  for (const [key, metaTitle] of expectedMetaTitles) {
    const html = builtHtml(byKey.get(key));
    assert.ok(html.includes(`<title>${htmlEscape(metaTitle)}</title>`), `${key}: metaTitle ei näy buildissa.`);
  }
  for (const [key, metaDescription] of expectedMetaDescriptions) {
    const html = builtHtml(byKey.get(key));
    assert.ok(html.includes(`<meta name="description" content="${htmlEscape(metaDescription)}">`), `${key}: metaDescription ei näy buildissa.`);
  }
});

test('listSummary-pilotti muuttaa täsmälleen 53 prioriteettisummaa ja jättää 533 tagiluetteloa myöhemmäksi', () => {
  const pilotKeys = Object.entries(pilotIds).flatMap(([locale, ids]) => ids.map((sourceNumber) => `${locale}:${sourceNumber}`));
  assert.equal(pilotKeys.length, 53);

  for (const key of pilotKeys) {
    const article = byKey.get(key);
    const summary = value(article.source, 'listSummary');
    assert.match(summary, /[.!?]$/, `${key}: listSummary ei ole virke.`);
    assert.ok(summary.length <= 110, `${key}: listSummary on liian pitkä (${summary.length}).`);
    if (article.locale === 'fi') assert.ok(summary.length <= 72, `${key}: suomenkielinen listSummary on liian pitkä.`);
    assert.doesNotMatch(summary, tagListPattern, `${key}: listSummary on edelleen tagiluettelo.`);
    assert.doesNotMatch(summary, /[·—]/, `${key}: listSummary sisältää kielletyn erottimen.`);
  }

  const remainingTagLists = articles.filter((article) => tagListPattern.test(value(article.source, 'listSummary')));
  assert.equal(remainingTagLists.length, 533);
  assert.deepEqual(
    Object.fromEntries(publishedLocalizedLocales.map((locale) => [locale, remainingTagLists.filter((article) => article.locale === locale).length])),
    { fi: 70, sv: 69, nb: 65, da: 73, de: 79, fr: 93, es: 84 },
  );
});

test('Italian source 123 säilyy preview-aineistona ilman Codexin natiivitarkistusväitettä', () => {
  const file = markdownFiles(path.join(contentRoot, 'it')).find((candidate) => {
    const source = readFileSync(candidate, 'utf8');
    return value(source, 'sourceNumber') === 123;
  });
  const source = readFileSync(file, 'utf8');
  assert.equal(value(source, 'title'), 'Il mio smartphone è ancora supportato? Come verificare il ciclo degli aggiornamenti e del supporto di sicurezza Android');
  assert.equal(path.basename(file, '.md'), 'il-mio-smartphone-e-ancora-supportato-come-verificare-il-ciclo-degli-aggiornamenti-e-del');
  assert.equal(value(source, 'locale'), 'it');
  assert.ok(!expectedMetaTitles.has('it:123'));
});

test('prioriteettipilotin locale-profiilit pysyvät yksiselitteisinä', () => {
  assert.deepEqual(Object.values(profileByLocale).sort(), ['da-DK', 'de-DE', 'es-ES', 'fi-FI', 'fr-FR', 'nb-NO', 'sv-SE']);
});
