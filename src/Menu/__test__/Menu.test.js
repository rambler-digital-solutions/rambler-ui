import React from 'react'
import Menu from '../Menu'
import MenuItem from '../MenuItem'
import { mount, withTheme, getStyles } from '../../utils/test-utils'

describe('<Menu />', () => {

  it('should apply default styles', () => {
    const wrapper = mount(
      withTheme(
        <Menu>
          <MenuItem className="foo" text="foo" value="foo" />
          <MenuItem className="bar" text="bar" value="bar">
            baz
          </MenuItem>
        </Menu>
      )
    )

    const menu = wrapper.find(Menu)

    expect(menu.children().length).toEqual(2)
    expect(menu.find('.foo').text()).toEqual('foo')
    expect(menu.find('.bar').text()).toEqual('baz')

    const menuStyles = getStyles(menu)

    expect(menuStyles['padding-top']).toEqual('8px')
    expect(menuStyles['padding-left']).toEqual('0px')
    expect(menuStyles['padding-right']).toEqual('0px')
    expect(menuStyles['padding-bottom']).toEqual('8px')
    expect(menuStyles['overflow-y']).toEqual('auto')

    const item = wrapper.find(MenuItem)
    const itemStyles = getStyles(item)

    expect(itemStyles['background-color']).toEqual('rgb(255, 255, 255)')
    expect(itemStyles['font-size']).toEqual('13px')
    expect(itemStyles['padding-top']).toEqual('7px')
    expect(itemStyles['padding-left']).toEqual('14px')
    expect(itemStyles['padding-right']).toEqual('14px')
    expect(itemStyles['padding-bottom']).toEqual('7px')
  })

  it('should be apply max height', () => {
    const wrapper = mount(
      withTheme(
        <Menu maxHeight={200}>
          <MenuItem text="foo" value="foo" />
        </Menu>
      )
    )

    const menu = wrapper.find(Menu)
    const menuStyles = getStyles(menu)

    expect(menuStyles['max-height']).toEqual('200px')
  })

  it('should append className', () => {
    const wrapper = mount(
      withTheme(
        <Menu className="menu">
          <MenuItem className="item" text="foo" value="foo" />
        </Menu>
      )
    )

    const menu = wrapper.find(Menu)
    const item = wrapper.find(MenuItem)

    expect(menu.hasClass('menu')).toBe(true)
    expect(item.hasClass('item')).toBe(true)
  })

  it('should append style', () => {
    const wrapper = mount(
      withTheme(
        <Menu style={{ marginLeft: 10 }}>
          <MenuItem style={{ paddingLeft: 0 }} text="foo" value="foo" />
        </Menu>
      )
    )

    const menu = wrapper.find(Menu)
    const menuStyles = getStyles(menu)

    expect(menuStyles['margin-left']).toEqual('10px')

    const item = wrapper.find(MenuItem)
    const itemStyles = getStyles(item)

    expect(itemStyles['padding-left']).toEqual('0px')
  })

  it('should append focus to item', () => {
    let value

    const wrapper = mount(
      withTheme(
        <Menu value={value} onChange={v => { value = v }}>
          <MenuItem className="foo" text="foo" value="foo" />
          <MenuItem className="bar" text="bar" value="bar" />
        </Menu>
      )
    )

    const menu = wrapper.find(Menu)

    menu.find('.foo').simulate('click')
    expect(value).toEqual('foo')
    menu.find('.bar').simulate('click')
    expect(value).toEqual('bar')
  })

})
