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
        neutral: {
          // this applies to .prose class
          css: {
            'h1, h2, h3, h4, h5, h6': {
              fontWeight: '600'
            },
            strong: {
              fontWeight: '600'
            }
          }
        }
      })
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
