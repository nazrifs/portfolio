import React from 'react'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/portfolio/",
  jsx: "react",
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx'], // Include '.jsx' extension
  },
})
