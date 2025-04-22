// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  /* 👇 add or change this line */
  base: "/qa-qc-checklists/",   // <- the name of the repo with trailing slash
});
