import React from 'react'
import Textarea from '../Textarea'
import { withTheme, mount, getStyles } from '../../utils/test-utils'

describe('<Textarea />', () => {
  it('should apply default styles', () => {
    const wrapper = mount(
      withTheme(
        <Textarea value="" />
      )
    )

    const textareaStyles = getStyles(wrapper.find(Textarea))

    expect(textareaStyles.height).toEqual('75px')
  })
})
