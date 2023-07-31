/** @type {import('tailwindcss').Config} */

module.exports = { 
  darkMode: 'class',
  content: [
    "./node_modules/flowbite-react/**/*.js",
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./public/**/*.html",
  ],
  theme: {},
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('@shrutibalasa/tailwind-grid-auto-fit'),
    require('@tailwindcss/aspect-ratio'),
    require("flowbite/plugin")
  ],
}
