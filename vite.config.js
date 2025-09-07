import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    allowedHosts: [
      "localhost",
      "127.0.0.1",
      "272c04411545.ngrok-free.app",
      ".ngrok-free.app",
      ".ngrok.io",
      ".ngrok.app",
    ],
    disableHostCheck: true,
  },
});
