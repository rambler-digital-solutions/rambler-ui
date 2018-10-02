#!/usr/bin/env node
/* eslint-env node */
/* eslint-disable no-console */
const fs = require('fs')
const path = require('path')
const cp = require('child_process')
const ghpages = require('gh-pages')
const argv = require('minimist')(process.argv.slice(2))
const appConfig = require('../config')

const currentVersion = require(path.resolve(__dirname, '../../package.json'))
  .version

const outDir = path.resolve(process.cwd(), argv.output || 'docs/build')
const tempDir = path.join(outDir, 'temp')

const exec = command =>
  cp
    .execSync(command)
    .toString()
    .trim()

const versionToNumber = str =>
  str
    .split('.')
    .reduce(
      (acc, version, i) => acc + Number(version) * Math.pow(1e5, 1 / (i + 1)),
      0
    )

const remoteUrl = exec('git config --get remote.origin.url')
const headTag = exec('git describe --abbrev=0 --tags')
const folders = (argv.versions || '').split(/[\s,]+/).filter(Boolean)

if (headTag && folders.includes(headTag) && !folders.includes('stable'))
  folders.push('stable')

console.log('➜ Get previous versions')
exec(`git clone -b gh-pages ${remoteUrl} ${tempDir}`)
exec(`rm -rf ${tempDir}/{.git,index.html,index*.js,*.png}`)
exec(`find ${tempDir} ! -name '*' ! -type d -exec rm -- {} +`)

console.log('➜ Copy versions to build directory')
folders.forEach(folder => {
  if (/^v-?[.x0-9]+$/.test(folder)) folder = folder.replace(/^v-?/, '')
  const resultDir = path.join(tempDir, folder)
  exec(`rm -rf ${resultDir}`)
  exec(`mkdir -p ${resultDir}`)
  exec(`rsync -rvpl --exclude temp ${outDir}/* ${resultDir}/`)
  if (folder === 'stable')
    exec(`rsync -rvpl --exclude temp ${outDir}/* ${tempDir}/`)
})

exec(`rsync -rvpl ${tempDir}/* ${outDir}`)
exec(`rm -rf ${tempDir}`)

if (argv.include) {
  console.log('➜ Copy additional files')
  exec(`rsync -rvp ${argv.include} ${outDir}`)
}

console.log('➜ Update `versions.json` file')
let versions
try {
  versions = require(path.join(outDir, 'versions.json'))
} catch (e) {
  versions = []
}

const latestTitle = `latest (${currentVersion})`
let [latest] = versions.filter(v => v.path === '')
if (!latest) {
  versions.unshift({path: ''})
  latest = versions[0]
}
if (latest.title !== latestTitle) {
  versions.unshift({path: currentVersion})
  latest.title = latestTitle
  versions = versions
    .reduce((acc, version) => {
      const [exists] = acc.filter(v => v.path === version.path)
      if (exists) return acc
      return acc.concat(version)
    }, [])
    .sort(
      (v1, v2) =>
        !v2.path
          ? 1
          : !v1.path
            ? -1
            : versionToNumber(v2.path) > versionToNumber(v1.path)
              ? 1
              : -1
    )
  fs.writeFileSync(
    path.join(outDir, 'versions.json'),
    JSON.stringify(versions, null, 2)
  )
}

const message = argv.message || 'Update gh-pages'

console.log(`➜ Publish site to \`${appConfig.repo}\``)
ghpages.publish(
  outDir,
  {
    message,
    add: true,
    dotfiles: true,
    repo: appConfig.repo
  },
  err => {
    if (err) {
      console.error(err)
      process.exit(1)
    }
  }
)
