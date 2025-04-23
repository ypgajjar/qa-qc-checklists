import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/qa-qc-checklists/', // This must match your GitHub repo name
  build: {
    outDir: 'docs', // This is required for GitHub Pages
  },
  plugins: [react()],
});
