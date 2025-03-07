// vite.renderer.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  
  // 添加以下配置
  resolve: {
    extensions: ['.js', '.jsx', '.json'], // 支持的文件扩展名
    alias: {
      '@': '/src/renderer' // 可选：配置路径别名
    }
  },
  
  build: {
    outDir: '../.vite/build/renderer',
    emptyOutDir: true
  }
})