import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    proxy: {
      "/webhook": {
        target: "https://famous-coral-wrongly.ngrok-free.app",
        changeOrigin: true,
        secure: false,
      },
    },
    host: true,
    port: 5173,
    strictPort: true,
    allowedHosts: [
      "localhost",
      "127.0.0.1",
      "famous-coral-wrongly.ngrok-free.app",
      ".ngrok-free.app",
      ".ngrok.io",
      ".ngrok.app",
    ],
    disableHostCheck: true,
  },
});
