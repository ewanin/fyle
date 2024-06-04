/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        cormorant_sc: ["Cormorant_SC", "sans-serif"],
      },
      colors: {
        pink: '#FF3147',
        blackish: '#000000',
        whitish: '#FFFFFF', 
        gray: '#F6F6F6',
        grayish: '#FAFAFA',
        grayDark: '#808080'
      },
    },
  },
  plugins: [],
};
