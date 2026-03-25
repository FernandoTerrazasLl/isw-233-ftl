import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  server: {
    open: true,
    port: 8000,
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
});
