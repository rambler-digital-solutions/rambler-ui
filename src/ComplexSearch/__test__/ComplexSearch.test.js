import React from 'react'
import ComplexSearch from '../ComplexSearch'
import Dropdown from '../../Dropdown'
import SuggestItem from '../SuggestItem'
import theme from '../../theme/base'
import { mount, withTheme, getStyles, getWrapperNode } from '../../utils/test-utils'
import { normalize as nc } from '../../utils/colors'


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
          searchButtonStyle={{minWidth: SEARCH_BUTTON_WIDTH}}
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
    expect(selectStyles.height).toEqual(`${theme.search.height}px`)

    // search field is composed with input wrapped in div
    const input = wrapper.find('input').closest('div')
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
    const input = wrapper.find('input').first()
    getWrapperNode(input).value = 'value'
    input.simulate('change')
    expect(handlersProps.onSearch).toHaveBeenCalled()

    const button = wrapper.find('button').first()
    button.simulate('click')
    expect(handlersProps.onSubmit).toHaveBeenCalledWith('value')
  })

  it('button should be in wrapper borders', () => {
    const wrapperDiv = getWrapperNode(wrapper)
    const wrapperRect = wrapperDiv.getBoundingClientRect()
    const button = wrapperDiv.querySelector('button')
    const buttonRect = button.getBoundingClientRect()

    expect(buttonRect.right).toBeLessThanOrEqual(wrapperRect.right)
  })

  it ('button font styles should be from theme', () => {
    const themeButtonStyles = theme.search.button
    const search = wrapper.find(ComplexSearch)
    const button = search.find('button')
    const buttonStyles = getStyles(button)

    expect(buttonStyles['font-weight']).toEqual(themeButtonStyles.fontWeight.toString())
    expect(buttonStyles['font-size']).toEqual(`${themeButtonStyles.fontSize}px`)
    expect(buttonStyles.color).toEqual(nc(themeButtonStyles.color))
    expect(parseFloat(buttonStyles['letter-spacing']).toFixed(1)).toEqual(themeButtonStyles.letterSpacing.toString())
    expect(buttonStyles['background-color']).toEqual(nc(themeButtonStyles.default.background))
    expect(buttonStyles['text-transform']).toEqual(themeButtonStyles.textTransform)
  })
  
})
