/// <reference types="astro/client" />

declare module '@data/config.yml' {
  interface SiteData {
    [key: string]: string;
  }
  const value: SiteData;
  export default value;
}
