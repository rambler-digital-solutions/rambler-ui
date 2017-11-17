import React from 'react'
import ComplexSearch from '../ComplexSearch'
import Dropdown from '../../Dropdown'
import SuggestItem from '../SuggestItem'
import theme from '../../theme/base'
import { mount, withTheme, getStyles, getWrapperNode } from '../../utils/test-utils'

describe('<ComplexSearch />', () => {
  const handlersProps = {
    onSubmit: () => {},
    onSearch: () => {}
  }

  let wrapper
  beforeEach(() => {
    spyOn(handlersProps, 'onSubmit')
    spyOn(handlersProps, 'onSearch')

    wrapper = mount(
      withTheme(
        <ComplexSearch {...handlersProps} searchButton="search">
          <SuggestItem value="1">
            1
          </SuggestItem>
          <SuggestItem value="2">
            2
          </SuggestItem>
          <SuggestItem value="3">
            3
          </SuggestItem>
        </ComplexSearch>
      )
    )
  })


  it('should apply default styles', () => {
    const search = wrapper.find(ComplexSearch)
    const selectStyles = getStyles(search)

    expect(selectStyles.width).toEqual('765px')

    const input = wrapper.find('input')
    const inputStyles = getStyles(input)
    expect(inputStyles.height).toEqual(`${theme.search.height}px`)
  })

  it('should open Dropdown when input focused and children have length', () => {
    const search = wrapper.find(ComplexSearch)
    const input = wrapper.find('input')
    input.simulate('focus')

    expect(search.prop('children').length).toEqual(3)
    expect(wrapper.find(Dropdown).prop('isOpened')).toEqual(true)
  })

  it('should call onSubmit when click on search button with input value', () => {
    const input = wrapper.find('input').first()
    getWrapperNode(input).value = 'value'
    input.simulate('change')
    expect(handlersProps.onSearch).toHaveBeenCalled()

    const button = wrapper.find('button').first()
    button.simulate('click')
    expect(handlersProps.onSubmit).toHaveBeenCalledWith('value')
  })
})
