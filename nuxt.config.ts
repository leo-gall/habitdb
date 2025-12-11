import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/hints", "@nuxt/image"],

  css: ["~/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
});
