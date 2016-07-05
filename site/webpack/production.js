const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  module: {
    preLoaders: [{
      test: /\.(css)$/,
      loader: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
    }],
    loaders: [],
    postloaders: [{
      test: /\.(css)$/,
      loader: ExtractTextPlugin.extract('style', 'css')
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
