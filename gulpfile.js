/* eslint-env node */

const gulp = require('gulp')
const replace = require('gulp-replace')
const clean = require('gulp-clean')
const babel = require('gulp-babel')
const runSequence = require('run-sequence')

const buildDir = __dirname + '/build'
const packageJson = require(__dirname + '/package.json')

gulp.task('clean', () =>
  gulp.src(buildDir)
    .pipe(clean()))

gulp.task('build:js', () =>
  gulp.src([
    './src/**/*.js',
    '!src/**/__{doc,test}__/**/*.js'
  ])
    .pipe(replace('$VERSION', packageJson.version))
    .pipe(babel())
    .pipe(gulp.dest(buildDir)))

gulp.task('build:copy', () =>
  gulp.src([
    __dirname + '/package.json',
    __dirname + '/.npmignore',
    __dirname + '/README.md'
  ])
    .pipe(gulp.dest(buildDir)))

gulp.task('build', ['clean'], callback =>
  runSequence(['build:copy', 'build:js'], callback))

