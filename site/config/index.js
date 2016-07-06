const cp = require('child_process')
const env = process.env.NODE_ENV || 'development'
const _ = require('lodash')

module.exports = {
  repoLink: 'https://gitlab.rambler.ru/rambler-ui/rambler-ui',
  ghPagesRepo: 'git@github.com:highpower/rambler-ui.git',
  branch: cp.execSync('git rev-parse --abbrev-ref HEAD').toString().trim()
}

try {
  _.merge(module.exports, require('./' + env))
} catch (e) {
  console.error(e)
}

