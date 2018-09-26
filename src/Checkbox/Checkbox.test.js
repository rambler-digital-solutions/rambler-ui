import React from 'react'
import Checkbox from './Checkbox'
import theme from '../theme/base'
import {normalize as nc} from '../utils/colors'
import {ApplyTheme} from '../theme'
import {mount, getStyles, getWrapperNode} from '../utils/test-utils'

const applyTheme = children => <ApplyTheme>{children}</ApplyTheme>

describe('<Checkbox />', () => {
  const defaultProps = {
    name: 'checkbox6',
    className: 'container-cn',
    checkboxClassName: 'checkbox-cn',
    labelClassName: 'label-cn',
    checked: true,
    onCheck: () => {}
  }

  const propsForSecondTest = {
    disabled: true,
    iconPosition: 'right',
    style: {marginTop: '100px'},
    checkboxStyle: {marginBottom: '20px'},
    labelStyle: {marginBottom: '20px'}
  }

  let event, checked
  beforeEach(() => {
    spyOn(defaultProps, 'onCheck').and.callFake((e, c) => {
      event = e
      checked = c
    })
  })

  it('expect affect regular style', () => {
    const wrapper = mount(
      applyTheme(<Checkbox {...defaultProps}>Text</Checkbox>)
    )
    const containerStyles = getStyles(wrapper)
    const checkboxStyles = getStyles(wrapper.find('.checkbox-cn'))
    const labelStyles = getStyles(wrapper.find('.label-cn'))
    const inputStyles = getStyles(wrapper.find('input'))

    expect(containerStyles['font-family']).toEqual('Roboto, sans-serif')
    expect(containerStyles['font-size']).toEqual('13px')
    expect(containerStyles.cursor).toEqual('pointer')
    expect(nc(checkboxStyles['border-top-color'])).toEqual(
      nc(theme.checkbox.types.regular.colors.default.border)
    )
    expect(nc(checkboxStyles['border-bottom-color'])).toEqual(
      nc(theme.checkbox.types.regular.colors.default.border)
    )
    expect(checkboxStyles['border-top-width']).toEqual('1px')
    expect(checkboxStyles['border-bottom-width']).toEqual('1px')

    expect(checkboxStyles.width).toEqual('15px')
    expect(checkboxStyles.height).toEqual('15px')
    expect(checkboxStyles.left).toEqual('0px')
    expect(inputStyles.opacity).toEqual('0')
    expect(labelStyles['padding-left']).toEqual(
      theme.checkbox.sizes.medium.size +
        theme.checkbox.sizes.medium.labelMargin +
        'px'
    )
  })

  it('expect affect small size', () => {
    const wrapper = mount(
      applyTheme(
        <Checkbox {...defaultProps} size="small">
          Text
        </Checkbox>
      )
    )
    const checkboxStyles = getStyles(wrapper.find('.checkbox-cn'))
    const labelStyles = getStyles(wrapper.find('.label-cn'))

    expect(checkboxStyles.width).toEqual(theme.checkbox.sizes.small.size + 'px')
    expect(checkboxStyles.height).toEqual(
      theme.checkbox.sizes.small.size + 'px'
    )
    expect(checkboxStyles.top).toEqual(
      (theme.checkbox.sizes.small.lineHeight -
        theme.checkbox.sizes.small.size) /
        2 +
        'px'
    )

    expect(labelStyles['padding-left']).toEqual(
      theme.checkbox.sizes.small.size +
        theme.checkbox.sizes.small.labelMargin +
        'px'
    )
  })

  it('name, disabled, iconPosition, style, checkboxStyle, labelStyle', () => {
    const wrapper = mount(
      applyTheme(
        <Checkbox {...defaultProps} {...propsForSecondTest}>
          Text
        </Checkbox>
      )
    )
    const containerStyles = getStyles(wrapper)
    const checkboxStyles = getStyles(wrapper.find('.checkbox-cn'))
    const labelStyles = getStyles(wrapper.find('.label-cn'))

    const inputNode = getWrapperNode(wrapper.find('input'))

    expect(containerStyles['margin-top']).toEqual('100px')

    expect(checkboxStyles.right).toEqual('0px')

    expect(nc(checkboxStyles['border-top-color'])).toEqual(
      nc(theme.checkbox.types.regular.colors.disabled.border)
    )
    expect(nc(checkboxStyles['border-bottom-color'])).toEqual(
      nc(theme.checkbox.types.regular.colors.disabled.border)
    )
    expect(nc(checkboxStyles['background-color'])).toEqual(
      nc(theme.checkbox.types.regular.colors.default.background)
    )
    expect(checkboxStyles['margin-bottom']).toEqual('20px')

    expect(labelStyles['padding-right']).toEqual('25px')
    expect(labelStyles['margin-bottom']).toEqual('20px')
    expect(nc(labelStyles.color)).toEqual(
      nc(theme.checkbox.types.regular.colors.disabled.text)
    )

    expect(inputNode.disabled).toBeTruthy()
    expect(inputNode.name).toEqual('checkbox6')
  })

  it('onCheck', () => {
    const wrapper = mount(
      applyTheme(<Checkbox {...defaultProps}>Text</Checkbox>)
    )

    const input = wrapper.find('input')
    input.simulate('change')
    expect(event.type).toEqual('change')
    expect(checked).toBeTruthy()
  })
})
