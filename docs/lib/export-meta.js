const isHeading = depth => node => node.type === 'heading' && depth(node.depth)

const getValue = node =>
  node.children && node.children.map(node => node.value).join(' ')

const exportMeta = () => root => {
  const {children} = root
  const meta = {}
  const index = children.findIndex(isHeading(d => d === 1))
  const titleNode = children[index]
  const descNode = children[index + 1]
  if (titleNode) {
    meta.title = getValue(titleNode)
    if (descNode.type === 'paragraph') {
      meta.description = getValue(descNode)
      delete children[index + 1]
    }
    delete children[index]
  }
  const headingNodes = children.filter(isHeading(d => d === 2 || d === 3))
  if (headingNodes.length > 0) meta.toc = headingNodes.map(getValue)
  children.unshift({
    type: 'import',
    value: 'import withDoc from \'docs/components/with-doc\''
  })
  children.push({
    type: 'export',
    default: false,
    value: `export const meta = ${JSON.stringify(meta)}`
  })
  children.push({
    type: 'export',
    default: true,
    value: 'export default withDoc(meta)(({children}) => children)'
  })
  root.children = children.filter(Boolean)
}

module.exports = exportMeta
