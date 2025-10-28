/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff5eb',
          100: '#ffe6cc',
          200: '#ffcc99',
          300: '#ffb366',
          400: '#ff9933',
          500: '#FF8C42', // Main orange
          600: '#e67300',
          700: '#b35900',
          800: '#804000',
          900: '#4d2600',
        },
        secondary: {
          50: '#fffbeb',
          100: '#fff4cc',
          200: '#ffe999',
          300: '#ffde66',
          400: '#ffd333',
          500: '#FFD97D', // Golden yellow
          600: '#FFC857',
          700: '#e6a800',
          800: '#b38600',
          900: '#805f00',
        },
        accent: {
          50: '#ffe6f0',
          100: '#ffcce0',
          200: '#ff99c2',
          300: '#ff66a3',
          400: '#ff3385',
          500: '#E63462', // Pink/magenta accent
          600: '#cc0044',
          700: '#990033',
          800: '#660022',
          900: '#330011',
        },
        background: {
          DEFAULT: '#FFF8F0', // Warm cream
          light: '#FFFFFF',
          dark: '#FFE8D6', // Peachy cream
          brown: '#6B2D17', // Dark brown for footer/headers
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'gradient': 'gradient 15s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
    },
  },
  plugins: [],
}
