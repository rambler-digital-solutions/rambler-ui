import React, {Component} from 'react'
import Button from 'rambler-ui/Button'
import {Snackbar, provideSnackbar} from 'rambler-ui/Snackbar'

class WithSnackbar extends Component {
  openAlert = () => {
    // eslint-disable-next-line react/prop-types
    this.props.openSnackbar(
      <Snackbar positionY="top" showClose type="danger">
        При удалении почты произошла ошибка
      </Snackbar>
    )
  }

  openConfirm = () => {
    // eslint-disable-next-line react/prop-types
    const snackbar = this.props.openSnackbar(
      <Snackbar
        positionX="right"
        autoCloseDuration={0}
        actionButton="Ok"
        onAction={() => snackbar.close()}>
        Вы готовы удалить почту?
      </Snackbar>
    )
  }

  openSnackbar = () => {
    // eslint-disable-next-line react/prop-types
    this.props.openSnackbar(
      <Snackbar
        positionY="top"
        positionX="left"
        autoCloseDuration={3000}
        size="small"
        type="danger">
        Я маленький снэкбар
      </Snackbar>
    )
  }

  render() {
    return (
      <div>
        <div style={{marginBottom: 20}}>
          <Button type="danger" onClick={this.openAlert}>
            Алерт
          </Button>
          <Button
            type="outline"
            style={{marginLeft: 20}}
            onClick={this.openConfirm}>
            Подтверждение
          </Button>
          <Button
            type="primary"
            style={{marginLeft: 20}}
            onClick={this.openSnackbar}>
            Маленький снэкбар
          </Button>
        </div>
      </div>
    )
  }
}

const WithProvidedSnackbar = provideSnackbar(WithSnackbar)

export default function SnackbarDecoratorExample() {
  return <WithProvidedSnackbar />
}
