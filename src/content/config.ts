import { defineCollection, z } from 'astro:content';

// Match with .pages.yml
export const categories = [
  'case-example',
  'company-news',
  'general',
  'press-release',
  'product-updates'
] as const;

export const categoryLabels: Record<(typeof categories)[number], string> = {
  'case-example': 'Case example',
  'company-news': 'Company news',
  general: 'General',
  'press-release': 'Press release',
  'product-updates': 'Product updates'
};

const news = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      category: z.enum(categories),
      cover: image(),
      coverAlt: z.string(),
      draft: z.boolean().optional()
    })
});

export const collections = { news };
