import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // optimizeDeps: {
  //   exclude: ["flagsafe"],
  // },
  resolve: {
    alias: {
      flagsafe: path.resolve(__dirname, "../../flagsafe/src/index.ts"),
    },
  },
});
