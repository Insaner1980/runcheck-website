import { articlePath } from './articlePaths.mjs';

export function buildSearchIndex(entries, { locale = 'en', hubTitles = new Map() } = {}) {
  return entries
    .filter((entry) => !entry.data.draft)
    .map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      hub: hubTitles.get(entry.data.hub) ?? entry.data.hub,
      tags: entry.data.tags ?? [],
      url: articlePath(entry.data.hub, entry.id, locale),
    }));
}

const articleScore = (item, query) => {
  const startsWord = (haystack) => haystack.startsWith(query) || haystack.includes(` ${query}`);
  const title = item.title.toLowerCase();
  const description = item.description.toLowerCase();
  const tags = item.tags.map((tag) => tag.toLowerCase());
  let score = 0;

  if (title.includes(query)) score += startsWord(title) ? 6 : 5;
  if (tags.some((tag) => tag.includes(query))) score += 3;
  if (description.includes(query)) score += startsWord(description) ? 2 : 1;

  return score;
};

export function searchArticles(index, query, { limit = 8 } = {}) {
  const q = query.trim().toLowerCase();
  if (q === '') {
    return [];
  }

  const scored = [];

  for (const item of index) {
    const score = articleScore(item, q);

    if (score > 0) {
      scored.push({ item, score });
    }
  }

  scored.sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title));

  return scored.slice(0, limit).map((entry) => entry.item);
}
