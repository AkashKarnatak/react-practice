/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'slide-in': {
          '0%': {
            opacity: 0,
            transform: 'translatey(-40px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translatey(0)',
          },
        },
        'slide-up': {
          '0%': {
            opacity: 0,
            transform: 'translatey(40px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translatey(0)',
          },
        },
        'pop-out': {
          '0%': {
            transform: 'scale(1)',
          },
          '100%': {
            transform: 'scale(1.1)',
          },
        },
        'bump': {
          '0%': {
            transform: 'scale(1)',
          },
          '30%': {
            transform: 'scale(1.1)',
          },
          '40%': {
            transform: 'scale(1)',
          },
          '70%': {
            transform: 'scale(0.9)',
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
      },
      animation: {
        'slide-in': 'slide-in 350ms ease-out forwards',
        'slide-up': 'slide-up 500ms ease-out forwards',
        'pop-out': 'pop-out 100ms ease-out forwards',
        'bump': 'bump 250ms ease-out forwards',
      },
    },
  },
  plugins: [],
}
