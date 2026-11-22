import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Ecommerce_1/',
  plugins: [react()],
});