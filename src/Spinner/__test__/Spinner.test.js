import React from 'react'
import Spinner from '../Spinner'
import { mount, withTheme, getStyles } from '../../utils/test-utils'

describe('<Spinner />', () => {

  it('should apply default styles', () => {
    const wrapper = mount(withTheme(<Spinner />))

    const spinner = wrapper.find(Spinner)
    const spinnerStyles = getStyles(spinner)

    expect(spinnerStyles.position).toEqual('absolute')
    expect(spinnerStyles.top).toEqual('0px')
    expect(spinnerStyles.left).toEqual('0px')
    expect(spinnerStyles.right).toEqual('0px')
    expect(spinnerStyles.bottom).toEqual('0px')

    const dotStyles = getStyles(spinner.find('span > span'))
    expect(dotStyles['width']).toEqual('5px')
    expect(dotStyles['background-color']).toEqual('rgb(49, 94, 251)')
  })

  it('should apply styles for inline prop', () => {
    const wrapper = mount(withTheme(<Spinner inline={true} />))

    const spinner = wrapper.find(Spinner)
    const spinnerStyles = getStyles(spinner)
    expect(spinnerStyles.position).toEqual('static')
    expect(spinnerStyles.display).toEqual('inline-block')
  })

  it('should append className', () => {
    const wrapper = mount(withTheme(<Spinner className="spinner" />))

    const spinner = wrapper.find(Spinner)

    expect(spinner.hasClass('spinner')).toBe(true)
  })

  it('should append style', () => {
    const color = 'rgb(255, 255, 255)'

    const wrapper = mount(withTheme(<Spinner style={{ backgroundColor: color }} />))

    const spinner = wrapper.find(Spinner)
    const spinnerStyles = getStyles(spinner)

    expect(spinnerStyles['background-color']).toEqual(color)
  })

  it('should apply custom size', () => {
    const size = 10

    const wrapper = mount(withTheme(<Spinner size={size} />))

    const spinner = wrapper.find(Spinner)
    const dotStyles = getStyles(spinner.find('span > span'))

    expect(dotStyles.width).toEqual(size + 'px')
  })

  it('should apply custom color', () => {
    const color = 'rgb(0, 0, 0)'

    const wrapper = mount(withTheme(<Spinner color={color} />))

    const spinner = wrapper.find(Spinner)
    const dotStyles = getStyles(spinner.find('span > span'))

    expect(dotStyles['background-color']).toEqual(color)
  })

})
