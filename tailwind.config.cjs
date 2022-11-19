/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    container: {
	  center: true
	},
    extend: {
      backgroundImage: {
        'body-bg': "url('/src/assets/body-bg.jpg')"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
