/* eslint-env node */
/* eslint global-require: ["off"] */

const cp = require('child_process')
const deepmerge = require('deepmerge')

const env = process.env.NODE_ENV || 'development'

const base =  {
  title: 'Rambler UI',
  libName: 'rambler-ui',
  repo: 'git@gitlab.rambler.ru:rambler-ui/rambler-ui',
  branch: process.env.CI_COMMIT_REF_NAME || cp.execSync('git rev-parse --abbrev-ref HEAD').toString().trim()
}

try {
  module.exports = deepmerge(base, require('./' + env))
} catch (e) {
  // eslint-disable-next-line no-console
  console.error(e)
  module.exports = base
}
