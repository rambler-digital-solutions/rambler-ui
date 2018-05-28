// TODO: move to config
const repo = 'https://github.com/rambler-digital-solutions/rambler-ui'
const branch = 'master'

// TODO: use it for all components
const context = require.context('rambler-ui/', true, /(Avatar|Button)\/__doc__\/index\.js/)

export default context.keys().map(key => {
  const module = context(key)
  const name = key.split(/\//)[1]

  return {
    pathname: '/components/' + name,
    title: module.title,
    Content: module.default,
    source: repo + '/tree/' + branch + '/src/' + name
  }
})
