import type { Config } from 'tailwindcss'

const settings = {
  colors: {
    primary: {
      'DEFAULT': 'var(--primary-500)',
      900: 'var(--primary-900)',
      300: 'var(--primary-300)',
    },
    secondary: {
      'DEFAULT': 'var(--secondary-500)',
      900: 'var(--secondary-900)',
      300: 'var(--secondary-300)',
    },
    white: {
      'DEFAULT': 'var(--white)',
      full: 'var(--white-full)',
    },
    black: 'var(--black)',
    gray: 'var(--gray)',
    red: 'var(--red)',
  },

  spacing: {
    0: '0',
    'xs': 'var(--spacing-xs)',
    'sm': 'var(--spacing-sm)',
    'md': 'var(--spacing-md)',
    'lg': 'var(--spacing-lg)',
    'xl': 'var(--spacing-xl)',
  },

  maxWidth: {
    'xs': 'var(--max-width-xs)',
    'sm': 'var(--max-width-sm)',
    'md': 'var(--max-width-md)',
    'lg': 'var(--max-width-lg)',
    'xl': 'var(--max-width-xl)',
  },

  fontFamily: {
    sans: ['Karla', 'sans-serif']
  },

  fontSize: {
    'lg': 'var(--font-size-lg)',
    'base': 'var(--font-size-base)',
    'sm': 'var(--font-size-sm)',
  },

  fontWeight: {
    'normal': '400',
    'bold': '700',
  },
}

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/stories/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: settings.colors,
    },
    spacing: settings.spacing,
    gap: settings.spacing,
    maxWidth: settings.maxWidth,
    fontFamily: settings.fontFamily,
    fontSize: settings.fontSize,
    fontWeight: settings.fontWeight,
  },
  plugins: [],
}
export default config
