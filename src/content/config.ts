import { defineCollection, z } from 'astro:content';

const news = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      cover: image().default('images/post-fallback.png'),
      draft: z.boolean().optional(),
      featured: z.boolean().optional()
    })
});

export const collections = { news };
