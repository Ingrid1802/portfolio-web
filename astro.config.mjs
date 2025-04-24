// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: 'https://github.com/Ingrid1802/portfolio-web',
  outDir: 'dist',
  output: "server",
  vite: {
    plugins: [tailwindcss()],
  },
});
