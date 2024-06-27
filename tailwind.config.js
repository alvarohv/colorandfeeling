/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        negro: "#0c0c0c",
        black: "#000",
        gris: "#f5f5f5",
        gray: "rgba(0, 0, 0, 0.16)",
        "gris-2": "#6d6d6d",
        acento: "#d1c9ff",
        darkslategray: "#333",
        gainsboro: "#d9d9d9",
      },
      spacing: {},
      fontFamily: {
        p: "Montserrat",
        "text-regular-semi-bold": "Roboto",
        h1: "'Playfair Display'",
      },
    },
    fontSize: {
      base: "1rem",
      lgi: "1.188rem",
      "4xl": "1.438rem",
      lg: "1.125rem",
      "9xl": "1.75rem",
      "3xl": "1.375rem",
      "21xl": "2.5rem",
      "13xl": "2rem",
      "5xl": "1.5rem",
      "37xl": "3.5rem",
      "26xl": "2.813rem",
      "15xl": "2.125rem",
      "29xl": "3rem",
      "19xl": "2.375rem",
      "10xl": "1.813rem",
      "46xl": "4.063rem",
      inherit: "inherit",
    },
    screens: {
      mq1250: {
        raw: "screen and (max-width: 1250px)",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
