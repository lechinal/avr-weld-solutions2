import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "https://lechinal.github.io/avr-weld-solutions2",
  plugins: [react()],
});
