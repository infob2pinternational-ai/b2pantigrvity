import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/doc': {
        target: 'https://document-gen-ten.vercel.app',
        changeOrigin: true,
      },
      '/invoice': {
        target: 'https://document-gen-ten.vercel.app',
        changeOrigin: true,
      },
      '/receipt': {
        target: 'https://document-gen-ten.vercel.app',
        changeOrigin: true,
      },
      '/quotation': {
        target: 'https://document-gen-ten.vercel.app',
        changeOrigin: true,
      }
    }
  }
});
