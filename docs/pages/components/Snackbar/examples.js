import React, {Component} from 'react'
import Button from 'rambler-ui/Button'
import QuestionIcon from 'rambler-ui/icons/forms/QuestionIcon'
import {Snackbar} from 'rambler-ui/Snackbar'
import {ApplyTheme} from 'rambler-ui/theme'

export default class SnackbarExample extends Component {
  state = {
    baseIsOpened: false,
    withDelayIsOpened: false,
    withIconIsOpened: false
  }

  openSnackbar = type => {
    this.setState({
      [`${type}IsOpened`]: true
    })
  }

  closeSnackbar = type => {
    this.setState({
      [`${type}IsOpened`]: false
    })
  }

  render() {
    return (
      <ApplyTheme>
        <div>
          <Snackbar
            isOpened={this.state.baseIsOpened}
            onRequestClose={() => this.closeSnackbar('base')}>
            Hi
          </Snackbar>

          <Snackbar
            isOpened={this.state.withDelayIsOpened}
            type="success"
            positionX="left"
            showClose={true}
            autoCloseDuration={0}
            onRequestClose={() => this.closeSnackbar('withDelay')}>
            Почта удалена
          </Snackbar>

          <Snackbar
            isOpened={this.state.withIconIsOpened}
            type="primary"
            positionY="top"
            positionX="right"
            autoCloseDuration={0}
            icon={<QuestionIcon color="white" />}
            actionButton="Ok"
            onAction={() => this.closeSnackbar('withIcon')}
            onRequestClose={() => this.closeSnackbar('withIcon')}>
            Вы готовы удалить почту?
          </Snackbar>

          <div style={{marginBottom: 20}}>
            <Button onClick={() => this.openSnackbar('base')}>
              Базовый снэкбар
            </Button>
            <Button
              type="secondary"
              style={{marginLeft: 20}}
              onClick={() => this.openSnackbar('withDelay')}>
              Слева окна без автозакрытия
            </Button>
            <Button
              type="flat"
              style={{marginLeft: 20}}
              onClick={() => this.openSnackbar('withIcon')}>
              С иконкой и кнопкой действия
            </Button>
          </div>
        </div>
      </ApplyTheme>
    )
  }
}
