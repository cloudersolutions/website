import type { CollectionEntry } from 'astro:content';
import type { Category } from 'src/content.config';

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
export function getCategoryLabel(category: Category) {
  switch (category) {
    case 'case-study':
      return 'Case study';
    case 'company-news':
      return 'Company news';
    case 'insights':
      return 'Industry insight';
    case 'press':
      return 'Press release';
    case 'product':
      return 'Product update';
    default:
      return category;
  }
}
