import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  build: {
      outDir: "./prodbuild",
      emptyOutDir: true,
      rollupOptions: {
          output: {
              entryFileNames: "app.js",
              assetFileNames: "[name][extname]", // keeps css name predictable
          },
      },
  }
})
