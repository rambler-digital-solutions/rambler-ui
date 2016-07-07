const webpack = require('webpack')

module.exports = {
  module: {
    loaders: [{
      test: /\.(css)$/,
      exclude: /node_modules/,
      loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
    }, {
      test: /\/node_modules\/.*\.(css)$/,
      loader: 'style-loader!css-loader!postcss-loader'
    }]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ]
}
