const clipboard = require('electron').clipboard
window.clipboard = clipboard

utools.onPluginReady(() => {
  console.log('插件初始化完成 preload.js')
})
