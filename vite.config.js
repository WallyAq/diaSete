import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Configure base path for GitHub Pages
  // Change 'diaSete' to your repository name
  base: '/diaSete/',
})
