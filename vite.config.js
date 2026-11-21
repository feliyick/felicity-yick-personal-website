import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// outDir stays `build` so the existing Vercel project settings keep working.
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 800,
  },
})
