import React, {Component} from 'react'
import Button from 'rambler-ui/Button'
import FaceIcon from 'rambler-ui/icons/forms/FaceIcon'
import {Notification, provideNotification} from 'rambler-ui/Notification'

class WithNotification extends Component {
  open = () => {
    // eslint-disable-next-line react/prop-types
    const notification = this.props.openNotification(
      <Notification
        title="Hi"
        icon={<FaceIcon color="crimson" />}
        body="Вы готовы удалить почту?"
        actionButton="Да"
        onAction={() => notification.close()}
        showClose={false}
      />
    )
  }

  render() {
    return (
      <div>
        <div style={{marginBottom: 20}}>
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
  return <WithProvidedNotification />
}
