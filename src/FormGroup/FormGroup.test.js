import React from 'react'
import theme from '../theme/base'
import Input from '../Input/Input'
import {mount, withTheme, getStyles} from '../utils/test-utils'
import FormGroup from './FormGroup'

describe('<FormGroup />', () => {
  const defaultProps = {
    type: 'text'
  }

  it('should apply default styles', () => {
    const wrapper = mount(withTheme(<FormGroup />))
  })
})
