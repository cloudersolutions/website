// @ts-check
import { defineConfig } from 'astro/config';
import yaml from '@rollup/plugin-yaml';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: process.env.URL,
  vite: {
    plugins: [yaml(), tailwindcss()]
  },
  server: {
    open: true,
    port: 3000,
    host: true
  },
  experimental: {
    svg: true
  }
});
