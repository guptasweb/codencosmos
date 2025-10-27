/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4f7',
          100: '#dce3e9',
          200: '#b9c7d3',
          300: '#96abbd',
          400: '#738fa7',
          500: '#3A506B',
          600: '#2e4056',
          700: '#233041',
          800: '#17202b',
          900: '#0c1016',
        },
        secondary: {
          50: '#ebfbfb',
          100: '#d7f7f6',
          200: '#afefed',
          300: '#87e7e4',
          400: '#5fdfdb',
          500: '#5BC0BE',
          600: '#499a98',
          700: '#377372',
          800: '#254d4c',
          900: '#122626',
        },
        accent: {
          50: '#faf8f5',
          100: '#f5f1eb',
          200: '#ebe3d7',
          300: '#e1d5c3',
          400: '#d7c7af',
          500: '#C5A572',
          600: '#9e845b',
          700: '#776344',
          800: '#4f422e',
          900: '#282117',
        },
        background: {
          DEFAULT: '#F8F6F4',
          light: '#FFFFFF',
          dark: '#F0EDE9',
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
