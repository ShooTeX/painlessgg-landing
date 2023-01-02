const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "black": "#000000",
      "white": "#FFFFFF",
      "goldenrod-yellow": "#FCCB90",
      "calypso-orchid": "#D57EEB",
    },
    extend: {
      fontFamily: {
        sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
