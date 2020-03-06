import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Button from 'rambler-ui/Button'
import FaceIcon from 'rambler-ui/icons/forms/FaceIcon'
import {Notification, provideNotification} from 'rambler-ui/Notification'

class WithNotification extends Component {
  static propTypes = {
    openNotification: PropTypes.func
  }

  open = () => {
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
