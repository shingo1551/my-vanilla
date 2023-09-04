# my-vanilla

- typescript
- vite
- vitest + coverage

## vite.config.js
customize minify, module, Multi Page Application

```
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
```

## dist

moduleを使用しない場合、
- import, exportは使用不可
- declare varなどを使用

```
  <script type="module" crossorigin src="/assets/main.js"></script>
  <link rel="modulepreload" crossorigin href="/assets/counter.js">
  <link rel="stylesheet" href="/assets/counter.css">
```
-->
```
  <script src="./assets/main.js"></script>
  <link href="./assets/counter.js">
  <link rel="stylesheet" href="./assets/counter.css">
```
