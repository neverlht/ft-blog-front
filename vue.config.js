const path = require('path');
module.exports = {
    // 输出文件目录
    outputDir: 'dist',
    // webpack配置
    chainWebpack: () => {},
    configureWebpack: (config) => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
            config.mode = 'production';
        } else {
            // 为开发环境修改配置...
            config.mode = 'development';
        }
        Object.assign(config, {
            // 开发生产共同配置
            resolve: {
                alias: {
                    '@': path.resolve(__dirname, './src'),
                    'vue': 'vue/dist/vue.js'
                }
            }
        });
    },
    devServer: {
        proxy: {
            "/api": {
                // target: "http://127.0.0.1:8080/api",
                target: "http://47.97.187.15/api",
                changeOrigin: true, // 是否改变域名
                ws: true,
                pathRewrite: {
                  // 路径重写
                  "/api": "" // 这个意思就是以api开头的，定向到哪里, 如果你的后边还有路径的话， 会自动拼接上
                }
            },
            "/display": {
                // target: "http://127.0.0.1:8080/display",
                target: "http://47.97.187.15/display",
                changeOrigin: true, // 是否改变域名
                ws: true,
                pathRewrite: {
                    // 路径重写
                    "/display": "" // 这个意思就是以display开头的，定向到哪里, 如果你的后边还有路径的话， 会自动拼接上
                }
            }
        }
    }
}