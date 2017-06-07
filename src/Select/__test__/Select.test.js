import React from 'react'
import Select from '../Select'
import Input from '../../Input/Input'
import MenuItem from '../../Menu/MenuItem'
import { mount, withTheme, getStyles } from '../../utils/test-utils'

describe('<Select />', () => {

  it('should apply default styles', () => {
    const wrapper = mount(
      withTheme(
        <Select>
          <MenuItem text="foo" value="foo" />
          <MenuItem text="bar" value="bar" />
        </Select>
      )
    )

    const select = wrapper.find(Select)
    const selectStyles = getStyles(select)

    expect(selectStyles.position).toEqual('relative')
    expect(selectStyles.height).toEqual('45px')
    expect(selectStyles['background-color']).toEqual('rgb(255, 255, 255)')

    const input = wrapper.find(Input)
    const inputStyles = getStyles(input)

    expect(inputStyles['background-color']).toEqual('rgba(0, 0, 0, 0)')

    const arrow = select.find('button')
    const arrowStyles = getStyles(arrow)

    expect(arrowStyles.position).toEqual('absolute')
    expect(arrowStyles.right).toEqual('13px')
    expect(arrowStyles.width).toEqual('20px')
    expect(arrowStyles.height).toEqual('20px')
    expect(arrowStyles['background-color']).toEqual('rgba(0, 0, 0, 0)')
  })

  it('should apply size', () => {
    const wrapper = mount(
      withTheme(
        <Select size="small">
          <MenuItem text="foo" value="foo" />
          <MenuItem text="bar" value="bar" />
        </Select>
      )
    )

    const select = wrapper.find(Select)
    const selectStyles = getStyles(select)

    expect(selectStyles.height).toEqual('35px')
  })

})
