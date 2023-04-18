import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import { viteSingleFile } from "vite-plugin-singlefile";

export default defineConfig({
  base: "./",
  plugins: [solidPlugin(), viteSingleFile()],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
    outDir: "app",
    assetsDir: "scripts",
    rollupOptions: {
      output: {
        entryFileNames: "scripts/app.js",
        assetFileNames: "scripts/[name][extname]",
      },
    },
  },
});
