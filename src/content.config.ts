import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { categoryValues } from '@utils/content';

const news = defineCollection({
  loader: glob({ base: './src/content/news', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      category: z.enum(categoryValues).optional(),
      author: z
        .string()
        .optional()
        .transform((val) => {
          if (!val) return undefined;
          // Strip .yml extension that Pages CMS adds to references
          return val.replace(/\.yml$/, '');
        })
        .pipe(reference('authors').optional()),
      showAuthorDetails: z.boolean().optional(),
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
      description: z.string().optional(),
      image: image().optional()
    })
});

export const collections = { news, authors };
