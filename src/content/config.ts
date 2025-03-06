import { defineCollection, z } from 'astro:content';

const news = defineCollection({
  schema: ({ image }) =>
    z.object({
      isDraft: z.boolean(),
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      cover: image()
    })
});

export const collections = { news };
