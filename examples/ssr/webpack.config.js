/* eslint-env node */
module.exports = {
  entry: './client/index.js',
  output: {
    filename: 'index.js',
    path: `${__dirname}/build`,
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  }
}
