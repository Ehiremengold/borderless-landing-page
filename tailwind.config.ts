import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "header-gradient":
          "linear-gradient(to bottom, #110f23 100%, transparent 50%)",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        caveat: ["var(--font-caveat)", "cursive"],
      },
      colors: {
        secondary: "#5F44EC",
        green: "#48934D",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        scroll: "scroll 20s linear infinite",
      },
    },
  },
  plugins: [require("daisyui"), require("preline/plugin")],
} satisfies Config;
