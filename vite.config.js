import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Configura @ como alias de src
    },
  },
  base: '/Cuestionario-INF253-web/',
  server: {
    port: 4000, // El puerto en el que deseas ejecutar el servidor
  }
});
