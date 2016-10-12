import once from 'lodash/once'

export const loadRobotoFont = once(() => {
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = 'https://fonts.googleapis.com/css?family=Roboto:400,300,500,700&subset=latin,cyrillic'
  const rootEl = document.querySelector('head') || document.body
  rootEl.appendChild(link)
})
