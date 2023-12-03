/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        auth_banner: "url('/assets/login-page-header.png')",
        auth_background: "url('/assets/auth_background.png')",
      },
      colors: {
        blue_fade: "#F0F4F9",
        overlay: {
          black: "rgba(0,0,0,0.7)",
        },
        transparent: {
          plain: "transparent",
          nearly_white: "rgba(255, 255, 255, 0.10)",
          nearly_black: "rgba(0, 0, 0, 0.10)",
        },
      },
      animation: {
        "spin-slow": "spinner 4s linear infinite",
        "spin-mid": "spinner 2s linear infinite",
        "spin-fast": "spinner 1s linear infinite",
      },
      keyframes: {
        spinner: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        md: "4rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
