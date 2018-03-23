import React, { cloneElement } from 'react'
import Enzyme, {mount as enzymeMount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { ApplyTheme } from '../theme'

const bodyStyle = document.body.style
const htmlStyle = document.documentElement.style

bodyStyle.height = bodyStyle.minHeight = htmlStyle.height = htmlStyle.minHeight = '100%'

Enzyme.configure({ adapter: new Adapter() })

const provideContainer = () => {
  let container = document.querySelector('.test-container')
  if (container == null) {
    container = document.createElement('div')
    container.className = 'test-container'
    document.body.appendChild(container)
  }
  return container
}

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

export function getWrapperNode(wrappedComponent) {
  return wrappedComponent.getDOMNode()
}

export function getStyles(wrappedComponent) {
  return getNodeStyles(getWrapperNode(wrappedComponent))
}

export function applyTheme(children) {
  return <ApplyTheme>{ children }</ApplyTheme>
}

export function withTheme(element) {
  const Result = props =>
    <ApplyTheme>{ cloneElement(element, props) }</ApplyTheme>
  Result.displayName = element.displayName
  return <Result />
}
