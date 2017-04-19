import React, { Component } from 'react'
import Button from 'rambler-ui/Button'
import { Popup, providePopup } from 'rambler-ui/Popup'
import { ApplyTheme } from 'rambler-ui/theme'

class WithPopup extends Component {

  state = {
    alert: false,
    confirm: false,
    latestEvent: 'none'
  }

  openAlert = () => {
    this.alertPopup = this.props.openPopup(resolve => (
      <Popup
        title="Ошибка"
        showClose
        okButton={
          <Button type="primary" onClick={resolve}>
            Ок
          </Button>
        }
      >
        При удалении почты произошла ошибка
      </Popup>
    ))

    this.alertPopup.opened.then(() => {
      this.setState({
        alert: true,
        latestEvent: 'alert opened'
      })
    })

    this.alertPopup.closed.then(() => {
      this.setState({
        alert: false,
        latestEvent: 'alert closed'
      })
    }, () => {
      this.setState({
        alert: false,
        latestEvent: 'alert closed'
      })
    })
  }

  openConfirm = () => {
    this.confirmPopup = this.props.openPopup((resolve, reject) => (
      <Popup
        title="Удаление почты"
        showClose
        okButton={
          <Button type="primary" onClick={resolve}>
            Ок
          </Button>
        }
        cancelButton={
          <Button type="flat" onClick={reject}>
            Нет
          </Button>
        }
      >
        Вы готовы удалить почту
      </Popup>
    ))

    this.confirmPopup.opened.then(() => {
      this.setState({
        confirm: true,
        latestEvent: 'confirm opened'
      })
    })

    this.confirmPopup.closed.then(() => {
      this.setState({
        confirm: false,
        latestEvent: 'confirm closed with resolve'
      })
    }, () => {
      this.setState({
        confirm: false,
        latestEvent: 'confirm closed with reject'
      })
    })
  }

  closeAll = () => {
    if (this.alertPopup)
      this.alertPopup.close()

    if (this.confirmPopup)
      this.confirmPopup.close()
  }

  render() {
    return (
      <div>
        <div style={{ marginBottom: 20 }}>
          <Button disabled={this.state.alert} onClick={this.openAlert}>
            Алерт
          </Button>
          <Button disabled={this.state.confirm} style={{ marginLeft: 20 }} onClick={this.openConfirm}>
            Подтверждение
          </Button>
          <Button type="flat" style={{ marginLeft: 20 }} onClick={this.closeAll}>
            Закрыть все
          </Button>
        </div>
        <div>this.state.latestEvent: <b>{this.state.latestEvent}</b></div>
      </div>
    )
  }

}

const WithProvidedPopup = providePopup(WithPopup)

export default function PopupDecoratorExample() {
  return (
    <ApplyTheme>
      <WithProvidedPopup />
    </ApplyTheme>
  )
}
