import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths';
import macrosPlugin from 'vite-plugin-babel-macros'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), macrosPlugin()],
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      '@assets': '/src/assets',
      '@data': '/src/data',
      '@forms': '/src/forms',
      '@widgets': '/src/widgets',
    },
  },
})
