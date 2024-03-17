import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";
import topLevelAwait from "vite-plugin-top-level-await";

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
      shared: ['vue']
    }),
    topLevelAwait({
      // The export name of top-level await promise for each chunk module
      promiseExportName: "__tla",
      // The function to generate import names of top-level await promise in each chunk module
      promiseImportName: i => `__tla_${i}`
    })
  ],
})
