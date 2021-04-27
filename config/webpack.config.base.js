const path = require('path')
const nodeExternals = require('webpack-node-externals')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const NodemonPlugin = require('nodemon-webpack-plugin')
const { DefinePlugin } = require('webpack')
const utils = require('./utils')

const webpackConfig = {
  target: 'node',
  entry: {
    server: path.join(utils.APP_PATH, 'index')
  },
  resolve: {
    ...utils.getWebpackResolveConfig()
  },
  output: {
    filename: '[name].bundle.js',
    path: utils.DIST_PATH
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: [path.join(__dirname, 'node_modules')]
      }
    ]
  },
  externals: [nodeExternals()],
  plugins: [
    new CleanWebpackPlugin(),
    // new NodemonPlugin(),
    new DefinePlugin({
      'process.env': {
        NODE_ENV: (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'prod') ? "'production'" : "'development'"
      }
    })
  ]
}

module.exports = webpackConfig
