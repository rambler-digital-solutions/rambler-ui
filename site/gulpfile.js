/* eslint strict: ['off'] */
// 1. Клонируем ветку gh-pages в определенную папку
// 2. Собираем через вебкак + gulp папку

'use strict'

const _ = require('lodash')
const gulp = require('gulp')
const del = require('del')
const cp = require('child_process')
const path = require('path')
const webpack = require('webpack-stream')
const ghpages = require('gh-pages')
const webpackConfig = require('./webpack/config')
const buildGhPagesDir = __dirname + '/build-gh-pages'
const buildDir = __dirname + '/build'
const webpackSrc = __dirname + '/src/app.js'
const versionsFile = __dirname + '/versions.json'
const readmeFile = __dirname + '/README.md'
const argv = require('minimist')(process.argv)
const config = require('./config')
const exec = (str) =>
  cp.execSync(str).toString().trim()


gulp.task('gh-pages', ['webpack'], (callback) => {
  // версии, для которых создаем папки

  const remoteUrl = exec('git config --get remote.origin.url')
  const folders = _.compact((argv.versions || '').split(/[\s,]+/))
  const message = argv.message || 'Update gh-pages'

  exec(`rm -rf ${buildGhPagesDir}`)
  exec(`git clone -b gh-pages ${remoteUrl} ${buildGhPagesDir}`)
  exec(`rm -rf ${buildGhPagesDir}/.git`)
  exec(`find ${buildGhPagesDir} ! -name '*' ! -type d -exec rm -- {} +`)
  folders.forEach((folder) => {
    const resFolder = path.join(buildGhPagesDir, folder)
    exec(`rm -rf ${resFolder}`)
    exec(`cp -r ${buildDir} ${resFolder}`)
    if (folder === 'stable')
      exec(`cp -r ${buildDir}/* ${buildGhPagesDir}/`)
  })

  exec(`cp ${versionsFile} ${buildGhPagesDir}/`)
  exec(`cp ${readmeFile} ${buildGhPagesDir}/`)

  ghpages.clean()
  ghpages.publish(buildGhPagesDir, {
    message,
    add: true
  }, (err) => {
    if (err)
      return callback(err)
    ghpages.clean()
    ghpages.publish(buildGhPagesDir, {
      message,
      repo: config.ghPagesRepo,
      add: true
    }, callback)
  })

})

gulp.task('webpack', ['clean'], () =>
  gulp.src(webpackSrc)
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(buildDir))
)

gulp.task('clean', () =>
  del(buildDir)
)
