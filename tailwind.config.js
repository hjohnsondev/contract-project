module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        fade: 'fadeOut 5s ease-in-out',
      },

      keyframes: theme => ({
        fadeOut: {
          '0%': { backgroundColor: theme('colors.red.300') },
          '100%': { backgroundColor: theme('colors.transparent') },
        },
      }),
    },
  },
  plugins: [],
}
