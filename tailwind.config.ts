import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '0.5rem',
          sm: '1rem',
          lg: '2rem',
          xl: '3rem',
          '2xl': '3rem',
          '3xl': '4rem',
        },
      },

      extend: {
        screens: {
          '4k': '1980px',
        },
      },
    },
  },
  plugins: [],
};
export default config;
