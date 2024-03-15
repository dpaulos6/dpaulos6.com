import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
        'primary': 'var(--primary)',
        'primary-hover': 'var(--primary-hover)',
        'secondary': 'var(--secondary)',
        'secondary-hover': 'var(--secondary-hover)',
        'accent': 'var(--accent)',
        'accent-hover': 'var(--accent-hover)',
        'background': 'var(--background)',
        'background-hover': 'var(--background-hover)',
        'background-menu': 'var(--background-menu)',
        'background-border': 'var(--background-border)',
        'text': 'var(--text)',
        'text-hover': 'var(--text-hover)',
        'audio-hover': 'var(--audio-hover)',
        'hover': 'var(--hover)'
      },
      screens: {
        'limit': '320px',
        'xs': '480px'
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
  plugins: [require('tailwindcss-animate')],
};
export default config;
