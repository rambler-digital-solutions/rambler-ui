const path = require('path')

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      'src/**/*.test.js'
    ],

    preprocessors: {
      'src/**/*.test.js': ['webpack', 'sourcemap']
    },

    webpack: { //kind of a copy of your webpack config
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/,
          }, {
            test: /\.json$/,
            loader: 'json',
            include: /node_modules/
          }
        ]
      },
      externals: {
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
      },
      resolve: {
        root: [__dirname + '/src', __dirname + '/node_modules'],
        extensions: ['', '.js', '.json']
      },
      resolveLoader: {
        root: path.join(__dirname, 'node_modules')
      }
    },

    webpackServer: {
      noInfo: true
    },

    plugins: [
      'karma-webpack',
      'karma-jasmine',
      'karma-sourcemap-loader',
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