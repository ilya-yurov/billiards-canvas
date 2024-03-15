import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/layout/Main/main.scss";`
      }
    }
  },
  resolve: {
    alias: {
      "src": resolve(__dirname, './src') // Устанавливаем алиас для пути src/
    }
  },
})
