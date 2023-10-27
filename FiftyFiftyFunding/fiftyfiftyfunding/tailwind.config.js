/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
    './app/**/*.{ts,tsx,js,jsx}',
    './src/**/*.{ts,tsx,js,jsx}',
	],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'radial-gradient-blue': 'radial-gradient(circle 1300px, #01BFF1, #E7F9FE)',
      })
    },
  },
  plugins: [
    require('tailwindcss-gradients')
  ],
}

