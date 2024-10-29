import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "app",
      remotes: {
        remoteA: "http://localhost:4001/assets/remoteEntry.js",
        remoteB: "http://localhost:4002/assets/remoteEntry.js",
        remoteStore: "http://localhost:4003/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom", "react-redux", "@reduxjs/toolkit"]
    })
  ],
})
