// @ts-check
import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify/functions";
import tailwindcss from "@tailwindcss/vite";

// CONFIG FINAL UNTUK DEPLOY NETLIFY
export default defineConfig({
  // aktifkan tailwind melalui vite plugin
  vite: {
    plugins: [tailwindcss()],
  },

  // domain image agar Image component tidak error
  image: {
    domains: ["anoboy.be", "sankavollerei.com", "cdn.myanimelist.net"],
  },

  // gunakan SSR (server output)
  output: "server",

  // adapter untuk NETLIFY
  adapter: netlify({
    // OPTIONAL: paths bisa kamu aktifkan kalau pakai function custom
    // binaryMediaTypes: ["*/*"]
  }),
});
