/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      black: "#171717",
      white: "#F2F1E6",
      gray: "#333333",
      orange: "#E80102",
      pink: "#FF86C0",
    },
    extend: {
      animation: {
        gradient: "gradient 20s ease infinite alternate",
      },
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      backgroundSize: {
        "300%": "300%",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        base: ["1rem", { letterSpacing: "-0.01em" }],
        lg: ["1.5rem", { letterSpacing: "-0.05em" }],
        xl: ["3.5rem", { letterSpacing: "-0.05em" }],
        "2xl": ["4rem", { letterSpacing: "-0.05em" }],
        "3xl": ["5rem", { letterSpacing: "-0.05em" }],
        "4xl": ["6rem", { letterSpacing: "-0.05em" }],
      },
    },
  },
  plugins: [],
};
