/// <reference types="astro/client" />

interface NavItem {
  title: string;
  href: string;
}

declare module '@data/navigation.yml' {
  const value: Record<string, NavItem>;
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
