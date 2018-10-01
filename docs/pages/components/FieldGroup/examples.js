import React, {Component} from 'react'
import Input from 'rambler-ui/Input'
import Select from 'rambler-ui/Select'
import {MenuItem} from 'rambler-ui/Menu'
import FieldGroup from 'rambler-ui/FieldGroup'
import {ApplyTheme} from 'rambler-ui/theme'

export default class FieldGroupExample extends Component {
  state = {
    value: ''
  }

  setValue = (e, value) => {
    this.setState({value})
  }

  render() {
    return (
      <ApplyTheme>
        <div>
          <div>
            <h3>Form groups</h3>
            <div style={{display: 'flex'}}>
              {['regular', 'awesome', 'promo'].map(variation => (
                <div style={{width: 300, marginRight: 40}} key={variation}>
                  <h4>{`Variation: ${variation}`}</h4>
                  <FieldGroup variation={variation}>
                    <Select placeholder="placeholder" appendToBody={true}>
                      <MenuItem value="foo">Foo</MenuItem>
                      <MenuItem value="bar">Bar</MenuItem>
                    </Select>
                    <Input
                      type="text"
                      placeholder="placeholder"
                      onChange={this.setValue}
                      value={this.state.value}
                    />
                  </FieldGroup>
                  <br />
                  <FieldGroup variation={variation} showDivider>
                    <Select placeholder="placeholder" appendToBody={true}>
                      <MenuItem value="foo">Foo</MenuItem>
                      <MenuItem value="bar">Bar</MenuItem>
                    </Select>
                    <Input
                      type="text"
                      placeholder="placeholder"
                      onChange={this.setValue}
                      value={this.state.value}
                    />
                  </FieldGroup>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ApplyTheme>
    )
  }
}
