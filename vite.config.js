import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/qa-qc-checklists/', // required for GitHub Pages under a subfolder
  build: {
    outDir: 'docs', // required for GitHub Pages
  },
  plugins: [react()],
})
