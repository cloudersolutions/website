/// <reference types="astro/client" />

declare module '@data/navigation.yml' {
  import type { NavItem } from '@data/types';
  interface NavData {
    items: NavItem[];
  }
  const value: NavData;
  export default value;
}

declare module '@data/site.yml' {
  import type { NavItem } from '@data/types';
  interface SiteData {
    [key: string]: string;
    social: NavItem[];
  }
  const value: SiteData;
  export default value;
}
