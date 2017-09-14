import { Tabs, TabsItem } from '../../Tabs'
import { ApplyTheme } from '../../theme'
import { mount, getWrapperNode } from '../../utils/test-utils'

import React from 'react'

const applyTheme = (children) => (
  <ApplyTheme>{ children }</ApplyTheme>
)

describe('<Tabs />', () => {
  const tabsProps = {
    id: 'tabsId',
    className: 'tabs'
  }
  const linkProps = {
    id: 'link',
    children: 'tab1',
    href: '#',
    title: 'Title1'
  }
  const buttonProps = {
    id: 'button',
    children: 'tab2',
    title: 'Title2'
  }
  const Container = ({ activeClassName, ...props }) => (<div data-test={activeClassName} {...props} />)
  const containerProps = {
    id: 'container',
    children: 'tab3',
    container: (<Container data-own="own" />),
    title: 'Title3'
  }

  it('Tabs content and attributes', () => {
    const wrapper = mount(applyTheme(
      <Tabs {...tabsProps}>
        <TabsItem {...linkProps} />
        <TabsItem {...buttonProps} />
        <TabsItem {...containerProps} />
      </Tabs>
    ))

    const tabs = getWrapperNode(wrapper)
    const link = getWrapperNode(wrapper.find('#' + linkProps.id))
    const button = getWrapperNode(wrapper.find('#' + buttonProps.id))
    const container = getWrapperNode(wrapper.find('#' + containerProps.id))

    expect(tabs.classList.contains(tabsProps.className)).toEqual(true)
    expect(tabs.getAttribute('id')).toEqual(tabsProps.id)
    expect(tabs.children.length).toEqual(3)
    expect(tabs.children[0]).toEqual(link)
    expect(tabs.children[1]).toEqual(button)
    expect(tabs.children[2]).toEqual(container)
  })

  it('TabsItem content, element type and attributes', () => {
    const wrapper = mount(applyTheme(
      <Tabs>
        <TabsItem {...linkProps} />
        <TabsItem {...buttonProps} />
        <TabsItem {...containerProps} />
      </Tabs>
    ))

    const link = getWrapperNode(wrapper.find('#' + linkProps.id))
    const button = getWrapperNode(wrapper.find('#' + buttonProps.id))
    const container = getWrapperNode(wrapper.find('#' + containerProps.id))

    expect(link.tagName.toUpperCase()).toEqual('A')
    expect(link.getAttribute('href')).toEqual(linkProps.href)
    expect(link.getAttribute('aria-selected')).toEqual('false')
    expect(link.getAttribute('aria-disabled')).toEqual('false')
    expect(link.innerHTML).toEqual(linkProps.children)

    expect(button.tagName.toUpperCase()).toEqual('BUTTON')
    expect(button.getAttribute('aria-selected')).toEqual('false')
    expect(button.disabled).toEqual(false)
    expect(button.innerHTML).toEqual(buttonProps.children)

    expect(container.tagName.toUpperCase()).toEqual('DIV')
    expect(container.getAttribute('title')).toEqual(containerProps.title)
    expect(container.getAttribute('data-own')).toEqual('own')
    expect(container.getAttribute('data-test').includes('isSelected')).toEqual(true)
    expect(container.getAttribute('aria-selected')).toEqual('false')
    expect(container.getAttribute('aria-disabled')).toEqual('false')
    expect(container.innerHTML).toEqual(containerProps.children)
  })

  it('selected TabsItem attributes', () => {
    const wrapper = mount(applyTheme(
      <Tabs value="first">
        <TabsItem {...linkProps} value="first" />
        <TabsItem {...buttonProps} value="first" />
        <TabsItem {...containerProps} value="first" />
        <TabsItem id="notSelected" value="second" />
      </Tabs>
    ))

    const link = getWrapperNode(wrapper.find('#' + linkProps.id))
    const button = getWrapperNode(wrapper.find('#' + buttonProps.id))
    const container = getWrapperNode(wrapper.find('#' + containerProps.id))
    const notSelected = getWrapperNode(wrapper.find('#notSelected'))

    expect(link.className.includes('isSelected')).toEqual(true)
    expect(link.getAttribute('aria-selected')).toEqual('true')

    expect(button.className.includes('isSelected')).toEqual(true)
    expect(button.getAttribute('aria-selected')).toEqual('true')

    expect(container.className.includes('isSelected')).toEqual(true)
    expect(container.getAttribute('aria-selected')).toEqual('true')

    expect(notSelected.className.includes('isSelected')).toEqual(false)
    expect(notSelected.getAttribute('aria-selected')).toEqual('false')
  })

  it('disabled Tabs and TabsItem attributes', () => {
    const wrapper = mount(applyTheme(
      <Tabs disabled>
        <TabsItem {...linkProps} />
        <TabsItem {...buttonProps} />
        <TabsItem {...containerProps} />
      </Tabs>
    ))

    const tabs = getWrapperNode(wrapper)
    const link = getWrapperNode(wrapper.find('#' + linkProps.id))
    const button = getWrapperNode(wrapper.find('#' + buttonProps.id))
    const container = getWrapperNode(wrapper.find('#' + containerProps.id))

    expect(tabs.className.includes('isDisabled')).toEqual(true)

    expect(link.className.includes('isDisabled')).toEqual(true)
    expect(link.getAttribute('aria-disabled')).toEqual('true')

    expect(button.className.includes('isDisabled')).toEqual(true)
    expect(button.disabled).toEqual(true)

    expect(container.className.includes('isDisabled')).toEqual(true)
    expect(container.getAttribute('aria-disabled')).toEqual('true')
  })
})
