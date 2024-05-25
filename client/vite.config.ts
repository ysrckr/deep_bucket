import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
const apiBaseURL = process.env.VITE_API_BASE_URL || 'http://localhost:8000';
const apiPostfix = process.env.VITE_API_POSTFIX || 'api';
const apiVersion = process.env.VITE_API_VERSION || 'v1';

export default defineConfig({
  plugins: [react()],
  root: '.',
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    port: 3000,
    proxy: {
      [`/${apiPostfix}`]: {
        target: `${apiBaseURL}/${apiVersion}`,
        changeOrigin: true,
        rewrite: path => path.replace(`/${apiPostfix}`, ''),
      },
    },
  },
});
