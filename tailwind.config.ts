import type { Config } from 'tailwindcss'

const settings = {
  colors: {
    primary: {
      'DEFAULT': '#605BFF',
    },
    secondary: {
      'DEFAULT': '#FFCB32',
    },
    tertiary: {
      'DEFAULT': '#67B0FF'
    },
    white: {
      'DEFAULT': '#FFFFFF',
    },
    black: {
      'DEFAULT': '#7B7B7B',
    },
    gray: {
      'DEFAULT': '#F2F1FF',
    },
    red: {
      'DEFAULT': '#DC2626',
    },
  },

  spacing: {
    0: '0',
    'xs': '0.7125rem',
    'sm': '0.8125rem',
    'md': '1.75rem',
    'lg': '2.25rem',
    'xl': '2.5rem'
  },

  gap: {
    0: '0',
    'xs': '0.5rem',
    'sm': '0.75rem',
    'md': '1.125rem',
    'lg': '2.5rem',
    'xl': '3.375rem',
  },

  borderRadius: {
    'none': '0',
    'xs': '0.25rem',
    'sm': '0.5rem',
    'md': '0.75rem',
    'lg': '1rem',
    'xl': '1.25rem',
    'full': '9999px',
  },

  maxWidth: {
    'xs': '4.125rem',
    'sm': '12.75rem',
    'md': '29.4375rem',
  },

  fontFamily: {
    sans: ['Lora', 'serif']
  },

  fontSize: {
    'lg': '1.125rem',
    'base': '1rem',
    'sm': '0.875rem',
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
    gap: settings.gap,
    maxWidth: settings.maxWidth,
    fontFamily: settings.fontFamily,
    fontSize: settings.fontSize,
    fontWeight: settings.fontWeight,
    borderRadius: settings.borderRadius
  },
  plugins: [],
}
export default config
