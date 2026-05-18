/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        background: "#0b1326",
        "on-background": "#dae2fd",
        surface: "#0b1326",
        "on-surface": "#dae2fd",
        "surface-variant": "#2d3449",
        "on-surface-variant": "#d5c3be",
        primary: "#eebbad",
        "on-primary": "#48281f",
        "primary-container": "#b88a7d",
        "on-primary-container": "#44251c",
        secondary: "#bcc7de",
        "on-secondary": "#263143",
        "secondary-container": "#3e495d",
        "on-secondary-container": "#aeb9d0",
        tertiary: "#c3c3e8",
        "on-tertiary": "#2c2e4b",
        "tertiary-container": "#9192b5",
        "on-tertiary-container": "#292b48",
        outline: "#9d8d89",
        "outline-variant": "#514441",
        error: "#ffb4ab",
        "on-error": "#690005",
      },
      fontFamily: {
        headline: ["Hanken Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      borderRadius: {
        sm: 4,
        DEFAULT: 8,
        md: 12,
        lg: 16,
        xl: 24,
      },
      spacing: {
        base: 8,
        "margin-mobile": 20,
        "margin-desktop": 40,
        gutter: 16,
      },
    }
  },
  plugins: []
};
