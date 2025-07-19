import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/svelareSolucine.page/' : '/', // Operador ternário para definir o base path
  plugins: [react()],
})
