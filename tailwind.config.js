/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["App.tsx", "./components/**/*.{ts,tsx}", "./screens/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--color-primary))",
        secondary: "hsl(var(--color-secondary))",
      },
    },
  },
  plugins: [
    ({ addBase }) =>
      addBase({
        ":root": {
          "--color-primary": "221.2 83.2% 53.3%",
          "--color-secondary": "214.3 31.8% 91.4%",
        },
      }),
  ],
};
