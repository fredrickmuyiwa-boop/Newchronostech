import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// For GitHub Pages project sites, set VITE_BASE_PATH to "/<repo>/".
// For a custom domain or user/org site, leave it "/".
const basePath = process.env.VITE_BASE_PATH ?? '/';

export default defineConfig({
  plugins: [react()],
  base: basePath,
  build: {
    outDir: 'dist',
    sourcemap: false,
    cssMinify: true,
    minify: 'esbuild',
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          icons: ['lucide-react'],
        },
      },
    },
  },
});
