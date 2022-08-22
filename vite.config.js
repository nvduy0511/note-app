import { defineConfig } from 'vite';

// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import laravel from 'laravel-vite-plugin';
import vuetify from 'vite-plugin-vuetify';
import vue from '@vitejs/plugin-vue';
export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        vue(),
        vuetify({ autoImport: true }),
    ],
    resolve: {
        alias: {
            '@': '/resources/js',
        },
    },
});
