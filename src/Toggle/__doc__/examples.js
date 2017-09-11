import { Toggle, ToggleOption } from 'rambler-ui/Toggle'
import React, { Component } from 'react'
import { ApplyTheme } from 'rambler-ui/theme'

export default class ToggleExample extends Component {

  state = {
    toggleValue: 'Rambler'
  };

  onChange(event, newValue) {
    this.setState({toggleValue: newValue})
  }

  render() {

    return (
      <ApplyTheme>
        <div>
          <div style={{width: 480, marginBottom: 20}}>
            <h4>block, equalWidth</h4>
            <Toggle value={this.state.toggleValue} className='toggle' onChange={::this.onChange} block={true} equalWidth={true}>
              <ToggleOption value="Rambler">Rambler&Co</ToggleOption>
              <ToggleOption value="Yandex">Yandex</ToggleOption>
              <ToggleOption value="Mail">Mail.ru</ToggleOption>
              <ToggleOption value="Google">Google</ToggleOption>
            </Toggle>
          </div>
          <div style={{marginBottom: 20}}>
            <h4>disabled, equalWidth</h4>
            <Toggle value={this.state.toggleValue} onChange={::this.onChange} disabled={true} equalWidth={true}>
              <ToggleOption value="Google">Google</ToggleOption>
              <ToggleOption value="Rambler">Rambler&Co</ToggleOption>
              <ToggleOption value="Yandex">Yandex</ToggleOption>
              <ToggleOption value="Mail">Mail.ru</ToggleOption>
            </Toggle>
          </div>
          <div style={{marginBottom: 20}}>
            <h4>size: medium, behavior: toggle</h4>
            <Toggle value={this.state.toggleValue} onChange={::this.onChange} size="medium" behavior="toggle">
              <ToggleOption value="Yandex">Yandex</ToggleOption>
              <ToggleOption value="Google">Google</ToggleOption>
              <ToggleOption value="Mail">Mail.ru</ToggleOption>
              <ToggleOption value="Rambler">Rambler&Co</ToggleOption>
            </Toggle>
          </div>
          <div style={{marginBottom: 20}}>
            <h4>variation: transparent</h4>
            <Toggle value={this.state.toggleValue} onChange={::this.onChange} variation='transparent'>
              <ToggleOption value="Mail">Mail.ru</ToggleOption>
              <ToggleOption value="Yandex">Yandex</ToggleOption>
              <ToggleOption value="Rambler">Rambler&Co</ToggleOption>
              <ToggleOption value="Google">Google</ToggleOption>
            </Toggle>
          </div>
          <div style={{marginBottom: 20}}>
            <h4>variation: transparent, disabled</h4>
            <Toggle value={this.state.toggleValue} onChange={::this.onChange} disabled={true} variation='transparent'>
              <ToggleOption value="Rambler">Rambler&Co</ToggleOption>
              <ToggleOption value="Mail">Mail.ru</ToggleOption>
              <ToggleOption value="Google">Google</ToggleOption>
              <ToggleOption value="Yandex">Yandex</ToggleOption>
            </Toggle>
          </div>
          <br/>
          <div>this.state.toggleValue: <b>{ this.state.toggleValue }</b></div>
        </div>
      </ApplyTheme>
    )

  }

}
