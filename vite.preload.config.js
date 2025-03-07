import { defineConfig } from "vite"
import path from "path"

export default defineConfig({
  resolve: {
    extensions: ['.js', '.json'] // 预加载脚本通常也不需要JSX
  },
  build: {
    outDir: ".vite/build",
    lib: {
      entry: path.resolve(__dirname, "src/preload.js"),
      formats: ["cjs"]
    },
    rollupOptions: {
      external: ["electron"]
    }
  }
})
