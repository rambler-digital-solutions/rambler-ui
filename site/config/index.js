const cp = require('child_process')

module.exports = {
  repoLink: 'https://gitlab.rambler.ru/rambler-ui/rambler-ui',
  branch: cp.execSync('git rev-parse --abbrev-ref HEAD').toString().trim()
}
