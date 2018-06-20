import React, { Component } from 'react'
import Notification from './Notification'
import provideNotification from './provideNotification'
import { withTheme, mount } from '../utils/test-utils'

const WithNotification = provideNotification(
  class extends Component {

    static displayName = 'WithNotification'

    render() {
      return (
        <div className="wrapped">Hi</div>
      )
    }

  }
)

describe('provideNotification()', () => {
  let containerNode

  const mountWrapper = () => mount(withTheme(<WithNotification />))

  const mountNotification = (props) => {
    const wrapper = mountWrapper()
    const { openNotification, closeNotification } = wrapper.find('WithNotification').props()
    let onOpen
    let onClose

    const whenOpen = new Promise((resolve) => {
      onOpen = resolve
    })

    const whenClose = new Promise((resolve) => {
      onClose = resolve
    })

    const notification = openNotification(<Notification
      className="notification"
      title="Hi"
      body="Foo"
      containerRef={(ref) => {
        containerNode = ref

        if (ref)
          onOpen()
        else
          onClose()
      }}
      {...props} />)

    return {
      notification,
      closeNotification,
      whenOpen,
      whenClose
    }
  }

  beforeEach(() => {
    containerNode = undefined
  })

  it('should append wrapped component', () => {
    const wrapper = mountWrapper()
    const wrappedNode = wrapper.find('.wrapped')

    expect(wrappedNode.text()).toEqual('Hi')
  })

  it('should open/close notification when call props.{openNotification,closeNotification}', async (done) => {
    expect(containerNode).toBeUndefined()

    const {
      notification, closeNotification, whenOpen, whenClose
    } = mountNotification()

    await whenOpen
    expect(document.body.lastElementChild).toEqual(containerNode)
    expect(document.body.lastElementChild.childElementCount).toEqual(1)
    closeNotification(notification)
    await whenClose
    expect(containerNode).toBeUndefined()
    done()
  })

  it('should close notification when call notification.close', async (done) => {
    const { notification, whenOpen, whenClose } = mountNotification()

    await whenOpen
    expect(document.body.lastElementChild).toEqual(containerNode)
    expect(document.body.lastElementChild.childElementCount).toEqual(1)
    notification.close()
    await whenClose
    expect(containerNode).toBeUndefined()
    done()
  })

  it('should close notification when click on close button', async (done) => {
    const { whenOpen, whenClose } = mountNotification({
      showClose: true
    })

    await whenOpen
    expect(document.body.lastElementChild).toEqual(containerNode)
    expect(document.body.lastElementChild.childElementCount).toEqual(1)
    containerNode.querySelector('.notification button').click()
    await whenClose
    expect(containerNode).toBeUndefined()
    done()
  })

  it('should close notification when click on action button', async (done) => {
    const { notification, whenOpen, whenClose } = mountNotification({
      actionButton: 'Ok',
      onAction: () => {
        notification.close()
      }
    })

    await whenOpen
    expect(document.body.lastElementChild).toEqual(containerNode)
    expect(document.body.lastElementChild.childElementCount).toEqual(1)
    containerNode.querySelector('.notification button').click()
    await whenClose
    expect(containerNode).toBeUndefined()
    done()
  })

})
