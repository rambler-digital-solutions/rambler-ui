import { findDOMNode } from 'react-dom'
import { mount as enzymeMount } from 'enzyme'
import once from 'lodash/once'

const provideContainer = once(() => {
  const container = document.createElement('div')
  container.className = 'test-container'
  document.body.appendChild(container)
  return container
})

export function mount(component) {
  return enzymeMount(component, {
    attachTo: provideContainer()
  })
}

export function getNodeStyles(node) {
  const computedStyles = getComputedStyle(node)
  const resultStyles = {}
  for (let i = 0; i < computedStyles.length; i += 1) {
    const name = computedStyles[i]
    resultStyles[name] = computedStyles.getPropertyValue(name)
  }
  return resultStyles
}

export function getStyles(wrappedComponent) {
  const node = findDOMNode(wrappedComponent.get(0))
  return getNodeStyles(node)
}
