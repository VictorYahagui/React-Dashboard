/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {

    extend: {
      colors: {
        black: {
          0: '#4A4556',
          100: '#4A4556',
          200: '#363447',
          500: '#292738',
          900: '#d9d9d9',
        },
        fontFamily: {
          'sans': ['Inter', 'sans-serif'],
        },
      },
    },
    backgroundImage: {
      'purple-gradient': 'linear-gradient(120deg, #CE9FFC 0%, #7367F0 100%);',
      'orange-gradient': 'linear-gradient(120deg, #DF9780 0%, #A66DE9 100%);',
      'green-gradient': 'linear-gradient(120deg, #90F7EC 0%, #32CCBC 100%);',
    },
  },
  plugins: [],
}
