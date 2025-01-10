import type { Config } from "tailwindcss";
import daisyui from "daisyui"

export default {
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {},
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
} satisfies Config;
