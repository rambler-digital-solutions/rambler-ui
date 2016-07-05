const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  module: {
    loaders: [{
      test: /\.(sass|scss|css)$/,
      loader: ExtractTextPlugin.extract('style', 'css!postcss-loader!')
    }]
  },
  devtool: 'source-map',
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true
      },
      mangle: {
        except: ['$super', 'exports', 'require']
      }
    })
  ]
}
