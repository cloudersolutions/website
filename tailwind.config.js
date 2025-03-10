/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,md,ts}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem'
      }
    },
    extend: {
      typography: () => ({
        DEFAULT: {
          css: {
            lineHeight: '1.625',
            maxWidth: '70ch',
            'blockquote p:first-of-type': {
              textIndent: '-6px'
            },
            'blockquote p:first-of-type::before': {
              content: 'open-quote'
            },
            'blockquote p:first-of-type::after': {
              content: 'close-quote'
            },
            'blockquote p:last-of-type:not(p:only-child)': {
              fontStyle: 'normal',
              marginTop: '-0.5rem'
            },
            'blockquote p:last-of-type::after': {
              content: false
            }
          }
        },
        neutral: {
          css: {
            '--tw-prose-body': 'var(--color-neutral-800)',
            '--tw-prose-headings': 'var(--color-neutral-900)',
            '--tw-prose-bullets': 'var(--color-neutral-800)',
            '--tw-prose-links': 'var(--color-indigo-500)',
            '--tw-prose-invert-body': 'var(--color-neutral-200)',
            '--tw-prose-invert-headings': 'var(--color-neutral-100)',
            '--tw-prose-invert-bullets': 'var(--color-neutral-200)',
            '--tw-prose-invert-links': 'var(--color-indigo-300)',
            'h1, h2, h3, h4, h5, h6': {
              fontWeight: '600'
            },
            strong: {
              fontWeight: '600'
            },
            a: {
              fontWeight: '400',
              textUnderlineOffset: '2px'
            }
          }
        }
      })
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
