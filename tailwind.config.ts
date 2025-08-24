import type { Config } from 'tailwindcss'

const {
  default: flattenColorPalette
} = require('tailwindcss/lib/util/flattenColorPalette')
const colors = require('tailwindcss/colors')

const svgToDataUri = require('mini-svg-data-uri')

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: 'selector',
  theme: {
    container: {
      center: true,
      padding: '2rem'
    },
    extend: {
      colors: {
        primary: 'rgb(var(--primary))',
        'primary-hover': 'rgb(var(--primary-hover))',
        secondary: 'rgb(var(--secondary))',
        'secondary-hover': 'rgb(var(--secondary-hover))',
        accent: 'rgb(var(--accent))',
        'accent-hover': 'rgb(var(--accent-hover))',
        background: 'rgb(var(--background))',
        'background-hover': 'rgb(var(--background-hover))',
        'background-menu': 'rgb(var(--background-menu))',
        'background-border': 'rgb(var(--background-border))',
        text: 'rgb(var(--text))',
        'text-hover': 'rgb(var(--text-hover))',
        'text-placeholder': 'rgb(var(--text-placeholder))',
        'text-subtitle': 'rgb(var(--text-subtitle))',
        'audio-hover': 'rgb(var(--audio-hover))',

        hover: 'var(--hover)',
        'hire-hover': 'var(--hire-hover)',
        grid: 'var(--grid)'
      },
      screens: {
        limit: '320px',
        xs: '480px',
        '2xl': '1400px'
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        shimmer: 'shimmer 2.5s linear infinite',
        scroll:
          'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        shimmer: {
          from: {
            backgroundPosition: '0 0'
          },
          to: {
            backgroundPosition: '-200% 0'
          }
        },
        scroll: {
          to: {
            transform: 'translate(calc(-50% - 0.5rem))'
          }
        }
      }
    }
  },
  plugins: [
    require('tailwindcss-animate'),
    addVariablesForColors,
    ({ matchUtilities, theme }: any) => {
      matchUtilities(
        {
          'bg-grid': (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`
          }),
          'bg-grid-small': (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`
          }),
          'bg-dot': (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`
          })
        },
        { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
      )
    }
  ]
}
export default config

function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme('colors'))
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  )

  addBase({
    ':root': newVars
  })
}
