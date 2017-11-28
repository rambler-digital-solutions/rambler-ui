import React from 'react'
import ComplexSearch from '../ComplexSearch'
import Dropdown from '../../Dropdown'
import SuggestItem from '../SuggestItem'
// import ClearIcon from '../../icons/forms/ClearIcon'
import theme from '../../theme/base'
import { mount, withTheme, getStyles } from '../../utils/test-utils'


const SEARCH_BUTTON_WIDTH = 125

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
        <ComplexSearch 
          {...handlersProps} 
          searchButton="search"
          searchButtonMinWidth={SEARCH_BUTTON_WIDTH}
        >
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

  it('should has ${SEARCH_BUTTON_WIDTH}px search button width', () => {
    const search = wrapper.find(ComplexSearch)
    const button = search.find('button')

    const buttonStyles = getStyles(button)
    expect(buttonStyles.width).toEqual(`${SEARCH_BUTTON_WIDTH}px`)
  })

  it('should open Dropdown when input focused and children have length', () => {
    const search = wrapper.find(ComplexSearch)
    const input = wrapper.find('input')
    input.simulate('focus')

    expect(search.prop('children').length).toEqual(3)
    expect(wrapper.find(Dropdown).prop('isOpened')).toEqual(true)
  })

  it('should call onSubmit when click on search button with input value', () => {
    const input = wrapper.find('input')
    input.get(0).value = 'value'
    input.first().simulate('change')
    expect(handlersProps.onSearch).toHaveBeenCalled()

    const button = wrapper.find('button')
    button.simulate('click')
    expect(handlersProps.onSubmit).toHaveBeenCalledWith('value')
  })

  // it('should change cross color when hover', () => {
  //   const search = wrapper.find(ComplexSearch)
  //   const input = wrapper.find('input')
  //   input.first().simulate('focus')
  //   input.get(0).value = 'value'
  //   input.first().simulate('change')
  //   expect(handlersProps.onSearch).toHaveBeenCalled()
    
  //   const cross = search.find(ClearIcon)
  //   let crossStyles = getStyles(cross)
  //   console.log(crossStyles.opacity)
  //   cross.simulate('mouseEnter')
  //   crossStyles = getStyles(cross)
  //   console.log(crossStyles.opacity)
  //   expect(crossStyles.fill).toEqual('#FFFFFF')
  // })  

  it('button should be in wrapper borders', () => {
    const search = wrapper.find(ComplexSearch)
    const wrapperDiv = search.find('div').get(0)
    const wrapperRect = wrapperDiv.getBoundingClientRect()
    const button = search.find('button').get(0)
    const buttonRect = button.getBoundingClientRect()

    expect(buttonRect.right).toBeLessThanOrEqual(wrapperRect.right)
  })
  
})
