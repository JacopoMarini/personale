import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Per GitHub Pages, cambia '/personale/' con il nome del tuo repository
  // Se il repository si chiama diversamente, aggiorna questo valore
  base: '/personale/',
})

