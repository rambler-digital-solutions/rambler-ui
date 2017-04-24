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
  let callbacks
  let containerNode

  const mountWrapper = props => mount(
    withTheme(
      <Popup
        className="test-popup"
        title="Hi"
        containerRef={callbacks.containerRef}
        okButton={
          <Button>Ok</Button>
        }
        cancelButton={
          <Button>Cancel</Button>
        }
        isOpen={false}
        {...props}
      >
        Hello world
      </Popup>
    )
  )

  beforeEach(() => {
    callbacks = {}

    callbacks.containerRef = ref => {
      containerNode = ref
    }

    spyOn(callbacks, 'containerRef').and.callThrough()
  })

  it('Container node should be undefined if Popup is not open', () => {
    mountWrapper()

    expect(containerNode).toBeUndefined()
  })

  it('Should append Popup to document.body', () => {
    mountWrapper({
      isOpen: true
    })

    expect(document.body.lastElementChild).toEqual(containerNode)
    expect(document.body.lastElementChild.childElementCount).toEqual(1)
  })

  it('Should open/close Popup when change props.isOpen', () => {
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

  it('Styles for Popup', () => {
    mountWrapper({
      isOpen: true
    })

    const popupNode = containerNode.querySelector('.test-popup')
    const popupNodeStyles = getNodeStyles(popupNode)

    expect(popupNodeStyles.position).toEqual('absolute')
    expect(popupNodeStyles.top).toEqual('50%')
    expect(popupNodeStyles.left).toEqual('50%')
    expect(popupNodeStyles['font-family']).toEqual('Roboto, sans-serif')
    expect(popupNodeStyles['font-size']).toEqual('13px')
    expect(popupNodeStyles['background-color']).toEqual('rgb(255, 255, 255)')
    expect(popupNodeStyles.width).toEqual('350px')
    expect(popupNodeStyles['padding-top']).toEqual('20px')
    expect(popupNodeStyles['padding-left']).toEqual('30px')
    expect(popupNodeStyles['padding-right']).toEqual('30px')
    expect(popupNodeStyles['padding-bottom']).toEqual('30px')
  })

})
