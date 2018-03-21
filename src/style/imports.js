// TODO: drop it
import uuid from '../utils/uuid'

const ns = uuid()

export const loadRobotoFont = () => {
  let link = document.querySelector(`[data-style-id="${ns}"]`)
  if (link)
    return
  link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = 'https://fonts.googleapis.com/css?family=Roboto:400,300,500,700&subset=latin,cyrillic'
  link.setAttribute('data-style-id', ns)
  const rootEl = document.querySelector('head') || document.body
  rootEl.appendChild(link)
}
