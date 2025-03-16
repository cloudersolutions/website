/// <reference types="astro/client" />

interface NavItem {
  title: string;
  href: string;
}

declare module '@data/navigation.yml' {
  interface NavData {
    [section: string]: Record<string, NavItem>;
  }
  const value: NavData;
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
