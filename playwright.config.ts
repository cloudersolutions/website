import { defineConfig } from '@playwright/test';

export default defineConfig({
  webServer: {
    // astro >=7.3 backgrounds preview when it detects an AI agent; --ignore-lock keeps it in the foreground
    command: 'npm run build && npm run preview -- --ignore-lock',
    port: 3001
  },
  use: {
    locale: 'en-US',
    timezoneId: 'Etc/UTC'
  },
  testDir: 'e2e',
  timeout: 10000
});
