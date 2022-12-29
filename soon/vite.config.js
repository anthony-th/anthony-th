import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vitejs.dev/config/
export default defineConfig({
  base: '/anthony-th/soon/',
  plugins: [react()],
  build: {
    outDir: './dist/soon'
  },
});
