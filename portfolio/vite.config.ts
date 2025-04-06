import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [react(), tailwindcss(),],
  server: {
    host: true, // Permite acceder desde otras máquinas en la red local
    port: 3000, // Puerto por defecto
  }
})


