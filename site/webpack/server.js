const WebpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')
const config = require('./config')
const argv = require('minimist')(process.argv)
const compiler = webpack(config)
const path = require('path')

const port = argv.port || 8086
const host = argv.host || '0.0.0.0'

// https://webpack.github.io/docs/webpack-dev-server.html
const server = new WebpackDevServer(compiler, {
  contentBase: path.resolve(__dirname, '..'),
  noInfo: true,
  hot: true,
  publicPath: '/'
})

server.listen(port, host)
console.log(`Dev server start on ${host}:${port}`)
