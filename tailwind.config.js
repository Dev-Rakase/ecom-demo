/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["App.tsx", "./components/**/*.{ts,tsx}", "./screens/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
