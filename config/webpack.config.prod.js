const { merge } = require('webpack-merge')
const baseWebpackConfig = require('./webpack.config.base')
const terserWebpackConfig = require('terser-webpack-plugin')

const webpackConfig = merge(baseWebpackConfig, {
  devtool: 'eval-cheap-source-map',
  mode: 'production',
  stats: { children: false, warnings: false }, // 取消日志消息输出
  optimization: {
    minimizer: [
      new terserWebpackConfig({
        terserOptions: {
          warnings: false,
          compress: {
            drop_console: false,
            dead_code: true,
            drop_debugger: true
          },
          output: {
            comments: false,
            beautify: false
          },
          mangle: true
        },
        parallel: true,
        // sourcemap: false
      }),
    ],
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 3,
          enforce: true
        },
      },
    }
  }
})

module.exports = webpackConfig
