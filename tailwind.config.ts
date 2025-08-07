/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0f0f1b',
        muted: '#1e1e2f',
        primary: '#6d73e6',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
