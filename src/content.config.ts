import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Match with .pages.yml
export const categories = ['case-example', 'company-news', 'insights', 'press', 'product'] as const;
export type Category = (typeof categories)[number];

const news = defineCollection({
  loader: glob({ base: './src/content/news', pattern: '**/*.{md,mdx}' }),
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
