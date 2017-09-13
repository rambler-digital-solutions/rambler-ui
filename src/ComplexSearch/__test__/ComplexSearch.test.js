import React from 'react'
import ComplexSearch from '../ComplexSearch'
import SuggestItem from '../SuggestItem'
import theme from '../../theme/base'
import { mount, withTheme, getStyles } from '../../utils/test-utils'

describe('<ComplexSearch />', () => {

  it('should apply default styles', () => {
    const wrapper = mount(
      withTheme(
        <ComplexSearch>
          <SuggestItem value="1">
            1
          </SuggestItem>
          <SuggestItem value="2">
            2
          </SuggestItem>
        </ComplexSearch>
      )
    )

    const search = wrapper.find(ComplexSearch)
    const selectStyles = getStyles(search)

    expect(selectStyles.width).toEqual('765px')

    const input = wrapper.find('input')
    const inputStyles = getStyles(input)

    expect(inputStyles.height).toEqual(theme.search.height)
  })
})
