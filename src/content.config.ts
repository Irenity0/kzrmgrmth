// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Import Zod
import { z } from 'astro/zod';

const paintings = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    slug: z.string(),
  }),
});

export const collections = {
  paintings,
};