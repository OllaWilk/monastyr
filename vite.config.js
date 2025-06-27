import { resolve } from 'path';

export default {
  base: '/',
  resolve: {
    alias: {
      bootstrap: resolve(__dirname, 'node_modules/bootstrap')
    }
  },
  build: {
    outDir: './dist',
    rollupOptions: {
      input: resolve(__dirname, 'index.html'),
    }
  }
};

// This configuration sets up an alias for the Bootstrap library in a Vite project.
// It allows you to import Bootstrap using the alias 'bootstrap' instead of the full path.  