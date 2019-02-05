import React from 'react'
import theme from '../theme/base'
import Input from '../Input/Input'
import {mount, withTheme, getStyles} from '../utils/test-utils'
import FormGroup from './FormGroup'

describe('<FormGroup />', () => {
  const defaultProps = {
    value: ''
  }
  const element = withTheme(
    <FormGroup>
      <Input className="input" {...defaultProps} />
    </FormGroup>
  )

  it('should apply default styles', () => {
    const wrapper = mount(element)

    const group = wrapper.find(FormGroup)
    const groupStyles = getStyles(group)

    console.log(groupStyles.padding - top)
  })
})
