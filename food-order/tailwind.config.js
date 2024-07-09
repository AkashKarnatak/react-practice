/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans'],
      },
      keyframes: {
        'slide-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translatey(5rem)'
          },
          '100%': {
            opacity: '1',
            transform: 'translatey(0)'
          }
        },
        'slide-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translatey(-5rem)'
          },
          '100%': {
            opacity: '1',
            transform: 'translatey(0)'
          }
        }
      },
      animation: {
        'meals-appear': 'slide-in-up 1s ease-out forwards',
        'modal-appear': 'slide-in-down 0.5s ease-out forwards',
      }
    },
  },
  plugins: [],
}
