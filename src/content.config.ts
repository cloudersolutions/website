import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

// Match with .pages.yml
export const categories = ['case-example', 'company-news', 'insights', 'press', 'product'] as const;
export type Category = (typeof categories)[number];
export const categoryLabels: Record<Category, string> = {
  'case-example': 'Case example',
  'company-news': 'Company news',
  insights: 'Industry insights',
  press: 'Press release',
  product: 'Product update'
} as const;

const news = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/news' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      category: z.enum(categories),
      author: z.string().optional(),
      cover: image(),
      coverAlt: z.string(),
      draft: z.boolean().optional()
    })
});

export const collections = { news };
