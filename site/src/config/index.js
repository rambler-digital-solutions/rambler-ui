/* eslint no-undef: ["off"] */

const config = __CONFIG__

if (location.hostname.indexOf('ui-kit.rambler.ru') !== -1) {
  config.pathPrefix = ''
  config.repoLink = 'https://github.com/rambler-digital-solutions/rambler-ui/'
}
else if (location.hostname.indexOf('pages.rambler-co.ru') !== -1) {
  config.pathPrefix = '/rambler-ui'
  config.repoLink = 'https://gitlab.rambler.ru/rambler-ui/rambler-ui/'
}
else {
  config.repoLink = 'https://gitlab.rambler.ru/rambler-ui/rambler-ui/'
}

module.exports = config
