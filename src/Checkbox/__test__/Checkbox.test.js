import Checkbox from '../Checkbox'
import React from 'react'
import { ApplyTheme } from '../../theme'
import { mount, getStyles } from '../../utils/test-utils'

const applyTheme = (children) => (
  <ApplyTheme>{ children }</ApplyTheme>
)

describe('<Checkbox />', () => {
  const defaultProps = {
    name: 'checkbox6',
    labelStyle: {color: '#f00'},
    className: 'container-cn',
    checkboxClassName: 'checkbox-cn',
    labelClassName: 'label-cn',
    checked: true,
    onCheck: () => {}
  }

  const propsForSecondTest = {
    disabled: true,
    iconPosition: 'right',
    style: { marginTop: '100px' },
    checkboxStyle: { marginBottom: '20px'},
    labelStyle: { marginBottom: '20px'}
  }

  let event, checked
  beforeEach(() => {
    spyOn(defaultProps, 'onCheck').and.callFake((e, c) => { event = e; checked = c })
  })

  it('expect affect style', () => {
    const wrapper = mount(applyTheme(<Checkbox {...defaultProps}>Text</Checkbox>))
    const containerStyles = getStyles(wrapper.find('.container-cn'))
    const checkboxStyles = getStyles(wrapper.find('.checkbox-cn'))
    const labelStyles = getStyles(wrapper.find('.label-cn'))
    const inputStyles = getStyles(wrapper.find('input'))

    expect(containerStyles['font-family']).toEqual('Roboto, sans-serif')
    expect(containerStyles['font-size']).toEqual('13px')
    expect(checkboxStyles['border-top-color']).toEqual('rgb(49, 94, 251)')
    expect(checkboxStyles['border-bottom-color']).toEqual('rgb(49, 94, 251)')
    expect(checkboxStyles['border-top-width']).toEqual('1px')
    expect(checkboxStyles['border-bottom-width']).toEqual('1px')

    expect(checkboxStyles.width).toEqual('15px')
    expect(checkboxStyles.height).toEqual('15px')
    expect(checkboxStyles.float).toEqual('left')
    expect(inputStyles.opacity).toEqual('0')
    expect(labelStyles.float).toEqual('right')
    expect(labelStyles.cursor).toEqual('pointer')

  })

  it('name, disabled, iconPosition, style, checkboxStyle, labelStyle', () => {
    const wrapper = mount(applyTheme(<Checkbox {...defaultProps} {...propsForSecondTest}>Text</Checkbox>))
    const containerStyles = getStyles(wrapper.find('.container-cn'))
    const checkboxStyles = getStyles(wrapper.find('.checkbox-cn'))
    const labelStyles = getStyles(wrapper.find('.label-cn'))

    const input = wrapper.find('input')

    expect(containerStyles['margin-top']).toEqual('100px')

    expect(checkboxStyles.float).toEqual('right')

    expect(checkboxStyles['border-top-color']).toEqual('rgb(238, 238, 238)')
    expect(checkboxStyles['border-bottom-color']).toEqual('rgb(238, 238, 238)')
    expect(checkboxStyles['background-color']).toEqual('rgb(238, 238, 238)')
    expect(checkboxStyles['margin-bottom']).toEqual('20px')

    expect(labelStyles['margin-bottom']).toEqual('20px')
    expect(labelStyles.color).toEqual('rgba(38, 38, 38, 0.4)')

    expect(input.node.disabled).toBeTruthy()
    expect(input.node.name).toEqual('checkbox6')
  })

  it('onCheck', () => {
    const wrapper = mount(applyTheme(<Checkbox {...defaultProps}>Text</Checkbox>))

    const input = wrapper.find('input')
    input.simulate('change')
    expect(event.type).toEqual('change')
    expect(checked).toBeTruthy()
  })

})
