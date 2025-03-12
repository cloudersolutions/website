// @ts-check
import { defineConfig } from 'astro/config';
import yaml from '@rollup/plugin-yaml';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  //TODO: change to actual url
  site: 'https://clouderinuudetkottarit.vercel.app',
  vite: {
    plugins: [yaml(), tailwindcss()]
  },
  server: {
    open: true
  },
  experimental: {
    svg: true
  }
});
