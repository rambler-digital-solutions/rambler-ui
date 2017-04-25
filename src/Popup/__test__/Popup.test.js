import React, { cloneElement } from 'react'
import Popup from '../Popup'
import Button from '../../Button/Button'
import { ApplyTheme } from '../../theme'
import { mount, getNodeStyles } from '../../utils/test-utils'

const withTheme = element => {
  const Result = props => <ApplyTheme>{cloneElement(element, props)}</ApplyTheme>
  Result.displayName = element.displayName
  return <Result />
}

describe('<Popup />', () => {
  let containerNode

  const mountWrapper = props => mount(
    withTheme(
      <Popup
        className="test-popup"
        containerRef={ref => {
          containerNode = ref
        }}
        {...props}
      />
    )
  )

  beforeEach(() => {
    containerNode = undefined
  })

  it('container node should be undefined if popup is not open', () => {
    mountWrapper()

    expect(containerNode).toBeUndefined()
  })

  it('should append popup to document.body if props.isOpen is true', () => {
    mountWrapper({
      isOpen: true
    })

    expect(document.body.lastElementChild).toEqual(containerNode)
    expect(document.body.lastElementChild.childElementCount).toEqual(1)
  })

  it('should open/close popup when change props.isOpen', () => {
    const wrapper = mountWrapper()

    expect(containerNode).toBeUndefined()

    wrapper.setProps({
      isOpen: true
    })

    const mountNode = document.body.lastElementChild

    expect(document.body.lastElementChild).toEqual(containerNode)
    expect(document.body.lastElementChild.childElementCount).toEqual(1)

    wrapper.setProps({
      isOpen: false
    })

    expect(containerNode).toBeUndefined()
    expect(mountNode).not.toEqual(document.body.lastElementChild)
  })

  it('should apply default styles', () => {
    mountWrapper({
      isOpen: true
    })

    const popupNode = containerNode.querySelector('.test-popup')
    const popupStyles = getNodeStyles(popupNode)

    expect(popupStyles.position).toEqual('absolute')
    expect(popupStyles.top).toEqual('50%')
    expect(popupStyles.left).toEqual('50%')
    expect(popupStyles['font-family']).toEqual('Roboto, sans-serif')
    expect(popupStyles['font-size']).toEqual('13px')
    expect(popupStyles['background-color']).toEqual('rgb(255, 255, 255)')
    expect(popupStyles.width).toEqual('350px')
    expect(popupStyles['padding-top']).toEqual('20px')
    expect(popupStyles['padding-left']).toEqual('30px')
    expect(popupStyles['padding-right']).toEqual('30px')
    expect(popupStyles['padding-bottom']).toEqual('30px')
  })

  it('should not append title, buttons', () => {
    mountWrapper({
      isOpen: true,
      showClose: false
    })

    const popupNode = containerNode.querySelector('.test-popup')
    const title = popupNode.querySelectorAll('header')
    const buttons = popupNode.querySelectorAll('button')

    expect(title.length).toEqual(0)
    expect(buttons.length).toEqual(0)
  })

  it('should append className', () => {
    mountWrapper({
      isOpen: true
    })

    expect(containerNode.querySelector('.test-popup')).not.toBeUndefined()
  })

  it('should append styles', () => {
    const color = 'rgb(0, 0, 0)'

    mountWrapper({
      styles: {
        color
      },
      isOpen: true
    })

    const popupNode = containerNode.querySelector('.test-popup')
    const popupStyles = getNodeStyles(popupNode)

    expect(popupStyles.color).toEqual(color)
  })

  it('should append title', () => {
    const title = 'Hi'

    mountWrapper({
      title,
      isOpen: true
    })

    const titleNode = containerNode.querySelector('.test-popup header')
    const titleStyles = getNodeStyles(titleNode)

    expect(titleNode.textContent).toEqual(title)
    expect(titleStyles['font-size']).toEqual('16px')
    expect(titleStyles['font-weight']).toEqual('500')
    expect(titleStyles['line-height']).toEqual('20px')
    expect(titleStyles['margin-bottom']).toEqual('15px')
  })

  it('should append children', () => {
    const title = 'Hi'

    mountWrapper({
      children: (
        <p>{title}</p>
      ),
      isOpen: true
    })

    const childNode = containerNode.querySelector('.test-popup p')

    expect(childNode.tagName).toEqual('P')
    expect(childNode.textContent).toEqual(title)
  })

  it('should append close button', () => {
    mountWrapper({
      isOpen: true,
      showClose: true
    })

    const buttonNode = containerNode.querySelector('.test-popup button')
    const buttonStyles = getNodeStyles(buttonNode)

    expect(buttonStyles.position).toEqual('absolute')
    expect(buttonStyles.top).toEqual('18px')
    expect(buttonStyles.right).toEqual('23px')
  })

  it('should append action buttons', () => {
    mountWrapper({
      isOpen: true,
      okButton: (
        <Button className="ok-button">
          Ok
        </Button>
      ),
      cancelButton: (
        <Button className="cancel-button">
          Cancel
        </Button>
      )
    })

    const popupNode = containerNode.querySelector('.test-popup')
    const okButtonNode = popupNode.querySelector('.ok-button')
    const cancelButtonNode = popupNode.querySelector('.cancel-button')

    expect(okButtonNode.textContent).toEqual('Ok')
    expect(cancelButtonNode.textContent).toEqual('Cancel')
  })

  it('should call props.onOpened() when popup opens', async done => {
    const props = {}

    const whenOpen = new Promise(resolve => {
      props.onOpened = resolve
    })

    spyOn(props, 'onOpened').and.callThrough()
    const wrapper = mountWrapper(props)
    expect(props.onOpened).not.toHaveBeenCalled()

    wrapper.setProps({
      isOpen: true
    })

    await whenOpen
    expect(props.onOpened).toHaveBeenCalledTimes(1)
    done()
  })

  it('should call props.onClose() when click on close button', async done => {
    const props = {
      isOpen: true,
      showClose: true
    }

    const whenRequestClose = new Promise(resolve => {
      props.onClose = resolve
    })

    spyOn(props, 'onClose').and.callThrough()
    mountWrapper(props)
    expect(props.onClose).not.toHaveBeenCalled()
    containerNode.querySelector('.test-popup button').click()
    await whenRequestClose
    expect(props.onClose).toHaveBeenCalledTimes(1)
    done()
  })

  it('should call props.onClosed() when popup closes', async done => {
    const props = {
      isOpen: true
    }

    const whenClose = new Promise(resolve => {
      props.onClosed = resolve
    })

    spyOn(props, 'onClosed').and.callThrough()
    const wrapper = mountWrapper(props)
    expect(props.onClosed).not.toHaveBeenCalled()

    wrapper.setProps({
      isOpen: false
    })

    await whenClose
    expect(props.onClosed).toHaveBeenCalledTimes(1)
    done()
  })

})
