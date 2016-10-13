module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      'src/**/*.test.js'
    ],

    preprocessors: {
      'src/**/*.test.js': ['webpack']
    },

    webpack: { //kind of a copy of your webpack config
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/,
          }, {
            test: /\.json$/,
            loader: 'json-loader'
          }
        ]
      },
      resolve: {
        root: [__dirname + '/src', __dirname + '/node_modules']
      }
    },

    plugins: [
      'karma-webpack',
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-phantomjs-launcher'
    ],

    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  })
}