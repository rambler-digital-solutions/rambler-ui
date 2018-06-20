/* eslint-env node */
const fs = require('fs')

const items = fs.readdirSync(__dirname)

module.exports = {
  title: 'Компоненты',
  children: items.filter(name => name.match(/^\w+$/))
}
