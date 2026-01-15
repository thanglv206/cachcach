// import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Cạch Cạch – Game Bài Tương Tác Tiệc Tùng Số 1 Việt Nam',
      meta: [
        { name: 'description', content: 'Cạch Cạch là game bài tương tác tiệc tùng số 1 Việt Nam. Chơi cùng bạn bè, phá băng cuộc vui, không cần tải app, vào là chơi ngay.' },
        { property: 'og:title', content: 'Cạch Cạch – Game Bài Tương Tác Tiệc Tùng Số 1 Việt Nam' },
        { property: 'og:description', content: 'Cạch Cạch là game bài tương tác tiệc tùng số 1 Việt Nam. Chơi cùng bạn bè, phá băng cuộc vui, không cần tải app, vào là chơi ngay.' },
        { property: 'og:image', content: '/og-image.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: '/og-image.jpg' },
        { name: 'robots', content: 'index, follow' }
      ],
      htmlAttrs: {
        lang: 'vi'
      }
    }
  },

  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/ui', '@nuxt/image'],
  // vite: {
  //   plugins: [
  //     tailwindcss(),
  //   ],
  // },
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
    },
  },
  vite: {
    server: {
      allowedHosts: ['oversteadfastly-splenic-amir.ngrok-free.dev'],
    },
  },
  routeRules: {
    '/': { isr: 86400 },
    '/contact': { prerender: true },
    '/term-of-use': { prerender: true },
    '/privacy-policy': { prerender: true },
  },

  runtimeConfig: {
    public: {
      siteUrl: 'https://cachcach.org'
    }
  }
})