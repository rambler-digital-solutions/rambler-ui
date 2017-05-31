import React, { Component } from 'react'
import Button from 'rambler-ui/Button'
import { Popup } from 'rambler-ui/Popup'
import { Select, SelectOption } from 'rambler-ui/Select'
import PhoneIcon from 'rambler-ui/icons/forms/PhoneIcon'
import { ApplyTheme } from 'rambler-ui/theme'

export default class SelectExample extends Component {

  state = {
    value1: null,
    value2: 1,
    value3: null,
    popupIsOpened: false
  }

  openPopup = () => {
    this.setState({
      popupIsOpened: true
    })
  }

  closePopup = () => {
    this.setState({
      popupIsOpened: false
    })
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

          <div style={{ width: '50%', marginBottom: 15 }}>
            <h3>С плэйсхолдером и статусом</h3>
            <Select
              placeholder="Select..."
              status="success"
              value={this.state.value1}
              onChange={this.setValue('value1')}>
              {[...Array(5)].map((item, i) => (
                <SelectOption value={i} key={i}>
                  Foo{i}
                </SelectOption>
              ))}
            </Select>
          </div>

          <div style={{ width: '33%', marginBottom: 15 }}>
            <h3>С иконкой и начальным значением</h3>
            <Select
              size="small"
              icon={
                <PhoneIcon />
              }
              value={this.state.value2}
              onChange={this.setValue('value2')}>
              {[...Array(15)].map((item, i) => (
                <SelectOption value={i} key={i}>
                  Bar{i}
                </SelectOption>
              ))}
            </Select>
          </div>

          <div style={{ width: '66%', marginBottom: 15 }}>
            <h3>Disabled</h3>
            <Select
              disabled={true}
              placeholder="Disabled"
              value={this.state.value3}
              onChange={this.setValue('value3')}>
              {[...Array(5)].map((item, i) => (
                <SelectOption value={i} key={i}>
                  Baz{i}
                </SelectOption>
              ))}
            </Select>
          </div>

          <Popup
            title="Попап"
            showClose
            isOpened={this.state.popupIsOpened}
            okButton={
              <Button type="primary" size="small" onClick={this.closePopup}>
                Ок
              </Button>
            }
            onRequestClose={this.closePopup}
          >
            <Select
              autoFocus={true}
              value={this.state.value3}
              onChange={this.setValue('value3')}>
              {[...Array(5)].map((item, i) => (
                <SelectOption value={i} key={i}>
                  Baz{i}
                </SelectOption>
              ))}
            </Select>
          </Popup>

          <div style={{ marginBottom: 15 }}>
            <h3>В попапе</h3>
            <Button onClick={this.openPopup}>
              Открыть
            </Button>
          </div>

          <div>this.state.value1: <b>{this.state.value1 || 'null'}</b></div>
          <div>this.state.value2: <b>{this.state.value2 || 'null'}</b></div>
          <div>this.state.value3: <b>{this.state.value3 || 'null'}</b></div>

        </div>
      </ApplyTheme>
    )
  }

}
