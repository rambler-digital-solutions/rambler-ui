import React from 'react'
import FieldGroup from './FieldGroup'
import Input from '../Input/Input'
import Select from '../Select/Select'
import MenuItem from '../Menu/MenuItem'
import theme from '../theme/base'
import {normalize as nc} from '../utils/colors'
import { mount, withTheme, getStyles } from '../utils/test-utils'

describe('<FieldGroup />', () => {

  const defaultProps = {
    type: 'text',
    onChange: () => {},
    value: ''
  }

  it('should apply default styles', () => {
    const wrapper = mount(
      withTheme(
        <FieldGroup>
          <Select className="select" {...defaultProps}>
            <MenuItem value="foo">Foo</MenuItem>
            <MenuItem value="bar">Bar</MenuItem>
          </Select>
          <Input className="input" {...defaultProps} />
        </FieldGroup>
      )
    )

    const group = wrapper.find(FieldGroup)
    const groupStyles = getStyles(group)

    expect(groupStyles.height).toEqual(`${theme.field.sizes.medium.height}px`)

    const select = wrapper.find(Select).find('input')
    const selectStyles = getStyles(select)

    expect(nc(selectStyles['border-top-color'])).toEqual(nc('rgba(0, 0, 0, 0)'))
    expect(nc(selectStyles['border-left-color'])).toEqual(nc('rgba(0, 0, 0, 0)'))
    expect(nc(selectStyles['border-right-color'])).toEqual(nc('rgba(0, 0, 0, 0)'))
    expect(nc(selectStyles['border-bottom-color'])).toEqual(nc('rgba(0, 0, 0, 0)'))

    const input = wrapper.find(Input).last().find('input')
    const inputStyles = getStyles(input)

    expect(nc(inputStyles['border-top-color'])).toEqual(nc('rgba(0, 0, 0, 0)'))
    expect(nc(inputStyles['border-left-color'])).toEqual(nc('rgba(0, 0, 0, 0)'))
    expect(nc(inputStyles['border-right-color'])).toEqual(nc('rgba(0, 0, 0, 0)'))
    expect(nc(inputStyles['border-bottom-color'])).toEqual(nc('rgba(0, 0, 0, 0)'))
  })

  it('should apply styles and append className', () => {
    const width = 200

    const wrapper = mount(
      withTheme(
        <FieldGroup style={{width}} className="group">
          <Select {...defaultProps}>
            <MenuItem value="foo">Foo</MenuItem>
            <MenuItem value="bar">Bar</MenuItem>
          </Select>
          <Input {...defaultProps} />
        </FieldGroup>
      )
    )

    const group = wrapper.find(FieldGroup)
    const groupStyles = getStyles(group)

    expect(group.hasClass('group')).toBe(true)
    expect(groupStyles.width).toEqual(`${width}px`)

    const select = wrapper.find(Select).find('input')
    const selectStyles = getStyles(select)

    expect(selectStyles.width).toEqual(`${(width + 1) / 2}px`)

    const input = wrapper.find(Input).last().find('input')
    const inputStyles = getStyles(input)

    expect(inputStyles.width).toEqual(`${(width + 1) / 2}px`)
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
          <Select {...defaultProps}>
            <MenuItem value="foo">Foo</MenuItem>
            <MenuItem value="bar">Bar</MenuItem>
          </Select>
          <Input {...defaultProps} />
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

  it('should show dividers when passing props.showDivider', () => {
    const wrapper = mount(
      withTheme(
        <FieldGroup showDivider>
          <Select {...defaultProps}>
            <MenuItem value="foo">Foo</MenuItem>
            <MenuItem value="bar">Bar</MenuItem>
          </Select>
          <Input {...defaultProps} />
        </FieldGroup>
      )
    )

    const select = wrapper.find(Select).find('input')
    const selectStyles = getStyles(select)

    expect(nc(selectStyles['border-top-color'])).toEqual(nc('rgba(0, 0, 0, 0)'))
    expect(nc(selectStyles['border-left-color'])).toEqual(nc('rgba(0, 0, 0, 0)'))
    expect(nc(selectStyles['border-right-color'])).toEqual(nc(theme.field.colors.default.outline))
    expect(nc(selectStyles['border-bottom-color'])).toEqual(nc('rgba(0, 0, 0, 0)'))

    const input = wrapper.find(Input).last().find('input')
    const inputStyles = getStyles(input)

    expect(nc(inputStyles['border-top-color'])).toEqual(nc('rgba(0, 0, 0, 0)'))
    expect(nc(inputStyles['border-left-color'])).toEqual(nc('rgba(0, 0, 0, 0)'))
    expect(nc(inputStyles['border-right-color'])).toEqual(nc('rgba(0, 0, 0, 0)'))
    expect(nc(inputStyles['border-bottom-color'])).toEqual(nc('rgba(0, 0, 0, 0)'))
  })

})
