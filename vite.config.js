import { defineConfig } from 'vite'
import htmlMinifier from 'vite-plugin-html-minifier-terser'

export default defineConfig({
  base: '/Mente-conecta/',

  plugins: [
    htmlMinifier({
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeEmptyAttributes: true,
        removeOptionalTags: false
      }
    })
  ],

  build: {
    rollupOptions: {
      input: {
        index: 'index.html',
        projetos: 'projetos.html',
        cadastro: 'cadastro.html'
      }
    }
  }
})