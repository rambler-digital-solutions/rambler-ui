import Button from '../Button'
import React from 'react'
import { ApplyTheme } from '../../theme'
import { mount, getStyles } from '../../utils/test-utils'

const applyTheme = (children) => (
  <ApplyTheme>{ children }</ApplyTheme>
)

describe('<Button />', () => {

  it('expect "type" affect style', () => {
    const wrapper = mount(applyTheme(<Button type="primary" size="medium">test</Button>))
    const styles = getStyles(wrapper)
    expect(styles.height).toEqual('45px')
    expect(styles['background-color']).toEqual('rgb(49, 94, 251)')
  })

  // it('href', () => {

  // })

  // it('target', () => {

  // })

  // it('className', () => {

  // })

  // it('style', () => {

  // })

  // it('children', () => {

  // })

  // it('icon', () => {

  // })

  // it('size', () => {

  // })

  // it('onClick', () => {

  // })

  // it('container', () => {

  // })

  // it('overlay', () => {

  // })

})
