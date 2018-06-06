import React from 'react'
import ServiceSearch from './ServiceSearch'
import theme from '../theme/base'
import { mount, withTheme, getStyles, getWrapperNode } from '../utils/test-utils'

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
      <ServiceSearch
        {...resultProps}
      />
    )
  )
}

describe('<ServiceSearch />', () => {
  const handlersProps = {
    onPressEnter: () => {},
    onSearch: () => {}
  }

  it('should apply default styles', () => {
    const wrapper = getSearchWrapper()
    const search = wrapper.find(ServiceSearch)
    const selectStyles = getStyles(search)

    expect(selectStyles.width).toEqual(`${theme.serviceSearch.maxWidth}px`)
    const input = search.find('input')
    const inputStyles = getStyles(input)
    expect(inputStyles['font-size']).toEqual(`${theme.serviceSearch.fontSize}px`)
  })

  it('should change size with props', () => {
    ['small', 'medium'].forEach(size => {
      const wrapper = getSearchWrapper({
        size
      })

      const search = wrapper.find(ServiceSearch)
      const sizeProp = search.prop('size')
      const input = search.find('input').closest('div')
      const inputStyles = getStyles(input)
      expect(inputStyles.height).toEqual(`${theme.serviceSearch.sizes[sizeProp].height}px`)
    })
  })

  it('should call onPressEnter when press enter on input', () => {
    spyOn(handlersProps, 'onPressEnter')
    spyOn(handlersProps, 'onSearch')

    const wrapper = getSearchWrapper(handlersProps)
    const input = wrapper.find('input').first()
    getWrapperNode(input).value = 'value'
    input.simulate('change')
    expect(handlersProps.onSearch).toHaveBeenCalled()
    input.simulate('keydown', {key: 'Enter'})
    expect(handlersProps.onPressEnter).toHaveBeenCalled()
  })
})
