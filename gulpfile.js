const gulp = require('gulp')
const postcss = require('gulp-postcss')
const precss = require('precss')
const cssnext = require('postcss-cssnext')
const cssModules = require('postcss-modules')
const rename = require('gulp-rename')
const replace = require('gulp-replace')
const clean = require('gulp-clean')
const babel = require('gulp-babel')
const runSequence = require('run-sequence')
const path = require('path')
const fs = require('fs')
const cp = require('child_process')
const eslint = require('gulp-eslint')
const importRgx = /import +([^\n]+?) +from +['"]([^\n\s]+?\.css)['"]/g
const srcDir = __dirname + '/src'
const buildDir = __dirname + '/build'
const packageJson = require(__dirname + '/package.json')
const cwd = process.cwd()

gulp.task('eslintChanged', () => {
  const changedFiles = cp.execSync(`git diff --name-only ${srcDir}; git diff --cached --name-only ${srcDir}`)
    .toString()
    .split('\n')
    .filter(Boolean)
    .map(file => path.resolve(cwd, file))
    .filter(file => /\.js?$/.test(file))
  return gulp.src(changedFiles)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
})

gulp.task('eslint', () => {
  return gulp.src(path.resolve(__dirname, 'src/**/*.js'))
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
})

gulp.task('clean', function () {
  return gulp.src(buildDir)
    .pipe(clean())
})

gulp.task('build:css', function () {
  const processors = [
    precss(),
    cssnext(),
    cssModules({
      getJSON(fileName, json) {
        const resFileName = fileName.replace(srcDir, buildDir) + '.js'
        fs.writeFileSync(resFileName, `module.exports = ${ JSON.stringify(json) }`)
      },
      generateScopedName(name/* , filename, css */) {
        return 'rui-' + name
      }
    })
  ]
  return gulp.src([
      './src/**/*.css',
      '!src/**/__doc__/**/*.css'
    ])
    .pipe(postcss(processors))
    .pipe(rename({ suffix: '.compiled' }))
    .pipe(gulp.dest(buildDir))
})

gulp.task('build:js', function () {
  return gulp.src([
    './src/**/*.js',
    '!src/**/__doc__/**/*.js'
  ])
  .pipe(replace(importRgx, function (expr, what, file) {
    return `
    import ${what} from '${file.replace('.css', '.css.js')}'
    import '${file.replace('.css', '.compiled.css')}'
    `
  }))
  .pipe(replace('$VERSION', packageJson.version))
  .pipe(babel())
  .pipe(gulp.dest(buildDir))
})

gulp.task('copy', function () {
  return gulp.src([
    __dirname + '/package.json',
    __dirname + '/.npmignore'
  ])
  .pipe(gulp.dest(buildDir))
})

gulp.task('precommit', ['eslintChanged'])

gulp.task('build', function (callback) {
  runSequence('clean', ['copy', 'build:js', 'build:css'], callback)
})

// 3. es-lint
