/* eslint-env node */
const fs = require('fs')
const path = require('path')
const mdx = require('@mdx-js/mdx')
const babel = require('@babel/core')
const exportMeta = require('./lib/export-meta')

const componentPath = path.resolve(__dirname, 'pages/components')

const components = fs
  .readdirSync(componentPath)
  .filter(name => /^\w+$/.test(name))
  .map(name => {
    const mdxText = fs.readFileSync(`${componentPath}/${name}/index.md`, 'utf8')
    const jsx = mdx.sync(mdxText, {
      remarkPlugins: [exportMeta]
    })
    const {code} = babel.transform(`import React from 'react';${jsx}`, {
      presets: ['@babel/preset-env', '@babel/preset-react'],
      plugins: [
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-proposal-class-properties'
      ]
    })
    const execute = new Function('module', 'exports', 'require', code)
    const module = {
      exports: {}
    }
    execute(module, module.exports, () => {
      const moduleExports = () => () => void 0
      moduleExports.createElement = () => void 0
      return moduleExports
    })
    const {meta} = module.exports
    return {
      title: meta && meta.title,
      path: `/components/${name}`
    }
  })

module.exports = components
