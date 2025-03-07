import { defineConfig } from "vite"
import path from "path"

export default defineConfig({
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
