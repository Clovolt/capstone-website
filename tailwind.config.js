/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        allura: ["ALLURA", "regular"],
      },
      keyframes: {
        wiggle: {
          '0%, 7.14%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '14.28%': { transform: 'translate3d(0, -14.28%, 0)' },
          '21.42%': { transform: 'translate3d(0, -28.57%, 0)' },
          '28.57%': { transform: 'translate3d(0, -42.85%, 0)' },
          '35.71%': { transform: 'translate3d(0, -57.14%, 0)' },
          '42.85%': { transform: 'translate3d(0, -71.42%, 0)' },
          '53.5%': { transform: 'translate3d(0, -85.71%, 0)' },
          '64.28%': { transform: 'translate3d(0, -71.42%, 0)' },
          '71.42%': { transform: 'translate3d(0, -57.14%, 0)' },
          '78.54%': { transform: 'translate3d(0, -42.85%, 0)' },
          '85.71%': { transform: 'translate3d(0, -28.57%, 0)' },
          '92.85%': { transform: 'translate3d(0, -14.28%, 0)' },
        }
      },
      animation: {
        wiggle2: 'wiggle 20s infinite',
      },
    }
  },
  plugins: [],
}
