const path = require('path')
module.exports = {
    pages: {
        // 项目的入口文件
        index: {
            entry: 'examples/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
    chainWebpack: config => {
        config.module
        .rule('js')
        .include.add(path.resolve(__dirname, 'packages')).end()
        .use('babel')
        .loader('babel-loader')
        .tap(options=>{
            return options
        })
    }
}