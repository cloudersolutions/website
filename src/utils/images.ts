import type { CollectionEntry } from 'astro:content';

type ImageImports = Record<string, { default: ImageMetadata }>;

const imageImports: ImageImports = import.meta.glob('/src/assets/*.{png,jpg,jpeg,webp,avif}', {
  eager: true
});

export function getImage(post: CollectionEntry<'news'>) {
  if (!post.data.image) return null;
  return imageImports[post.data.image]?.default || null;
}
