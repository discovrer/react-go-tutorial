import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // This maps the alias "@/" to the "src" directory
      '@': path.resolve(__dirname, './src'),
    },
  },
})
