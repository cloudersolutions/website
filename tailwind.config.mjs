import typography from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,md,ts}'],
  theme: {
    extend: {
      typography: () => ({
        DEFAULT: {
          css: {
            lineHeight: '1.625',
            maxWidth: '70ch',
            blockquote: {
              marginTop: '2rem',
              marginBottom: '2rem',
              border: 'none',
              padding: 0,
              lineHeight: '1.5'
            },
            'blockquote p:first-of-type': {
              fontSize: '1.125rem',
              fontWeight: '550',
              textIndent: '-0.45em'
            },
            'blockquote p:first-of-type::before': {
              content: 'open-quote'
            },
            'blockquote p:first-of-type::after': {
              content: 'close-quote'
            },
            'blockquote p:last-of-type::after': {
              content: false
            },
            'blockquote p:last-of-type:not(p:only-child)': {
              color: 'var(--tw-prose-captions)',
              fontStyle: 'normal',
              fontSize: '0.875rem',
              fontWeight: '450',
              marginTop: '-0.4rem',
              marginBottom: 0
            },
            'blockquote p:last-of-type:not(p:only-child)::before': {
              content: '"— "'
            },
            img: {
              borderRadius: '0.25rem',
              backgroundColor: 'color-mix(in oklab, var(--color-neutral-500) 10%, transparent)',
              color: 'transparent'
            },
            // Fix for CMS/TipTap/ProseMirror markdown lists. ProseMirror wraps list item content in a paragrap tag, which messes up spacing.
            'li > p': {
              marginTop: 0,
              marginBottom: 0
            }
          }
        },
        neutral: {
          css: {
            '--tw-prose-body': 'var(--color-neutral-800)',
            '--tw-prose-bullets': 'var(--color-neutral-800)',
            '--tw-prose-headings': 'var(--color-neutral-950)',
            '--tw-prose-bold': 'var(--color-neutral-900)',
            '--tw-prose-quotes': 'var(--color-neutral-900)',
            '--tw-prose-captions': 'var(--color-neutral-500)',
            '--tw-prose-links': 'var(--color-indigo-500)',
            '--tw-prose-links-hover': 'var(--color-indigo-700)',
            '--tw-prose-invert-body': 'var(--color-neutral-200)',
            '--tw-prose-invert-bullets': 'var(--color-neutral-200)',
            '--tw-prose-invert-headings': 'var(--color-neutral-50)',
            '--tw-prose-invert-bold': 'var(--color-neutral-100)',
            '--tw-prose-invert-quotes': 'var(--color-neutral-100)',
            '--tw-prose-invert-captions': 'var(--color-neutral-500)',
            '--tw-prose-invert-links': 'var(--color-indigo-400)',
            '--tw-prose-invert-links-hover': 'var(--color-indigo-300)',
            'h1, h2, h3, h4, h5, h6': {
              fontWeight: '600'
            },
            h1: {
              marginBottom: '0.666667em'
            },
            h2: {
              marginTop: '1.8em',
              marginBottom: '0.8em'
            },
            strong: {
              fontWeight: '600'
            },
            a: {
              fontWeight: '400',
              textUnderlineOffset: '2px',
              '&:hover': {
                color: 'var(--tw-prose-links-hover)'
              }
            }
          }
        },
        invert: {
          css: {
            '--tw-prose-links-hover': 'var(--tw-prose-invert-links-hover)'
          }
        }
      })
    }
  },
  plugins: [typography, forms]
};
