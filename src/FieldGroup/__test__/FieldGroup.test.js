import React from 'react'
import FieldGroup from '../FieldGroup'
import Input from '../../Input/Input'
import Select from '../../Select/Select'
import MenuItem from '../../Menu/MenuItem'
import theme from '../../theme/base'
import { mount, withTheme, getStyles } from '../../utils/test-utils'

describe('<FieldGroup />', () => {

  it('should apply default styles', () => {
    const wrapper = mount(
      withTheme(
        <FieldGroup>
          <Select className="select">
            <MenuItem value="foo">Foo</MenuItem>
            <MenuItem value="bar">Bar</MenuItem>
          </Select>
          <Input type="text" className="input" />
        </FieldGroup>
      )
    )

    const group = wrapper.find(FieldGroup)
    const groupStyles = getStyles(group)

    expect(groupStyles.height).toEqual(`${theme.field.sizes.medium.height}px`)

    const select = wrapper.find(Select).find('input')
    const selectStyles = getStyles(select)

    expect(selectStyles['border-left-width']).toEqual('1px')
    expect(selectStyles['border-right-width']).toEqual('0px')
    expect(selectStyles['border-top-left-radius']).toEqual(`${theme.field.borderRadius}px`)
    expect(selectStyles['border-top-right-radius']).toEqual('0px')
    expect(selectStyles['border-bottom-right-radius']).toEqual('0px')
    expect(selectStyles['border-bottom-left-radius']).toEqual(`${theme.field.borderRadius}px`)

    const input = wrapper.find(Input).last().find('input')
    const inputStyles = getStyles(input)

    expect(inputStyles['border-left-width']).toEqual('0px')
    expect(inputStyles['border-right-width']).toEqual('1px')
    expect(inputStyles['border-top-left-radius']).toEqual('0px')
    expect(inputStyles['border-top-right-radius']).toEqual(`${theme.field.borderRadius}px`)
    expect(inputStyles['border-bottom-right-radius']).toEqual(`${theme.field.borderRadius}px`)
    expect(inputStyles['border-bottom-left-radius']).toEqual('0px')
  })

  it('should apply styles and append className', () => {
    const wrapper = mount(
      withTheme(
        <FieldGroup style={{width: 200}} className="group">
          <Select>
            <MenuItem value="foo">Foo</MenuItem>
            <MenuItem value="bar">Bar</MenuItem>
          </Select>
          <Input type="text" />
        </FieldGroup>
      )
    )

    const group = wrapper.find(FieldGroup)
    const groupStyles = getStyles(group)

    expect(group.hasClass('group')).toBe(true)
    expect(groupStyles.width).toEqual('200px')

    const select = wrapper.find(Select).find('input')
    const selectStyles = getStyles(select)

    expect(selectStyles.width).toEqual('100px')

    const input = wrapper.find(Input).last().find('input')
    const inputStyles = getStyles(input)

    expect(inputStyles.width).toEqual('100px')
  })

  it('should pass props to group items', () => {
    const props = {
      disabled: true,
      size: 'small',
      status: 'error',
      variation: 'regular'
    }

    const wrapper = mount(
      withTheme(
        <FieldGroup {...props}>
          <Select>
            <MenuItem value="foo">Foo</MenuItem>
            <MenuItem value="bar">Bar</MenuItem>
          </Select>
          <Input type="text" />
        </FieldGroup>
      )
    )

    const select = wrapper.find(Select)

    expect(select.props().disabled).toEqual(props.disabled)
    expect(select.props().size).toEqual(props.size)
    expect(select.props().status).toEqual(props.status)
    expect(select.props().variation).toEqual(props.variation)

    const input = wrapper.find(Input).last()

    expect(input.props().disabled).toEqual(props.disabled)
    expect(input.props().size).toEqual(props.size)
    expect(input.props().status).toEqual(props.status)
    expect(input.props().variation).toEqual(props.variation)
  })

})
