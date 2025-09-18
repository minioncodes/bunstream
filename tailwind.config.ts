import type { Config } from 'tailwindcss'
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0EA5E9', // sky-500
          dark: '#0369A1',
          light: '#38BDF8',
        }
      },
      boxShadow: {
        'soft': '0 10px 30px rgba(0,0,0,0.08)'
      }
    },
  },
  plugins: [],
}
export default config
