// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/qa-qc-checklists/', // 👈 this is the key part
  plugins: [react()],
  build: {
    outDir: 'docs', // 👈 if you’re deploying from /docs
  },
});
