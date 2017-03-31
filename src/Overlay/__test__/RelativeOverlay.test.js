import RelativeOverlay from '../RelativeOverlay'
import React, { Component, PropTypes } from 'react'
import { withTheme, mount, getNodeStyles, getWrapperNode } from '../../utils/test-utils'


class Content extends Component {
  static propTypes = {
    isVisible: PropTypes.bool,
    pointX: PropTypes.oneOf(['left', 'right', 'center']),
    pointY: PropTypes.oneOf(['top', 'bottom', 'center']),
    onBecomeVisible: PropTypes.func,
    onBecomeInvisible: PropTypes.func,
    anchorWidth: PropTypes.number,
    anchorHeight: PropTypes.number
  }

  componentDidUpdate(prevProps) {
    if (this.props.isVisible !== prevProps.isVisible)
      if (this.props.isVisible)
        this.props.onBecomeVisible()
      else
        this.props.onBecomeInvisible()

  }

  render() {
    return (
      <div
        className="content-body"
        style={{padding: '20px', opacity: this.props.isVisible ? 1 : 0, background: 'rgba(0,0,0,.4)'}}>
        Content
      </div>
    )
  }
}

function Anchor() {
  return <div className="anchor" style={{border: '1px solid black', padding: '10px'}}>anchor</div>
}

describe('<RelativeOverlay />', () => {

  // const anchor = <Anchor />
  // const content = <Content />
  // const overlayProps = {
  //   anchor,
  //   content,
  //   className,
  //   contentClassName: 'content',
  //   isShown,
  //   anchorPointX,
  //   anchorPointY,
  //   contentPointX,
  //   contentPointY,
  //   autoPositionX,
  //   autoPositionY,
  //   onContentHide,
  //   onContentShow
  // }

  // beforeEach(() => {

  // })

  it('props.isShown is true', (done) => {
    const callbacks = {}
    const whenContentShow = new Promise((resolve) => {
      callbacks.onContentShow = resolve
    })
    const whenContentHide = new Promise((resolve) => {
      callbacks.onContentHide = resolve
    })
    spyOn(callbacks, 'onContentShow').and.callThrough()
    spyOn(callbacks, 'onContentHide').and.callThrough()
    const wrapper = mount(
      withTheme(
        <RelativeOverlay
          isShown={false}
          anchor={<Anchor />}
          content={<Content />}
          anchorPointX="right"
          anchorPointY="center"
          contentPointX="left"
          contentPointY="center"
          onContentShow={callbacks.onContentShow}
          onContentHide={callbacks.onContentHide}
        />
      )
    )

    wrapper.setProps({
      isShown: true
    }, () => {
      expect(callbacks.onContentShow).not.toHaveBeenCalled()
      expect(callbacks.onContentHide).not.toHaveBeenCalled()
      whenContentShow.then(() => {
        const rootNode = getWrapperNode(wrapper)
        const contentNode = rootNode.querySelector('.anchor + div')
        const rootStyles = getNodeStyles(rootNode)
        const contentBodyStyles = getNodeStyles(contentNode.querySelector('.content-body'))
        const contentStyles = getNodeStyles(contentNode)
        expect(callbacks.onContentShow).toHaveBeenCalledTimes(1)
        expect(callbacks.onContentHide).not.toHaveBeenCalled()
        expect(contentBodyStyles.opacity).toBe('1')
        expect(rootStyles.display).toBe('inline-block')
        expect(rootStyles.position).toBe('relative')
        expect(contentStyles.position).toBe('absolute')
        expect(contentNode.style.left).toBe('100%')
        expect(contentNode.style.top).toBe('50%')
        expect(contentNode.style.transform).toBe('translate(0%, -50%)')
        wrapper.setProps({
          isShown: false
        }, () => {
          whenContentHide.then(() => {
            expect(callbacks.onContentHide).toHaveBeenCalledTimes(1)
            expect(rootNode.querySelector('.anchor + div')).toBe(null)
            done()
          })
        })
      })
    })
  })

  // xit('props.isShown is false', () => {

  // })

  // xit('show', () => {

  // })

  // xit('hide', () => {

  // })


  // Проверить, что правильно скрывается/открывается
  // 1. Метод show
  // 2. Метод hide
  // 3. Выставление props.isShown = true
  // 4. Выставление props.isShown = false
  // 5. Вызывается метод props.onContentShow
  // 6. Вызывается метод props.onContentHide
  //
  // Проверить правильное позиционирование
  // всевозможные варианты anchorPointX/anchorPointY/contentPointX/contentPointY
  //
  // Проверить смену позиционирования
  // autoPositionX
  // autoPositionY

})
