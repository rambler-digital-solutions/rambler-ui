/* eslint-env node */

module.exports = config =>
  config.set({
    basePath: '',
    frameworks: ['jasmine'],

    files: [
      'test/init.js',
      'node_modules/babel-polyfill/dist/polyfill.js',
      'src/**/*.test.js'
    ],

    preprocessors: {
      'src/**/!(*.test).js': ['coverage'],
      'src/**/*.test.js': ['webpack', 'sourcemap']
    },

    webpack: {
      mode: 'development',
      devtool: 'inline-source-map',
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
          }
        ]
      },
      externals: [
        'react/addons',
        'react/lib/ExecutionEnvironment',
        'react/lib/ReactContext'
      ],
      resolve: {
        modules: ['src', 'node_modules']
      },
      resolveLoader: {
        modules: ['node_modules']
      }
    },

    webpackMiddleware: {
      stats: 'errors-only'
    },

    plugins: [
      'karma-webpack',
      'karma-jasmine',
      'karma-sourcemap-loader',
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-spec-reporter',
      'karma-coverage'
    ],

    reporters: ['spec', 'coverage'],

    specReporter: {
      maxLogLines: 5,
      suppressErrorSummary: true,
      suppressFailed: false,
      suppressPassed: false,
      suppressSkipped: true,
      showSpecTiming: false
    },

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome', 'PhantomJS_custom'],
    singleRun: false,

    customLaunchers: {
      PhantomJS_custom: {
        base: 'PhantomJS',
        options: {
          viewportSize: {
            width: 1200,
            height: 1000
          }
        }
      }
    },

    coverageReporter: {
      type: 'text'
    }
  })
