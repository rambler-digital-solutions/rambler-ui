import React, {Component} from 'react'
import Button from 'rambler-ui/Button'
import {Popup, providePopup} from 'rambler-ui/Popup'
import {ApplyTheme} from 'rambler-ui/theme'

class WithPopup extends Component {
  state = {
    latestEvent: 'none'
  }

  openAlert = () => {
    this.alertPopup = this.props.openPopup(resolve => (
      <Popup
        title="Ошибка"
        showClose
        okButton={
          <Button type="primary" size="small" onClick={resolve}>
            Ок
          </Button>
        }>
        При удалении почты произошла ошибка
      </Popup>
    ))

    this.alertPopup.opened.then(() => {
      this.setState({
        latestEvent: 'alert opened'
      })
    })

    this.alertPopup.closed.then(
      () => {
        this.setState({
          latestEvent: 'alert closed'
        })
      },
      () => {
        this.setState({
          latestEvent: 'alert closed'
        })
      }
    )
  }

  openConfirm = () => {
    this.confirmPopup = this.props.openPopup((resolve, reject) => (
      <Popup
        title="Удаление почты"
        showClose
        okButton={
          <Button type="primary" size="small" onClick={resolve}>
            Ок
          </Button>
        }
        cancelButton={
          <Button type="flat" size="small" onClick={reject}>
            Нет
          </Button>
        }>
        Вы готовы удалить почту
      </Popup>
    ))

    this.confirmPopup.opened.then(() => {
      this.setState({
        latestEvent: 'confirm opened'
      })
    })

    this.confirmPopup.closed.then(
      () => {
        this.setState({
          latestEvent: 'confirm closed with resolve'
        })
      },
      () => {
        this.setState({
          latestEvent: 'confirm closed with reject'
        })
      }
    )
  }

  render() {
    return (
      <div>
        <div style={{marginBottom: 20}}>
          <Button onClick={this.openAlert}>Алерт</Button>
          <Button
            type="outline"
            style={{marginLeft: 20}}
            onClick={this.openConfirm}>
            Подтверждение
          </Button>
        </div>
        <div>
          this.state.latestEvent: <b>{this.state.latestEvent}</b>
        </div>
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
