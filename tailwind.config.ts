import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./node_modules/preline/preline.js"],
  theme: {
    extend: {},
  },
  plugins: [require("preline/plugin")],
} satisfies Config;
