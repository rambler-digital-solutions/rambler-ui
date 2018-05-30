import React from 'react'
import { Toggle, ToggleOption} from '../../Toggle'
import { ApplyTheme } from '../../theme'
import { mount, getStyles, getWrapperNode } from '../../utils/test-utils'
import theme from '../../theme/base'
import { normalize as nc } from '../../utils/colors'

const applyTheme = children => (
  <ApplyTheme>{ children }</ApplyTheme>
)

describe('Toggle', () => {
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

  it('Style Toggle/ToggleOption small', () => {
    const wrapper = mount(applyTheme(<div style={{width: 480, marginBottom: 20}}>
      <Toggle {...defaultPropsToggle}
        behavior='radio'
        block={false}>
        <ToggleOption
          {...defaultPropsToggleOption}
          className='toggleActive'
          value="Rambler">Рамблер</ToggleOption>
        <ToggleOption
          {...defaultPropsToggleOption}
          value="Yandex">Яндекс</ToggleOption>
      </Toggle>
    </div>))

    const toggleStyles = getStyles(wrapper.find('.toggleGroup').first())
    const togOpt = getStyles(wrapper.find('.toggleActive').first())

    expect(toggleStyles.display).toEqual('inline-block')
    expect(togOpt['font-size']).toEqual(theme.toggle.sizes.small.fontSize + 'px')
    expect(nc(togOpt.color)).toEqual(nc(theme.toggle.colors.checked.text))
    expect(togOpt.height).toEqual(theme.toggle.sizes.small.height + 'px')
    expect(togOpt['border-top-width']).toEqual('1px')
    expect(togOpt['border-bottom-width']).toEqual('1px')
    expect(togOpt['border-top-style']).toEqual('solid')
  })

  it('Style Toggle/ToggleOption medium', () => {
    const wrapper = mount(applyTheme(<div style={{width: 480, marginBottom: 20}}>
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
          value="Rambler">Rambler&Co</ToggleOption>
        <ToggleOption
          {...defaultPropsToggleOption}
          className='toggleOption'
          value="Yandex">Yandex</ToggleOption>
      </Toggle>
    </div>))

    const toggleStyles = getStyles(wrapper.find('.toggleGroup').first())
    const togOpt = wrapper.find('.toggleActive').first()
    const togOptNode = getWrapperNode(togOpt)
    const togOptStyles = getStyles(togOpt)
    const togOptStyles2 = getStyles(wrapper.find('.toggleOption').first())
    expect(toggleStyles['margin-bottom']).toEqual('20px')
    expect(toggleStyles.width).toEqual('480px')
    expect(togOptStyles.height).toEqual(theme.toggle.sizes.medium.height + 'px')
    expect(togOptStyles.width).toEqual(togOptStyles2.width)
    expect(nc(togOptStyles.color)).toEqual(nc(theme.toggle.colors.disabled.text))
    expect(togOptNode.disabled).toEqual(true)
  })

  it('onChange Toggle', () => {
    const wrapper = mount(applyTheme(<div style={{width: 480, marginBottom: 20}}>
      <Toggle
        {...defaultPropsToggle}
        behavior='toggle'>
        <ToggleOption
          {...defaultPropsToggleOption}
          value="Rambler">Rambler&Co</ToggleOption>
        <ToggleOption
          {...defaultPropsToggleOption}
          className='toggleOption'
          value="Yandex">Yandex</ToggleOption>
      </Toggle>
    </div>))

    const toggle = wrapper.find('.toggleGroup').first()
    const togOpt2 = wrapper.find('.toggleOption').first()

    expect(toggle.props().value).toEqual('Rambler')
    togOpt2.simulate('click')
    expect(event.type).toEqual('click')
    expect(value).toEqual('Yandex')
    togOpt2.simulate('click')
    expect(value).toEqual(null)
  })
})
