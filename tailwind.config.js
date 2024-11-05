/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        pasteColor: 'rgb(166, 235, 210)',
        ashCOlor:'rgb(235, 235, 235)',
        customPurple: 'rgba(200, 169, 251, 1)',
      },
    },
  },
  plugins: [],
};
