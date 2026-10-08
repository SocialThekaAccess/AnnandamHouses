import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      jpg: {
        quality: 80,
      },
      png: {
        quality: 80,
      },
      jpeg: {
        quality: 80,
      },
    }),
  ],
  resolve: {
    caseSensitive: false
  },
  server: {
    historyApiFallback: true
  },
  preview: {
    historyApiFallback: true
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
              return 'vendor';
            }
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
})