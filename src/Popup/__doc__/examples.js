import React, { Component } from 'react'
import Button from 'rambler-ui/Button'
import Input from 'rambler-ui/Input'
import { Popup } from 'rambler-ui/Popup'
import { ApplyTheme } from 'rambler-ui/theme'

export default class PopupExample extends Component {

  state = {
    inputValue: 'foo@ramber.ru',
    baseIsOpened: false,
    customIsOpened: false
  }

  openPopup = type => {
    this.setState({
      [`${type}IsOpened`]: true
    })
  }

  closePopup = () => {
    this.setState({
      baseIsOpened: false,
      customIsOpened: false
    })
  }

  updateValue = (e, value) => {
    this.setState({
      inputValue: value
    })
  }

  render() {
    return (
      <ApplyTheme>
        <div>
          <Popup
            title="Удаление почты"
            showClose
            isOpened={this.state.baseIsOpened}
            okButton={
              <Button type="primary" size="small" onClick={this.closePopup}>
                Ок
              </Button>
            }
            cancelButton={
              <Button type="flat" size="small" onClick={this.closePopup}>
                Нет
              </Button>
            }
            onRequestClose={this.closePopup}
          >
            Вы готовы удалить почту
          </Popup>

          <Popup
            title="Укажите почту"
            showClose
            isOpened={this.state.customIsOpened}
            okButton={
              <Button type="primary" size="small" onClick={this.closePopup}>
                Ок
              </Button>
            }
            cancelButton={
              <Button type="flat" size="small" onClick={this.closePopup}>
                Отмена
              </Button>
            }
            onRequestClose={this.closePopup}
          >
            <div style={{ width: 400 }}>
              <Input
                type="email"
                autoFocus
                value={this.state.inputValue}
                onChange={this.updateValue} />
            </div>
          </Popup>

          <div style={{ marginBottom: 20 }}>
            <Button onClick={() => this.openPopup('base')}>
              Базовый попап
            </Button>
            <Button type="secondary" style={{ marginLeft: 20 }} onClick={() => this.openPopup('custom')}>
              Попап произвольной ширины
            </Button>
          </div>

          <div>this.state.baseIsOpened: <b>{this.state.baseIsOpened ? 'true' : 'false'}</b></div>
          <div>this.state.customIsOpened: <b>{this.state.customIsOpened ? 'true' : 'false'}</b></div>
          <div>this.state.inputValue: <b>{this.state.inputValue}</b></div>
        </div>
      </ApplyTheme>
    )
  }

}
