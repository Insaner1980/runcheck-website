import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { ARTICLE_LOCALES, LOCALIZED_ARTICLE_LOCALES, localizedHubs } from '../../../data/articleLocales.mjs';
import { buildSearchIndex } from '../../../data/searchIndex.mjs';

export function getStaticPaths() {
  return LOCALIZED_ARTICLE_LOCALES.map((locale) => ({ params: { locale, articles: ARTICLE_LOCALES[locale].root.split('/').filter(Boolean)[1], searchIndex: ARTICLE_LOCALES[locale].searchIndex.split('/').at(-1).replace('.json', '') }, props: { locale } }));
}

export const GET: APIRoute = async ({ props }) => {
  const { locale } = props;
  const entries = await getCollection('articles', ({ data }) => data.locale === locale);
  const hubTitles = new Map(localizedHubs(locale).map((hub) => [hub.slug, hub.title]));
  return new Response(JSON.stringify(buildSearchIndex(entries, { locale, hubTitles })), { headers: { 'Content-Type': 'application/json' } });
};
