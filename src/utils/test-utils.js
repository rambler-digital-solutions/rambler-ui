import React, { cloneElement } from 'react'
import { findDOMNode } from 'react-dom'
import { mount as enzymeMount } from 'enzyme'
import { ApplyTheme } from '../theme'
import once from 'lodash/once'

const bodyStyle = document.body.style
const htmlStyle = document.documentElement.style

bodyStyle.height = bodyStyle.minHeight = htmlStyle.height = htmlStyle.minHeight = '100%'

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

export function getComponent(wrappedComponent) {
  return wrappedComponent.get(0)
}

export function getWrapperNode(wrappedComponent) {
  return findDOMNode(getComponent(wrappedComponent))
}

export function getStyles(wrappedComponent) {
  return getNodeStyles(getWrapperNode(wrappedComponent))
}

export function applyTheme(children) {
  return <ApplyTheme>{ children }</ApplyTheme>
}

export function withTheme(element) {
  const Result = (props) =>
    <ApplyTheme>{ cloneElement(element, props) }</ApplyTheme>
  Result.displayName = element.displayName
  return <Result />
}
