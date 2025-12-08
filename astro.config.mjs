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
    "sankavollerei.com",
    "anoboy.be",

    // kemungkinan domain poster Zoro / Sankavollerei
    "static.zoro.to",
    "zoro.to",
    "img.zorores.com",
    "img.bunnycdn.net",
    "i.ibb.co",
    "gogocdn.net",
    "cdn.noire.cc"
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
