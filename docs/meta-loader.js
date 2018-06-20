const getTitle = require('get-md-title')

module.exports = function metaLoader(content) {
  const callback = this.async()
  const title = getTitle(content)

  const code = `
export const title = '${title ? title.text : ''}'
${content}`

  return callback(null, code)
}
