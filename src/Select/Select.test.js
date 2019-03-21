import React from 'react'
import Select from './Select'
import MenuItem from '../Menu/MenuItem'
import theme from '../theme/base'
import {normalize as nc} from '../utils/colors'
import EllipsisIcon from '../icons/forms/EllipsisIcon'
import {
  mount,
  withTheme,
  getStyles,
  getNodeStyles,
  getWrapperNode
} from '../utils/test-utils'

describe('<Select />', () => {
  it('should apply default styles', () => {
    const wrapper = mount(
      withTheme(
        <Select>
          <MenuItem value="foo">foo</MenuItem>
          <MenuItem value="bar">baz</MenuItem>
        </Select>
      )
    )

    const selectStyles = getStyles(wrapper)
    expect(selectStyles.position).toEqual('relative')
    expect(selectStyles.height).toEqual(theme.field.sizes.medium.height + 'px')

    const inputStyles = getStyles(wrapper.find('input'))
    expect(inputStyles['background-color']).toEqual(
      nc(theme.field.colors.default.background)
    )

    const arrowStyles = getNodeStyles(
      getWrapperNode(wrapper.find('div[role="button"]')).parentNode
    )
    expect(arrowStyles.position).toEqual('absolute')
    expect(arrowStyles.right).toEqual('15px')
    expect(arrowStyles.width).toEqual(theme.field.sizes.medium.icon + 'px')
    expect(arrowStyles.height).toEqual(theme.field.sizes.medium.icon + 'px')
    expect(arrowStyles['background-color']).toEqual('rgba(0, 0, 0, 0)')
  })

  it('should apply size', () => {
    const wrapper = mount(
      withTheme(
        <Select size="small">
          <MenuItem value="foo">foo</MenuItem>
          <MenuItem value="bar">baz</MenuItem>
        </Select>
      )
    )

    const selectStyles = getStyles(wrapper.find(Select))
    expect(selectStyles.height).toEqual(theme.field.sizes.small.height + 'px')
  })

  it('should append custom arrow', () => {
    const wrapper = mount(
      withTheme(
        <Select
          arrowStyle={{width: 25}}
          arrowClassName="arrow"
          arrowIcon={<EllipsisIcon />}>
          <MenuItem value="foo">foo</MenuItem>
          <MenuItem value="bar">baz</MenuItem>
        </Select>
      )
    )

    const arrow = wrapper.find(EllipsisIcon)

    expect(arrow.exists()).toBe(true)
    expect(arrow.parent().hasClass('arrow')).toBe(true)
    expect(getNodeStyles(getWrapperNode(arrow).parentNode).width).toEqual(
      '25px'
    )
  })
})
