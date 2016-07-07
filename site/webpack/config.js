/*
  eslint
  strict: ['off'],
  no-console: ['off'],
  global-require: ['off']
*/
'use strict'

const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const rootDir = path.resolve(__dirname, '..')
const argv = require('minimist')(process.argv.slice(2))
const flat = require('flat')
const cssVariables = flat(require(path.resolve(__dirname, '../../src/variables')), { delimiter: '-' })
const cssnext = require('postcss-cssnext')
const postCssVars = require('postcss-simple-vars')
const postCssImport = require('postcss-import')
const postCssMixins = require('postcss-mixins')
const env = process.env.NODE_ENV || 'development'
const postCssProcessors = [
  postCssImport(),
  postCssMixins({ mixinsDir: path.join(rootDir, 'src/style') }),
  postCssVars({ variables: cssVariables }),
  cssnext()
]

const appConfig = require('../config')

let outputPath = path.join(rootDir, 'build')
if (argv.output)
  outputPath = path.join(outputPath, argv.output)
let envConfig
if (env)
  try {
    envConfig = require('./' + env)
  } catch (e) {
    console.error(e)
    envConfig = {}
  }

const config = Object.assign({
  entry: path.join(rootDir, 'src/app.js'),
  module: {
    loaders: []
  },
  output: {
    path: outputPath,
    filename: 'app.js'
  },
  stats: {
    colors: true,
    modules: true,
    reasons: true,
    errorDetails: true
  },
  resolve: {
    root: [
      path.join(rootDir, 'src')
    ],
    modulesDirectories: [
      'node_modules',
      path.resolve(__dirname, '../node_modules')
    ]
  },
  resolveLoader: {
    modulesDirectories: [
      path.resolve(__dirname, '../node_modules')
    ]
  },
  plugins: [],
  postcss: () => postCssProcessors
}, envConfig)

config.plugins.push(new HtmlWebPackPlugin({
  env,
  title: 'Rambler comments admin',
  template: path.join(rootDir, 'static/index.html'),
  favicon: path.join(rootDir, 'static/favicon-32x32.png'),
  filename: 'index.html',
  hash: true
}))

config.plugins.push(new webpack.DefinePlugin({
  __DEV__: JSON.stringify(env === 'development'),
  __PRODUCTION__: JSON.stringify(env === 'production'),
  __CONFIG__: JSON.stringify(appConfig),
  'process.env': {
    NODE_ENV: JSON.stringify(env)
  }
}))
config.plugins.push(new webpack.optimize.DedupePlugin())
config.plugins.push(new webpack.optimize.OccurrenceOrderPlugin())

config.module.loaders = config.module.loaders.concat([
  {
    test: require.resolve('react'),
    loader: 'expose?React'
  },
  {
    test: /\.js?$/,
    loader: 'babel-loader?cacheDirectory',
    exclude: path.join(rootDir, 'node_modules')
  },
  {
    test: /\.json$/,
    loader: 'json-loader'
  }
])

module.exports = config
