import type { CollectionEntry } from 'astro:content';

export function filterDrafts(entry: { data: Record<string, unknown> }): boolean {
  const isProduction = import.meta.env.PROD && process.env.CONTEXT === 'production';
  // Only filter if 'draft' is present; otherwise, always include
  if ('draft' in entry.data) {
    return isProduction ? !entry.data.draft : true;
  }
  return true;
}

export type PostWithCallout = CollectionEntry<'news'> & {
  data: CollectionEntry<'news'>['data'] & {
    callout: NonNullable<CollectionEntry<'news'>['data']['callout']>;
  };
};

export function hasCallout(post: CollectionEntry<'news'>): post is PostWithCallout {
  return post.data.category === 'case-study' && post.data.callout !== undefined;
}

// Match with .pages.yml
export const categories = [
  { value: 'case-study', label: 'Case study' },
  { value: 'company-news', label: 'Company news' },
  { value: 'insights', label: 'Industry insight' },
  { value: 'press', label: 'Press release' },
  { value: 'product', label: 'Product update' }
] as const;

export type CategoryValue = (typeof categories)[number]['value'];

export const categoryValues = categories.map((c) => c.value) as readonly CategoryValue[];

const categoryLabels = Object.fromEntries(categories.map((c) => [c.value, c.label])) as Record<
  CategoryValue,
  string
>;

export function getCategoryLabel(category: CategoryValue): string {
  return categoryLabels[category];
}
