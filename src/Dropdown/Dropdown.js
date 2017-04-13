import React, { PropTypes, PureComponent } from 'react'
import classnames from 'classnames'
import { FixedOverlay, RelativeOverlay } from '../Overlay'
import OnClickOutside from '../events/OnClickOutside'
import { POINTS_X } from '../constants/overlay'
import { injectSheet } from '../theme'
import { isolateMixin } from '../style/mixins'

@injectSheet((theme) => ({
  dropdown: {
    ...isolateMixin,
    opacity: '0',
    pointerEvents: 'none',
    position: 'relative',
    transition: `all ${theme.dropdown.animationDuration}ms`,
    background: '#fff'
  },
  isVisible: {
    opacity: '1',
    top: 0
  },
  'pointX-bottom:not($isVisible)': {
    top: -10
  },
  'pointX-top:not($isVisible)': {
    top: 10
  }
}))
class DropdownContainer extends PureComponent {

  static propTypes = {
    isVisible: PropTypes.bool.isRequired,
    onBecomeVisible: PropTypes.func,
    onBecomeInvisible: PropTypes.func,
    anchorWidth: PropTypes.number,
    anchorFullWidth: PropTypes.bool,
    closeOnClickOutside: PropTypes.bool,
    pointX: PropTypes.oneOf(POINTS_X),
    padding: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
  };

  static defaultProps = {
    padding: '20px'
  };

  // hiding/showing
  status = null;

  onClickOutside = () => {
    if (this.props.isVisible)
      this.hide()
  }

  get css() {
    return this.props.sheet.classes
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.isVisible !== nextProps.isVisible)
      if (nextProps.isVisible)
        this.show()
      else
        this.hide()
  }

  hide() {
    if (this.status === 'hiding')
      return
    clearTimeout(this.animationTimeout)
    this.setState({ isVisible: false })
    this.animationTimeout = setTimeout(this.props.onBecomeInvisible, this.props.theme.dropdown.animationDuration)
  }

  show() {
    if (this.status === 'showing')
      return
    clearTimeout(this.animationTimeout)
    this.setState({ isVisible: true })
    this.animationTimeout = setTimeout(this.props.onBecomeVisible, this.props.theme.dropdown.animationDuration)
  }

  render() {
    const { children, pointX, anchorWidth, anchorFullWidth, closeOnClickOutside, className, style, padding } = this.props
    const { isVisible } = this.state
    let resultStyle = {}
    if (anchorWidth && anchorFullWidth)
      resultStyle.width = anchorWidth + 'px'
    if (padding)
      resultStyle.padding = padding
    resultStyle = {
      ...resultStyle,
      style
    }
    const content = (
      <div
        className={classnames(className, isVisible && this.css.isVisible, this.css.dropdown, this.css['pointX-' + pointX])}
        style={resultStyle}>
        { children }
      </div>
    )
    if (closeOnClickOutside)
      return content
    return (
      <OnClickOutside handler={this.onClickOutside}>
        { content }
      </OnClickOutside>
    )
  }

}

/**
 * Компонент Dropdown
 */
export default class Dropdown extends PureComponent {

  static propTypes = {
    /**
     * Элемент, к которому привязывается Dropdown
     */
    anchor: PropTypes.node.isRequired,
    /**
     * Контент дропдауна
     */
    children: PropTypes.node.isRequired,
    /**
     * css класс для контейнера Dropdown
     */
    className: PropTypes.string,
    /**
     * Стили для контейнера dropdown
     */
    style: PropTypes.object,
    /**
     * Показывать ли дропдаун
     * Укажите этот параметр, если хотите контроллировать состояние открытия
     */
    isShown: PropTypes.bool,
    /**
     * Колбек открытия попапа
     */
    onOpen: PropTypes.func,
    /**
     * Колбек закрытия попапа
     */
    onClose: PropTypes.func,
    /**
     * Закрывать ли при клике вне контента
     */
    closeOnClickOutside: PropTypes.bool,
    /**
     * Выравнивание контента по оси X относительно anchor
     * `left` - левая часть контента прибивается к левой части anchor
     * `right` - правая часть контента прибивается к правой части anchor
     */
    contentAlignX: PropTypes.oneOf(['left', 'right']),
    /**
     * Выравнивание контента по оси Y относительно anchor
     * `top` - контент показывается выше anchor
     * `bottom` - контент показывается ниже anchor
     */
    contentAlignY: PropTypes.oneOf(['top', 'bottom']),
    /**
     * Автоматическое позиционирование по оси Y (если выходит за пределы экрана)
     */
    autoPositionY: PropTypes.bool,
    /**
     * Тянуть контент на всю ширину anchor
     */
    contentFullWidth: PropTypes.bool,
    /**
     * Вставлять ли dropdown внутри body
     */
    appendToBody: PropTypes.bool,
    /**
     * Паддинги
     * Если паддинг не нужен, нужно передать false
     */
    padding: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
  };

  static defaultProps = {
    closeOnClickOutside: true,
    contentAlignX: 'left',
    contentAlignY: 'bottom',
    autoPositionY: true,
    appendToBody: false
  };

  constructor(props) {
    super(props)
    this.Overlay = props.appendToBody ? FixedOverlay : RelativeOverlay
  }

  render() {
    const {
      isShown,
      anchor,
      children,
      autoPositionY,
      anchorFullWidth,
      closeOnClickOutside,
      contentAlignX,
      contentAlignY,
      onOpen,
      onClose,
      className,
      style,
      padding
    } = this.props
    const dropdownProps = {
      closeOnClickOutside,
      anchorFullWidth,
      className,
      style,
      padding
    }
    const overlayProps = {
      isShown,
      anchor,
      autoPositionY,
      onContentShow: onOpen,
      onContentHide: onClose,
      content: <DropdownContainer { ...dropdownProps }>{ children }</DropdownContainer>
    }
    if (contentAlignX === 'left') {
      overlayProps.anchorPointX = 'left'
      overlayProps.contentPointX = 'left'
    } else {
      overlayProps.anchorPointX = 'right'
      overlayProps.contentPointX = 'right'
    }

    if (contentAlignY === 'bottom') {
      overlayProps.anchorPointY = 'bottom'
      overlayProps.contentPointY = 'top'
    } else {
      overlayProps.anchorPointY = 'top'
      overlayProps.contentPointY = 'bottom'
    }

    return <this.Overlay { ...overlayProps } />
  }

}
