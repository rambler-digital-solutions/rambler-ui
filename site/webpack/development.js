const webpack = require('webpack')

module.exports = {
  module: {
    preLoaders: [{
      test: /\.(css)$/,
      loader: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
    }],
    loaders: [],
    postLoaders: [{
      test: /\.(css)$/,
      loader: 'style-loader'
    }]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}
