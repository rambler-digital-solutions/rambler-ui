import React from 'react'
import Textarea from '../Textarea'
import { withTheme, mount, getStyles } from '../../utils/test-utils'
import theme from '../../theme/base'

describe('<Textarea />', () => {
  const defaultProps = {
    textareaClassName: 'textarea',
    value: '',
    onChange: () => {}
  }

  it('should apply styles', () => {
    const wrapper = mount(
      withTheme(
        <Textarea {...defaultProps} style={{height: '85px'}}/>
      )
    )

    const textareaStyles = getStyles(wrapper.find('.textarea'))

    expect(textareaStyles.height).toEqual('85px')
    expect(textareaStyles['padding-top']).toEqual(theme.input.padding + 'px')
    expect(textareaStyles['padding-right']).toEqual(theme.input.padding + 'px')
    expect(textareaStyles['padding-bottom']).toEqual(theme.input.padding + 'px')
    expect(textareaStyles['padding-left']).toEqual(theme.input.padding + 'px')
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
