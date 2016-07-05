import path from 'path'
import { memoize } from 'lodash'
import { branch, repoLink } from 'config'

const getLinkToComponent = (name) =>
  path.join('/components', name)

const getLinkToCode = (name) =>
  path.join(repoLink, 'tree', branch, 'src/components', name)

const getSortedKeys = memoize(reqContext => reqContext.keys().sort())

export const provideDocModules = memoize(
  (reqContext) => {
    const rootModules = []
    const dict = {}

    getSortedKeys(reqContext).forEach(key => {
      const name = key.replace(/^\.\//, '').replace(/\/__doc__\.*$/, '')
      const parentName = name.replace(/\/[^\/]+$/, '')
      const docModule = {
        name,
        linkToComponent: getLinkToComponent(name),
        linkToCode: getLinkToCode(name),
        selfName: name.match(/\/?([^\/]*)$/)[1],
        module: reqContext(key),
        childrenModules: []
      }
      if (parentName) {
        docModule.parentName = parentName
        dict[parentName].childrenModules.push(docModule)
      } else {
        rootModules.push(docModule)
      }
      dict[name] = docModule
    })

    return { dict, rootModules }
  }
)
