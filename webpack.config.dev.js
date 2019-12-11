const merge = require('webpack-merge')
const path = require('path')
const baseConfig = require('./webpack.config.base')
const getPort = require('get-port')
const { WebpackPluginServe: Serve } = require('webpack-plugin-serve')

module.exports = merge(baseConfig, {
  mode: 'development',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'app.bundle.js'
  },
  devtool: 'source-map',
  plugins: [
    new Serve({
      port: getPort(),
      open: true,
      host: 'localhost',
      progress: false,
      status: false,
      static: path.join(__dirname, 'public')
    })
  ],
  watch: true
})
