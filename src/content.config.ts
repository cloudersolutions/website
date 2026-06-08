import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Match with .pages.yml
export const categories = ['case-study', 'company-news', 'insights', 'press', 'product'] as const;
export type Category = (typeof categories)[number];

const news = defineCollection({
  loader: glob({ base: './src/content/news', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      category: z.enum(categories).optional(),
      author: z.string().optional(),
      authorDetails: reference('authors').optional(),
      cover: image(),
      coverAlt: z.string(),
      callout: z
        .object({
          company: z.string(),
          value: z.string(),
          label: z.string(),
          quote: z.string(),
          name: z.string(),
          title: z.string()
        })
        .optional(),
      draft: z.boolean().optional()
    })
});

const authors = defineCollection({
  loader: glob({ base: './src/content/authors', pattern: '**/*.yml' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      title: z.string(),
      bio: z.string(),
      image: image()
    })
});

export const collections = { news, authors };
