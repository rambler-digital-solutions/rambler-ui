// TODO: move to config
const repo = 'https://github.com/rambler-digital-solutions/rambler-ui'
const branch = 'master'

const context = require.context('docs/src/pages/', true, /\.md/)

export default context.keys().reduce((cache, key) => {
  const module = context(key)
  const pathname = key.match(/\.(.+)\/[^/]+\.md/)[1]

  cache[pathname] = {
    pathname,
    title: module.title,
    Content: module.default,
    source: repo + '/tree/' + branch + '/docs/src' + pathname
  }

  return cache
}, {})
