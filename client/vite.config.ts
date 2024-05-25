import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/

const replacePathRegex = new RegExp(`^/api`);

export default defineConfig({
  plugins: [react()],
  root: '.',
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        rewrite: path => path.replace(replacePathRegex, ''),
      },
    },
  },
});
