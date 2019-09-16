const path = require('path')
const fse = require('fs-extra')
const glob = require('glob')

const packagePath = process.cwd()
const srcPath = path.join(packagePath, './src')
const buildPath = path.join(packagePath, './build')

async function copyDeclarationFiles() {
  const files = glob.sync('**/*.d.ts', {cwd: srcPath})
  const cmds = files.map(file =>
    fse.copy(path.resolve(srcPath, file), path.resolve(buildPath, file))
  )
  console.log('=====================================')
  console.log('declaration files copied successfully')
  return Promise.all(cmds)
}

copyDeclarationFiles()
