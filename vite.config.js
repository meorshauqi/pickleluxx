import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
    // Use esbuild minifier (default, faster than terser)
    minify: 'esbuild',
    // Drop console logs in production
    esbuild: {
      drop: ['console', 'debugger'],
    },
  },
  // Performance optimizations
  server: {
    fs: {
      strict: true,
    },
  },
})
