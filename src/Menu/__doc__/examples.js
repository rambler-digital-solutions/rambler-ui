import React, { Component } from 'react'
import { Menu, MenuItem } from 'rambler-ui/Menu'
import PhoneIcon from 'rambler-ui/icons/forms/PhoneIcon'
import { ApplyTheme } from 'rambler-ui/theme'

export default class SelectExample extends Component {

  state = {
    value: null,
    values: []
  }

  setValue = key => value => {
    this.setState({
      [key]: value
    })
  }

  render() {
    return (
      <ApplyTheme>
        <div>

          <div style={{ width: '25%', marginBottom: 15 }}>
            <Menu
              value={this.state.value}
              onChange={this.setValue('value')}>
              {[...Array(5)].map((item, i) => (
                <MenuItem value={i} key={i}>
                  Foo{i}
                </MenuItem>
              ))}
            </Menu>
          </div>

          <div style={{ width: '33%', marginBottom: 15 }}>
            <h3>С иконками и максимальной высотой</h3>
            <Menu
              maxHeight={200}
              value={this.state.value}
              onChange={this.setValue('value')}>
              {[...Array(15)].map((item, i) => (
                <MenuItem value={i} key={i}>
                  <PhoneIcon /> Bar{i}
                </MenuItem>
              ))}
            </Menu>
          </div>

          <div style={{ width: '45%', marginBottom: 15 }}>
            <h3>Мультиселект</h3>
            <Menu
              multiple={true}
              value={this.state.values}
              onChange={this.setValue('values')}>
              {[...Array(10)].map((item, i) => (
                <MenuItem value={i} key={i}>
                  Baz{i}
                </MenuItem>
              ))}
            </Menu>
          </div>

          <div>this.state.value: <b>{`${this.state.value}`}</b></div>
          <div>this.state.values: <b>{`${this.state.values}`}</b></div>

        </div>
      </ApplyTheme>
    )
  }

}
