import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      borderRadius: {
        lg: "16px",
        md: "12px",
        sm: "8px",
        xs: "6px"
      },
      boxShadow: {
        lg: "0px 11px 24px 0px rgba(25, 36, 57, 0.25)",
        md: "0px 11px 24px 0px rgba(25, 36, 57, 0.25)",
        sm: "0px 4px 6px 0px rgba(0, 0, 0, 0.09)"
      },
    },
  },
  plugins: [
    daisyui,
  ],
}