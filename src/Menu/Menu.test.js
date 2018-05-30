import React, {Component} from 'react'
import Menu from './Menu'
import MenuItem from './MenuItem'
import { mount, withTheme, getStyles, getWrapperNode } from '../utils/test-utils'
import theme from '../theme/base'

describe('<Menu />', () => {

  it('should apply default styles', () => {
    const wrapper = mount(withTheme(<Menu>
      <MenuItem className="foo" value="foo">
            foo
      </MenuItem>
      <MenuItem className="bar" value="bar">
            baz
      </MenuItem>
    </Menu>))

    const wrapperNode = getWrapperNode(wrapper)

    expect(wrapperNode.children.length).toEqual(2)
    expect(wrapperNode.querySelector('.foo').textContent).toEqual('foo')
    expect(wrapperNode.querySelector('.bar').textContent).toEqual('baz')

    const menuStyles = getStyles(wrapper)

    expect(menuStyles['padding-top']).toEqual('0px')
    expect(menuStyles['padding-left']).toEqual('0px')
    expect(menuStyles['padding-right']).toEqual('0px')
    expect(menuStyles['padding-bottom']).toEqual('0px')
    expect(menuStyles['overflow-y']).toEqual('auto')

    const item = wrapper.find(MenuItem).first()
    const itemStyles = getStyles(item)

    const verticalPadding = (theme.menu.sizes.medium.height - theme.menu.lineHeight) / 2 + 'px'
    expect(itemStyles['background-color']).toEqual('rgb(255, 255, 255)')
    expect(itemStyles['font-size']).toEqual(theme.menu.fontSize + 'px')
    expect(itemStyles['padding-top']).toEqual(verticalPadding)
    expect(itemStyles['padding-left']).toEqual(theme.menu.padding + 'px')
    expect(itemStyles['padding-right']).toEqual(theme.menu.padding + 'px')
    expect(itemStyles['padding-bottom']).toEqual(verticalPadding)
  })

  it('should be apply max height', () => {
    const wrapper = mount(withTheme(<Menu maxHeight={200}>
      <MenuItem value="foo">
            foo
      </MenuItem>
    </Menu>))

    const menu = wrapper.find(Menu)
    const menuStyles = getStyles(menu)

    expect(menuStyles['max-height']).toEqual('200px')
  })

  it('should append className', () => {
    const wrapper = mount(withTheme(<Menu className="menu">
      <MenuItem className="item" value="foo">
            foo
      </MenuItem>
    </Menu>))

    const menu = wrapper.find(Menu)
    const item = wrapper.find(MenuItem)

    expect(menu.hasClass('menu')).toBe(true)
    expect(item.hasClass('item')).toBe(true)
  })

  it('should append style', () => {
    const wrapper = mount(withTheme(<Menu style={{ marginLeft: 10 }}>
      <MenuItem style={{ paddingLeft: 0 }} value="foo">
            foo
      </MenuItem>
    </Menu>))

    const menu = wrapper.find(Menu)
    const menuStyles = getStyles(menu)

    expect(menuStyles['margin-left']).toEqual('10px')

    const item = wrapper.find(MenuItem)
    const itemStyles = getStyles(item)

    expect(itemStyles['padding-left']).toEqual('0px')
  })

  it('should append focus to item', () => {
    let value

    const wrapper = mount(withTheme(<Menu value={value} onChange={(v) => { value = v }}>
      <MenuItem className="foo" value="foo">
            foo
      </MenuItem>
      <MenuItem className="bar" value="bar">
            bar
      </MenuItem>
    </Menu>))

    wrapper.find('.foo').first().simulate('click')
    expect(value).toEqual('foo')
    wrapper.find('.bar').first().simulate('click')
    expect(value).toEqual('bar')
  })

  it('should work correctly with object-values', () => {
    let currValue
    const values = [1,2,3].map(id => ({id}))

    class TestMenu extends Component {
      state = {value: null}
      setValue = value => {
        currValue = value
        this.setState({value})
      }
      render() {
        return (
          <Menu
            multiple={this.props.multiple}
            value={this.state.value}
            onChange={this.setValue}
            valuesEquality={(a, b) => a && b && a.id === b.id}
          >
            {values.map(v => <MenuItem className={`o${v.id}`} value={{...v}} key={v.id}>{v.id}</MenuItem>)}
          </Menu>
        )
      }
    }

    const val2num = value => value.id
    const menu = mount(withTheme(<TestMenu />))
    menu.find('.o1').first().simulate('click')
    expect(val2num(currValue)).toEqual(1)
    menu.find('.o3').first().simulate('click')
    expect(val2num(currValue)).toEqual(3)

    const val2str = value => value.map(v => v.id).sort().join(',')
    const multipleMenu = mount(withTheme(<TestMenu multiple={true} />))
    multipleMenu.find('.o3').first().simulate('click')
    expect(val2str(currValue)).toEqual('3')
    multipleMenu.find('.o1').first().simulate('click')
    expect(val2str(currValue)).toEqual('1,3')
    multipleMenu.find('.o3').first().simulate('click')
    expect(val2str(currValue)).toEqual('1')
    multipleMenu.find('.o1').first().simulate('click')
    expect(val2str(currValue)).toEqual('')
  })
})
