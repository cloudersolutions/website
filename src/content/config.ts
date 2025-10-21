import { defineCollection, z } from 'astro:content';

// Match with .pages.yml
export const categories = ['case-example', 'company-news', 'insights', 'press', 'product'] as const;

export const categoryLabels: Record<(typeof categories)[number], string> = {
  'case-example': 'Case example',
  'company-news': 'Company news',
  insights: 'Industry insights',
  press: 'Press release',
  product: 'Product update'
};

const news = defineCollection({
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
