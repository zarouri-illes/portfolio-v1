import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'roboto': "'Roboto Condensed', 'sans-serif'"
    },
    extend: {
      colors: {
        'primary': '#4D7596',
        'body': '#2E4053',
        'heading': '#282938'
      }
    },
  },
  plugins: [],
}

export default config;