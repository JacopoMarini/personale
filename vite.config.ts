import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path "relativo" per funzionare sia su dominio custom (root) sia su GitHub Pages in sottocartella.
  // Questo evita problemi di asset quando cambia il path di pubblicazione.
  base: './',
})

