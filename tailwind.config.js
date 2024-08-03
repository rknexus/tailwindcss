/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 190s linear infinite',
      },

      keyframes: {
        marquee: {
          from: { transform: "translateX(-5rem)" },
          to: { transform: "translateX(-2500%)" },
        },
      },
      // animation: {
      //   typewriter: 'typewriter 3s linear',
      // },
      // keyframes: {
      //   typewriter: {
      //     from: { width: "0px"},
      //     to: { width: "100%"},
      //   },
      // },
    },
  },
  plugins: [],
};
