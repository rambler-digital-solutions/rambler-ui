import React from 'react'
import Switcher from '../Switcher'
import theme from '../../theme/base'
import {normalize as nc} from '../../utils/colors'
import { mount, withTheme, getStyles } from '../../utils/test-utils'

describe('<Switcher />', () => {

  it('should apply default styles', () => {
    const wrapper = mount(
      withTheme(
        <Switcher
          className="root"
          switcherClassName="switcher"
          trackClassName="track"
          labelClassName="label">
          On
        </Switcher>
      )
    )

    const root = wrapper.find('.root')

    expect(root.text()).toEqual('On')

    const rootStyles = getStyles(root)
    const checkboxStyles = getStyles(wrapper.find('input'))
    const switcherStyles = getStyles(wrapper.find('.switcher'))
    const trackStyles = getStyles(wrapper.find('.track'))
    const labelStyles = getStyles(wrapper.find('.label'))

    expect(rootStyles['font-family']).toEqual('Roboto, sans-serif')
    expect(rootStyles['font-size']).toEqual('13px')
    expect(rootStyles.cursor).toEqual('pointer')
    expect(nc(rootStyles.color)).toEqual(nc(theme.switcher.colors.default.default.text))

    expect(checkboxStyles.opacity).toEqual('0')

    expect(switcherStyles.width).toEqual('30px')
    expect(switcherStyles.height).toEqual('15px')
    expect(nc(switcherStyles['background-color'])).toEqual(nc(theme.switcher.colors.default.default.background))

    expect(trackStyles.width).toEqual('13px')
    expect(trackStyles.height).toEqual('13px')
    expect(nc(trackStyles['background-color'])).toEqual(nc(theme.switcher.colors.default.default.track))

    expect(labelStyles['margin-left']).toEqual('10px')
    expect(labelStyles.cursor).toEqual('pointer')
  })

  it('should append style', () => {
    const color = 'rgb(255, 0, 255)'

    const wrapper = mount(
      withTheme(
        <Switcher
          className="root"
          style={{ color }}
          switcherClassName="switcher"
          switcherStyle={{ backgroundColor: color }}
          trackClassName="track"
          trackStyle={{ backgroundColor: color }}
          labelClassName="label"
          labelStyle={{ backgroundColor: color }}>
          On
        </Switcher>
      )
    )

    const rootStyles = getStyles(wrapper.find('.root'))
    const switcherStyles = getStyles(wrapper.find('.switcher'))
    const trackStyles = getStyles(wrapper.find('.track'))
    const labelStyles = getStyles(wrapper.find('.label'))

    expect(nc(rootStyles.color)).toEqual(nc(color))
    expect(nc(switcherStyles['background-color'])).toEqual(nc(color))
    expect(nc(trackStyles['background-color'])).toEqual(nc(color))
    expect(nc(labelStyles['background-color'])).toEqual(nc(color))
  })

  it('should append name and disable', () => {
    const wrapper = mount(
      withTheme(
        <Switcher
          name="foo"
          disabled
          className="root"
          switcherClassName="switcher"
          trackClassName="track"
          labelClassName="label">
          On
        </Switcher>
      )
    )

    const rootStyles = getStyles(wrapper.find('.root'))
    const switcherStyles = getStyles(wrapper.find('.switcher'))
    const trackStyles = getStyles(wrapper.find('.track'))

    expect(nc(rootStyles.color)).toEqual(nc(theme.switcher.colors.default.disabled.text))
    expect(nc(switcherStyles['background-color'])).toEqual(nc(theme.switcher.colors.default.disabled.background))
    expect(nc(trackStyles['background-color'])).toEqual(nc(theme.switcher.colors.default.disabled.track))

    const checkbox = wrapper.find('input')

    expect(checkbox.node.name).toEqual('foo')
    expect(checkbox.node.disabled).toBeTruthy()
  })

  it('should place switcher at right', () => {
    const wrapper = mount(
      withTheme(
        <Switcher
          iconPosition="right"
          className="root"
          labelClassName="label">
          On
        </Switcher>
      )
    )

    const labelStyles = getStyles(wrapper.find('.label'))

    expect(labelStyles['margin-right']).toEqual('10px')
  })

  it('should handle `props.onCheck`', () => {
    let event
    let checked

    const wrapper = mount(
      withTheme(
        <Switcher
          className="root"
          onCheck={(e, c) => {
            event = e
            checked = c
          }}>
          On
        </Switcher>
      )
    )

    wrapper.find('input').simulate('change', { target: { checked: true } })
    expect(event.type).toEqual('change')
    expect(checked).toBeTruthy()
    wrapper.find('input').simulate('change', { target: { checked: false } })
    expect(event.type).toEqual('change')
    expect(checked).toBeFalsy()
  })

})
