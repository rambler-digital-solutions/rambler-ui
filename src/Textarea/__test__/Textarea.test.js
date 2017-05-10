import React from 'react'
import Textarea from '../Textarea'
import InfoIcon from '../../icons/forms/InfoIcon'
import { withTheme, mount, getStyles, getNodeStyles } from '../../utils/test-utils'

describe('<Textarea />', () => {
  const defaultProps = {
    className: 'textarea',
    value: '',
    onChange: () => {}
  }

  it('should apply default styles', () => {
    const wrapper = mount(
      withTheme(
        <Textarea {...defaultProps} />
      )
    )

    const textareaStyles = getStyles(wrapper.find('.textarea'))

    expect(textareaStyles.height).toEqual('75px')
    expect(textareaStyles['border-bottom-width']).toEqual('1px')
    expect(textareaStyles['border-bottom-style']).toEqual('solid')
    expect(textareaStyles['border-bottom-color']).toEqual('rgb(232, 232, 232)')
    expect(textareaStyles['background-color']).toEqual('rgb(255, 255, 255)')
    expect(textareaStyles['font-size']).toEqual('13px')
    expect(textareaStyles['padding-top']).toEqual('13px')
    expect(textareaStyles['padding-left']).toEqual('13px')
    expect(textareaStyles['padding-right']).toEqual('13px')
    expect(textareaStyles['padding-bottom']).toEqual('13px')
  })

  it('should apply status styles', () => {
    const wrapper = mount(
      withTheme(
        <Textarea {...defaultProps} status="success" />
      )
    )

    const textareaStyles = getStyles(wrapper.find('.textarea'))

    expect(textareaStyles['border-bottom-width']).toEqual('2px')
    expect(textareaStyles['border-bottom-style']).toEqual('solid')
    expect(textareaStyles['border-bottom-color']).toEqual('rgb(40, 188, 0)')
    expect(textareaStyles['padding-bottom']).toEqual('12px')
  })

  it('should append styles', () => {
    const backgroundColor = 'rgb(255, 0, 0)'

    const wrapper = mount(
      withTheme(
        <Textarea {...defaultProps} style={{ backgroundColor }} />
      )
    )

    const textareaStyles = getStyles(wrapper.find('.textarea'))

    expect(textareaStyles['background-color']).toEqual(backgroundColor)
  })

  it('should append value, disabled, name, placeholder', () => {
    const fixture = {
      value: 'value',
      name: 'textarea',
      placeholder: 'placeholder',
      disabled: true
    }

    const wrapper = mount(
      withTheme(
        <Textarea {...defaultProps} {...fixture} />
      )
    )

    const textarea = wrapper.find('.textarea')

    expect(textarea.node.value).toEqual(fixture.value)
    expect(textarea.node.name).toEqual(fixture.name)
    expect(textarea.node.placeholder).toEqual(fixture.placeholder)
    expect(textarea.node.disabled).toEqual(fixture.disabled)
  })

  it('should append icons', () => {
    const wrapper = mount(
      withTheme(
        <Textarea
          {...defaultProps}
          iconLeft={
            <InfoIcon className="left" />
          }
          iconRight={
            <InfoIcon className="right" />
          } />
      )
    )

    const textareaStyles = getStyles(wrapper.find('.textarea'))
    const leftIconContainerStyles = getNodeStyles(wrapper.find('.left').node.parentNode)
    const rightIconContainerStyles = getNodeStyles(wrapper.find('.right').node.parentNode)

    expect(textareaStyles['padding-top']).toEqual('13px')
    expect(textareaStyles['padding-left']).toEqual('40px')
    expect(textareaStyles['padding-right']).toEqual('40px')
    expect(textareaStyles['padding-bottom']).toEqual('13px')

    expect(leftIconContainerStyles.position).toEqual('absolute')
    expect(leftIconContainerStyles.top).toEqual('12px')
    expect(leftIconContainerStyles.left).toEqual('12px')

    expect(rightIconContainerStyles.position).toEqual('absolute')
    expect(rightIconContainerStyles.top).toEqual('12px')
    expect(rightIconContainerStyles.right).toEqual('12px')
  })

  it('should call props.onChange() when change value', () => {
    let event
    let value

    const props = {
      ...defaultProps,
      onChange: () => {}
    }

    spyOn(props, 'onChange').and.callFake((e, v) => {
      event = e
      value = v
    })

    const wrapper = mount(
      withTheme(
        <Textarea {...props} />
      )
    )

    const textarea = wrapper.find('.textarea')

    textarea.simulate('change', { target: { value: 'value' } })
    expect(event.type).toEqual('change')
    expect(value).toEqual('value')
  })
})
