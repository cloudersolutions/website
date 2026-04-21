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
              border: 'none',
              fontStyle: 'normal',
              fontWeight: '400',
              marginBottom: '2rem',
              marginTop: '2rem',
              padding: 0
            },
            'blockquote em': {
              fontStyle: 'normal'
            },
            'blockquote p:first-of-type': {
              fontFamily: 'var(--font-serif)',
              fontSize: '1.25rem',
              lineHeight: '1.75rem',
              textIndent: '-0.45em',
              margin: 0,
              '@media (width >= 64rem)': {
                fontSize: '1.5rem',
                lineHeight: '2rem'
              }
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
              fontSize: '0.875rem',
              marginTop: '0.75rem',
              marginBottom: 0
            },
            'blockquote p:last-of-type:not(p:only-child)::before': {
              content: '"— "'
            },
            img: {
              backgroundColor: 'color-mix(in oklab, var(--color-neutral-500) 10%, transparent)',
              color: 'transparent'
            },
            iframe: {
              aspectRatio: '16/9',
              width: '100%',
              marginBlock: '2rem'
            },
            li: {
              marginTop: '0.25em',
              marginBottom: '0.25em'
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
            '--tw-prose-body': 'var(--color-neutral-900)',
            '--tw-prose-bullets': 'var(--color-neutral-900)',
            '--tw-prose-counters': 'var(--color-neutral-900)',
            '--tw-prose-bold': 'var(--color-neutral-900)',
            '--tw-prose-headings': 'var(--color-neutral-950)',
            '--tw-prose-quotes': 'var(--color-neutral-950)',
            '--tw-prose-captions': 'var(--color-neutral-500)',
            '--tw-prose-links': 'royalblue',
            '--tw-prose-links-hover': 'var(--color-blue-700)',
            '--tw-prose-invert-body': 'var(--color-neutral-100)',
            '--tw-prose-invert-bullets': 'var(--color-neutral-100)',
            '--tw-prose-invert-counters': 'var(--color-neutral-100)',
            '--tw-prose-invert-bold': 'var(--color-neutral-50)',
            '--tw-prose-invert-quotes': 'var(--color-neutral-50)',
            '--tw-prose-invert-headings': 'var(--color-neutral-50)',
            '--tw-prose-invert-captions': 'var(--color-neutral-500)',
            '--tw-prose-invert-links': 'var(--color-blue-400)',
            '--tw-prose-invert-links-hover': 'var(--color-blue-300)',
            'h1, h2, h3, h4, h5, h6': {
              marginBottom: '1rem'
            },
            h1: {
              fontFamily: 'var(--font-serif)',
              fontSize: '2rem',
              fontWeight: '400'
            },
            h2: {
              fontFamily: 'var(--font-serif)',
              fontSize: '1.75rem',
              fontWeight: '400',
              lineHeight: '2.25rem'
            },
            h3: {
              fontSize: '1.125rem',
              fontWeight: '500',
              lineHeight: '1.5rem'
            },
            h4: {
              fontSize: '1rem',
              fontWeight: '500',
              lineHeight: '1.625'
            },
            strong: {
              fontWeight: '550'
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
      }),
      animation: {
        'loop-scroll': 'loop-scroll 50s linear infinite'
      },
      keyframes: {
        'loop-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' }
        }
      }
    }
  },
  plugins: [typography, forms]
};
