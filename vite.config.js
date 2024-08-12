import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue  from '@vitejs/plugin-vue';
import path from 'path';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
    plugins: [
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],

    resolve: {
        alias: {
            vue : "vue/dist/vue.esm-bundler.js",
            '@': fileURLToPath(new URL('./resources/js', import.meta.url)),
            '~': path.resolve(__dirname, 'node_modules'),
        }
    },
    
});
