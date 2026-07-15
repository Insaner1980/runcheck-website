import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { ARTICLE_SOURCE_LOCALE_CODES } from './data/articleLocaleConfig.mjs';

const articleLocaleValues = [...ARTICLE_SOURCE_LOCALE_CODES] as [string, ...string[]];

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    metaTitle: z.string().optional(),
    description: z.string(),
    metaDescription: z.string().optional(),
    listSummary: z.string().optional(),
    hub: z.enum([
      'battery',
      'charging',
      'thermal',
      'network',
      'storage',
      'performance',
      'hardware',
      'software',
      'physical-damage',
      'device-health',
      'buying-selling',
      'myths',
      'brands',
    ]),
    sourceNumber: z.number().int().min(1).max(160),
    order: z.number().int().min(1),
    subgroup: z.string().optional(),
    tags: z.array(z.string()).default([]),
    locale: z.enum(articleLocaleValues).default('en'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles };
