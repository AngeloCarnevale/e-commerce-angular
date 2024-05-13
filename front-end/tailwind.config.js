/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@spartan-ng/ui-core/hlm-tailwind-preset')],
  content: [
    './src/**/*.{html,ts}',
    './components/**/*.{html,ts}',
  ],
  theme: {
    screens:{
      "lg": {max: "1920px"},
      "md": {max: "1280px"}
    },
    extend: {},
  },
  plugins: [],
};