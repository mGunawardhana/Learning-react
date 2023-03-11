/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // mee onema file ekaka me hataren ekak nam file extension eka ewa tailwind walata adaalai
    //eka ta me css class tika apply karanna
    ".src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        /* api dana colours apita one widiyata metana define karanna puluwan */
        /* colour eka extend ekata dammama framework eke tikai api dena ewai dekama ganna puluwan */
        'accents':{
          'abc':{
            300:'#000000',
            200:'#F7C04A',
            100:'#2c3e50'
          }
        }
      }
    },
  },
  plugins: [],
}
