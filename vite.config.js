import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    cssMinify: false,
    minify: false,
    modulePreload: {
      polyfill: false,
    },
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        abc: resolve(__dirname, 'abc.html'),
      },
      output: {
        assetFileNames: 'assets/[name][extname]',
        chunkFileNames: 'assets/[name].js',
        entryFileNames: 'assets/[name].js',
      },
    },
  },
  test: {},
});
