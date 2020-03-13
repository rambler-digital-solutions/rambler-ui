/* eslint-env node */
const argv = require('minimist')(process.argv.slice(2))
const {component = '**'} = argv

module.exports = config =>
  config.set({
    basePath: '',

    frameworks: ['jasmine'],

    files: [
      'test/init.js',
      'node_modules/@babel/polyfill/dist/polyfill.js',
      `src/${component.match(',') ? `{${component}}` : component}/*.test.js`
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
      ]
    },

    webpackMiddleware: {
      stats: 'errors-only'
    },

    plugins: [
      'karma-webpack',
      'karma-jasmine',
      'karma-sourcemap-loader',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
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
    singleRun: true,
    autoWatch: false,
    browserNoActivityTimeout: 60000,

    browsers: ['ChromeC', 'FirefoxC'],

    customLaunchers: {
      ChromeC: {
        base: 'ChromeHeadless',
        flags: ['--window-size=1366,768']
      },
      FirefoxC: {
        base: 'Firefox',
        flags: ['-headless', '-width=1366', '-height=768']
      }
    },

    coverageReporter: {
      type: 'text',
      ...(component === '**' && {
        check: {
          global: {
            branches: 54.5
          }
        }
      })
    }
  })
