import { SideNav, SideNavItem } from '../../SideNav'
import BookIcon from '../../icons/forms/BookIcon'
import { ApplyTheme } from '../../theme'
import { mount, getStyles } from '../../utils/test-utils'

import React from 'react'

const applyTheme = children => (
  <ApplyTheme>{ children }</ApplyTheme>
)

describe('<SideNav />', () => {
  const defaultPropsSideNav = {
    value: 'general',
    onChange: () => {},
    className: 'sideNav',
    style: {},
    size: 'medium'
  }

  const defaultPropsSideNavItem = {
    style: {},
    isSelected: false,
    icon: <BookIcon />
  }

  let event, value

  beforeEach(() => {
    spyOn(defaultPropsSideNav, 'onChange').and.callFake((e, val) => { event = e; value = val })
  })

  it('Styles for SideNav, SideNavItem', () => {
    const wrapper = mount(applyTheme(<div style={{width: 480}}>
      <SideNav
        {...defaultPropsSideNav}
        size="small"
        block={false}>
        <SideNavItem
          {...defaultPropsSideNavItem}
          className="sideNavSelected"
          value="general">Личные данные</SideNavItem>
        <SideNavItem
          {...defaultPropsSideNavItem}
          className="sideNavItem"
          value="email">Адреса электронной почты</SideNavItem>
      </SideNav>
    </div>))

    const sideNavStyles = getStyles(wrapper.find('.sideNav'))
    const sideNavItem = wrapper.find('.sideNavItem')
    const sideNavItemStyles = getStyles(sideNavItem)
    const sideNavItemIconStyles = getStyles(wrapper.find('.sideNavItem svg'))
    const sideNavSelectedIconStyles = getStyles(wrapper.find('.sideNavSelected svg'))

    expect(sideNavStyles.display).toEqual('inline-block')
    expect(sideNavItemStyles['font-family']).toEqual('Roboto, sans-serif')
    expect(sideNavItemStyles['font-size']).toEqual('14px')
    expect(sideNavItemStyles.height).toEqual('25px')
    expect(sideNavItemStyles.width).toEqual('20px')
    expect(sideNavItemStyles['margin-top']).toEqual('20px')
    expect(sideNavItemStyles['margin-left']).toEqual('17px')
    expect(sideNavItemIconStyles.fill).toEqual('rgba(94, 94, 94, 0.4)')
    expect(sideNavSelectedIconStyles.fill).toEqual('#262626')
    expect(sideNavItem.text()).toEqual('')
  })

  it('Styles for SideNav, SideNavItem when size = medium, block = true', () => {
    const wrapper = mount(applyTheme(<div style={{width: 480}}>
      <SideNav
        {...defaultPropsSideNav}
        size="medium"
        block={true}>
        <SideNavItem
          {...defaultPropsSideNavItem}
          value="general">Личные данные</SideNavItem>
        <SideNavItem
          {...defaultPropsSideNavItem}
          className="sideNavItem"
          value="email">Адреса электронной почты</SideNavItem>
      </SideNav>
    </div>))

    const sideNavStyles = getStyles(wrapper.find('.sideNav'))
    const sideNavItem = wrapper.find('.sideNavItem')
    const sideNavItemStyles = getStyles(sideNavItem)

    expect(sideNavStyles.display).toEqual('block')
    expect(sideNavStyles.width).toEqual('480px')
    expect(sideNavItemStyles['font-family']).toEqual('Roboto, sans-serif')
    expect(sideNavItemStyles['font-size']).toEqual('14px')
    expect(sideNavItemStyles.height).toEqual('25px')
    expect(sideNavItemStyles.width).toEqual('446px')
    expect(sideNavItemStyles['margin-top']).toEqual('20px')
    expect(sideNavItemStyles['margin-left']).toEqual('17px')
    expect(sideNavItem.text()).toEqual('Адреса электронной почты')
  })

  it('Check SideNav value onChange', () => {
    const wrapper = mount(applyTheme(<div style={{width: 480}}>
      <SideNav
        {...defaultPropsSideNav}
        size="medium"
        block={false}>
        <SideNavItem
          {...defaultPropsSideNavItem}
          value="general">Личные данные</SideNavItem>
        <SideNavItem
          {...defaultPropsSideNavItem}
          className="sideNavItem"
          value="email">Адреса электронной почты</SideNavItem>
      </SideNav>
    </div>))

    const sideNav = wrapper.find('.sideNav')
    const sideNavItem = wrapper.find('.sideNavItem')

    expect(sideNav.props().value).toEqual('general')
    expect(sideNavItem.type()).toEqual('div')
    sideNavItem.simulate('click')
    expect(event.type).toEqual('click')
    expect(value).toEqual('email')
  })

  it('Check SideNavItem is link with href, target', () => {
    const wrapper = mount(applyTheme(<div style={{width: 480}}>
      <SideNav
        {...defaultPropsSideNav}
        size="medium"
        block={false}>
        <SideNavItem
          {...defaultPropsSideNavItem}
          className="sideNavPersonal"
          href="/personal">Личные данные</SideNavItem>
        <SideNavItem
          {...defaultPropsSideNavItem}
          className="sideNavEmails"
          href="/emails"
          target="_blank">Адреса электронной почты</SideNavItem>
      </SideNav>
    </div>))

    const sideNavPersonal = wrapper.find('.sideNavPersonal')
    const sideNavEmails = wrapper.find('.sideNavEmails')

    expect(sideNavPersonal.type()).toEqual('a')
    expect(sideNavPersonal.props().href).toEqual('/personal')
    expect(sideNavPersonal.props().target).toBeUndefined()
    expect(sideNavEmails.type()).toEqual('a')
    expect(sideNavEmails.props().href).toEqual('/emails')
    expect(sideNavEmails.props().target).toEqual('_blank')
  })

  it('Check SideNavItem is wrapped into container', () => {
    const Button = ({ children, className, activeClassName }) => (
      <button className={`${className} ${activeClassName}`}>
        {children}
      </button>
    )

    const wrapper = mount(applyTheme(<div style={{width: 480}}>
      <SideNav
        {...defaultPropsSideNav}
        size="medium"
        block={false}>
        <SideNavItem
          {...defaultPropsSideNavItem}
          className="sideNavItem"
          isSelected={true}
          container={
            <Button />
          }>Личные данные</SideNavItem>
        <SideNavItem
          {...defaultPropsSideNavItem}
          container={
            <Button />
          }>Адреса электронной почты</SideNavItem>
      </SideNav>
    </div>))

    const sideNavItem = wrapper.find('.sideNavItem')

    expect(sideNavItem.type()).toEqual('button')
    expect(sideNavItem.props().className).toContain('sideNavItem')
    expect(sideNavItem.props().className).toContain('isSelected')
  })
})
