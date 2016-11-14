import { Toggle, ToggleOption} from '../../Toggle'
import { ApplyTheme } from '../../theme'
import { mount, getStyles } from '../../utils/test-utils'

import React from 'react'

const applyTheme = (children) => (
  <ApplyTheme>{ children }</ApplyTheme>
)

describe('<Toggle />', () => {
  const defaultPropsToggle = {
    value: 'Rambler',
    onChange: () => {},
    className: 'toggleGroup',
    style: {},
    size: 'small',
    equalWidth: false
  }

  const defaultPropsToggleOption = {
    style: {},
    isSelected: false
  }

  let event, value
  beforeEach(() => {
    spyOn(defaultPropsToggle, 'onChange').and.callFake((e, val) => { event = e; value = val })
  })

  it('Стили для toggle, toggleOptions', () => {
    const wrapper = mount(applyTheme(
      <div style={{width: 480, marginBottom: 20}}>
        <Toggle {...defaultPropsToggle}
          behavior='radio'
          block={false}>
          <ToggleOption
            {...defaultPropsToggleOption}
            className='toggleActive'
            classNameTogOpt='toggleOption'
            value="Rambler">Рамблер</ToggleOption>
          <ToggleOption
            {...defaultPropsToggleOption}
            value="Yandex">Яндекс</ToggleOption>
        </Toggle>
      </div>
    ))

    const toggleStyles = getStyles(wrapper.find('.toggleGroup'))
    const togOptActStyles = getStyles(wrapper.find('.toggleActive'))
    const togOptStyles = getStyles(wrapper.find('.toggleOption'))
    expect(toggleStyles.display).toEqual('inline-block')
    expect(togOptStyles['font-family']).toEqual('Roboto, sans-serif')
    expect(togOptStyles['font-size']).toEqual('13px')
    expect(togOptStyles.height).toEqual('35px')
    expect(togOptActStyles['border-top-width']).toEqual('1px')
    expect(togOptActStyles['border-bottom-width']).toEqual('1px')
    expect(togOptActStyles['border-top-style']).toEqual('solid')
    expect(togOptActStyles.color).toEqual('rgb(49, 94, 251)')
  })

  it('Стили для toggle, toggleOptions block = true, equalWidth = true, disabled = true', () => {
    const wrapper = mount(applyTheme(
      <div style={{width: 480, marginBottom: 20}}>
        <Toggle
          {...defaultPropsToggle}
          behavior='radio'
          size='medium'
          block={true}
          equalWidth={true}
          disabled={true}
          style={{marginBottom: 20}}>
          <ToggleOption
            {...defaultPropsToggleOption}
            className='toggleActive'
            classNameTogOpt='toggleOption'
            value="Rambler">Рамблер</ToggleOption>
          <ToggleOption
            {...defaultPropsToggleOption}
            classNameTogOpt='toggleOption-2'
            value="Yandex">Яндекс</ToggleOption>
        </Toggle>
      </div>
    ))

    const toggleStyles = getStyles(wrapper.find('.toggleGroup'))
    const togOptStyles = getStyles(wrapper.find('.toggleOption'))
    const togOptStyles2 = getStyles(wrapper.find('.toggleOption-2'))
    expect(toggleStyles['margin-bottom']).toEqual('20px')
    expect(toggleStyles.width).toEqual('480px')
    expect(toggleStyles.opacity).toEqual('0.5')
    expect(togOptStyles.height).toEqual('45px')
    expect(togOptStyles.width).toEqual(togOptStyles2.width)
    expect(togOptStyles['pointer-events']).toEqual('none')
  })

  it('onChange Toggle', () => {
    const wrapper = mount(applyTheme(
      <div style={{width: 480, marginBottom: 20}}>
        <Toggle
          {...defaultPropsToggle}
          size='small'
          block={true}
          style={{marginBottom: 20}}
          behavior='toggle'>
          <ToggleOption
            {...defaultPropsToggleOption}
            className='toggleActive'
            classNameTogOpt='toggleOption'
            value="Rambler">Рамблер</ToggleOption>
          <ToggleOption
            {...defaultPropsToggleOption}
            classNameTogOpt='toggleOption-2'
            value="Yandex">Яндекс</ToggleOption>
        </Toggle>
      </div>
    ))

    const toggle = wrapper.find('.toggleGroup')
    const togOpt2 = wrapper.find('.toggleOption-2')

    expect(toggle.props().value).toEqual('Rambler')
    togOpt2.simulate('click')
    expect(event.type).toEqual('click')
    expect(value).toEqual('Yandex')
    togOpt2.simulate('click')
    expect(value).toEqual(null)
  })
})
