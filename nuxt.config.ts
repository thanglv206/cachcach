// import tailwindcss from '@tailwindcss/vite'

import basicSsl from '@vitejs/plugin-basic-ssl'

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
  modules: ['@nuxt/ui', '@nuxt/image', '@vite-pwa/nuxt'],

  pwa: {
    manifest: {
      name: 'Cạch Cạch – Game Bài Tương Tác Tiệc Tùng',
      short_name: 'Cạch Cạch',
      description: 'Cạch Cạch là game bài tương tác tiệc tùng số 1 Việt Nam. Chơi cùng bạn bè, phá băng cuộc vui, không cần tải app, vào là chơi ngay.',
      theme_color: '#ff9000',
      start_url: '/',
      background_color: '#151c24',
      display: 'standalone',
      icons: [
        {
          src: 'android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
    devOptions: {
      enabled: true,
    },
  },
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
    },
  },
  vite: {
    server: {
      allowedHosts: ['https://oversteadfastly-splenic-amir.ngrok-free.dev'],
    },
    plugins: [
      basicSsl()
    ],
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