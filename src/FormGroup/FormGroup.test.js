import React from 'react'
import theme from '../theme/base'
import Input from '../Input/Input'
import {mount, withTheme, getStyles} from '../utils/test-utils'
import {normalize as nc} from '../utils/colors'
import FormGroup from './FormGroup'

describe('<FormGroup />', () => {
  const defaultProps = {
    value: '',
    type: 'text'
  }

  it('should apply default styles', () => {
    const wrapper = mount(
      withTheme(
        <FormGroup>
          <Input className="input" {...defaultProps} />
        </FormGroup>
      )
    )

    const group = wrapper.find(FormGroup)
    const groupStyles = getStyles(group)

    expect(groupStyles.display).toEqual('block')
  })

  it('should apply custom styles', () => {
    const wrapper = mount(
      withTheme(
        <FormGroup inline>
          <Input className="input" {...defaultProps} />
        </FormGroup>
      )
    )

    const group = wrapper.find(FormGroup)
    console.log(group)

    const groupStyles = getStyles(group)

    expect(groupStyles.display).toEqual('flex')
  })
})
