/* eslint strict: ['off'] */
'use strict'

const _ = require('lodash')
const async = require('async')
const gulp = require('gulp')
const postcss = require('gulp-postcss')
const cssnext = require('postcss-cssnext')
const precss = require('precss')
const cssModules = require('postcss-modules')
const rename = require('gulp-rename')
const replace = require('gulp-replace')
const clean = require('gulp-clean')
const babel = require('gulp-babel')
const runSequence = require('run-sequence')
const postCssVars = require('postcss-simple-vars')
const postCssImport = require('postcss-import')
const path = require('path')
const fs = require('fs')
const cp = require('child_process')
const eslint = require('gulp-eslint')
const argv = require('minimist')(process.argv)
const importRgx = /import +([^\n]+?) +from +['"]([^\n\s]+?\.css)['"]/g
const srcDir = __dirname + '/src'
const siteSrcDir = __dirname + '/site/src'
const buildDir = __dirname + '/build'
const packageJson = require(__dirname + '/package.json')
const cwd = process.cwd()
const mkdirp = require('mkdirp')
const ghpages = require('gh-pages')
const cssVariables = require('flat')(require(__dirname + '/src/variables'), { delimiter: '-' })


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

gulp.task('build:css', () => {
  const processors = [
    postCssImport(),
    postCssVars({variables: cssVariables}),
    precss(),
    cssnext(),
    cssModules({
      getJSON(fileName, json) {
        const resFileName = fileName.replace(srcDir, buildDir) + '.js'
        mkdirp.sync(path.dirname(resFileName))
        fs.writeFileSync(resFileName, `module.exports = ${JSON.stringify(json)}`)
      },
      generateScopedName(name/* , filename, css */) {
        return 'rui-' + name
      }
    })
  ]
  return gulp.src([
    __dirname + '/src/**/*.css',
    '!' + __dirname + '/src/**/__doc__/**/*.css'
  ])
  .pipe(postcss(processors))
  .pipe(rename({ suffix: '.compiled' }))
  .pipe(gulp.dest(buildDir))
})

gulp.task('build:js', () =>
  gulp.src([
    './src/**/*.js',
    '!src/**/__doc__/**/*.js'
  ])
  .pipe(replace(importRgx, (expr, what, file) =>
    `
    import ${what} from '${file.replace('.css', '.css.js')}'
    import '${file.replace('.css', '.compiled.css')}'
    `
  ))
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
  runSequence(['copy:build', 'build:css', 'build:js'], callback)
)
