const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // 配置文件目录路径用， 如果不配置，那打包的文件各种路径都是 / 开头（是绝对路径），
  // 那么项目必须放在服务器根目录
  publicPath: './',
  transpileDependencies: true,
  lintOnSave: false
})
