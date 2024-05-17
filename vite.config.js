import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    server: {
        port: 3000,
    },
    resolve: {
        alias: {
            '@': new URL('./src', import.meta.url).pathname,
            '@styles': new URL('./src/styles', import.meta.url).pathname,
            '@components': new URL('./src/app/components', import.meta.url).pathname,
            '@store': new URL('./src/app/store', import.meta.url).pathname,
            '@layout': new URL('./src/app/layout', import.meta.url).pathname,
            '@assets': new URL('./src/assets', import.meta.url).pathname,
            '@app': new URL('./src/app', import.meta.url).pathname,
            '@services': new URL('./src/services', import.meta.url).pathname,
        },
    },
    plugins: [react()],
});