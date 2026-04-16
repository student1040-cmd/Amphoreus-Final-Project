const { defineConfig } = require('vite');
const vue = require('@vue/plugin-vue');

module.exports = defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: ['laba-2-dgdr.onrender.com']
  }
});
