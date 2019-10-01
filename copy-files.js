/* eslint-env node */
const path = require('path')
const fs = require('fs')
const glob = require('glob')

const packagePath = process.cwd()
const srcPath = path.join(packagePath, './src')
const buildPath = path.join(packagePath, './build')

try {
  const declarationFiles = glob.sync('**/*.d.ts', {cwd: srcPath})
  const metaFiles = [
    '.npmignore',
    'package.json',
    'package-lock.json',
    'README.md'
  ]
  declarationFiles.forEach(file => {
    fs.copyFileSync(path.resolve(srcPath, file), path.resolve(buildPath, file))
  })
  console.log('declaration files copied successfully')
  metaFiles.forEach(file => {
    fs.copyFileSync(
      path.resolve(packagePath, file),
      path.resolve(buildPath, file)
    )
  })
  console.log('package meta files copied successfully')
} catch (error) {
  console.error(error)
  process.exit(1)
}
