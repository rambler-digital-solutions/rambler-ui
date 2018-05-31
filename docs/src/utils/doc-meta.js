/* eslint-env node */
const path = require('path')

const rootDir = path.resolve(__dirname, '../pages')

function readMeta(path = '') {
  let meta = null

  try {
    meta = require(rootDir + path + '/meta')
  } catch (e) {
    return {pathname: path}
  }

  return {
    pathname: path,
    title: meta.title,
    children: meta.children.map(name => readMeta(path + '/' + name))
  }
}

module.exports = readMeta().children
