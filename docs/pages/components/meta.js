/* eslint-env node */
const fs = require('fs')
const path = require('path')

const items = fs.readdirSync(path.resolve(__dirname, '../../pages/components'))

module.exports = {
  title: 'Компоненты',
  children: items.filter(name => name.match(/^\w+$/))
}
