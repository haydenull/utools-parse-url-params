module.exports = {
  publicPath: './',
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
}
