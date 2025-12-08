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

  // capee kali lah hidup kek gini
image: {
  domains: [
    "cdn.myanimelist.net",
    "sankavollerei.com",
    "anoboy.be"
  ],
},

  // gunakan SSR (server output)
  output: "server",

  // adapter untuk NETLIFY
  adapter: netlify({
    // OPTIONAL: paths bisa kamu aktifkan kalau pakai function custom
    // binaryMediaTypes: ["*/*"]
  }),
});
