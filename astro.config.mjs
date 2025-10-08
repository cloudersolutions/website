// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import yaml from '@rollup/plugin-yaml';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import embeds from 'astro-embed/integration';

// https://astro.build/config
export default defineConfig({
  prefetch: {
    prefetchAll: true
  },
  site: 'https://cloudersolutions.com',
  vite: {
    plugins: [yaml(), tailwindcss()]
  },
  server: {
    open: true,
    port: 3000,
    host: true
  },
  integrations: [
    sitemap(),
    embeds({ services: { LinkPreview: true, BlueskyPost: false, Tweet: false } }),
    mdx()
  ]
});
