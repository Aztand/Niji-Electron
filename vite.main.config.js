import { defineConfig } from "vite"
import path from "path"

export default defineConfig({
  build: {
    assetsDir: 'assets',
    outDir: ".vite/build",
    lib: {
      entry: path.resolve(__dirname, "src/main.js"),
      formats: ["cjs"]
    },
    rollupOptions: {
      external: ["electron"],
      output: {
        assetFileNames: 'assets/[name][extname]'
      }
    }
  }
})
