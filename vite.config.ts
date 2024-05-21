import { fileURLToPath, URL } from 'node:url';
import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import autoprefixer from 'autoprefixer';

export default ({ mode }: { mode: string }) => {
  return defineConfig({
    server: {
      host: '0.0.0.0',
      port: 1230,
    },
    plugins: [
      vue(),
      vueJsx(),
      AutoImport({
        resolvers: [],
      }),
      Components({
        resolvers: [],
      }),
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹，地址可改
        iconDirs: [path.resolve(process.cwd(), 'src/assets/svg')],
        // 指定symbolId格式
        symbolId: 'icon-[dir]-[name]',
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    css: {
      postcss: {
        plugins: [
          autoprefixer({
            overrideBrowserslist: [
              'Android 4.1',
              'iOS 7.1',
              'Chrome > 31',
              'ff > 31',
              'ie >= 8',
              '> 1%',
            ],
          }),
        ],
      },
    },
    esbuild: {
      // 去除console、debugger
      drop: mode !== 'prod' ? [] : ['console', 'debugger'],
    },
  });
};
