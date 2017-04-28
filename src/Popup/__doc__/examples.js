import React, { Component } from 'react'
import Button from 'rambler-ui/Button'
import { Popup } from 'rambler-ui/Popup'
import { ApplyTheme } from 'rambler-ui/theme'

export default class PopupExample extends Component {

  state = {
    isOpen: false
  }

  openPopup = () => {
    this.setState({
      isOpen: true
    })
  }

  closePopup = () => {
    this.setState({
      isOpen: false
    })
  }

  render() {
    return (
      <ApplyTheme>
        <div>
          <Popup
            title="Удаление почты"
            showClose
            isOpen={this.state.isOpen}
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
            onClose={this.closePopup}
          >
            Вы готовы удалить почту
          </Popup>
          <div style={{ marginBottom: 20 }}>
            <Button onClick={this.openPopup}>
              Показать попап
            </Button>
          </div>
          <div>this.state.isOpen: <b>{this.state.isOpen ? 'true' : 'false'}</b></div>
        </div>
      </ApplyTheme>
    )
  }

}
