/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cinema-black': '#0a0a0a',
        'cinema-gray': '#333333',
      },

      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        fadeIn: 'fadeIn 0.5s ease-out forwards',
      },

      fontFamily: {
        heading: ['Oswald', 'sans-serif'],
        sans: ['Manrope', 'sans-serif'],
        hand: ['"Nothing You Could Do"', 'cursive'],
      },
    },
  },
  plugins: [],
};
