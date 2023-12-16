import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      inter: ['var(--inter-font)'],
      pretendard: ['var(--pretendard-font)'],
      rock: ['var(--rock-font)'],
      giants: ['var(--giants-font)'],
    },
    extend: {
      colors: {
        primary: '#855AFF',
        purple: {
          100: '#EAE3FF',
          200: '#D9CCFF',
          300: '#C7B3FF',
          400: '#B79DFF',
          500: '#A282FF',
          600: '#855AFF',
          700: '#7140FF',
          800: '#5122D5',
          900: '#441EAF',
        },
        grey: {
          100: '#F0F1F3',
          200: '#D7DCE3',
          300: '#C3C6CC',
          400: '#96A2AC',
          500: '#747C84',
          600: '#4A5662',
        },
        green: '#8FCAAA',
        red: '#FF006B',
        kakao: '#FEE500',
        disabled: '#96A2AC',
        warning: '#DA0000',
      },
      boxShadow: {
        main: '0px 6px 6px 0px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require('tailwindcss-safe-area')],
};
export default config;
