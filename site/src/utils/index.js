import path from 'path'
import { memoize } from 'lodash'
import { branch, repoLink } from 'config'

const getLinkToComponent = (name) =>
  path.join('/components', name)

const getLinkToCode = (name) =>
  repoLink + path.join('/tree', branch, 'src', name)

const getSortedKeys = memoize(reqContext => reqContext.keys().sort())

export const provideDocModules = memoize(
  (reqContext) => {

    const rootDocModules = []
    const dict = {}

    getSortedKeys(reqContext).forEach(key => {
      const name = key.replace(/^\.\//, '').replace(/\/__doc__\/.*$/, '')
      const parentName = name.split('/').slice(0, -1).join('/')
      const docModule = {
        name,
        linkToComponent: getLinkToComponent(name),
        linkToCode: getLinkToCode(name),
        selfName: name.match(/\/?([^/]*)$/)[1],
        module: reqContext(key),
        childrenDocModules: []
      }
      if (parentName) {
        docModule.parentName = parentName
        dict[parentName].childrenDocModules.push(docModule)
      } else {
        rootDocModules.push(docModule)
      }
      dict[name] = docModule
    })

    return { dict, rootDocModules }
  }
)
