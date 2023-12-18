import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import path from "path";

const here = (dir) => (dir ? path.resolve(process.cwd(), dir) : process.cwd());
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": here('src')
    }
  }
})
