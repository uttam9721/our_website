/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'Outfit', '-apple-system', 'sans-serif'],
        display: ['"Space Grotesk"', 'Outfit', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        obsidian: {
          950: '#060913',
          900: '#0A0F1D',
          850: '#0F1629',
          800: '#151E36',
          700: '#1D2A4A',
          600: '#2A3B63',
        },
        cyber: {
          dark: '#080214',
        }
      },
      boxShadow: {
        'subtle-glow': '0 0 40px -10px rgba(56, 189, 248, 0.15)',
        'emerald-glow': '0 0 35px -8px rgba(16, 185, 129, 0.25)',
        'inner-border': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.08)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}