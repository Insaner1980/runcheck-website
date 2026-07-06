import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

import { buildSearchIndex } from '../../data/searchIndex.mjs';

export const GET: APIRoute = async () => {
  const entries = await getCollection('articles');
  const index = buildSearchIndex(entries);

  return new Response(JSON.stringify(index), {
    headers: { 'Content-Type': 'application/json' },
  });
};
