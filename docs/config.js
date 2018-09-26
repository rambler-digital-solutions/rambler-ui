/* eslint-env node */
const cp = require('child_process')

const {NODE_ENV = 'development', CI_COMMIT_REF_NAME} = process.env

const base = {
  repo: 'git@gitlab.rambler.ru:rambler-ui/rambler-ui',
  branch:
    CI_COMMIT_REF_NAME ||
    cp
      .execSync('git rev-parse --abbrev-ref HEAD')
      .toString()
      .trim()
}

let env

if (NODE_ENV === 'development')
  env = {
    repoLink: 'https://github.com/rambler-digital-solutions/rambler-ui/',
    pathPrefix: ''
  }

if (NODE_ENV === 'production')
  env = {
    targets: {
      'rambler-ui.pages.rambler-co.ru': {
        repoLink: 'https://gitlab.rambler.ru/rambler-ui/rambler-ui/',
        pathPrefix: '/rambler-ui'
      },
      'ui-kit.rambler.ru': {
        repoLink: 'https://github.com/rambler-digital-solutions/rambler-ui/',
        pathPrefix: ''
      }
    }
  }

module.exports = Object.assign({}, base, env)
