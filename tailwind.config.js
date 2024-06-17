/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      colors: {
        aquamarine: "#1BF2B5",
        complete: "#61E241",
        overdue: "#F4522E",
        progress: "#FFCC16",
      },
    },
  },
  plugins: [],
}
