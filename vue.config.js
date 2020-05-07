const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  publicPath: './',
  productionSourceMap: process.env.NODE_ENV === 'production' ? false : true,
  // 解决antD   'Inline JavaScript is not enabled'  问题
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  },
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin([
        { from: './plugin.json' },
        { from: './preload.js' },
        { from: './README.md' },
      ]),
    ],
  }
}
