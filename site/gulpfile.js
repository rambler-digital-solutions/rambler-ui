/* eslint strict: ["off"] */
/* eslint-env node */

// 1. Клонируем ветку gh-pages в определенную папку
// 2. Собираем через вебкак + gulp папку

const _ = require('lodash')
const fs = require('fs')
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
const headTag = cp.execSync('git describe --abbrev=0 --tags').toString().trim()

const exec = str =>
  cp.execSync(str).toString().trim()

gulp.task('build-gh-pages', ['webpack'], () => {
  const remoteUrl = exec('git config --get remote.origin.url')
  const folders = _.compact((argv.versions || '').split(/[\s,]+/))

  if (headTag && folders.includes(headTag) && !folders.includes('stable'))
    folders.push('stable')

  exec(`rm -rf ${buildGhPagesDir}`)
  exec(`git clone -b gh-pages ${remoteUrl} ${buildGhPagesDir}`)
  exec(`rm -rf ${buildGhPagesDir}/.git`)
  exec(`find ${buildGhPagesDir} ! -name '*' ! -type d -exec rm -- {} +`)
  folders.forEach((folder) => {
    const resFolder = path.join(buildGhPagesDir, folder)
    exec(`rm -rf ${resFolder}`)
    exec(`mkdir -p ${resFolder}`)
    exec(`cp -r ${buildDir}/* ${resFolder}/`)
    if (folder === 'stable')
      exec(`cp -r ${buildDir}/* ${buildGhPagesDir}/`)
  })

  exec(`cp ${versionsFile} ${buildGhPagesDir}/`)
  exec(`cp ${readmeFile} ${buildGhPagesDir}/`)

})

gulp.task('gh-pages', ['build-gh-pages'], (callback) => {
  // версии, для которых создаем папки
  const message = argv.message || 'Update gh-pages'

  ghpages.clean()
  ghpages.publish(buildGhPagesDir, {
    message,
    repo: config.gitlabRepo,
    add: true
  }, (err) => {
    if (err)
      return callback(err)
    if (argv.omitGithub)
      return callback()
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
    .pipe(gulp.dest(buildDir)))

gulp.task('clean', () =>
  del(buildDir))

gulp.task('update-version', () => {
  const version = require('../package.json').version
  let versions = require('./versions.json')
  cp.execSync(`sed -i -e 's/\\"version\\":.*/\\"version\\": \\"${version}\\",/' ./package.json`)
  versions.unshift({path: version})
  _.find(versions, {path: ''}).title = `latest (${version})`
  versions = _.uniqBy(versions, ({path}) => path)
  versions.sort((v1, v2) => !v2.path ? 1 : !v1.path ? -1 : v2.path > v1.path ? 1 : -1)
  fs.writeFileSync(path.join(__dirname, 'versions.json'), JSON.stringify(versions, null, '  '))
})
