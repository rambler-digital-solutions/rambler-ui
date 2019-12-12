import React, {Component} from 'react'
import Slider from 'rambler-ui/Slider'

export default class SliderExample extends Component {
  state = {
    value: 200
  }

  onChange = (event, value) => {
    this.setState({value})
  }

  render() {
    return (
      <Slider
        min={0}
        max={500}
        step={1}
        value={this.state.value}
        onChange={this.onChange}
      />
    )
  }
}
