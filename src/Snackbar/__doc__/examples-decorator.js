import React, { Component } from 'react'
import Button from 'rambler-ui/Button'
import { Snackbar, provideSnackbar } from 'rambler-ui/Snackbar'
import { ApplyTheme } from 'rambler-ui/theme'

class WithSnackbar extends Component {

  state = {
    latestEvent: 'none'
  }

  openAlert = () => {
    this.alertSnackbar = this.props.openSnackbar(
      <Snackbar
        showClose
        type="danger">
        При удалении почты произошла ошибка
      </Snackbar>
    )

    this.alertSnackbar.opened.then(() => {
      this.setState({
        latestEvent: 'alert opened'
      })
    })

    this.alertSnackbar.closed.then(() => {
      this.setState({
        latestEvent: 'alert closed'
      })
    }, () => {
      this.setState({
        latestEvent: 'alert closed'
      })
    })
  }

  openConfirm = () => {
    this.confirmSnackbar = this.props.openSnackbar(
      <Snackbar
        positionX="right"
        autoCloseDuration={3000}
        actionButton="Ok">
        Вы готовы удалить почту?
      </Snackbar>
    )

    this.confirmSnackbar.opened.then(() => {
      this.setState({
        latestEvent: 'confirm opened'
      })
    })

    this.confirmSnackbar.closed.then(() => {
      this.setState({
        latestEvent: 'confirm closed with action button'
      })
    }, () => {
      this.setState({
        latestEvent: 'confirm closed'
      })
    })
  }

  render() {
    return (
      <div>
        <div style={{ marginBottom: 20 }}>
          <Button type="danger" onClick={this.openAlert}>
            Алерт
          </Button>
          <Button type="outline" style={{ marginLeft: 20 }} onClick={this.openConfirm}>
            Подтверждение
          </Button>
        </div>
        <div>this.state.latestEvent: <b>{this.state.latestEvent}</b></div>
      </div>
    )
  }

}

const WithProvidedSnackbar = provideSnackbar(WithSnackbar)

export default function SnackbarDecoratorExample() {
  return (
    <ApplyTheme>
      <WithProvidedSnackbar />
    </ApplyTheme>
  )
}
