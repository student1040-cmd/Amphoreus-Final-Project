import { defineConfig } from 'vite'
import vue from '@vue/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    allowedHosts: [
      'laba-2-dgdr.onrender.com'
    ]
  }
})
