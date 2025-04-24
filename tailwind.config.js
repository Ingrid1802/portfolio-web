export default {
    content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
    theme: {
      extend: {
        keyframes: {
          'underline-bounce': {
            '0%': { width: '0%' },
            '60%': { width: '110%' },
            '100%': { width: '100%' },
          },
        },
        animation: {
          'underline-bounce': 'underline-bounce 0.4s ease-out',
        },
      },
    },
    plugins: [],
  }
  