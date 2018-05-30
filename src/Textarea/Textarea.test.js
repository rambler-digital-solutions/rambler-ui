import React from 'react'
import Textarea from '../Textarea'
import { withTheme, mount, getStyles, getWrapperNode } from '../../utils/test-utils'
import theme from '../../theme/base'

describe('<Textarea />', () => {
  const defaultProps = {
    textareaClassName: 'textarea',
    value: '',
    onChange: () => {}
  }

  it('should apply styles', () => {
    const wrapper = mount(withTheme(<Textarea {...defaultProps} style={{height: '85px'}}/>))

    const textareaStyles = getStyles(wrapper.find('.textarea'))

    expect(textareaStyles.height).toEqual('85px')
    expect(textareaStyles['padding-top']).toEqual(theme.input.sizes.medium.padding + 'px')
    expect(textareaStyles['padding-right']).toEqual(theme.input.sizes.medium.padding + 'px')
    expect(textareaStyles['padding-bottom']).toEqual(theme.input.sizes.medium.padding + 'px')
    expect(textareaStyles['padding-left']).toEqual(theme.input.sizes.medium.padding + 'px')
  })

  it('should append value, disabled, name, placeholder', () => {
    const fixture = {
      value: 'value',
      name: 'textarea',
      placeholder: 'placeholder',
      disabled: true
    }

    const wrapper = mount(withTheme(<Textarea {...defaultProps} {...fixture} />))

    const textarea = getWrapperNode(wrapper.find('.textarea'))

    expect(textarea.value).toEqual(fixture.value)
    expect(textarea.name).toEqual(fixture.name)
    expect(textarea.placeholder).toEqual(fixture.placeholder)
    expect(textarea.disabled).toEqual(fixture.disabled)
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

    const wrapper = mount(withTheme(<Textarea {...props} />))

    const textarea = wrapper.find('.textarea')

    textarea.simulate('change', { target: { value: 'value' } })
    expect(event.type).toEqual('change')
    expect(value).toEqual('value')
  })
})
