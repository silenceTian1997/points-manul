const Timestamp = new Date().getTime();
module.exports = {
    publicPath: './',
    outputDir: 'dist',
    lintOnSave: true,
    runtimeCompiler: true,
    productionSourceMap: false,
    chainWebpack: () => { },
    configureWebpack: { // webpack 配置
        output: { // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
            filename: `js/[name].js?${Timestamp}`,
            chunkFilename: `js/[name].js?${Timestamp}`
        },
    },
    lintOnSave: false,
    devServer: {
        overlay: {

            warning: false,

            errors: false

        },
        host: '192.168.43.152',
        // name:'localhost',
        port:8086,
        // open: true,
        // proxy: {
        //   '/admin': {
        //     target:'http://ep.zerom.cn', // 你请求的第三方接口
        //     changeOrigin:true, // 在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        //     pathRewrite:{  // 路径重写，
        //       '^/admin': '/admin'  // 替换target中的请求地址，也就是说以后你在请求http://api.douban.com/v2/XXXXX这个地址的时候直接写成/api即可。
        //     }
        //   },
        //   '/index': {
        //     target:'http://ep.zerom.cn', // 你请求的第三方接口
        //     changeOrigin:true, // 在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        //     pathRewrite:{  // 路径重写，
        //       '^/index': '/index'  // 替换target中的请求地址，也就是说以后你在请求http://api.douban.com/v2/XXXXX这个地址的时候直接写成/api即可。
        //     }
        //   }
        // }
      }
    }