/* eslint-env node */
const path = require('path')

const rootDir = path.resolve(__dirname, './pages')

function readIndex(path = '') {
  let index = null

  try {
    index = require(rootDir + path + '/index')
  } catch (e) {
    return {pathname: path}
  }

  return {
    pathname: path,
    title: index.title,
    children: index.children.map(name => readIndex(path + '/' + name))
  }
}

module.exports = readIndex().children
