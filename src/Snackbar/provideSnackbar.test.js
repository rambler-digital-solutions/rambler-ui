import React, { Component } from 'react'
import Snackbar from '../Snackbar'
import provideSnackbar from '../provideSnackbar'
import { withTheme, mount } from '../../utils/test-utils'

@provideSnackbar
class WithSnackbar extends Component {

  static displayName = 'WithSnackbar'

  render() {
    return (
      <div className="wrapped">Hi</div>
    )
  }

}

describe('provideSnackbar()', () => {
  let containerNode

  const mountWrapper = () => mount(withTheme(<WithSnackbar />))

  const mountSnackbar = (props) => {
    const wrapper = mountWrapper()
    const { openSnackbar, closeSnackbar } = wrapper.find('WithSnackbar').props()
    let onOpen
    let onClose

    const whenOpen = new Promise((resolve) => {
      onOpen = resolve
    })

    const whenClose = new Promise((resolve) => {
      onClose = resolve
    })

    const snackbar = openSnackbar(<Snackbar
      className="snackbar"
      containerRef={(ref) => {
        containerNode = ref

        if (ref)
          onOpen()
        else
          onClose()
      }}
      {...props}>
        Hi
    </Snackbar>)

    return {
      snackbar,
      closeSnackbar,
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

  it('should open/close snackbar when call props.{openSnackbar,closeSnackbar}', async (done) => {
    expect(containerNode).toBeUndefined()

    const {
      snackbar, closeSnackbar, whenOpen, whenClose
    } = mountSnackbar()

    await whenOpen
    expect(document.body.lastElementChild).toEqual(containerNode)
    expect(document.body.lastElementChild.childElementCount).toEqual(1)
    closeSnackbar(snackbar)
    await whenClose
    expect(containerNode).toBeUndefined()
    done()
  })

  it('should close snackbar when call snackbar.close', async (done) => {
    const { snackbar, whenOpen, whenClose } = mountSnackbar()

    await whenOpen
    expect(document.body.lastElementChild).toEqual(containerNode)
    expect(document.body.lastElementChild.childElementCount).toEqual(1)
    snackbar.close()
    await whenClose
    expect(containerNode).toBeUndefined()
    done()
  })

  it('should close snackbar when click on close button', async (done) => {
    const { whenOpen, whenClose } = mountSnackbar({
      showClose: true
    })

    await whenOpen
    expect(document.body.lastElementChild).toEqual(containerNode)
    expect(document.body.lastElementChild.childElementCount).toEqual(1)
    containerNode.querySelector('.snackbar button').click()
    await whenClose
    expect(containerNode).toBeUndefined()
    done()
  })

  it('should close snackbar when click on action button', async (done) => {
    const { snackbar, whenOpen, whenClose } = mountSnackbar({
      actionButton: 'Ok',
      onAction: () => {
        snackbar.close()
      }
    })

    await whenOpen
    expect(document.body.lastElementChild).toEqual(containerNode)
    expect(document.body.lastElementChild.childElementCount).toEqual(1)
    containerNode.querySelector('.snackbar button').click()
    await whenClose
    expect(containerNode).toBeUndefined()
    done()
  })

})
