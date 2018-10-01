/* eslint-env node */
const fs = require('fs')
const mdx = require('@mdx-js/mdx')
const babel = require('babel-core')
const exportMeta = require('../../export-meta')

const babelOptions = JSON.parse(
  fs.readFileSync(`${process.cwd()}/.babelrc`, 'utf8')
)

const components = fs
  .readdirSync(__dirname)
  .filter(name => name.match(/^\w+$/))
  .map(name => {
    const mdxText = fs.readFileSync(`${__dirname}/${name}/index.md`, 'utf8')
    const jsx = mdx.sync(mdxText, {
      mdPlugins: [exportMeta]
    })
    const {code} = babel.transform(
      `import React from 'react';${jsx}`,
      babelOptions
    )
    const execute = new Function('module', 'exports', 'require', code)
    const module = {
      exports: {}
    }
    execute(module, module.exports, () => ({
      createElement() {}
    }))
    const {meta} = module.exports
    return {
      title: meta && meta.title,
      path: `/components/${name}`
    }
  })

module.exports = components
