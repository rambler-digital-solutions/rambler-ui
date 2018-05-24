/* eslint-env node */
const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const {NODE_ENV} = process.env

// TODO: support cli args

module.exports = {
  mode: NODE_ENV,
  entry: path.join(__dirname, 'src/index'),
  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname, 'build'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          removeAttributeQuotes: false
        }
      },
      {
        test: /\.md$/,
        loader: 'raw-loader'
      }
    ]
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, '../')
    ],
    alias: {
      'rambler-ui': path.resolve(__dirname, '../src')
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(NODE_ENV)
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
      open: true,
      port: 8086,
      stats: {
        colors: true
      }
    }
  })
}
