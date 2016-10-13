import Button from '../Button'
import React from 'react'
import { mount, getStyles } from 'utils/test-utils'


describe('<Button />', () => {

  it('expect "type" affect style', () => {
    const wrapper = mount(<Button type="primary" size="medium">test</Button>)
    const styles = getStyles(wrapper)
    expect(styles.height).toEqual('45px')
    expect(styles['background-color']).toEqual('rgb(0, 0, 0)')
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
