const webpack = require('webpack')

module.exports = {
  module: {
    loaders: [{
      test: /\.(sass|scss|css)$/,
      loader: 'style!css!postcss-loader!'
    }]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}
