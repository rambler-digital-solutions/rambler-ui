/* eslint strict: ["off"] */
const _ = require('lodash')
const async = require('async')
const gulp = require('gulp')
const replace = require('gulp-replace')
const clean = require('gulp-clean')
const babel = require('gulp-babel')
const runSequence = require('run-sequence')
const argv = require('minimist')(process.argv)
const buildDir = __dirname + '/build'
const packageJson = require(__dirname + '/package.json')
const ghpages = require('gh-pages')

gulp.task('clean', () =>
  gulp.src(buildDir)
    .pipe(clean())
)

gulp.task('build:js', () =>
  gulp.src([
    './src/**/*.js',
    '!src/**/__doc__/**/*.js'
  ])
  .pipe(replace('$VERSION', packageJson.version))
  .pipe(babel())
  .pipe(gulp.dest(buildDir))
)

gulp.task('copy:build', () =>
  gulp.src([
    __dirname + '/package.json',
    __dirname + '/.npmignore',
    __dirname + '/README.md'
  ])
  .pipe(gulp.dest(buildDir))
)

// TODO
gulp.task('npm:publish', ['build'], callback => {
  const versions = _.compact((argv.versions || '').split(/[\s,]+/))
  async.eachSeries(versions, (version, next) => {
    ghpages.clean()
    ghpages.publish(
      buildDir,
      { branch: `npm-${version}` },
      next
    )
  }, callback)
})

gulp.task('build', ['clean'], callback =>
  runSequence(['copy:build', 'build:js'], callback)
)
