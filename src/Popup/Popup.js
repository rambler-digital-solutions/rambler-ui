/**
 * Компонент попапа
 * Скетч: * https://zpl.io/ZTWunL
 */

import React, { Component, PropTypes } from 'react'
import {
  unmountComponentAtNode,
  unstable_renderSubtreeIntoContainer as renderSubtreeIntoContainer // eslint-disable-line camelcase
} from 'react-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import classnames from 'classnames'
import pure from 'recompose/pure'
import IconButton from '../IconButton'
import ClearIcon from '../icons/forms/ClearIcon'
import zIndexStack from '../hoc/z-index-stack'
import { POPUP_ZINDEX } from '../constants/z-indexes'
import { injectSheet } from '../theme'
import { fontStyleMixin, isolateMixin, middleMixin, ifDesktop } from '../style/mixins'

const ESCAPE = 27

@pure
@zIndexStack(POPUP_ZINDEX)
@injectSheet((theme) => ({
  backdrop: {
    ...isolateMixin,
    ...middleMixin,
    ...fontStyleMixin(theme.font),
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: theme.popup.backdropBackground,
    textAlign: 'center',
    overflowY: 'auto',
    overflowX: 'hidden',
    transitionDuration: theme.popup.animationDuration,
    transitionProperty: 'margin-top, opacity'
  },
  popup: {
    position: 'relative',
    display: 'inline-block',
    boxSizing: 'border-box',
    borderRadius: theme.popup.borderRadius,
    boxShadow: theme.popup.boxShadow,
    padding: theme.popup.padding,
    width: 300,
    backgroundColor: theme.popup.background,
    fontSize: theme.popup.font.size,
    textAlign: 'left',
    ...ifDesktop({
      width: 'auto',
      minWidth: 350
    })
  },
  appear: {
    marginTop: -10,
    opacity: 0.01
  },
  appearActive: {
    marginTop: 0,
    opacity: 1
  },
  title: {
    marginBottom: 15,
    paddingRight: 25,
    fontSize: theme.popup.font.titleSize,
    fontWeight: 500,
    lineHeight: 1.25
  },
  close: {
    position: 'absolute !important',
    top: 18,
    right: 23
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 25
  },
  button: {
    width: 114,
    ...ifDesktop({
      width: 129
    }),
    '&:only-child': {
      width: '100%'
    },
    '& > *': {
      width: '100%'
    }
  }
}))
export default class Popup extends Component {

  static propTypes = {
    /**
     * Css-класс
     */
    className: PropTypes.string,
    /**
     * Inline-стили
     */
    style: PropTypes.object,
    /**
     * Css-класс для фонового слоя
     */
    backdropClassName: PropTypes.string,
    /**
     * Inline-стили для фонового слоя
     */
    backdropStyle: PropTypes.object,
    /**
     * Контент для попапа
     */
    children: PropTypes.node,
    /**
     * Заголовок
     */
    title: PropTypes.node,
    /**
     * Контролирует видимость попапа
     */
    isOpened: PropTypes.bool,
    /**
     * Кнопка успешного действия (если она одна, то будет расятнута на все ширину)
     */
    okButton: PropTypes.node,
    /**
     * Кнопка отмены
     */
    cancelButton: PropTypes.node,
    /**
     * Кнопка закрытия попапа
     */
    showClose: PropTypes.bool,
    /**
     * Закрытие попапа кнопкой esc
     */
    closeOnEsc: PropTypes.bool,
    /**
     * Закрытие попапа по клику вне него
     */
    closeOnClickOutside: PropTypes.bool,
    /**
     * Коллбек вызывающийся после открытия попапа
     */
    onOpen: PropTypes.func,
    /**
     * Коллбек вызывающийся при нажатии на крестик (автоматически проставляется, если используется `@providePopup`)
     */
    onRequestClose: PropTypes.func,
    /**
     * Коллбек вызывающийся после закрытия попапа
     */
    onClose: PropTypes.func,
    /**
     * Коллбек вызывающийся при монтировании/размонтировании контейнера
     */
    containerRef: PropTypes.func
  };

  static defaultProps = {
    isOpened: false,
    showClose: true,
    closeOnEsc: true,
    closeOnClickOutside: true,
    onOpen: () => {},
    onRequestClose: () => {},
    onClose: () => {},
    containerRef: () => {}
  };

  get css() {
    const { sheet: { classes: css } } = this.props
    return css
  }

  componentDidMount() {
    this.renderContainer()
  }

  componentDidUpdate() {
    this.renderContainer()
  }

  componentWillUnmount() {
    this.unrenderContainer()
  }

  renderContainer() {
    if (this.props.isOpened) {
      if (!this.node) {
        this.node = document.createElement('div')
        this.node.style.position = 'absolute'
        this.node.style.zIndex = this.props.zIndex
        document.body.appendChild(this.node)
        this.props.containerRef(this.node)
      }

      renderSubtreeIntoContainer(
        this,
        this.renderPopup(),
        this.node
      )

      if (this.props.closeOnEsc)
        document.addEventListener('keydown', this.handleKeyDown)

      if (this.props.closeOnClickOutside)
        document.addEventListener('click', this.handleClickOutside)

      this.node.addEventListener('transitionend', this.handleTransitionEnd)
    } else {
      this.unrenderContainer()
    }
  }

  unrenderContainer() {
    if (this.node) {
      unmountComponentAtNode(this.node)
      document.body.removeChild(this.node)
      this.node = null

      if (this.props.closeOnEsc)
        document.removeEventListener('keydown', this.handleKeyDown)

      if (this.props.closeOnClickOutside)
        document.removeEventListener('click', this.handleClickOutside)

      this.props.onClose()
      this.props.containerRef()
    }
  }

  handleKeyDown = event => {
    if (event.keyCode === ESCAPE) this.props.onRequestClose()
  }

  handleClickOutside = event => {
    if (event.target === this.backdrop) {
      event.stopPropagation()
      this.props.onRequestClose()
    }
  }

  handleTransitionEnd = () => {
    this.node.removeEventListener('transitionend', this.handleTransitionEnd)
    this.props.onOpen()
  }

  renderPopup() {
    const {
      children,
      className,
      style,
      backdropClassName,
      backdropStyle,
      title,
      showClose,
      okButton,
      cancelButton,
      onRequestClose,
      theme
    } = this.props

    const css = this.css
    const okButtonEl = this.renderButton(okButton)
    const cancelButtonEl = this.renderButton(cancelButton)

    return (
      <ReactCSSTransitionGroup
        transitionName={{
          appear: css.appear,
          appearActive: css.appearActive
        }}
        transitionAppear={true}
        transitionAppearTimeout={200}
        transitionEnter={false}
        transitionLeave={false}>
        <div
          ref={el => { this.backdrop = el }}
          style={backdropStyle}
          className={classnames(css.backdrop, backdropClassName)}>
          <div
            style={style}
            className={classnames(css.popup, className)}>
            {showClose &&
              <IconButton
                type="flat"
                buttonType="button"
                size="small"
                className={css.close}
                onClick={onRequestClose}>
                <ClearIcon color={theme.popup.closeColor} />
              </IconButton>
            }
            {title &&
              <header className={css.title}>
                {title}
              </header>
            }
            {children}
            {(okButton || cancelButton) &&
              <footer className={css.buttons}>
                {okButtonEl}
                {cancelButtonEl}
              </footer>
            }
          </div>
        </div>
      </ReactCSSTransitionGroup>
    )
  }

  renderButton(button) {
    if (button) {
      const css = this.css

      return (
        <div className={css.button}>
          {button}
        </div>
      )
    }
  }

  render() {
    return null
  }

}
