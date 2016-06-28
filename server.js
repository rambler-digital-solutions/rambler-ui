const path = require('path')
const express = require('express')
const webpack = require('webpack')
const config = require('./webpack/development')
const argv = require('minimist')(process.argv)

const DEFAULT_PORT = 8086
const DEFAULT_HOST = '127.0.0.1'

const host = argv.host || DEFAULT_HOST
const port = Number(argv.port || DEFAULT_PORT)

const app = express()
const compiler = webpack(config)

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }
}))

app.use(require('webpack-hot-middleware')(compiler))

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './spec/index.html'))
})

app.listen(port, host, function (err) {
  if (err) {
    console.log(err)
    return
  }

  console.log(`Listening at http://${host}:${port}`)
})
