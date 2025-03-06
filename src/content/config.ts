import { defineCollection, z } from 'astro:content';

const news = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      cover: image(),
      draft: z.boolean().optional()
    })
});

export const collections = { news };
