/* eslint-env node */
/* eslint global-require: ["off"] */

const cp = require('child_process')
const {merge} = require('lodash')

const env = process.env.NODE_ENV || 'development'

module.exports = {
  title: 'Rambler UI',
  libName: 'rambler-ui',
  branch: process.env.CI_COMMIT_REF_NAME || cp.execSync('git rev-parse --abbrev-ref HEAD').toString().trim()
}

try {
  merge(module.exports, require('./' + env))
} catch (e) {
  // eslint-disable-next-line no-console
  console.error(e)
}
