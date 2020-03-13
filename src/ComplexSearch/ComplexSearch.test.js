import React from 'react'
import ComplexSearch from './ComplexSearch'
import Dropdown from '../Dropdown'
import SuggestItem from './SuggestItem'
import SourceButtons from './SourceButtons'
import ServiceSourceIcon from './icons/ServiceSourceIcon'
import theme from '../theme/base'
import {mount, withTheme, getStyles, getWrapperNode} from '../../test/utils'
import {normalize as nc} from '../utils/colors'

const SEARCH_BUTTON_WIDTH = 125
const DATA_ATTR = 'data-cerber-head'
const SEARCH_DATA_ATTR = 'main::search'
const BUTTON_DATA_ATTR = 'main::button'

const getSearchWrapper = (props = {}) => {
  const defaultProps = {
    searchButton: 'search',
    searchButtonStyle: {minWidth: SEARCH_BUTTON_WIDTH},
    inputProps: {[DATA_ATTR]: SEARCH_DATA_ATTR},
    searchButtonProps: {[DATA_ATTR]: BUTTON_DATA_ATTR}
  }

  const resultProps = {...defaultProps, ...props}

  return mount(
    withTheme(
      <ComplexSearch {...resultProps}>
        <SuggestItem value="1">1</SuggestItem>
        <SuggestItem value="2">2</SuggestItem>
        <SuggestItem value="3">3</SuggestItem>
      </ComplexSearch>
    )
  )
}

describe('<ComplexSearch />', () => {
  const handlersProps = {
    onSubmit: () => {},
    onSearch: () => {},
    onPressEnter: () => {}
  }

  it('should apply default styles', () => {
    const wrapper = getSearchWrapper()
    const search = wrapper.find(ComplexSearch)
    const selectStyles = getStyles(search)

    expect(selectStyles.width).toEqual(`${theme.search.maxWidth}px`)
    const input = search.find('input')
    const inputStyles = getStyles(input)
    expect(inputStyles['font-size']).toEqual(`${theme.search.fontSize}px`)
  })

  it('should change size with props', () => {
    ;['small', 'medium'].forEach(size => {
      const wrapper = getSearchWrapper({
        size
      })

      const search = wrapper.find(ComplexSearch)
      const sizeProp = search.prop('size')
      const input = search.find('input').closest('div')
      const inputStyles = getStyles(input)
      expect(inputStyles.height).toEqual(
        `${theme.search.sizes[sizeProp].height}px`
      )
    })
  })

  it('should has ${SEARCH_BUTTON_WIDTH}px search button width', () => {
    const wrapper = getSearchWrapper()
    const search = wrapper.find(ComplexSearch)
    const button = search.find('button')

    const buttonStyles = getStyles(button)
    expect(buttonStyles.width).toEqual(`${SEARCH_BUTTON_WIDTH}px`)
  })

  it('should open Dropdown when input focused and children have length', () => {
    const wrapper = getSearchWrapper()
    const search = wrapper.find(ComplexSearch)
    const input = wrapper.find('input')
    input.simulate('focus')

    expect(search.prop('children').length).toEqual(3)
    expect(wrapper.find(Dropdown).prop('isOpened')).toEqual(true)
  })

  it('should call onSubmit when click on search button with input', () => {
    spyOn(handlersProps, 'onSubmit')
    spyOn(handlersProps, 'onSearch')

    const wrapper = getSearchWrapper(handlersProps)
    const sourceButtons = wrapper.find(SourceButtons)
    expect(sourceButtons.length).toBe(0)

    const input = wrapper.find('input').first()
    getWrapperNode(input).value = 'value'
    input.simulate('change')
    expect(handlersProps.onSearch).toHaveBeenCalled()

    const button = wrapper.find('button').first()
    button.simulate('click')
    expect(handlersProps.onSubmit).toHaveBeenCalledWith('value', {
      sourceType: 'global'
    })
  })

  it('button should be in wrapper borders', () => {
    const wrapper = getSearchWrapper()

    const wrapperDiv = getWrapperNode(wrapper)
    const wrapperRect = wrapperDiv.getBoundingClientRect()
    const button = wrapperDiv.querySelector('button')
    const buttonRect = button.getBoundingClientRect()

    expect(buttonRect.right).toBeLessThanOrEqual(wrapperRect.right)
  })

  it('button font styles should be from theme', () => {
    const wrapper = getSearchWrapper()

    const themeButtonStyles = theme.search.button
    const search = wrapper.find(ComplexSearch)
    const button = search.find('button')
    const buttonStyles = getStyles(button)

    expect(buttonStyles['font-weight']).toEqual(
      themeButtonStyles.fontWeight.toString()
    )
    expect(buttonStyles['font-size']).toEqual(`${themeButtonStyles.fontSize}px`)
    expect(buttonStyles.color).toEqual(nc(themeButtonStyles.color))
    expect(parseFloat(buttonStyles['letter-spacing']).toFixed(1)).toEqual(
      themeButtonStyles.letterSpacing.toString()
    )
    expect(buttonStyles['background-color']).toEqual(
      nc(themeButtonStyles.default.background)
    )
    expect(buttonStyles['text-transform']).toEqual(
      themeButtonStyles.textTransform
    )
  })

  it('should apply data-attributes to button, searchinput', () => {
    const wrapper = getSearchWrapper()

    const search = wrapper.find(ComplexSearch)
    const input = search.find('input').first()
    expect(getWrapperNode(input).getAttribute(DATA_ATTR)).toEqual(
      SEARCH_DATA_ATTR
    )
    const button = search.find('button')
    expect(getWrapperNode(button).getAttribute(DATA_ATTR)).toEqual(
      BUTTON_DATA_ATTR
    )
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
    expect(handlersProps.onSearch).toHaveBeenCalledWith('value', {
      sourceType: 'global'
    })
    sourceButtons.find(ServiceSourceIcon).simulate('click')
    getWrapperNode(input).value = 'value2'
    input.simulate('change')
    expect(handlersProps.onSearch).toHaveBeenCalledWith('value2', {
      sourceType: 'service'
    })
  })

  it('should call onPressEnter when press enter on input', () => {
    spyOn(handlersProps, 'onPressEnter')
    spyOn(handlersProps, 'onSearch')

    const wrapper = getSearchWrapper({
      sourceType: true,
      ...handlersProps
    })
    const input = wrapper.find('input').first()
    const sourceButtons = wrapper.find(SourceButtons)
    getWrapperNode(input).value = 'value'
    input.simulate('change')
    expect(handlersProps.onSearch).toHaveBeenCalled()
    input.simulate('keydown', {key: 'Enter'})
    expect(handlersProps.onPressEnter).toHaveBeenCalledWith('value', {
      sourceType: 'global'
    })
    sourceButtons.find(ServiceSourceIcon).simulate('click')
    getWrapperNode(input).value = 'value2'
    input.simulate('change')
    input.simulate('keydown', {key: 'Enter'})
    expect(handlersProps.onPressEnter).toHaveBeenCalledWith('value2', {
      sourceType: 'service'
    })
  })
})
