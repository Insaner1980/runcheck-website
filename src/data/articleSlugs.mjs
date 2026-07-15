const MAX_ARTICLE_SLUG_LENGTH = 90;

const SLUG_WORDS = Object.freeze({
  en: { percent: 'percent', and: 'and' },
  fi: { percent: 'prosenttia', and: 'ja' },
  sv: { percent: 'procent', and: 'och' },
  nb: { percent: 'prosent', and: 'og' },
  da: { percent: 'procent', and: 'og' },
  de: { percent: 'prozent', and: 'und' },
  fr: { percent: 'pour cent', and: 'et' },
  es: { percent: 'por ciento', and: 'y' },
  it: { percent: 'per cento', and: 'e' },
  pt: { percent: 'por cento', and: 'e' },
});

const TRAILING_STOPWORDS = Object.freeze({
  en: new Set(['a', 'an', 'and', 'at', 'by', 'for', 'from', 'in', 'of', 'on', 'or', 'the', 'to', 'with']),
  fi: new Set(['ja', 'joka', 'kun', 'kuin', 'sekä', 'tai']),
  sv: new Set(['att', 'av', 'eller', 'en', 'ett', 'för', 'från', 'i', 'med', 'och', 'om', 'på', 'som', 'till']),
  nb: new Set(['av', 'eller', 'en', 'et', 'for', 'fra', 'i', 'med', 'og', 'om', 'på', 'som', 'til']),
  da: new Set(['af', 'at', 'eller', 'en', 'et', 'for', 'fra', 'i', 'med', 'og', 'om', 'på', 'som', 'til']),
  de: new Set(['auf', 'aus', 'bei', 'das', 'der', 'die', 'ein', 'eine', 'für', 'im', 'in', 'mit', 'oder', 'und', 'von', 'zu']),
  fr: new Set(['à', 'au', 'aux', 'avec', 'de', 'des', 'du', 'en', 'et', 'la', 'le', 'les', 'ou', 'par', 'pour', 'sur', 'un', 'une']),
  es: new Set(['a', 'al', 'con', 'de', 'del', 'el', 'en', 'la', 'las', 'los', 'o', 'para', 'por', 'un', 'una', 'y']),
  it: new Set(['a', 'al', 'alla', 'con', 'da', 'dal', 'dalla', 'di', 'e', 'il', 'in', 'la', 'le', 'lo', 'o', 'per', 'su', 'un', 'una']),
  pt: new Set(['a', 'ao', 'com', 'da', 'das', 'de', 'do', 'dos', 'e', 'em', 'o', 'ou', 'para', 'por', 'um', 'uma']),
});

const ARTICLE_SLUG_OVERRIDES = Object.freeze({
  fi: { 160: 'samsung-diagnostiikkavalikko-kattava-opas' },
  sv: { 113: 'android-servicekoder-per-marke-vilka-fungerar-fortfarande' },
  nb: { 113: 'android-servicekoder-etter-merke-hvilke-fungerer-fortsatt' },
  de: { 113: 'android-servicecodes-nach-marke-welche-noch-funktionieren' },
  da: { 113: 'android-servicekoder-efter-maerke-hvilke-virker-stadig' },
  fr: { 113: 'codes-de-maintenance-android-par-marque' },
  es: {
    113: 'codigos-de-mantenimiento-android-por-marca',
    123: 'soporte-actualizaciones-seguridad-movil-android',
  },
  it: { 113: 'codici-di-servizio-android-per-marca-quali-funzionano-ancora' },
});

const normalizePercentExpressions = (title, locale, percentWord) => {
  if (locale !== 'fi') {
    return title.replaceAll('%', ` ${percentWord} `);
  }

  return title
    .replaceAll('%:ssa', ' prosentissa ')
    .replaceAll('%:iin', ' prosenttiin ')
    .replaceAll('%', ` ${percentWord} `);
};

const asciiWords = (value) => value
  .normalize('NFD')
  .replaceAll(/[\u0300-\u036f]/g, '')
  .replaceAll('ß', 'ss')
  .replaceAll('æ', 'ae')
  .replaceAll('œ', 'oe')
  .replaceAll('ø', 'o')
  .toLowerCase()
  .split(/[^a-z0-9]+/)
  .filter(Boolean);

const fitWholeWords = (words, maxLength) => {
  const fitted = [];
  for (const word of words) {
    const nextLength = fitted.length === 0 ? word.length : fitted.join('-').length + word.length + 1;
    if (nextLength > maxLength) break;
    fitted.push(word);
  }
  return fitted;
};

export function localizedSeoSlug(title, locale, sourceNumber, maxLength = MAX_ARTICLE_SLUG_LENGTH) {
  const override = ARTICLE_SLUG_OVERRIDES[locale]?.[sourceNumber];
  if (override) return override;

  const slugWords = SLUG_WORDS[locale] ?? SLUG_WORDS.en;
  const normalized = normalizePercentExpressions(title, locale, slugWords.percent)
    .replaceAll('&', ` ${slugWords.and} `);
  const words = asciiWords(normalized);
  const fitted = fitWholeWords(words, maxLength);
  const wasTruncated = fitted.length < words.length;

  if (wasTruncated) {
    const stopwords = TRAILING_STOPWORDS[locale] ?? TRAILING_STOPWORDS.en;
    while (fitted.length > 1 && stopwords.has(fitted.at(-1))) fitted.pop();
  }

  const slug = fitted.join('-');
  if (!slug) throw new Error(`Article title did not produce a slug for locale ${locale}.`);
  return slug;
}

export const ARTICLE_SLUG_MAX_LENGTH = MAX_ARTICLE_SLUG_LENGTH;
