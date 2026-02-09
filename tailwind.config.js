/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: { xl2: "var(--radius)" },
      boxShadow: { soft: "var(--shadow)", softsm: "var(--shadow-sm)" },
      colors: {
        bg: "rgb(var(--bg) / <alpha-value>)",
        fg: "rgb(var(--fg) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        border: "rgb(var(--border) / <alpha-value>)",
        primary: "rgb(var(--primary) / <alpha-value>)",
        primary2: "rgb(var(--primary-2) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        warning: "rgb(var(--warning) / <alpha-value>)",
      },
      fontFamily: {
        sans: [
          "ui-sans-serif","system-ui","-apple-system","Segoe UI","Inter","Roboto",
          "Helvetica","Arial","Noto Sans","Apple Color Emoji","Segoe UI Emoji",
        ],
      },
    },
  },
  plugins: [],
};
