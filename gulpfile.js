/* eslint strict: ['off'] */
'use strict'

const _ = require('lodash')
const async = require('async')
const gulp = require('gulp')
const replace = require('gulp-replace')
const clean = require('gulp-clean')
const babel = require('gulp-babel')
const runSequence = require('run-sequence')
const path = require('path')
const cp = require('child_process')
const eslint = require('gulp-eslint')
const argv = require('minimist')(process.argv)
const srcDir = __dirname + '/src'
const siteSrcDir = __dirname + '/site/src'
const buildDir = __dirname + '/build'
const packageJson = require(__dirname + '/package.json')
const cwd = process.cwd()
const ghpages = require('gh-pages')


gulp.task('eslintChanged', () => {
  const changedFiles = cp.execSync(`git diff --name-only ${srcDir} ${siteSrcDir}; git diff --cached --name-only ${srcDir} ${siteSrcDir}`)
    .toString()
    .split('\n')
    .filter(Boolean)
    .map(file => path.resolve(cwd, file))
    .filter(file => /\.js?$/.test(file))
    .filter(file => /\.js?$/.test(file))
  return gulp.src(changedFiles)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
})

gulp.task('eslint', () =>
  gulp.src([
    __dirname + '/**/*.js'
  ])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError())
)

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
    __dirname + '/.npmignore'
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

gulp.task('precommit', ['eslintChanged'])

gulp.task('build', ['clean'], callback =>
  runSequence(['copy:build', 'build:js'], callback)
)
