import React, { Component } from 'react'
import Button from 'rambler-ui/Button'
import FaceIcon from 'rambler-ui/icons/forms/FaceIcon'
import { Notification } from 'rambler-ui/Notification'
import { ApplyTheme } from 'rambler-ui/theme'

export default class NotificationExample extends Component {

  state = {
    leftIsOpened: false,
    rightIsOpened: false
  }

  openNotification = type => {
    this.setState({
      [`${type}IsOpened`]: true
    })
  }

  closeNotification = type => {
    this.setState({
      [`${type}IsOpened`]: false
    })
  }

  render() {
    return (
      <ApplyTheme>
        <div>
          <Notification
            isOpened={this.state.rightIsOpened}
            icon={
              <FaceIcon color="purple" />
            }
            title="Hi"
            body="Добавьте, пожалуйста, дату вашего рождения"
            actionButton="Добавить дату рождения"
            onAction={() => this.closeNotification('right')}
            onRequestClose={() => this.closeNotification('right')} />

          <Notification
            isOpened={this.state.leftIsOpened}
            positionX="left"
            title="Hi"
            body="Добавьте, пожалуйста, дату вашего рождения"
            actionButton="Добавить дату рождения"
            onAction={() => this.closeNotification('left')}
            onRequestClose={() => this.closeNotification('left')} />

          <div style={{ marginBottom: 20 }}>
            <Button onClick={() => this.openNotification('right')}>
              Нотификация
            </Button>
            <Button type="secondary" style={{ marginLeft: 20 }} onClick={() => this.openNotification('left')}>
              Слева без иконки
            </Button>
          </div>

        </div>
      </ApplyTheme>
    )
  }

}
