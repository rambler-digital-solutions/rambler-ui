/* eslint-env node */
const webpack = require('webpack')
const path = require('path')
const highlight = require('remark-highlight.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const argv = require('minimist')(process.argv.slice(2))
const appConfig = require('./config')

const {NODE_ENV} = process.env

module.exports = {
  mode: NODE_ENV,
  entry: path.join(__dirname, 'src/index'),
  output: {
    filename: 'index.js?[hash]',
    path: path.resolve(process.cwd(), argv.output || 'docs/build')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.md$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: '@mdx-js/loader',
            options: {
              mdPlugins: [highlight]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          removeAttributeQuotes: false
        }
      }
    ]
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, '../')],
    alias: {
      'rambler-ui': path.resolve(__dirname, '../src')
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(NODE_ENV),
        APP_CONFIG: JSON.stringify(appConfig)
      }
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../static/index.html'),
      favicon: path.resolve(__dirname, '../static/favicon-32x32.png')
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: NODE_ENV === 'production'
    }),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  ...(NODE_ENV === 'development' && {
    devServer: {
      inline: true,
      port: argv.port || 8086,
      host: argv.host || '0.0.0.0',
      open: !argv.silent,
      disableHostCheck: !!argv.disableHostCheck,
      stats: {
        colors: true
      }
    }
  })
}
