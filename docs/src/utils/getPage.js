const cache = {}

export default function getPage(pathname, pages) {
  if (cache[pathname])
    return cache[pathname]

  const data = pages.reduce((acc, page) => {
    if (page.children && pathname.indexOf(page.pathname) === 0)
      return getPage(pathname, page.children)
    if (page.pathname === pathname)
      return page
    return acc
  }, null)

  cache[pathname] = data
  return data
}
