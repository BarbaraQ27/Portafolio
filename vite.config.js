import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // Cambia 'nombre-de-tu-repo' por el nombre exacto de tu repositorio en GitHub
  base: '/Portafolio/',
})