import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 暂时用不到 vue-devtools 插件，先注释掉
// import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // vueDevTools(),
  ],
  resolve: {
    alias: {
      // 这里就意味着@代表src目录
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      // 当然，也可以设置另一个别名，比如%代表src目录，不过惯例是使用@
      // '%': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
