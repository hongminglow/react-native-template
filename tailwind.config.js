/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './index.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        border: 'rgb(228 228 231)',
        input: 'rgb(228 228 231)',
        ring: 'rgb(99 102 241)',
        background: 'rgb(250 250 250)',
        foreground: 'rgb(9 9 11)',
        primary: {
          DEFAULT: 'rgb(99 102 241)',
          foreground: 'rgb(250 250 255)',
        },
        secondary: {
          DEFAULT: 'rgb(244 244 245)',
          foreground: 'rgb(39 39 42)',
        },
        destructive: {
          DEFAULT: 'rgb(239 68 68)',
          foreground: 'rgb(250 250 250)',
        },
        muted: {
          DEFAULT: 'rgb(244 244 245)',
          foreground: 'rgb(113 113 122)',
        },
        accent: {
          DEFAULT: 'rgb(244 244 245)',
          foreground: 'rgb(9 9 11)',
        },
        popover: {
          DEFAULT: 'rgb(255 255 255)',
          foreground: 'rgb(9 9 11)',
        },
        card: {
          DEFAULT: 'rgb(255 255 255)',
          foreground: 'rgb(9 9 11)',
        },
      },
      borderRadius: {
        lg: '0.75rem',
        md: '0.5rem',
        sm: '0.375rem',
      },
      fontFamily: {
        sans: ['Inter', 'System', 'sans-serif'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [],
};
