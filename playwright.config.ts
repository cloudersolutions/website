import { defineConfig } from '@playwright/test';

export default defineConfig({
  webServer: {
    command: 'npm run build && npm run preview',
    port: 3001
  },
  use: {
    locale: 'en-US',
    timezoneId: 'Etc/UTC'
  },
  testDir: 'e2e',
  timeout: 10000
});
