import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    caseSensitive: false
  },
  server: {
    historyApiFallback: true
  },
  preview: {
    historyApiFallback: true
  }
})