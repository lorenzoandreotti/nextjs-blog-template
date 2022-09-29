/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "hsl(180, 100%, 25%)",
          hover: "hsl(180, 100%, 20%)",
          focus: "hsl(180, 100%, 20%)",
          active: "hsl(180, 100%, 15%)",
          disabled: "hsl(180, 60%, 50%)",
        },
        secondary: {
          DEFAULT: "hsl(220, 9%, 46%)",
          hover: "hsl(220, 9%, 41%)",
          focus: "hsl(220, 9%, 41%)",
          active: "hsl(220, 9%, 36%)",
          disabled: "hsl(220, 9%, 66%)",
        },
        success: {
          DEFAULT: "hsl(161, 94%, 30%)",
          hover: "hsl(161, 94%, 25%)",
          focus: "hsl(161, 94%, 25%)",
          active: "hsl(161, 94%, 20%)",
          disabled: "hsl(161, 54%, 50%)",
        },
        warning: {
          DEFAULT: "hsl(38, 92%, 50%)",
          hover: "hsl(38, 92%, 45%)",
          focus: "hsl(38, 92%, 45%)",
          active: "hsl(38, 92%, 40%)",
          disabled: "hsl(38, 92%, 75%)",
        },
        danger: {
          DEFAULT: "hsl(0, 84%, 60%)",
          hover: "hsl(0, 84%, 52%)",
          focus: "hsl(0, 84%, 52%)",
          active: "hsl(0, 84%, 45%)",
          disabled: "hsl(0, 84%, 80%)",
        },
        info: {
          DEFAULT: "hsl(217, 91%, 60%)",
          hover: "hsl(217, 91%, 52%)",
          focus: "hsl(217, 91%, 52%)",
          active: "hsl(217, 91%, 45%)",
          disabled: "hsl(217, 91%, 80%)",
        },
        light: {
          DEFAULT: "hsl(220, 14%, 96%)",
          hover: "hsl(220, 14%, 90%)",
          focus: "hsl(220, 14%, 90%)",
          active: "hsl(220, 14%, 85%)",
          disabled: "hsl(220, 2%, 100%)",
        },
        dark: {
          DEFAULT: "hsl(215, 28%, 17%)",
          focus: "hsl(215, 28%, 12%)",
          hover: "hsl(215, 28%, 12%)",
          active: "hsl(215, 28%, 2%)",
          disabled: "hsl(215, 10%, 40%)",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
