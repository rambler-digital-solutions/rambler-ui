import { RadioButton } from '../../Radio'
import { ApplyTheme } from '../../theme'
import { mount, getStyles } from '../../utils/test-utils'
import React from 'react'

const applyTheme = (children) => (
  <ApplyTheme>{ children }</ApplyTheme>
)

describe('<RadioButtonGroup />', () => {
  it('test styles RadioButtonGroup', () => {
    const wrapper = mount(applyTheme(<RadioButton foo= {10}>test</RadioButton>))

    // expect(wrapper.props().foo).toEqual(10)
    // const wrapper = mount(applyTheme(<RadioButtonGroup name='group' value='1' styleForGroup={{width: 150}}>
    //                                   <RadioButton value='1'>Up</RadioButton>
    //                                   <RadioButton value='2'>Down</RadioButton>
    //                                 </RadioButtonGroup>))
    console.log(wrapper)
    // const styles = getStyles(wrapper)
    // console.log('___________________________________')
    // console.log(expect(styles.width).toEqual('150px'))
    // console.log(expect(wrapper.find('.radioButtonGroup')))
    // console.log(styles)
    // expect(styles.display).toEqual('block')
    // expect(wrapper.find('.test-container')).toHave.length(1)
    // expect(wrapper.props().value).toEqual('1')
    // expect(wrapper.props().name).toEqual('group')
    // expect(wrapper.props.value).toEqual(1)
  })
})

describe('<RadioButton />', () => {
  it('test styles RadioButton', () => {
    const wrapper = mount(applyTheme(<RadioButton value={1} name={'radio'} className='normal' labelPosition='right' />))
    const styles = getStyles(wrapper)
    console.log(styles)
    // console.log(expect(wrapper.find('.normal')).toHave.length)
  })
})
//
//   it('target', () => {
//
//   })
//
//   it('className', () => {
//
//   })
//
//   it('style', () => {
//
//   })
//
//   it('children', () => {
//
//   })
//
//   it('icon', () => {
//
//   })
//
//   it('size', () => {
//
//   })
//
//   it('onClick', () => {
//
//   })
//
//   it('container', () => {
//
//   })
//
//   it('overlay', () => {
//
//   })
//
