/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "diagonal-gradient":
          "linear-gradient(to bottom right, #fddb92 0%, #d1fdff 100%)",
      },
    },
  },
  plugins: [],
};
