export const SITE_NAME = 'runcheck';
export const DEFAULT_SEO_IMAGE_ALT = 'runcheck logo and wordmark';
export const DEFAULT_SEO_IMAGE = '/runcheck-search-thumbnail.webp';
export const DEFAULT_SEO_IMAGE_HEIGHT = 1200;
export const DEFAULT_SEO_IMAGE_TYPE = 'image/webp';
export const DEFAULT_SEO_IMAGE_WIDTH = 1200;
export const DEFAULT_META_ROBOTS = 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1';
export const ORGANIZATION_LOGO_IMAGE = '/runcheck-app-icon-512.webp';
export const THEME_COLOR = '#030708';

const DEFAULT_META_DESCRIPTION_MAX = 170;
const MIN_USEFUL_SENTENCE_LENGTH = 70;

export const absoluteUrl = (path, site) => new URL(path, site).toString();

function buildDefaultImageObject(site) {
  return {
    '@type': 'ImageObject',
    url: absoluteUrl(DEFAULT_SEO_IMAGE, site),
    width: DEFAULT_SEO_IMAGE_WIDTH,
    height: DEFAULT_SEO_IMAGE_HEIGHT,
  };
}

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

  const descriptionPrefix = clean.slice(0, maxLength + 1);
  const lastWordBoundary = descriptionPrefix.lastIndexOf(' ');
  const completeWords = lastWordBoundary < 0 ? descriptionPrefix : descriptionPrefix.slice(0, lastWordBoundary);
  const truncated = completeWords.replace(/[-,:;]$/, '');
  return `${truncated}.`;
}

export function buildWebSiteJsonLd({ site, language = 'en' }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: absoluteUrl('/', site),
    image: absoluteUrl(DEFAULT_SEO_IMAGE, site),
    inLanguage: language,
  };
}

export function buildOrganizationJsonLd({ site }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: absoluteUrl('/', site),
    logo: absoluteUrl(ORGANIZATION_LOGO_IMAGE, site),
    image: absoluteUrl(DEFAULT_SEO_IMAGE, site),
  };
}

export function buildWebPageJsonLd({ title, description, canonicalUrl, site, language = 'en' }) {
  const image = buildDefaultImageObject(site);

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url: canonicalUrl,
    image,
    primaryImageOfPage: image,
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: absoluteUrl('/', site),
    },
    inLanguage: language,
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

export const serializeJsonLd = (data) => JSON.stringify(data).replaceAll('<', String.raw`\u003c`);
