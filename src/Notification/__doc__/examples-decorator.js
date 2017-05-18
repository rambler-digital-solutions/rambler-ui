import React, { Component } from 'react'
import Button from 'rambler-ui/Button'
import FaceIcon from 'rambler-ui/icons/forms/FaceIcon'
import { Notification, provideNotification } from 'rambler-ui/Notification'
import { ApplyTheme } from 'rambler-ui/theme'

class WithNotification extends Component {

  open = () => {
    const notification = this.props.openNotification(
      <Notification
        title="Hi"
        icon={
          <FaceIcon color="crimson" />
        }
        body="Вы готовы удалить почту?"
        actionButton="Да"
        onAction={() => notification.close()} />
    )
  }

  render() {
    return (
      <div>
        <div style={{ marginBottom: 20 }}>
          <Button type="outline" onClick={this.open}>
            Подтверждение
          </Button>
        </div>
      </div>
    )
  }

}

const WithProvidedNotification = provideNotification(WithNotification)

export default function NotificationDecoratorExample() {
  return (
    <ApplyTheme>
      <WithProvidedNotification />
    </ApplyTheme>
  )
}
