// TODO: move to config
const repo = 'https://github.com/rambler-digital-solutions/rambler-ui'
const branch = 'master'

const context = require.context('rambler-ui/', true, /Avatar\/__doc__\/index\.js/)

export default context.keys().map(key => {
  const name = key.split(/\//)[1]
  const {title, default: module} = context(key)

  return {
    title,
    module,
    pathname: '/components/' + name,
    source: repo + '/tree/' + branch + '/src/' + name
  }
})
