import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  server: {
    host: '0.0.0.0',  // Permet à Vite d'écouter sur toutes les interfaces réseau
    port: 5173
  }
})