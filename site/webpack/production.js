const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  module: {
    loaders: [{
      test: /\.(css)$/,
      exclude: /node_modules/,
      loader: ExtractTextPlugin.extract(
        'style',
        'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
      )
    }, {
      test: /\/node_modules\/.*\.(css)$/,
      loader: ExtractTextPlugin.extract(
        'style',
        'css-loader!postcss-loader'
      )
    }]
  },
  devtool: 'source-map',
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.optimize.UglifyJsPlugin()
  ]
}
