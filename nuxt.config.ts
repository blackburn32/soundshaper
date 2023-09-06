export default defineNuxtConfig({
  app: {
    baseURL: '/soundshaper/',
    head: {
      title: 'Soundshaper',
      meta: [
        {name: 'description', content: 'A minimal polyrhythm visualizer.'},
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/soundshaper/favicon.svg',
        },
      ],
    },
  },
  modules: ['nuxt-icon'],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    optimizeDeps: {
      exclude: ['@lume/three-meshline']
    }
  },
  ssr: false,
})
