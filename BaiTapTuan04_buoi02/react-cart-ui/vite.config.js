import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/index.js",
      name: "MyCartLib",
      fileName: (format) => `my-cart-lib.${format}.js`
    },
    rollupOptions: {
      // react, react-dom are external — sẽ không được bundle.
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    }
  }
});
