import React, { Component, cloneElement } from 'react'
import Popup from './Popup'
import providePopup from './providePopup'
import Button from '../Button/Button'
import { ApplyTheme } from '../theme'
import { mount } from '../utils/test-utils'

const withTheme = (element) => {
  const Result = props => <ApplyTheme>{cloneElement(element, props)}</ApplyTheme>
  Result.displayName = element.displayName
  return <Result />
}

const WithPopup = providePopup(
  class extends Component {

    static displayName = 'WithPopup'

    render() {
      return (
        <div className="wrapped">Hi</div>
      )
    }

  }
)

describe('providePopup()', () => {
  let containerNode

  const mountWrapper = () => mount(withTheme(<WithPopup />))

  const mountPopup = () => {
    const wrapper = mountWrapper()
    const { openPopup, closePopup } = wrapper.find('WithPopup').props()

    const popup = openPopup((resolve, reject) => (
      <Popup
        className="popup"
        containerRef={(ref) => {
          containerNode = ref
        }}
        okButton={
          <Button
            className="ok"
            onClick={() => {
              resolve('ok')
            }} />
        }
        cancelButton={
          <Button
            className="cancel"
            onClick={() => {
              reject('cancel')
            }} />
        }
      />
    ))

    const whenClose = new Promise((resolve, reject) => {
      popup.closed.then(resolve, reject)
    })

    return {
      popup,
      closePopup,
      whenClose,
      whenOpen: popup.opened
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

  it('should open/close popup with reject when call props.{openPopup,closePopup}', async (done) => {
    expect(containerNode).toBeUndefined()

    const {
      popup, closePopup, whenOpen, whenClose
    } = mountPopup()

    await whenOpen
    expect(document.body.lastElementChild).toEqual(containerNode)
    expect(document.body.lastElementChild.childElementCount).toEqual(1)
    closePopup(popup)

    try {
      await whenClose
    } catch (err) {
      expect(containerNode).toBeUndefined()
      done()
    }
  })

  it('should close popup with reject when call popup.close', async (done) => {
    const { popup, whenOpen, whenClose } = mountPopup()

    await whenOpen
    expect(document.body.lastElementChild).toEqual(containerNode)
    expect(document.body.lastElementChild.childElementCount).toEqual(1)
    popup.close('cancel')

    try {
      await whenClose
    } catch (err) {
      expect(err).toEqual('cancel')
      expect(containerNode).toBeUndefined()
      done()
    }
  })

  it('should close popup with reject when click on close button', async (done) => {
    const { whenOpen, whenClose } = mountPopup()

    await whenOpen
    expect(document.body.lastElementChild).toEqual(containerNode)
    expect(document.body.lastElementChild.childElementCount).toEqual(1)
    containerNode.querySelector('.popup button').click()

    try {
      await whenClose
    } catch (err) {
      expect(containerNode).toBeUndefined()
      done()
    }
  })

  it('should close popup with reject when click on cancelButton', async (done) => {
    const { whenOpen, whenClose } = mountPopup()

    await whenOpen
    expect(document.body.lastElementChild).toEqual(containerNode)
    expect(document.body.lastElementChild.childElementCount).toEqual(1)
    containerNode.querySelector('.popup .cancel').click()

    try {
      await whenClose
    } catch (err) {
      expect(err).toEqual('cancel')
      expect(containerNode).toBeUndefined()
      done()
    }
  })

  it('should close popup with resolve when click on okButton', async (done) => {
    const { whenOpen, whenClose } = mountPopup()

    await whenOpen
    expect(document.body.lastElementChild).toEqual(containerNode)
    expect(document.body.lastElementChild.childElementCount).toEqual(1)
    containerNode.querySelector('.popup .ok').click()
    const result = await whenClose
    expect(result).toEqual('ok')
    expect(containerNode).toBeUndefined()
    done()
  })

})
