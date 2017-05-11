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

  const mountWrapper = () => mount(
    withTheme(
      <WithSnackbar />
    )
  )

  const mountSnackbar = (props) => {
    const wrapper = mountWrapper()
    const { openSnackbar, closeSnackbar } = wrapper.find('WithSnackbar').props()

    const snackbar = openSnackbar(
      <Snackbar
        className="snackbar"
        containerRef={ref => {
          containerNode = ref
        }}
        {...props}>
        Hi
      </Snackbar>
    )

    const whenClose = new Promise((resolve, reject) => {
      snackbar.closed.then(resolve, reject)
    })

    return {
      snackbar,
      closeSnackbar,
      whenClose,
      whenOpen: snackbar.opened
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

  it('should open snackbar when call props.openSnackbar', async done => {
    expect(containerNode).toBeUndefined()

    const { whenOpen } = mountSnackbar()

    await whenOpen
    expect(document.body.lastElementChild).toEqual(containerNode)
    expect(document.body.lastElementChild.childElementCount).toEqual(1)
    done()
  })

  it('should close snackbar with reject when call props.closeSnackbar', async done => {
    const { snackbar, closeSnackbar, whenOpen, whenClose } = mountSnackbar()

    await whenOpen
    expect(document.body.lastElementChild).toEqual(containerNode)
    expect(document.body.lastElementChild.childElementCount).toEqual(1)
    closeSnackbar(snackbar)

    try {
      await whenClose
    } catch (err) {
      expect(containerNode).toBeUndefined()
      done()
    }
  })

  it('should close snackbar with reject when call snackbar.close', async done => {
    const { snackbar, whenOpen, whenClose } = mountSnackbar()

    await whenOpen
    expect(document.body.lastElementChild).toEqual(containerNode)
    expect(document.body.lastElementChild.childElementCount).toEqual(1)
    snackbar.close()

    try {
      await whenClose
    } catch (err) {
      expect(containerNode).toBeUndefined()
      done()
    }
  })

  it('should close snackbar with reject when click on close button', async done => {
    const { whenOpen, whenClose } = mountSnackbar({
      showClose: true
    })

    await whenOpen
    expect(document.body.lastElementChild).toEqual(containerNode)
    expect(document.body.lastElementChild.childElementCount).toEqual(1)
    containerNode.querySelector('.snackbar button').click()

    try {
      await whenClose
    } catch (err) {
      expect(containerNode).toBeUndefined()
      done()
    }
  })

  it('should close snackbar with resolve when click on action button', async done => {
    const { whenOpen, whenClose } = mountSnackbar({
      actionButton: 'Ok'
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
