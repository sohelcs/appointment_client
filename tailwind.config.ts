/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss'
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
      colors:{
        primary: '#3E58C1'
      }
    },
  },
  plugins: [require("daisyui")]
};

export default config;
