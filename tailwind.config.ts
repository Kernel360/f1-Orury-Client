import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    fontFamily: {
      inter: ['var(--inter-font)'],
      pretendard: ['var(--pretendard-font)'],
      rock: ['var(--rock-font)'],
      giants: ['var(--giants-font)'],
    },
    extend: {
      height: {
        'full-size-omit-nav': 'calc(100vh - 3rem)',
      },
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
          50: '#F8F8F8',
          100: '#F0F1F3',
          200: '#D7DCE3',
          300: '#C3C6CC',
          400: '#96A2AC',
          500: '#747C84',
          600: '#4A5662',
          700: '#33404E',
          800: '#243545',
          900: '#162637',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
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
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require('tailwindcss-safe-area'), require('tailwindcss-animate')],
};
export default config;
