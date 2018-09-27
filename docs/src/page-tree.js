import config from 'docs/src/config'
import index from /* preval */ './page-index'

const context = require.context('docs/src/pages/', true, /\.md/)

export const cache = context.keys().reduce((cache, key) => {
  const module = context(key)
  const pathname = key.match(/\.(.+)\/[^/]+\.md/)[1]
  cache[pathname] = {
    pathname,
    title: module.title,
    Content: module.default,
    source: createSourceUrl(pathname)
  }
  return cache
}, {})

export function extendPageInfo(index) {
  return index.map(item => {
    const page = cache[item.pathname] || item
    if (item.children) page.children = extendPageInfo(item.children)
    return page
  })
}

export function createSourceUrl(pathname) {
  const path = pathname.substring(1).split(/\//)
  const prefix = path[0]
  if (prefix !== 'components')
    return `${config.repoLink}tree/${config.branch}/docs${pathname}/index.md`
  const filename = path.pop()
  if (filename == null || prefix === filename) return
  return `${config.repoLink}tree/${config.branch}/src/${filename}`
}

export default extendPageInfo(index)
