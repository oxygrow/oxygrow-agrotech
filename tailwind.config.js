/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utility/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        fade: "fadeOut 10s ease-in-out infinite",
      },

      // that is actual animation
      keyframes: (theme) => ({
        fadeOut: {
          "0%": { opacity: "0%" },
          "30%": { opacity: "100%" },
          "90%": { opacity: "100%" },
          "100%": { opacity: "0%" },
        },
      }),
      colors: {
        "dark-green": "#94BF54",
        "light-green": "#B9D948",
      },
    },
  },
  plugins: [],
};
