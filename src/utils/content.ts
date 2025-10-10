export function filterDrafts(entry: { data: Record<string, unknown> }): boolean {
  const isProduction = import.meta.env.PROD && process.env.CONTEXT === 'production';
  // Only filter if 'draft' is present; otherwise, always include
  if ('draft' in entry.data) {
    return isProduction ? !entry.data.draft : true;
  }
  return true;
}
