import { defineConfig, resolveConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // css: {
  //   preprocessorOptions: {
  //     sass: {
  //       additionalData:`
  //       @import "@/styles/variables"
  //       @import "@/styles/mixins"
  //       @import "@/styles/functions"
  //     `
  //     }
  //   }
  // },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  }
})
