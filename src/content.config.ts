import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['Battery', 'Thermal', 'Network', 'Storage', 'General']),
    publishDate: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles };
