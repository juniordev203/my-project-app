// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  modules: ['@nuxtjs/tailwindcss', "@vite-pwa/nuxt", '@nuxtjs/ionic'],
  css: ['~/assets/css/main.css'],
app: {
  head: {
    charset: "uft-8",
    viewport: "width=device-width, initial-scale=1, maximum-scale=1",
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
      },
    ]
  }
},
pwa: {
  manifest: {
    name: 'My Language App',
    short_name: 'LangApp',
    description: 'My Nuxt 3 Progressive Web App',
    theme_color: '#ffffff',
    background_color: '#ffffff',
    display: 'standalone',
  },
},
})