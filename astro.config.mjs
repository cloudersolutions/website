// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import yaml from '@rollup/plugin-yaml';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  prefetch: {
    prefetchAll: true
  },
  site: 'https://cloudersolutions.com',
  integrations: [
    sitemap({
      serialize(item) {
        if (/general-terms-and-conditions/.test(item.url)) {
          return undefined;
        }
        return item;
      }
    })
  ],
  vite: {
    plugins: [yaml(), tailwindcss()]
  },
  server: {
    open: true,
    port: 3000,
    host: true
  }
});
