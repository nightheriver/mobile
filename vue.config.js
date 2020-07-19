const path = require('path');
const resolve = (dir) => path.join(__dirname, dir);
module.exports = {
    chainWebpack: config =>{
        config.resolve.alias // 添加别名
        .set('@', resolve('src'))
        .set('@assets', resolve('src/assets'))
        .set('@components', resolve('src/components'))
        .set('@views', resolve('src/views'))
        .set('@network', resolve('src/network'))
        .set('@store', resolve('src/store'));
    },
    devServer: {
    
        // host: "localhost",
        // port: 8080,
        // 端口号
        https: false,
        // https:{type:Boolean}
        open: false,
        //配置自动启动浏览器
        hotOnly: true,
        // 热更新
        // proxy: 'http://localhost:8080' // 配置跨域处理,只有一个代理
        proxy: { //配置多个跨域
            "/api": {
                target: "http://192.168.4.233:8360",
                changeOrigin: true,
                // ws: true,//websocket支持
                secure: false,
                // pathRewrite: {
                //     "^/api": "/"
                // }
            },
            // "/api2": {
            //     target: "http://172.12.12.12:2018",
            //     changeOrigin: true,
            //     //ws: true,//websocket支持
            //     secure: false,
            //     pathRewrite: {
            //         "^/api2": "/"
            //     }
            // },
        }
    }
}
