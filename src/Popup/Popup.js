/**
 * Компонент попапа
 * Скетч: * https://zpl.io/ZTWunL
 */

import React, { Component, PropTypes, cloneElement } from 'react'
import ReactDOM from 'react-dom'
import classnames from 'classnames'
import pure from 'recompose/pure'
import { injectSheet } from '../theme'
import { fontStyleMixin, isolateMixin } from '../style/mixins'

@pure
@injectSheet((theme) => ({
  popup: {
    ...isolateMixin,
    ...fontStyleMixin(theme.font),
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxSizing: 'border-box',
    borderRadius: 2,
    boxShadow: '1px 2px 7px 0 rgba(124, 130, 134, 0.2)',
    padding: '20px 30px 30px',
    width: 350,
    backgroundColor: 'white',
    fontSize: '13px'
  },
  title: {
    marginBottom: 15,
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: 1.25
  },
  close: {
    position: 'absolute',
    top: 20,
    right: 25,
    border: 0,
    margin: 0,
    padding: 0,
    width: 20,
    height: 20,
    background: 'transparent',
    color: '#ccc',
    cursor: 'pointer',
    '&::after': {
      content: '"\\D7"',
      fontSize: '24px',
      lineHeight: '20px'
    }
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 25
  },
  button: {
    '& + $button': {
      marginLeft: '12%'
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
    isOpen: PropTypes.bool,
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
    closeOnOverlayClick: PropTypes.bool,
    /**
     * Рендер произойдет в отдельный контейнер
     */
    portal: PropTypes.bool,
    /**
     * Коллбек вызывающийся после открытия попапа
     */
    onOpened: PropTypes.func,
    /**
     * Коллбек вызывающийся при нажатии на крестик (автоматически проставляется, если используется `@providePopup`)
     */
    onClose: PropTypes.func,
    /**
     * Коллбек вызывающийся после закрытия попапа
     */
    onClosed: PropTypes.func
  };

  static defaultProps = {
    isOpen: false,
    portal: true,
    showClose: true,
    closeOnEsc: true,
    closeOnOverlayClick: true
  };

  get css() {
    const { sheet: { classes: css } } = this.props
    return css
  }

  componentDidMount() {
    if (this.props.portal)
      this.renderContainer()
    else
      this.invokeCallback()
  }

  componentDidUpdate(prevProps) {
    const { portal, isOpen } = this.props

    if (portal)
      this.renderContainer()
    else if (isOpen !== prevProps.isOpen)
      this.invokeCallback()
  }

  componentWillUnmount() {
    if (this.props.portal)
      this.unrenderContainer()
    else
      this.invokeCallback()
  }

  invokeCallback() {
    const { isOpen, onOpened, onClosed } = this.props
    const callback = isOpen ? onOpened : onClosed

    if (callback) callback()
  }

  renderContainer() {
    if (this.props.isOpen) {
      if (!this.node) {
        this.node = document.createElement('div')
        document.body.appendChild(this.node)
      }

      const popupElement = this.renderPopup()

      this.popup = ReactDOM.unstable_renderSubtreeIntoContainer(
        this,
        popupElement,
        this.node
      )

      this.invokeCallback()
    } else {
      this.unrenderContainer()
    }
  }

  unrenderContainer() {
    if (this.node) {
      ReactDOM.unmountComponentAtNode(this.node)
      document.body.removeChild(this.node)
      this.node = null
      this.invokeCallback()
    }
  }

  renderPopup() {
    const {
      children,
      className,
      title,
      showClose,
      okButton,
      cancelButton,
      onClose
    } = this.props

    const css = this.css
    const withButtons = !!okButton || !!cancelButton

    const resultClassName = classnames(
      css.popup,
      className
    )

    const okButtonEl = this.renderButton(okButton)
    const cancelButtonEl = this.renderButton(cancelButton)

    return (
      <div className={resultClassName}>
        {showClose &&
          <button type="button" className={css.close} onClick={onClose} />
        }
        {title &&
          <header className={css.title}>
            {title}
          </header>
        }
        {children}
        {withButtons &&
          <footer className={css.buttons}>
            {okButtonEl}
            {cancelButtonEl}
          </footer>
        }
      </div>
    )
  }

  renderButton(button) {
    if (button) {
      const { className, ...other } = button.props
      const css = this.css
      const resultClassName = classnames(className, css.button)

      return cloneElement(button, {
        ...other,
        block: true,
        size: 'small',
        className: resultClassName
      })
    }
  }

  render() {
    return this.props.portal ? null : this.renderPopup()
  }

}
