/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0f2749',
        gold: '#c8a45d',
        lightgold: '#f5efe1',
      },
      boxShadow: {
        soft: '0 12px 30px -12px rgba(15, 39, 73, 0.35)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};
