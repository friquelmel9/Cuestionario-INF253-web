import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Cuestionario-INF253-web/',
  server: {
    host: '0.0.0.0', // Permite acceder a Vite desde cualquier dispositivo en la red
    port: 3000, // El puerto en el que deseas ejecutar el servidor
  }
});
