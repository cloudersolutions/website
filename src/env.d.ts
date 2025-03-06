/// <reference types="astro/client" />

declare module '@data/navigation.yml' {
  import type { NavItem } from '@data/types';
  const value: MenuItem[];
  export default value;
}

declare module '@data/metadata.yml' {
  const value: Record<string, string>;
  export default value;
}
