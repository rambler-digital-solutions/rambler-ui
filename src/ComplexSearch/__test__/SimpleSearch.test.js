import React from 'react'
import SimpleSearch from '../SimpleSearch'
import SourceButtons from '../SourceButtons'
import ServiceSourceIcon from '../ServiceSourceIcon'
import theme from '../../theme/base'
import { mount, withTheme, getStyles, getWrapperNode } from '../../utils/test-utils'

const DATA_ATTR = 'data-cerber-head'
const SEARCH_DATA_ATTR = 'main::search'
const BUTTON_DATA_ATTR = 'main::button'

const getSearchWrapper = (props = {}) => {
  const defaultProps = {
    inputProps: {[DATA_ATTR]: SEARCH_DATA_ATTR},
    searchButtonProps: {[DATA_ATTR]: BUTTON_DATA_ATTR}
  }

  const resultProps = {...defaultProps, ...props}

  return mount(
    withTheme(
      <SimpleSearch 
        {...resultProps}
      />
    )
  )
}

describe('<SimpleSearch />', () => {
  const handlersProps = {
    onSubmit: () => {},
    onSearch: () => {}
  }

  it('should apply default styles', () => {
    const wrapper = getSearchWrapper()
    const search = wrapper.find(SimpleSearch)
    const selectStyles = getStyles(search)

    expect(selectStyles.width).toEqual(`${theme.simpleSearch.maxWidth}px`)

    const input = search.find('input')
    const inputStyles = getStyles(input)
    expect(inputStyles['font-size']).toEqual(`${theme.simpleSearch.fontSize}px`)
  })

  it('should change size with props', () => {
    ['small', 'medium'].forEach(size => {
      const wrapper = getSearchWrapper({
        size
      })

      const search = wrapper.find(SimpleSearch)
      const sizeProp = search.prop('size')
      const input = search.find('input').closest('div')
      const inputStyles = getStyles(input)
      expect(inputStyles.height).toEqual(`${theme.simpleSearch.sizes[sizeProp].height}px`)
    })
  })

  it('should call onSubmit when click on search button with input value', () => {
    spyOn(handlersProps, 'onSubmit')
    spyOn(handlersProps, 'onSearch')
    
    const wrapper = getSearchWrapper(handlersProps)
    const input = wrapper.find('input').first()
    getWrapperNode(input).value = 'value'
    input.simulate('change')
    expect(handlersProps.onSearch).toHaveBeenCalled()

    const button = wrapper.find('button').first()
    button.simulate('click')
    expect(handlersProps.onSubmit).toHaveBeenCalledWith('value')
  })

  it('button should be in wrapper borders', () => {
    const wrapper = getSearchWrapper()
    const wrapperDiv = getWrapperNode(wrapper)
    const wrapperRect = wrapperDiv.getBoundingClientRect()
    const button = wrapperDiv.querySelector('button')
    const buttonRect = button.getBoundingClientRect()

    expect(buttonRect.right).toBeLessThanOrEqual(wrapperRect.right)
  })

  it ('should apply data-attributes to button, searchinput', () => {
    const wrapper = getSearchWrapper()
    const search = wrapper.find(SimpleSearch)
    const input = search.find('input').first()
    expect(getWrapperNode(input).getAttribute(DATA_ATTR)).toEqual(SEARCH_DATA_ATTR)
    const button = search.find('button')
    expect(getWrapperNode(button).getAttribute(DATA_ATTR)).toEqual(BUTTON_DATA_ATTR)
  })

  it('should not render button if showSearchButton props', () => {
    const wrapper = getSearchWrapper({
      showSearchButton: false
    })
    expect(wrapper.find('button').length).toEqual(0)
  })

  it('should change sourceType when source buttons enabled', () => {
    spyOn(handlersProps, 'onSearch')

    const wrapper = getSearchWrapper({
      sourceType: true,
      ...handlersProps
    })
    const sourceButtons = wrapper.find(SourceButtons)
    expect(sourceButtons.length).toEqual(1)
    const input = wrapper.find('input').first()
    getWrapperNode(input).value = 'value'
    input.simulate('change')
    expect(handlersProps.onSearch).toHaveBeenCalledWith('value', {globalSearch: 'global'})
    sourceButtons.find(ServiceSourceIcon).simulate('click')
    getWrapperNode(input).value = 'value2'
    input.simulate('change')
    expect(handlersProps.onSearch).toHaveBeenCalledWith('value2', {globalSearch: 'service'})
  })
  
})
