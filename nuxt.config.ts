import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/hints", "@nuxt/image", "@nuxtjs/seo"],

  css: ["~/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  site: {
    url: "https://habitdb.lgll.dev",
    name: "HabitDB",
    description: "Discover and Share the Best Habits to Transform Your Life",
    defaultLocale: "en",
  },
});
