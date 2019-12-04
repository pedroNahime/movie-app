const merge = require('webpack-merge')
const path = require('path')
const baseConfig = require('./webpack.config.base')

module.exports = merge(baseConfig, {
  mode: 'development',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'app.bundle.js'
  },
  devServer: {
    port: 3000,
    hot: true,
    open: true
  },
  devtool: 'source-map'
})
