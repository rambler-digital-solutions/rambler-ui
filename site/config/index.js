/* eslint-env node */
/* eslint global-require: ["off"] */

const cp = require('child_process')

const env = process.env.NODE_ENV || 'development'
const _ = require('lodash')

module.exports = {
  repoLink: 'https://github.com/rambler-digital-solutions/rambler-ui/',
  ghPagesRepo: 'git@github.com:rambler-digital-solutions/rambler-ui.git',
  gitlabRepo: 'git@gitlab.rambler.ru:/rambler-ui/rambler-ui',
  branch: cp.execSync('git rev-parse --abbrev-ref HEAD').toString().trim()
}

try {
  _.merge(module.exports, require('./' + env))
} catch (e) {
  // eslint-disable-next-line no-console
  console.error(e)
}

