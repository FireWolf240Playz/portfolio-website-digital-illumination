/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cinema-black': '#0a0a0a',
        'cinema-gray': '#333333',
      },

      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
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
