import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');

    // Cấu hình base path cho GitHub Pages
    const base = process.env.VITE_BASE_PATH || '/';

    return {
      base,
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        outDir: 'dist',
        assetsDir: 'assets',
        // Đảm bảo các asset được load đúng với base path
        rollupOptions: {
          output: {
            manualChunks: undefined,
          }
        }
      }
    };
});
