import type { Category } from 'src/content.config';

export function filterDrafts(entry: { data: Record<string, unknown> }): boolean {
  const isProduction = import.meta.env.PROD && process.env.CONTEXT === 'production';
  // Only filter if 'draft' is present; otherwise, always include
  if ('draft' in entry.data) {
    return isProduction ? !entry.data.draft : true;
  }
  return true;
}

// Match with .pages.yml
export function getCategoryLabel(category: Category) {
  switch (category) {
    case 'case-example':
      return 'Case examples';
    case 'company-news':
      return 'Company news';
    case 'insights':
      return 'Industry insights';
    case 'press':
      return 'Press releases';
    case 'product':
      return 'Product updates';
    default:
      return category;
  }
}
