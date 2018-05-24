import findComponents from 'docs/src/utils/findComponents'
import findPages from 'docs/src/utils/findPages'

export default function composePageTree (pages) {
  return pages.map(page => {
    if (page.children)
      page.children = composePageTree(page.children)

    // Temporary patch components section
    // to separate different doc pages for components and docs
    // TODO: move all docs to *.md and remove it
    if (page.pathname === '/components')
      return {
        ...page,
        title: 'Компоненты',
        children: findComponents
      }

    return {
      ...page,
      ...findPages[page.pathname]
    }
  })
}
