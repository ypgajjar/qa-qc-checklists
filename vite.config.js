// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// vite.config.js
export default defineConfig({
  base: import.meta.env.PROD ? '/qa-qc-checklists/' : '/',   // 👍 prod, but dev still “/”
})

