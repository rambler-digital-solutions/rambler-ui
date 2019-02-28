import {SideNav, SideNavItem} from '../SideNav'
import BookIcon from '../icons/forms/BookIcon'
import {ApplyTheme} from '../theme'
import theme from '../theme/base'
import {normalize as nc} from '../utils/colors'
import {mount, getStyles, getWrapperNode} from '../utils/test-utils'

import React from 'react'

const applyTheme = children => <ApplyTheme>{children}</ApplyTheme>

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
    spyOn(defaultPropsSideNav, 'onChange').and.callFake((e, val) => {
      event = e
      value = val
    })
  })

  it('Styles for SideNav, SideNavItem', () => {
    const wrapper = mount(
      applyTheme(
        <div style={{width: 480}}>
          <SideNav {...defaultPropsSideNav} size="small" block={false}>
            <SideNavItem
              {...defaultPropsSideNavItem}
              className="sideNavSelected"
              value="general">
              Личные данные
            </SideNavItem>
            <SideNavItem
              {...defaultPropsSideNavItem}
              className="sideNavItem"
              value="email">
              Адреса электронной почты
            </SideNavItem>
          </SideNav>
        </div>
      )
    )

    const sideNavStyles = getStyles(wrapper.find('.sideNav').first())
    const sideNavItem = wrapper.find('.sideNavItem').first()
    const sideNavItemStyles = getStyles(sideNavItem)
    const sideNavItemIconStyles = getStyles(wrapper.find('.sideNavItem svg'))
    const sideNavSelectedIconStyles = getStyles(
      wrapper.find('.sideNavSelected svg')
    )

    expect(sideNavStyles.display).toEqual('inline-block')
    expect(sideNavItemStyles['font-family']).toEqual(theme.fontFamily)
    expect(sideNavItemStyles['font-size']).toEqual(
      `${theme.sideNav.fontSize}px`
    )
    expect(sideNavItemStyles.height).toEqual(`${theme.sideNav.height}px`)
    expect(sideNavItemStyles.width).toEqual(`${theme.sideNav.iconSize}px`)
    expect(sideNavItemStyles['margin-top']).toEqual('0px')
    expect(sideNavItemStyles['margin-left']).toEqual('0px')
    expect(sideNavItemStyles['margin-right']).toEqual('0px')
    expect(sideNavItemStyles['margin-bottom']).toEqual('0px')
    expect(nc(sideNavItemIconStyles.fill)).toEqual(
      nc(theme.sideNav.colors.default.text)
    )
    expect(nc(sideNavSelectedIconStyles.fill)).toEqual(
      nc(theme.sideNav.colors.selected.text)
    )
    expect(sideNavItem.text()).toEqual('')
  })

  it('Styles for SideNav, SideNavItem when size = medium, block = true', () => {
    const wrapper = mount(
      applyTheme(
        <div style={{width: 480}}>
          <SideNav {...defaultPropsSideNav} size="medium" block={true}>
            <SideNavItem {...defaultPropsSideNavItem} value="general">
              Личные данные
            </SideNavItem>
            <SideNavItem
              {...defaultPropsSideNavItem}
              className="sideNavItem"
              value="email">
              Адреса электронной почты
            </SideNavItem>
          </SideNav>
        </div>
      )
    )

    const sideNavStyles = getStyles(wrapper.find('.sideNav').first())
    const sideNavItem = wrapper.find('.sideNavItem').first()
    const sideNavItemStyles = getStyles(sideNavItem)
    const sideNavItemIconStyles = getStyles(wrapper.find('.sideNavItem svg'))

    expect(sideNavStyles.display).toEqual('block')
    expect(sideNavStyles.width).toEqual('480px')
    expect(sideNavItemStyles['font-family']).toEqual(theme.fontFamily)
    expect(sideNavItemStyles['font-size']).toEqual(
      `${theme.sideNav.fontSize}px`
    )
    expect(sideNavItemStyles.height).toEqual(`${theme.sideNav.height}px`)
    expect(sideNavItemStyles.width).toEqual('480px')
    expect(sideNavItemStyles['margin-top']).toEqual('0px')
    expect(sideNavItemStyles['margin-left']).toEqual('0px')
    expect(sideNavItemStyles['margin-right']).toEqual('0px')
    expect(sideNavItemStyles['margin-bottom']).toEqual('0px')
    expect(sideNavItemIconStyles['margin-right']).toEqual(
      `${theme.sideNav.iconRightMargin}px`
    )
    expect(sideNavItem.text()).toEqual('Адреса электронной почты')
  })

  it('Check SideNav value onChange', () => {
    const wrapper = mount(
      applyTheme(
        <div style={{width: 480}}>
          <SideNav {...defaultPropsSideNav} size="medium" block={false}>
            <SideNavItem {...defaultPropsSideNavItem} value="general">
              Личные данные
            </SideNavItem>
            <SideNavItem
              {...defaultPropsSideNavItem}
              className="sideNavItem"
              value="email">
              Адреса электронной почты
            </SideNavItem>
          </SideNav>
        </div>
      )
    )

    const sideNav = wrapper.find('.sideNav').first()
    const sideNavItem = wrapper.find('.sideNavItem').first()

    expect(sideNav.props().value).toEqual('general')
    expect(getWrapperNode(sideNavItem).tagName.toLowerCase()).toEqual('div')
    sideNavItem.simulate('click')
    expect(event.type).toEqual('click')
    expect(value).toEqual('email')
  })

  it('Check SideNavItem is link with href, target', () => {
    const wrapper = mount(
      applyTheme(
        <div style={{width: 480}}>
          <SideNav {...defaultPropsSideNav} size="medium" block={false}>
            <SideNavItem
              {...defaultPropsSideNavItem}
              className="sideNavPersonal"
              href="/personal">
              Личные данные
            </SideNavItem>
            <SideNavItem
              {...defaultPropsSideNavItem}
              className="sideNavEmails"
              href="/emails"
              target="_blank">
              Адреса электронной почты
            </SideNavItem>
          </SideNav>
        </div>
      )
    )

    const wrapperNode = getWrapperNode(wrapper)
    const sideNavPersonal = wrapperNode.querySelector('.sideNavPersonal')
    const sideNavEmails = wrapperNode.querySelector('.sideNavEmails')

    expect(sideNavPersonal.tagName.toLowerCase()).toEqual('a')
    expect(sideNavPersonal.getAttribute('href')).toEqual('/personal')
    expect(sideNavPersonal.getAttribute('target')).toEqual(null)
    expect(sideNavEmails.tagName.toLowerCase()).toEqual('a')
    expect(sideNavEmails.getAttribute('href')).toEqual('/emails')
    expect(sideNavEmails.getAttribute('target')).toEqual('_blank')
  })

  it('Check SideNavItem is wrapped into container', () => {
    const Button = ({children, className, activeClassName}) => (
      <button className={`${className} ${activeClassName}`}>{children}</button>
    )

    const wrapper = mount(
      applyTheme(
        <div style={{width: 480}}>
          <SideNav {...defaultPropsSideNav} size="medium" block={false}>
            <SideNavItem
              {...defaultPropsSideNavItem}
              className="sideNavItem"
              isSelected={true}
              container={<Button />}>
              Личные данные
            </SideNavItem>
            <SideNavItem
              {...defaultPropsSideNavItem}
              className="sideNavItem"
              container={({activeClassName}) => (
                <Button activeClassName={activeClassName} />
              )}>
              Адреса электронной почты
            </SideNavItem>
          </SideNav>
        </div>
      )
    )

    const sideNavItemFirstNode = getWrapperNode(
      wrapper.find('.sideNavItem').first()
    )

    expect(sideNavItemFirstNode.tagName.toLowerCase()).toEqual('button')
    expect(sideNavItemFirstNode.className).toContain('sideNavItem')
    expect(sideNavItemFirstNode.className).not.toContain('isSelected')

    const sideNavItemLastNode = getWrapperNode(
      wrapper.find('.sideNavItem').last()
    )

    expect(sideNavItemLastNode.tagName.toLowerCase()).toEqual('button')
    expect(sideNavItemLastNode.className).toContain('sideNavItem')
    expect(sideNavItemLastNode.className).toContain('isSelected')
  })
})
