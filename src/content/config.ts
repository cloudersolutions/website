import { defineCollection, z } from 'astro:content';

// Match with .pages.yml
export const categories = [
  'case-example',
  'company-news',
  'general',
  'press-release',
  'product-updates'
] as const;

const news = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      category: z.enum(categories),
      cover: image(),
      draft: z.boolean().optional()
    })
});

export const collections = { news };
