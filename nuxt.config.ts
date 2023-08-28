// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icon',
        '@vite-pwa/nuxt'        
      ],
      nitro: {
        prerender: {
          routes: ['/', '/fehrs', '/hadith', '/azkar', '/tafser','randomAyah','/hadith/bukhari','/hadith/muslim','/azkar/0'],
        },
      },
      pwa: {
        manifest: {
          name: 'تذكرة',
          short_name: 'تذكرة',
          description: 'تطبيق تذكرة لقراءة القرآن الكريم والتفسير الميسر واحاديث الرسول صلي الله عليه وسلم وكذلك الأذكار جميعا في مكان واحد',
          lang: 'ar',
          display: 'standalone',
          theme_color: '#FFFBF9',
          background_color: '#6dffb6',
          icons: [
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
            },
          ],
          
        },
        devOptions: {
          enabled: true,
          suppressWarnings: true,
          navigateFallbackAllowlist: [/^\/$/],
          type: 'module',
        },
      }
})
