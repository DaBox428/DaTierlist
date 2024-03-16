/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "arknights-background":
          "https://pbs.twimg.com/media/EVPZSSzUUAIBswf?format=jpg&name=large",
      },
    },
  },
  plugins: [],
};
