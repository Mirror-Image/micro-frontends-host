import federation from '@originjs/vite-plugin-federation'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    federation({
      name: 'app',
      remotes: {
        remoteA: 'http://localhost:4001/assets/remoteEntry.js',
        remoteB: 'http://localhost:4002/assets/remoteEntry.js',
        remoteStore: 'http://localhost:4003/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom', 'react-redux', '@reduxjs/toolkit'],
    }),
  ],
})
