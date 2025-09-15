import { defineConfig, UserConfig } from 'vite';
import { resolve } from 'node:path';
import dts from 'vite-plugin-dts';

export default defineConfig((): UserConfig => {
  return {
    plugins: [dts({ include: ['src'] })],
    build: {
      lib: {
        entry: resolve(__dirname, 'src'),
        name: 'datav-mini3d',
        fileName: (format) => (format === 'es' ? 'index.js' : `index.${format}.js`),
      },
    },
    resolve: {
      alias: {
        '~': resolve(__dirname, 'lib'),
      },
    },
  };
});
