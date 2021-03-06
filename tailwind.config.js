/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',


    },
    colors: {
      transparent: 'transparent',
      theme: '#065471',
      yellow: 'rgb(255 192 69)',
      'yellow_hover': '#ffa900',
      'yellow_active': '#FFE5B4',
      'theme_hover': '#3e859f',
      'gray_hover': '#F9F9F9',
      white: '#FFFFFF',
      'gray_border':'#F9F9F9',
      red:'#F94C66',
      'hover_red':'#F15412'


    },
    extend: {},
  },
  plugins: [],
};
