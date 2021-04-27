const { merge } = require('webpack-merge')
const baseWebpackConfig = require('./webpack.config.base')

const webpackConfig = merge(baseWebpackConfig, {
  devtool: 'eval-cheap-source-map',
  mode: 'development',
  stats: { children: true } // 取消日志消息输出
})
module.exports = webpackConfig
