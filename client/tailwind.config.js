/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0B192C",
        secondary: "#FF6500",
        tertiary: "#15B392",
      },
      screens: {
        sm: "640px",
        lg: "1024px",
      },
    },
  },
  plugins: [],
};
