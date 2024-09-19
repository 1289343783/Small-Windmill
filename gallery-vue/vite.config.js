import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
export default defineConfig({
    plugins: [
        vue(),
        Components({
            resolvers: [AntDesignVueResolver({
                    importStyle: false, // css in js
                })],
        })
    ],
    resolve: {
        alias: {
            "@": "/src",
        },
    },
    server: {
        port: 5379, // 设置服务启动端口号
        host: "0.0.0.0",
        proxy: {
            "/api": {
                target: "http://localhost:8081",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ""),
            },
        },
    }
});
