import getTitle from 'get-md-title'

const context = require.context('docs/src/pages/', true, /\.md/)

export default context.keys().reduce((cache, key) => {
  const module = context(key)
  const pathname = key.match(/\.(.+)\/[^/]+\.md/)[1]

  cache[pathname] = {
    module,
    pathname,
    title: getTitle(module).text
  }

  return cache
}, {})
