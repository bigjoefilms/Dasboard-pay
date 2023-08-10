/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ['var(--gilroy)'],
        inter: ['var(--font-inter)'],
        sans: 'var(--font-inter)',
      },
      colors: {
        primary: '#6651D4',
        neutral: '#344054',
        'btn-primary': '#7B61FF',
        'accordion-open': '#E4DFFF',
      },
      borderWidth: {
        DEFAULT: '0.5px',
      },
      maxWidth: {
        '8xl': '1245px',
      },
    },
  },
  darkMode: 'class',
};
