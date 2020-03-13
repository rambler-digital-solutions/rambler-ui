import React from 'react'
import Snackbar from './Snackbar'
import {SNACKBAR_ZINDEX} from '../constants/z-indexes'
import {withTheme, mount, getNodeStyles} from '../../test/utils'
import theme from '../theme/base'
import {normalize as nc} from '../utils/colors'

describe('<Snackbar />', () => {
  let containerNode

  const mountWrapper = (props = {}) =>
    mount(
      withTheme(
        <Snackbar
          className="snackbar"
          containerRef={ref => {
            containerNode = ref
          }}
          {...props}>
          {props.children || 'Hi'}
        </Snackbar>
      )
    )

  beforeEach(() => {
    containerNode = undefined
  })

  it('container node should be undefined if snackbar is not open', () => {
    mountWrapper()

    expect(containerNode).toBeUndefined()
  })

  it('should append snackbar to document.body if props.isOpened is true', () => {
    mountWrapper({
      isOpened: true
    })

    expect(document.body.lastElementChild).toEqual(containerNode)
    expect(document.body.lastElementChild.childElementCount).toEqual(1)
  })

  it('should open/close snackbar when change props.isOpened', async done => {
    let onClose

    const whenClose = new Promise(resolve => {
      onClose = resolve
    })

    const wrapper = mountWrapper({
      containerRef: ref => {
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

    const snackbarNode = containerNode.querySelector('.snackbar')
    const snackbarStyles = getNodeStyles(snackbarNode)

    expect(snackbarStyles.position).toEqual('fixed')
    expect(snackbarStyles['font-family']).toEqual('Roboto, sans-serif')
    expect(snackbarStyles['font-size']).toEqual('13px')
    expect(nc(snackbarStyles['background-color'])).toEqual(
      nc(theme.snackbar.colors.background.main)
    )
    expect(snackbarStyles.color).toEqual('rgb(255, 255, 255)')
    expect(snackbarStyles.width).toEqual('350px')
    expect(snackbarStyles['min-width']).toEqual('350px')
    expect(snackbarStyles['max-width']).toEqual('750px')
    expect(snackbarStyles['padding-top']).toEqual('18px')
    expect(snackbarStyles['padding-left']).toEqual('20px')
    expect(snackbarStyles['padding-right']).toEqual('20px')
    expect(snackbarStyles['padding-bottom']).toEqual('17px')
  })

  it('should apply custom width and small size', () => {
    mountWrapper({
      isOpened: true,
      size: 'small',
      children: <div style={{width: 400}}>Hi</div>
    })

    const snackbarNode = containerNode.querySelector('.snackbar')
    const snackbarStyles = getNodeStyles(snackbarNode)

    expect(snackbarStyles.width).toEqual('440px')
    expect(snackbarStyles['padding-top']).toEqual('10px')
    expect(snackbarStyles['padding-bottom']).toEqual('10px')
  })

  it('should not append close and action buttons', () => {
    mountWrapper({
      isOpened: true
    })

    const snackbarNode = containerNode.querySelector('.snackbar')
    const buttons = snackbarNode.querySelectorAll('button')

    expect(buttons.length).toEqual(0)
  })

  it('should append className', () => {
    mountWrapper({
      isOpened: true,
      className: 'snackbar'
    })

    expect(containerNode.querySelector('.snackbar')).not.toBeUndefined()
  })

  it('should append styles', () => {
    const backgroundColor = 'rgb(255, 0, 0)'

    mountWrapper({
      style: {
        backgroundColor
      },
      isOpened: true
    })

    const snackbarNode = containerNode.querySelector('.snackbar')
    const snackbarStyles = getNodeStyles(snackbarNode)

    expect(snackbarStyles['background-color']).toEqual(backgroundColor)
  })

  it('should append children', () => {
    mountWrapper({
      isOpened: true,
      children: <span>Hi</span>
    })

    const childNode = containerNode.querySelector('.snackbar span')
    const contentNode = childNode.parentNode
    const contentStyles = getNodeStyles(contentNode)

    expect(childNode.textContent).toEqual('Hi')
    expect(contentStyles['text-align']).toEqual('left')
  })

  it('should append close button', () => {
    mountWrapper({
      isOpened: true,
      showClose: true
    })

    const buttonNode = containerNode.querySelector('.snackbar button')
    const buttonStyles = getNodeStyles(buttonNode)

    expect(buttonStyles.width).toEqual('20px')
    expect(buttonStyles.height).toEqual('20px')
    expect(buttonStyles.color).toEqual('rgb(255, 255, 255)')
    expect(buttonStyles['background-color']).toEqual('rgba(0, 0, 0, 0)')
    expect(buttonStyles['margin-left']).toEqual('15px')
    expect(buttonStyles['padding-top']).toEqual('0px')
    expect(buttonStyles['padding-left']).toEqual('0px')
    expect(buttonStyles['padding-right']).toEqual('0px')
    expect(buttonStyles['padding-bottom']).toEqual('0px')
    expect(buttonStyles['font-size']).toEqual('13px')
  })

  it('should append action button', () => {
    mountWrapper({
      isOpened: true,
      actionButton: 'Ok'
    })

    const buttonNode = containerNode.querySelector('.snackbar button')
    const buttonStyles = getNodeStyles(buttonNode)

    expect(buttonNode.textContent).toEqual('Ok')
    expect(buttonStyles.height).toEqual('20px')
    expect(buttonStyles.color).toEqual('rgb(255, 255, 255)')
    expect(buttonStyles['background-color']).toEqual('rgba(0, 0, 0, 0)')
    expect(buttonStyles['margin-left']).toEqual('15px')
    expect(buttonStyles['padding-top']).toEqual('0px')
    expect(buttonStyles['padding-left']).toEqual('10px')
    expect(buttonStyles['padding-right']).toEqual('10px')
    expect(buttonStyles['padding-bottom']).toEqual('0px')
    expect(buttonStyles['font-size']).toEqual('13px')
  })

  it('should call props.onAction() when click on action button', async done => {
    const props = {
      isOpened: true,
      actionButton: 'Ok'
    }

    const whenAction = new Promise(resolve => {
      props.onAction = resolve
    })

    spyOn(props, 'onAction').and.callThrough()
    mountWrapper(props)
    expect(props.onAction).not.toHaveBeenCalled()
    containerNode.querySelector('.snackbar button').click()
    await whenAction
    expect(props.onAction).toHaveBeenCalledTimes(1)
    done()
  })

  it('should call props.onRequestClose() when click on close button', async done => {
    const props = {
      isOpened: true,
      showClose: true
    }

    const whenRequestClose = new Promise(resolve => {
      props.onRequestClose = resolve
    })

    spyOn(props, 'onRequestClose').and.callThrough()
    mountWrapper(props)
    expect(props.onRequestClose).not.toHaveBeenCalled()
    containerNode.querySelector('.snackbar button').click()
    await whenRequestClose
    expect(props.onRequestClose).toHaveBeenCalledTimes(1)
    done()
  })
})
