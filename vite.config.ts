import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Se deployi su un dominio custom (es. https://jacopomarini.it), il base deve essere '/'
  // Se invece deployi su https://<user>.github.io/<repo>/, imposta base: '/<repo>/'
  base: '/',
})

