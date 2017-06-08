/* eslint global-require: ["off"] */
const cp = require('child_process')
const env = process.env.NODE_ENV || 'development'
const _ = require('lodash')

module.exports = {
  repoLink: 'https://github.com/rambler-digital-solutions/rambler-ui/',
  ghPagesRepo: 'git@github.com:rambler-digital-solutions/rambler-ui.git',
  branch: cp.execSync('git rev-parse --abbrev-ref HEAD').toString().trim()
}

try {
  _.merge(module.exports, require('./' + env))
} catch (e) {
  console.error(e)
}

