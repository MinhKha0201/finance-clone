import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/tailwind.css", "~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: ["shadcn-nuxt", "@pinia/nuxt", "@nuxtjs/color-mode"],
  colorMode: {
    classSuffix: "",
  },
  shadcn: {
    /**
     * Prefix for all the imported component.
     * @default "Ui"
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * Will respect the Nuxt aliases.
     * @link https://nuxt.com/docs/api/nuxt-config#alias
     * @default "@/components/ui"
     */
    componentDir: "@/components/ui",
  },
  app: {
    head: {
      title: "Lutech",
      titleTemplate: "%s | Lutech",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Lutech.vn" },
      ],
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500&display=swap",
        },
      ],
    },
    pageTransition: {
      name: "fade",
      mode: "out-in",
    },
  },
  runtimeConfig: {
    public: {
      apiBase:
        process.env.NUXT_PUBLIC_API_CLIENT_URL ?? "http://localhost:3000",
      hrmClientId: process.env.NUXT_PUBLIC_HRM_CLIENT_ID,
      hrmUrl: process.env.NUXT_PUBLIC_HRM_URL,
    },

    serverApi: process.env.NUXT_SERVER_API,
    envNode: process.env.NUXT_ENV_NODE,
  },
  plugins: ["~/plugins/apexcharts.client.ts"],
  experimental: {
    componentIslands: true,
  },
});
