const getTitle = require('get-md-title')
const getDescription = require('get-md-desc')

module.exports = async function metaLoader(content) {
  const callback = this.async()
  const title = getTitle(content)
  const description = getDescription(content)

  const code = `
  ${content}
export const title = '${title ? title.text : ''}'
export const description = '${description ? description.text : ''}'
  `

  return callback(null, code)
}
