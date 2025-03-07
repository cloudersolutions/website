// @ts-check
import { defineConfig } from 'astro/config';
import yaml from '@rollup/plugin-yaml';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [yaml()]
  },
  server: {
    open: true
  },
  experimental: {
    svg: true
  }
});
