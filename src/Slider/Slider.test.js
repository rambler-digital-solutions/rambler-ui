import React, {Component} from 'react'
import Slider from './Slider'
import {
  withTheme,
  mount,
  getWrapperNode,
  getNodeStyles,
  getStyles
} from '../utils/test-utils'
import theme from '../theme/base'
import {normalize} from '../utils/colors'

describe('<Slider />', () => {
  it('should apply default props', () => {
    const wrapper = mount(withTheme(<Slider />))
    const slider = wrapper.find(Slider)
    const rangeInput = getWrapperNode(slider.find('input'))
    expect(rangeInput.step).toEqual('1')
  })

  it('onChange slider', done => {
    let currentValue = 1
    class SliderTest extends Component {
      state = {
        value: 1
      }
      setValue = event => {
        const value = event.target.value
        currentValue = value
        this.setState({value})
      }
      render() {
        return (
          <Slider
            min={0}
            max={100}
            value={this.state.value}
            onChange={this.setValue}
          />
        )
      }
    }
    const sliderTest = mount(withTheme(<SliderTest />))
    const slider = sliderTest.find(Slider)
    const rangeInput = slider.find('input')
    rangeInput.simulate('change', {target: {value: 50}})
    expect(currentValue).toEqual(50)
    done()
  })

  it('should be 100% width', () => {
    const wrapper = mount(withTheme(<Slider />))
    const slider = wrapper.find(Slider)
    const rangeInput = getWrapperNode(slider)
    const wrapperWidth = getStyles(wrapper)['width']
    const sliderWidth = getNodeStyles(rangeInput)['width']
    expect(sliderWidth).toEqual(wrapperWidth)
  })

  it('should apply theme', () => {
    const wrapper = mount(withTheme(<Slider />))
    const slider = wrapper.find(Slider)
    const rangeInput = getWrapperNode(slider.find('input'))
    const root = getWrapperNode(slider.find('div').at(0))
    const rootStyles = getNodeStyles(root)
    const track = getWrapperNode(slider.find('div').at(1))
    const fill = getWrapperNode(slider.find('div').at(2))
    const rangeInputStyles = getNodeStyles(rangeInput)
    const trackStyles = getNodeStyles(track)
    const fillStyles = getNodeStyles(fill)
    expect(rootStyles['height']).toEqual(`${theme.slider.thumb.size}px`)
    expect(rangeInputStyles['height']).toEqual(`${theme.slider.thumb.size}px`)
    expect(trackStyles['height']).toEqual(`${theme.slider.height}px`)
    expect(trackStyles['background-color']).toEqual(
      normalize(theme.slider.colors.background)
    )
    expect(fillStyles['height']).toEqual(`${theme.slider.height}px`)
    expect(fillStyles['background-color']).toEqual(
      normalize(theme.slider.colors.fill)
    )
  })
})
