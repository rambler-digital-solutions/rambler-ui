import React from 'react'
import Notification from './Notification'
import FaceIcon from '../icons/forms/FaceIcon'
import { SNACKBAR_ZINDEX } from '../constants/z-indexes'
import { withTheme, mount, getNodeStyles } from '../utils/test-utils'
import theme from '../theme/base'
import { normalize as nc } from '../utils/colors'

describe('<Notification />', () => {
  let containerNode

  const mountWrapper = props => mount(withTheme(<Notification
    className="notification"
    title="Hi"
    body="Foo"
    containerRef={(ref) => {
      containerNode = ref
    }}
    {...props} />))

  beforeEach(() => {
    containerNode = undefined
  })

  it('container node should be undefined if notification is not open', () => {
    mountWrapper()

    expect(containerNode).toBeUndefined()
  })

  it('should append notification to document.body if props.isOpened is true', () => {
    mountWrapper({
      isOpened: true
    })

    expect(document.body.lastElementChild).toEqual(containerNode)
    expect(document.body.lastElementChild.childElementCount).toEqual(1)
  })

  it('should open/close notification when change props.isOpened', async (done) => {
    let onClose

    const whenClose = new Promise((resolve) => {
      onClose = resolve
    })

    const wrapper = mountWrapper({
      containerRef: (ref) => {
        containerNode = ref
        if (!ref) onClose()
      }
    })

    expect(containerNode).toBeUndefined()

    wrapper.setProps({
      isOpened: true
    })

    const mountNode = document.body.lastElementChild

    expect(document.body.lastElementChild).toEqual(containerNode)
    expect(document.body.lastElementChild.childElementCount).toEqual(1)

    wrapper.setProps({
      isOpened: false
    })

    await whenClose
    expect(containerNode).toBeUndefined()
    expect(mountNode).not.toEqual(document.body.lastElementChild)
    done()
  })

  it('should apply default styles', () => {
    mountWrapper({
      isOpened: true
    })

    const containerStyles = getNodeStyles(containerNode)

    expect(containerStyles.position).toEqual('absolute')
    expect(containerStyles['z-index']).toEqual(`${SNACKBAR_ZINDEX}`)

    const notificationNode = containerNode.querySelector('.notification')
    const notificationStyles = getNodeStyles(notificationNode)

    expect(notificationStyles.position).toEqual('fixed')
    expect(notificationStyles.right).toEqual('15px')
    expect(notificationStyles['font-family']).toEqual('Roboto, sans-serif')
    expect(notificationStyles['font-size']).toEqual('13px')
    expect(nc(notificationStyles['background-color'])).toEqual(nc(theme.notification.colors.background))
    expect(nc(notificationStyles.color)).toEqual(nc(theme.notification.colors.text))
    expect(notificationStyles.width).toEqual('335px')
    expect(notificationStyles['padding-top']).toEqual('20px')
    expect(notificationStyles['padding-left']).toEqual('20px')
    expect(notificationStyles['padding-right']).toEqual('25px')
    expect(notificationStyles['padding-bottom']).toEqual('20px')
  })

  it('should apply positionX', () => {
    mountWrapper({
      isOpened: true,
      positionX: 'left'
    })

    const notificationNode = containerNode.querySelector('.notification')
    const notificationStyles = getNodeStyles(notificationNode)

    expect(notificationStyles.left).toEqual('15px')
  })

  it('should not append close and action buttons', () => {
    mountWrapper({
      isOpened: true,
      showClose: false
    })

    const notificationNode = containerNode.querySelector('.notification')
    const buttons = notificationNode.querySelectorAll('button')

    expect(buttons.length).toEqual(0)
  })

  it('should append className', () => {
    mountWrapper({
      isOpened: true,
      className: 'notification'
    })

    expect(containerNode.querySelector('.notification')).not.toBeUndefined()
  })

  it('should append styles', () => {
    const backgroundColor = 'rgb(255, 0, 0)'

    mountWrapper({
      style: {
        backgroundColor
      },
      isOpened: true
    })

    const notificationNode = containerNode.querySelector('.notification')
    const notificationStyles = getNodeStyles(notificationNode)

    expect(notificationStyles['background-color']).toEqual(backgroundColor)
  })

  it('should append icon', () => {
    mountWrapper({
      isOpened: true,
      icon: (
        <FaceIcon className="icon" />
      )
    })

    const iconNode = containerNode.querySelector('.icon')
    const iconContainerNode = iconNode.parentNode
    const iconContainerStyles = getNodeStyles(iconContainerNode)

    expect(iconContainerStyles.display).toEqual('inline-block')
    expect(iconContainerStyles.width).toEqual('39px')
    expect(iconContainerStyles.height).toEqual('39px')
    expect(iconContainerStyles['text-align']).toEqual('center')
    expect(nc(iconContainerStyles['background-color'])).toEqual(nc(theme.notification.colors.iconBackground))
    expect(iconContainerStyles['margin-right']).toEqual('10px')
  })

  it('should append title', () => {
    mountWrapper({
      isOpened: true,
      title: (
        <span className="title">Hi</span>
      )
    })

    const titleNode = containerNode.querySelector('.title')

    expect(titleNode.textContent).toEqual('Hi')
  })

  it('should append body', () => {
    mountWrapper({
      isOpened: true,
      body: (
        <span className="body">Foo bar</span>
      )
    })

    const bodyNode = containerNode.querySelector('.body')

    expect(bodyNode.textContent).toEqual('Foo bar')
  })

  it('should append close button', () => {
    mountWrapper({
      isOpened: true,
      showClose: true
    })

    const buttonNode = containerNode.querySelector('.notification button')
    const buttonStyles = getNodeStyles(buttonNode)

    expect(buttonStyles.position).toEqual('absolute')
    expect(buttonStyles.top).toEqual('13px')
    expect(buttonStyles.right).toEqual('13px')
  })

  it('should append action button', () => {
    mountWrapper({
      isOpened: true,
      showClose: false,
      actionButton: 'Ok'
    })

    const buttonNode = containerNode.querySelector('.notification button')
    const buttonStyles = getNodeStyles(buttonNode)

    expect(buttonNode.textContent).toEqual('Ok')
    expect(buttonStyles.height).toEqual('20px')
    expect(nc(buttonStyles.color)).toEqual(nc(theme.notification.actionButton.colors.default))
    expect(buttonStyles['background-color']).toEqual('rgba(0, 0, 0, 0)')
    expect(buttonStyles['padding-top']).toEqual('0px')
    expect(buttonStyles['padding-left']).toEqual('0px')
    expect(buttonStyles['padding-right']).toEqual('0px')
    expect(buttonStyles['padding-bottom']).toEqual('0px')
    expect(buttonStyles['font-size']).toEqual('13px')
  })

  it('should call props.onAction() when click on action button', async (done) => {
    const props = {
      isOpened: true,
      showClose: false,
      actionButton: 'Ok'
    }

    const whenAction = new Promise((resolve) => {
      props.onAction = resolve
    })

    spyOn(props, 'onAction').and.callThrough()
    mountWrapper(props)
    expect(props.onAction).not.toHaveBeenCalled()
    containerNode.querySelector('.notification button').click()
    await whenAction
    expect(props.onAction).toHaveBeenCalledTimes(1)
    done()
  })

  it('should call props.onRequestClose() when click on close button', async (done) => {
    const props = {
      isOpened: true,
      showClose: true
    }

    const whenRequestClose = new Promise((resolve) => {
      props.onRequestClose = resolve
    })

    spyOn(props, 'onRequestClose').and.callThrough()
    mountWrapper(props)
    expect(props.onRequestClose).not.toHaveBeenCalled()
    containerNode.querySelector('.notification button').click()
    await whenRequestClose
    expect(props.onRequestClose).toHaveBeenCalledTimes(1)
    done()
  })

})
