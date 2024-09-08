/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#D524BA',
        'primary-dark': '#B01F9A',
        'background': '#E9EEF5',
        'background-dark': '#232326',
        'background-light': '#3E3E44'
      },
      backgroundImage: {
        'background-gradient': "linear-gradient(90deg, rgba(16,16,17,1) 0%, rgba(35,35,38,1) 85%)",
        'primary-gradient': "linear-gradient(90deg, rgba(213,36,186,1) 0%, rgba(151,0,182,1) 100%)",
        'primary-gradient-dark': "linear-gradient(90deg, rgba(187,31,164,1) 0%, rgba(131,0,158,1) 100%)",
      },
    },
  },
  plugins: [
    
  ],
};
