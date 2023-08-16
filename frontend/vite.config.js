import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// This will make the server start on port 3000 and
// proxy all requests to  /api to port 5000.
// This port our backend server will be running on

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
})
