/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    container: {
      center: true,
      screens: {
        '2xl': '132rem',  // 1280px
        '3xl': '132rem',  // 1536px
      },
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            blockquote: {
              color: 'var(--tw-prose-body)',
              fontWeight: 'normal',
              fontStyle: 'normal',
            },
            p: {
              wordBreak: 'break-word',
            },
            pre: null,
            'pre code': null,
            'pre code::before': null,
            'pre code::after': null,
            code: null,
            'code::before': null,
            'code::after': null,
            img: {
              margin: '0 auto',
              display: 'block',
            },
          },
        },
        quoteless: {
          css: {
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:first-of-type::after': { content: 'none' },
          },
        },
      },
    },
  },
}
