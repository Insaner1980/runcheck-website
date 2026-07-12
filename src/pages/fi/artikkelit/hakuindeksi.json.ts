import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

import { ARTICLE_HUBS_FI } from '../../../data/articleTaxonomy.fi.mjs';
import { buildSearchIndex } from '../../../data/searchIndex.mjs';

export const GET: APIRoute = async () => {
  const entries = await getCollection('articles', ({ data }) => data.locale === 'fi');
  const hubTitles = new Map(ARTICLE_HUBS_FI.map((hub) => [hub.slug, hub.title]));
  const index = buildSearchIndex(entries, { locale: 'fi', hubTitles });

  return new Response(JSON.stringify(index), {
    headers: { 'Content-Type': 'application/json' },
  });
};
