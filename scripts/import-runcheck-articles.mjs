import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { existsSync, readdirSync } from 'node:fs';
import path from 'node:path';

import { articleHubBySlugFi } from '../src/data/articleTaxonomy.fi.mjs';
import { ARTICLE_HUBS, articleNumberToHub } from '../src/data/articleTaxonomy.mjs';

const localeArg = process.argv.find((argument) => argument.startsWith('--locale='));
const locale = localeArg?.split('=')[1] ?? 'en';
const LOCALE_SOURCES = Object.freeze({
  en: 'Valmiit', fi: 'fi-FI', sv: 'sv-SE', nb: 'nb-NO', de: 'de-DE', da: 'da-DK', fr: 'fr-FR', es: 'es-ES',
});
if (!Object.hasOwn(LOCALE_SOURCES, locale)) {
  throw new Error(`Unsupported article locale: ${locale}`);
}

const sourceRoot = `C:/Users/emmah/Documents/ObsidianVault/Projects/Active/runcheck/artikkelit/${LOCALE_SOURCES[locale]}`;
const contentRoot = path.resolve('src/content/articles');
const generatedRoot = locale === 'en' ? contentRoot : path.join(contentRoot, locale);
const workspaceRoot = path.resolve('.');
const FINNISH_DESCRIPTION_OVERRIDES = new Map([
  [68, 'Miksi Android-puhelin voi tuntua hitaalta päivityksen jälkeen, milloin se on normaalia ja mitä tehdä, jos suorituskyky ei palaudu.'],
  [69, 'Mitkä Androidin Developer Options -asetukset voivat saada puhelimen tuntumaan nopeammalta, mitkä ovat riskialttiita ja mitkä kannattaa jättää rauhaan.'],
]);
const FINNISH_META_TITLE_OVERRIDES = new Map([
  [1, 'Android-puhelimen kuntotarkistus | runcheck'],
  [8, 'Android-puhelimen huoltotarkistuslista'],
  [11, 'Android-puhelimen akun kunnon tarkistus'],
  [21, 'Miksi puhelimen akku tyhjenee nopeasti?'],
  [53, 'Android-puhelin ylikuumenee: syyt ja lämpötilan tarkistus'],
  [69, 'Androidin Developer Options ja suorituskyky'],
  [70, 'Android-puhelimen käynnistäminen vikasietotilaan'],
  [87, 'Tallennustila täynnä ilman syytä: Android-ratkaisut'],
  [100, 'Wi-Fi-puhelut: mitä ne ovat ja milloin niitä käytetään'],
  [104, 'Android-puhelimen laitteiston testausopas (2026)'],
  [123, 'Onko Android-puhelimesi yhä tuettu?'],
  [130, 'Vikasietotila vai tehdasasetusten palautus?'],
  [139, 'AccuBattery vs DevCheck vs runcheck: diagnostiikkavertailu'],
  [140, 'Puhelimen kuntotarkistussovellukset'],
  [159, 'Xiaomin CIT-valikko: Xiaomi-, Redmi- ja POCO-testit'],
]);

const getMarkdownFiles = (root) =>
  readdirSync(root, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(root, entry.name);
    if (entry.isDirectory()) {
      return getMarkdownFiles(fullPath);
    }

    return entry.isFile() && entry.name.endsWith('.md') ? [fullPath] : [];
  });

const stripFrontmatter = (source) => {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) {
    return { frontmatter: '', body: source };
  }

  return {
    frontmatter: match[1],
    body: source.slice(match[0].length),
  };
};

