import { Toggle, ToggleOption } from 'rambler-ui/Toggle'
import React, { Component } from 'react'
import RamblerMailIcon from 'rambler-ui/icons/services/RamblerMailIcon'
import TickIcon from 'rambler-ui/icons/forms/TickIcon'


export default class ToggleExample extends Component {

  state = {
    toggleValue: 'Rambler'
  };

  onChange(event, newValue) {
    this.setState({toggleValue: newValue})
  }

  render() {

    return (
      <div>
        <div style={{width: 480, marginBottom: 20}}>
          <Toggle value={this.state.toggleValue} onChange={::this.onChange} block={true} equalWidth={true}>
            <ToggleOption value="Rambler" icon={ <RamblerMailIcon/> }>Рамблер</ToggleOption>
            <ToggleOption value="Yandex">Яндекс</ToggleOption>
            <ToggleOption value="Mail">Мейл</ToggleOption>
            <ToggleOption value="Google">Гугл</ToggleOption>
          </Toggle>
        </div>
        <div style={{marginBottom: 20}}>
          <Toggle value={this.state.toggleValue} onChange={::this.onChange} equalWidth={true}>
            <ToggleOption value="Yandex">Яндекс</ToggleOption>
            <ToggleOption value="Google">Гугл</ToggleOption>
            <ToggleOption value="Mail">Мейл</ToggleOption>
            <ToggleOption value="Rambler" icon={ <TickIcon/> }>Рамблер</ToggleOption>
          </Toggle>
        </div>
        <div style={{marginBottom: 20}}>
          <Toggle value={this.state.toggleValue} onChange={::this.onChange} size="medium" behavior="toggle">
            <ToggleOption value="Mail">Мейл</ToggleOption>
            <ToggleOption value="Yandex">Яндекс</ToggleOption>
            <ToggleOption value="Rambler">Рамблер</ToggleOption>
            <ToggleOption value="Google">Гугл</ToggleOption>
          </Toggle>
        </div>
        <br/>
        <div>this.state.toggleValue: <b>{ this.state.toggleValue }</b></div>
      </div>
    )

  }

}
