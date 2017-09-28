import React, { Component } from 'react'
import Button from 'rambler-ui/Button'
import { Snackbar, provideSnackbar } from 'rambler-ui/Snackbar'
import { ApplyTheme } from 'rambler-ui/theme'

class WithSnackbar extends Component {

  openAlert = () => {
    this.props.openSnackbar(<Snackbar
      positionY="top"
      showClose
      type="danger">
        При удалении почты произошла ошибка
    </Snackbar>)
  }

  openConfirm = () => {
    const snackbar = this.props.openSnackbar(<Snackbar
      positionX="right"
      autoCloseDuration={0}
      actionButton="Ok"
      onAction={() => snackbar.close()}>
        Вы готовы удалить почту?
    </Snackbar>)
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
