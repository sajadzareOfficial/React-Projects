import { defineConfig } from 'vite'
import react from './node_modules/.vite/deps/react.js'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
})