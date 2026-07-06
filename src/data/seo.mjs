export const SITE_NAME = 'runcheck';
export const DEFAULT_SEO_IMAGE_ALT = 'runcheck app logo';
export const DEFAULT_SEO_IMAGE = '/runcheck-phone-diagnostics-og-image.webp';
export const DEFAULT_SEO_IMAGE_HEIGHT = 630;
export const DEFAULT_SEO_IMAGE_TYPE = 'image/webp';
export const DEFAULT_SEO_IMAGE_WIDTH = 1200;
export const DEFAULT_META_ROBOTS = 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1';
export const THEME_COLOR = '#030708';

const DEFAULT_META_DESCRIPTION_MAX = 170;
const MIN_USEFUL_SENTENCE_LENGTH = 70;

export const absoluteUrl = (path, site) => new URL(path, site).toString();

export function normalizeMetaDescription(description, { maxLength = DEFAULT_META_DESCRIPTION_MAX } = {}) {
  const clean = description.replace(/\s+/g, ' ').trim();

  if (clean.length <= maxLength) {
    return clean;
  }

  const sentences = clean.split(/(?<=[.!?])\s+/);
  let candidate = '';

  for (const sentence of sentences) {
    const next = candidate ? `${candidate} ${sentence}` : sentence;
    if (next.length > maxLength) {
      break;
    }
    candidate = next;
  }

  if (candidate.length >= MIN_USEFUL_SENTENCE_LENGTH) {
    return candidate;
  }

  const firstSentence = sentences[0] ?? clean;
  if (firstSentence.length >= MIN_USEFUL_SENTENCE_LENGTH && firstSentence.length <= maxLength) {
    return firstSentence;
  }

  const truncated = clean.slice(0, maxLength + 1).replace(/\s+\S*$/, '').replace(/[-,:;]\s*$/, '');
  return `${truncated}.`;
}

export function buildWebSiteJsonLd({ site }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: absoluteUrl('/', site),
    inLanguage: 'en',
  };
}

export function buildWebPageJsonLd({ title, description, canonicalUrl, site }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url: canonicalUrl,
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: absoluteUrl('/', site),
    },
    inLanguage: 'en',
  };
}

export function buildBreadcrumbJsonLd(items, site) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path, site),
    })),
  };
}

export const serializeJsonLd = (data) => JSON.stringify(data).replaceAll('<', '\\u003c');
