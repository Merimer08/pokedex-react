import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/pokedex-react/',
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  }
})
