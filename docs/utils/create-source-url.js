import config from 'docs/config'

const cache = {}

export default function createSourceUrl(pathname) {
  if (cache[pathname]) return cache[pathname]
  const path = pathname.substring(1).split(/\//)
  const prefix = path[0]
  if (prefix !== 'components')
    return `${config.repoLink}tree/${
      config.branch
    }/docs/pages${pathname}/index.md`
  const filename = path.pop()
  if (filename == null || prefix === filename) return
  return `${config.repoLink}tree/${config.branch}/src/${filename}`
}
