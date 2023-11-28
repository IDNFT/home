import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        'idnft' : { DEFAULT: '#DE4942' , 50: '#FEEAF1' , 100: '#FFC2BF' , 200: '#FF746D' , 400: '#DE4942' , 500: '#BE0C3C' , 700: '#A12E2E' , 900: '#990B31' },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"' , 'sans-serif']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
