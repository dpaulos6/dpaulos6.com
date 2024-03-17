import type { Config } from 'tailwindcss'

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        'primary': 'rgb(var(--primary))',
        'primary-hover': 'rgb(var(--primary-hover))',
        'secondary': 'rgb(var(--secondary))',
        'secondary-hover': 'rgb(var(--secondary-hover))',
        'accent': 'rgb(var(--accent))',
        'accent-hover': 'rgb(var(--accent-hover))',
        'background': 'rgb(var(--background))',
        'background-hover': 'rgb(var(--background-hover))',
        'background-menu': 'rgb(var(--background-menu))',
        'background-border': 'rgb(var(--background-border))',
        'text': 'rgb(var(--text))',
        'text-hover': 'rgb(var(--text-hover))',
        'text-placeholder': 'rgb(var(--text-placeholder))',
        'text-subtitle': 'rgb(var(--text-subtitle))',
        'audio-hover': 'rgb(var(--audio-hover))',

        'hover': 'var(--hover)',
        'hire-hover': 'var(--hire-hover)'
      },
      screens: {
        limit: '320px',
        xs: '480px'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [
    require('tailwindcss-animate'),
    addVariablesForColors,
  ]
}
export default config

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
