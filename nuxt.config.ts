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
        { name: 'twitter:image', content: '/og-image.jpg' }
      ]

    }
  },

  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/ui', '@vite-pwa/nuxt'],
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Cạch Cạch',
      short_name: 'Cạch Cạch',
      description: 'Game vui nhộn cho bạn bè và cặp đôi',
      theme_color: '#f59e0b',
      background_color: '#151c24',
      display: 'standalone',
      icons: [
        {
          src: '/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg,ico}']
    },
    client: {
      installPrompt: true
    },
    devOptions: {
      enabled: true,
      type: 'module'
    }
  },
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
  }
})