/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000",
      },
      backgroundImage: (theme) => ({
        // "hero-home": "url('/bg5.jpg')",
        // "hero-home2": "url('/bg.jpg')",
        // "hero-home3": "url('/bg.jpg')",
      }),
    },
  },
  plugins: [require("flowbite/plugin")],
};
