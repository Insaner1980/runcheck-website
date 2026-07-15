import { ARTICLE_LOCALE_CONTRACTS } from './articleLocaleConfig.mjs';

export const articleSlugFromId = (id) => id.split('/').at(-1).replace(/\.mdx?$/, '');

export const LOCALIZED_ARTICLE_HUB_SLUGS = Object.freeze(Object.fromEntries(
  Object.entries(ARTICLE_LOCALE_CONTRACTS)
    .filter(([, item]) => item.hubSlugs)
    .map(([locale, item]) => [locale, item.hubSlugs]),
));

export const ARTICLE_LOCALE_ROOTS = Object.freeze(Object.fromEntries(
  Object.entries(ARTICLE_LOCALE_CONTRACTS).map(([locale, item]) => [locale, item.root]),
));

export const articleHubPath = (hub, locale = 'en') => {
  if (locale !== 'en') {
    const localizedHub = LOCALIZED_ARTICLE_HUB_SLUGS[locale]?.[hub];
    if (!localizedHub) throw new Error(`Article hub path is missing for ${locale}/${hub}.`);
    return `${ARTICLE_LOCALE_ROOTS[locale]}${localizedHub}/`;
  }

  return `/articles/${hub}/`;
};

export const articlePath = (hub, id, locale = 'en') =>
  `${articleHubPath(hub, locale)}${articleSlugFromId(id)}/`;
