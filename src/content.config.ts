// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const paintings = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/paintings' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    slug: z.string(),
    image: z.string(),
    artist: z.string(),
  }),
});

export const collections = {paintings};