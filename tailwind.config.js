/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#111111',
        'dark-card': '#141414',
        'dark-hover': '#1A1A1A',
        'text-secondary': '#888888',
        'icon-hover': '#666666',
        'verified': '#1D9BF0',
        'online': '#1DB954',
      },
      borderRadius: {
        'card': '24px',
      },
    },
  },
  plugins: [],
};