import React from 'react'
import Select from '../Select'
import Input from '../../Input/Input'
import MenuItem from '../../Menu/MenuItem'
import theme from '../../theme/base'
import EllipsisIcon from '../../icons/forms/EllipsisIcon'
import { mount, withTheme, getStyles } from '../../utils/test-utils'

describe('<Select />', () => {

  it('should apply default styles', () => {
    const wrapper = mount(withTheme(<Select>
      <MenuItem value="foo">
            foo
      </MenuItem>
      <MenuItem value="bar">
            baz
      </MenuItem>
    </Select>))

    const select = wrapper.find(Select)
    const selectStyles = getStyles(select)

    expect(selectStyles.position).toEqual('relative')
    expect(selectStyles.height).toEqual('45px')

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
    const wrapper = mount(withTheme(<Select size="small">
      <MenuItem value="foo">
            foo
      </MenuItem>
      <MenuItem value="bar">
            baz
      </MenuItem>
    </Select>))

    const select = wrapper.find(Select)
    const selectStyles = getStyles(select)

    expect(selectStyles.height).toEqual(theme.field.sizes.small.height + 'px')
  })

  it('should append custom arrow', () => {
    const wrapper = mount(
      withTheme(
        <Select
          arrowStyle={{width: 25}}
          arrowClassName="arrow"
          arrowIcon={
            <EllipsisIcon />
          }>
          <MenuItem value="foo">
            foo
          </MenuItem>
          <MenuItem value="bar">
            baz
          </MenuItem>
        </Select>
      )
    )

    const arrow = wrapper.find(EllipsisIcon)

    expect(arrow.exists()).toBe(true)
    expect(arrow.parent().hasClass('arrow')).toBe(true)
    expect(getStyles(arrow.parent()).width).toEqual('25px')
  })

})