const parseTags = (frontmatter) => {
  const tagsLine = frontmatter.match(/^tags:\s*\[(.*?)\]\s*$/m);
  if (!tagsLine) {
    return [];
  }

  return tagsLine[1]
    .split(',')
    .map((tag) => tag.trim().replace(/^['"]|['"]$/g, ''))
    .filter(Boolean);
};

const parseFrontmatterString = (frontmatter, key) => {
  const match = frontmatter.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'));
  if (!match) {
    return '';
  }

  return match[1].trim().replace(/^['"]|['"]$/g, '');
};

const stripMarkdown = (value) =>
  value
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/`(.*?)`/g, '$1')
    .replace(/\[(.*?)\]\((.*?)\)/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();

const extractMetaDescription = (body) => {
  const metaPattern = /^\s*(?:\*\*Meta description:\*\*|\*Meta description:|Meta description:)\s*(.+?)(?:\*)?\s*$/im;
  const match = body.match(metaPattern);
  if (!match) {
    return { description: '', body };
  }

  return {
    description: stripMarkdown(match[1]),
    body: body.replace(match[0], '').trimStart(),
  };
};

const extractTitle = (body, fileName) => {
  const match = body.match(/^#\s+(.+)$/m);
  if (!match) {
    throw new Error(`${fileName} is missing an H1 title.`);
  }

  return stripMarkdown(match[1]);
};

const removeFirstH1 = (body) => body.replace(/(^|\r?\n)#\s+.+\r?\n+/, '$1').trimStart();

const firstParagraph = (body) => {
  const cleaned = body
    .replace(/^---\s*$/gm, '')
    .split(/\r?\n\s*\r?\n/)
    .map((part) => part.trim())
    .find((part) => part && !part.startsWith('#') && !part.startsWith('|'));

  if (!cleaned) {
    return '';
  }

  return stripMarkdown(cleaned);
};

const firstLongParagraph = (body, excludedText = '') =>
  body
    .replace(/^---\s*$/gm, '')
    .split(/\r?\n\s*\r?\n/)
    .map((part) => stripMarkdown(part))
    .find((part) => part.length >= 70 && normalizedText(part) !== normalizedText(excludedText)) ?? '';

const normalizedText = (value) => stripMarkdown(value).replace(/\s+/g, ' ').trim();

const buildLocalizedListSummary = (description, title, tags, locale) => {
  const clean = normalizedText(description);
  const sentences = clean.split(/(?<=[.!?])\s+/);
  const candidate = sentences.find((sentence) => normalizedText(sentence) !== normalizedText(title)) ?? clean;
  if (candidate.length <= 110) {
    return candidate.trim();
  }

  return new Intl.ListFormat(locale, { style: 'long', type: 'conjunction' }).format(tags.slice(0, 3));
};

const removeLeadingDuplicateDescription = (body, description) => {
  const trimmed = body.trimStart();
  const match = trimmed.match(/^([\s\S]*?)(?:\r?\n\s*\r?\n|$)/);
  const paragraph = match?.[1]?.trim() ?? '';

  if (paragraph && normalizedText(paragraph) === normalizedText(description)) {
    return trimmed.slice(match[0].length).trimStart();
  }

  return body;
};

const findSectionTitle = (hub, sourceNumber) => {
  const section = hub.sections?.find((candidate) => candidate.sourceNumbers.includes(sourceNumber));
  return section?.title;
};

const formatFrontmatter = (data) =>
  [
    '---',
    `title: ${JSON.stringify(data.title)}`,
    ...(data.metaTitle ? [`metaTitle: ${JSON.stringify(data.metaTitle)}`] : []),
    `description: ${JSON.stringify(data.description)}`,
    ...(data.metaDescription ? [`metaDescription: ${JSON.stringify(data.metaDescription)}`] : []),
    ...(data.listSummary ? [`listSummary: ${JSON.stringify(data.listSummary)}`] : []),
    `hub: ${JSON.stringify(data.hub)}`,
    `sourceNumber: ${data.sourceNumber}`,
    `order: ${data.order}`,
    ...(data.subgroup ? [`subgroup: ${JSON.stringify(data.subgroup)}`] : []),
    `tags: ${JSON.stringify(data.tags)}`,
    `locale: ${JSON.stringify(data.locale)}`,
    'draft: false',
    '---',
    '',
  ].join('\n');

const sourceNumberFromPath = (file) => {
  const match = path.basename(file).match(/^(\d+)-/);
  if (!match) {
    throw new Error(`${file} is missing a numeric prefix.`);
  }

  return Number(match[1]);
};

async function collectSourceFiles() {
  const sourceByNumber = new Map();
  const candidates = getMarkdownFiles(sourceRoot).sort((a, b) => a.localeCompare(b));

  for (const file of candidates) {
    const sourceNumber = sourceNumberFromPath(file);
    const existing = sourceByNumber.get(sourceNumber);
    if (existing && (await readFile(existing, 'utf8')) !== (await readFile(file, 'utf8'))) {
      throw new Error(`Article ${sourceNumber} has conflicting duplicate translations in ${sourceRoot}.`);
    }
    sourceByNumber.set(sourceNumber, existing ?? file);
  }

  return sourceByNumber;
}

function assertCompleteSourceSet(sourceByNumber) {
  const expectedNumbers = Array.from({ length: 160 }, (_, index) => index + 1);
  const actualMissing = expectedNumbers.filter((number) => !sourceByNumber.has(number));
  if (actualMissing.length > 0) {
    throw new Error(`Missing article numbers for ${locale}: ${actualMissing.join(',')}.`);
  }
}

async function readExistingArticleMetadata() {
  const metadata = new Map();
  if (!existsSync(generatedRoot)) {
    return metadata;
  }

  for (const generatedFile of getMarkdownFiles(generatedRoot)) {
    const { frontmatter } = stripFrontmatter(await readFile(generatedFile, 'utf8'));
    const sourceNumber = Number(parseFrontmatterString(frontmatter, 'sourceNumber'));
    const existingLocale = parseFrontmatterString(frontmatter, 'locale') || 'en';
    if (Number.isInteger(sourceNumber) && existingLocale === locale) {
      metadata.set(sourceNumber, {
        listSummary: parseFrontmatterString(frontmatter, 'listSummary'),
        metaTitle: parseFrontmatterString(frontmatter, 'metaTitle'),
        metaDescription: parseFrontmatterString(frontmatter, 'metaDescription'),
      });
    }
  }

  return metadata;
}

async function prepareGeneratedRoot() {
  if (!generatedRoot.startsWith(workspaceRoot)) {
    throw new Error(`Refusing to write outside workspace: ${generatedRoot}`);
  }

  if (locale !== 'en') {
    await rm(generatedRoot, { recursive: true, force: true });
  } else {
    await Promise.all(ARTICLE_HUBS.map((hub) => rm(path.join(generatedRoot, hub.slug), { recursive: true, force: true })));
  }

  await Promise.all(ARTICLE_HUBS.map((hub) => mkdir(path.join(generatedRoot, hub.slug), { recursive: true })));
}

async function generateArticle(sourceFile, existingArticleMetadata, generatedSlugs) {
  const sourceName = path.basename(sourceFile);
  const sourceNumber = Number(sourceName.match(/^(\d+)-/)?.[1]);
  const hub = articleNumberToHub.get(sourceNumber);
  if (!hub) {
    throw new Error(`Article ${sourceNumber} is not assigned to a hub.`);
  }

  const order = hub.sourceNumbers.indexOf(sourceNumber) + 1;
  const raw = await readFile(sourceFile, 'utf8');
  const { frontmatter, body } = stripFrontmatter(raw);
  const extractedTitle = parseFrontmatterString(frontmatter, 'title') || extractTitle(body, sourceName);
  const title = locale === 'fi' && sourceNumber === 113
    ? 'Androidin huoltokoodit merkeittäin: mitkä toimivat edelleen'
    : extractedTitle;
  const sourceMetaTitle = parseFrontmatterString(frontmatter, 'metaTitle');
  const explicitDescription = parseFrontmatterString(frontmatter, 'description');
  const sourceMetaDescription = parseFrontmatterString(frontmatter, 'metaDescription');
  const sourceListSummary = parseFrontmatterString(frontmatter, 'listSummary');
  const tags = localizeTags(parseTags(frontmatter), locale);
  const existingMetadata = existingArticleMetadata.get(sourceNumber) ?? {};
  const metaTitle = locale === 'fi'
    ? FINNISH_META_TITLE_OVERRIDES.get(sourceNumber) ?? sourceMetaTitle
    : sourceMetaTitle || existingMetadata.metaTitle || '';
  const preservedMetaDescription = locale === 'fi' ? sourceMetaDescription : sourceMetaDescription || existingMetadata.metaDescription || '';
  const withoutTitle = removeFirstH1(body);
  const meta = extractMetaDescription(withoutTitle);
  const sourceDescription = explicitDescription || meta.description || firstParagraph(meta.body);
  const description = locale === 'fi'
    ? FINNISH_DESCRIPTION_OVERRIDES.get(sourceNumber) ?? sourceDescription
    : sourceDescription;
  const listSummary = locale === 'en'
    ? sourceListSummary || existingMetadata.listSummary || ''
    : sourceListSummary || buildLocalizedListSummary(description, title, tags, locale);
  const metaDescription = preservedMetaDescription || (
    locale === 'fi' && description.length < 70 ? firstLongParagraph(meta.body, description) : ''
  );

  if (!description) {
    throw new Error(`${sourceName} does not contain enough text to derive a description.`);
  }

  const bodyWithoutDuplicateDescription = removeLeadingDuplicateDescription(meta.body, sourceDescription);
  const slug = locale !== 'en'
    ? localizedSeoSlug(title, locale, sourceNumber)
    : sourceName.replace(/^\d+-/, '').replace(/\.md$/, '');
  const slugKey = `${hub.slug}/${slug}`;
  if (generatedSlugs.has(slugKey)) {
    throw new Error(`Duplicate generated article slug: ${slugKey}`);
  }
  generatedSlugs.add(slugKey);
  const localizedHub = locale === 'fi' ? articleHubBySlugFi.get(hub.slug) : hub;
  const targetPath = path.join(generatedRoot, hub.slug, `${slug}.md`);
  const normalized = `${formatFrontmatter({
    title,
    metaTitle,
    description,
    metaDescription,
    listSummary,
    hub: hub.slug,
    sourceNumber,
    order,
    subgroup: findSectionTitle(localizedHub, sourceNumber),
    tags,
    locale,
  })}${bodyWithoutDuplicateDescription.trimStart()}`;

  await writeFile(targetPath, normalized.endsWith('\n') ? normalized : `${normalized}\n`, 'utf8');
}

async function importArticles() {
  const sourceByNumber = await collectSourceFiles();
  assertCompleteSourceSet(sourceByNumber);
  const existingArticleMetadata = await readExistingArticleMetadata();
  await prepareGeneratedRoot();

  const generatedSlugs = new Set();
  const sourceFiles = [...sourceByNumber.values()].sort((a, b) => sourceNumberFromPath(a) - sourceNumberFromPath(b));
  for (const sourceFile of sourceFiles) {
    await generateArticle(sourceFile, existingArticleMetadata, generatedSlugs);
  }
}

function localizedSeoSlug(title, locale, sourceNumber) {
  if (locale === 'fi' && sourceNumber === 160) {
    return 'samsung-diagnostiikkavalikko-kattava-opas';
  }

  const slugOverrides = {
    sv: { 113: 'android-servicekoder-per-marke-vilka-fungerar-fortfarande' },
    nb: { 113: 'android-servicekoder-etter-merke-hvilke-fungerer-fortsatt' },
    de: { 113: 'android-servicecodes-nach-marke-welche-noch-funktionieren' },
    da: { 113: 'android-servicekoder-efter-maerke-hvilke-virker-stadig' },
    fr: { 113: 'codes-de-maintenance-android-par-marque' },
    es: { 113: 'codigos-de-mantenimiento-android-por-marca' },
  };
  if (slugOverrides[locale]?.[sourceNumber]) {
    return slugOverrides[locale][sourceNumber];
  }

  const slugWords = SEO_SLUG_WORDS[locale] ?? SEO_SLUG_WORDS.en;
  const normalized = title
    .normalize('NFD')
    .replaceAll(/[\u0300-\u036f]/g, '')
    .replaceAll('ß', 'ss')
    .replaceAll('æ', 'ae')
    .replaceAll('œ', 'oe')
    .replaceAll('ø', 'o')
    .replaceAll('%:ssa', ' prosentissa')
    .replaceAll('%:iin', ' prosenttiin')
    .replaceAll('%', ` ${slugWords.percent} `)
    .replaceAll('&', ` ${slugWords.and} `)
    .toLowerCase();
  const slug = normalized.split(/[^a-z0-9]/).filter(Boolean).join('-');

  const maxLength = 90;
  if (slug.length <= maxLength) {
    return slug;
  }

  return slug.slice(0, maxLength).split('-').slice(0, -1).join('-');
}

const SEO_SLUG_WORDS = Object.freeze({
  en: { percent: 'percent', and: 'and' },
  fi: { percent: 'prosenttia', and: 'ja' },
  sv: { percent: 'procent', and: 'och' },
  nb: { percent: 'prosent', and: 'og' },
  de: { percent: 'prozent', and: 'und' },
  da: { percent: 'procent', and: 'og' },
  fr: { percent: 'pour cent', and: 'et' },
  es: { percent: 'por ciento', and: 'y' },
});

const TAG_TRANSLATIONS = {
  fi: { apps:'sovellukset', article:'artikkeli', battery:'akku', 'battery-tech':'akkutekniikka', 'brand-specific':'merkkikohtainen', 'buying-guide':'osto-opas', calibration:'kalibrointi', charging:'lataaminen', cleanup:'siivous', comparison:'vertailu', connectivity:'yhteydet', damage:'vauriot', debunking:'myytinmurtaminen', diagnostics:'diagnostiikka', drain:'virrankulutus', education:'opas', facts:'faktat', guide:'opas', hardware:'laitteisto', health:'kunto', malware:'haittaohjelmat', manufacturer:'valmistaja', myths:'myytit', network:'verkko', optimization:'optimointi', performance:'suorituskyky', permissions:'käyttöoikeudet', privacy:'yksityisyys', repair:'korjaaminen', review:'arvostelu', science:'tiede', security:'tietoturva', sensors:'anturit', software:'ohjelmisto', speed:'nopeus', storage:'tallennustila', temperature:'lämpötila', testing:'testaus', thermal:'kuumeneminen', tips:'vinkit', troubleshooting:'vianetsintä', updates:'päivitykset', value:'arvo' },
  sv: { apps:'appar', article:'artikel', battery:'batteri', 'battery-tech':'batteriteknik', 'brand-specific':'märkesspecifikt', 'buying-guide':'köpguide', calibration:'kalibrering', charging:'laddning', cleanup:'rensning', comparison:'jämförelse', connectivity:'anslutningar', damage:'skador', debunking:'mytgranskning', diagnostics:'diagnostik', drain:'batteriförbrukning', education:'guide', facts:'fakta', guide:'guide', hardware:'hårdvara', health:'hälsa', malware:'skadlig-programvara', manufacturer:'tillverkare', myths:'myter', network:'nätverk', optimization:'optimering', performance:'prestanda', permissions:'behörigheter', privacy:'integritet', repair:'reparation', review:'recension', science:'vetenskap', security:'säkerhet', sensors:'sensorer', software:'programvara', speed:'hastighet', storage:'lagring', temperature:'temperatur', testing:'testning', thermal:'värme', tips:'tips', troubleshooting:'felsökning', updates:'uppdateringar', value:'värde' },
  nb: { apps:'apper', article:'artikkel', battery:'batteri', 'battery-tech':'batteriteknologi', 'brand-specific':'merkespesifikt', 'buying-guide':'kjøpsguide', calibration:'kalibrering', charging:'lading', cleanup:'opprydding', comparison:'sammenligning', connectivity:'tilkobling', damage:'skader', debunking:'myteknusing', diagnostics:'diagnostikk', drain:'strømforbruk', education:'guide', facts:'fakta', guide:'guide', hardware:'maskinvare', health:'helse', malware:'skadevare', manufacturer:'produsent', myths:'myter', network:'nettverk', optimization:'optimalisering', performance:'ytelse', permissions:'tillatelser', privacy:'personvern', repair:'reparasjon', review:'anmeldelse', science:'vitenskap', security:'sikkerhet', sensors:'sensorer', software:'programvare', speed:'hastighet', storage:'lagring', temperature:'temperatur', testing:'testing', thermal:'varme', tips:'tips', troubleshooting:'feilsøking', updates:'oppdateringer', value:'verdi' },
  de: { apps:'apps', article:'artikel', battery:'akku', 'battery-tech':'akkutechnik', 'brand-specific':'markenspezifisch', 'buying-guide':'kaufratgeber', calibration:'kalibrierung', charging:'laden', cleanup:'bereinigung', comparison:'vergleich', connectivity:'verbindungen', damage:'schaden', debunking:'mythencheck', diagnostics:'diagnose', drain:'akkuverbrauch', education:'ratgeber', facts:'fakten', guide:'ratgeber', hardware:'hardware', health:'zustand', malware:'schadsoftware', manufacturer:'hersteller', myths:'mythen', network:'netzwerk', optimization:'optimierung', performance:'leistung', permissions:'berechtigungen', privacy:'datenschutz', repair:'reparatur', review:'test', science:'wissenschaft', security:'sicherheit', sensors:'sensoren', software:'software', speed:'geschwindigkeit', storage:'speicher', temperature:'temperatur', testing:'testen', thermal:'warme', tips:'tipps', troubleshooting:'fehlerbehebung', updates:'updates', value:'wert' },
  da: { apps:'apps', article:'artikel', battery:'batteri', 'battery-tech':'batteriteknologi', 'brand-specific':'mærkespecifikt', 'buying-guide':'købsguide', calibration:'kalibrering', charging:'opladning', cleanup:'oprydning', comparison:'sammenligning', connectivity:'forbindelser', damage:'skader', debunking:'myteaflivning', diagnostics:'diagnostik', drain:'strømforbrug', education:'guide', facts:'fakta', guide:'guide', hardware:'hardware', health:'tilstand', malware:'malware', manufacturer:'producent', myths:'myter', network:'netværk', optimization:'optimering', performance:'ydeevne', permissions:'tilladelser', privacy:'privatliv', repair:'reparation', review:'anmeldelse', science:'videnskab', security:'sikkerhed', sensors:'sensorer', software:'software', speed:'hastighed', storage:'lagerplads', temperature:'temperatur', testing:'test', thermal:'varme', tips:'tips', troubleshooting:'fejlfinding', updates:'opdateringer', value:'værdi' },
  fr: { apps:'applications', article:'article', battery:'batterie', 'battery-tech':'technologie-des-batteries', 'brand-specific':'specifique-a-la-marque', 'buying-guide':'guide-d-achat', calibration:'calibrage', charging:'recharge', cleanup:'nettoyage', comparison:'comparaison', connectivity:'connectivite', damage:'dommages', debunking:'demystification', diagnostics:'diagnostic', drain:'consommation', education:'guide', facts:'faits', guide:'guide', hardware:'materiel', health:'etat', malware:'logiciels-malveillants', manufacturer:'fabricant', myths:'mythes', network:'reseau', optimization:'optimisation', performance:'performances', permissions:'autorisations', privacy:'confidentialite', repair:'reparation', review:'test', science:'science', security:'securite', sensors:'capteurs', software:'logiciel', speed:'vitesse', storage:'stockage', temperature:'temperature', testing:'test', thermal:'thermique', tips:'conseils', troubleshooting:'depannage', updates:'mises-a-jour', value:'valeur' },
  es: { apps:'aplicaciones', article:'articulo', battery:'bateria', 'battery-tech':'tecnologia-de-baterias', 'brand-specific':'especifico-de-la-marca', 'buying-guide':'guia-de-compra', calibration:'calibracion', charging:'carga', cleanup:'limpieza', comparison:'comparacion', connectivity:'conectividad', damage:'danos', debunking:'desmitificacion', diagnostics:'diagnostico', drain:'consumo', education:'guia', facts:'datos', guide:'guia', hardware:'hardware', health:'estado', malware:'software-malicioso', manufacturer:'fabricante', myths:'mitos', network:'red', optimization:'optimizacion', performance:'rendimiento', permissions:'permisos', privacy:'privacidad', repair:'reparacion', review:'analisis', science:'ciencia', security:'seguridad', sensors:'sensores', software:'software', speed:'velocidad', storage:'almacenamiento', temperature:'temperatura', testing:'pruebas', thermal:'termico', tips:'consejos', troubleshooting:'solucion-de-problemas', updates:'actualizaciones', value:'valor' },
};

function localizeTags(tags, locale) {
  if (locale === 'en') return tags;
  const translations = TAG_TRANSLATIONS[locale];
  return [...new Set(tags.map((tag) => translations[tag] ?? tag))];
}

await importArticles();
