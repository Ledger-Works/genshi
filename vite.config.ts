import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "remote-app",
      filename: "remoteEntry.js",
      remotes: {
        material: "http://localhost:5500/dist/assets/remoteEntry.js",
      },
      exposes: {
        "./button": "./packages/ui/components/atoms/button",
      },
    })
  ],
})
