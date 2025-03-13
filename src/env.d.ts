/// <reference types="astro/client" />

declare module '@data/navigation.yml' {
  import type { NavItem } from '@data/types';
  const value: MenuItem[];
  export default value;
}

declare module '@data/site.yml' {
  interface SiteData {
    [key: string]: string;
    social: NavItem[];
  }
  const value: SiteData;
  export default value;
}
