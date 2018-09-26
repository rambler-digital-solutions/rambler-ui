import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {FixedOverlay, RelativeOverlay} from '../Overlay'
import VisibilityAnimation from '../VisibilityAnimation'
import OnClickOutside from '../OnClickOutside'
import {POINTS_Y} from '../constants/overlay'
import {injectSheet} from '../theme'
import {isolateMixin} from '../utils/mixins'

@injectSheet(
  theme => ({
    dropdown: {
      extend: isolateMixin,
      fontFamily: theme.fontFamily,
      borderRadius: theme.dropdown.borderRadius,
      boxSizing: 'border-box',
      opacity: '0.01',
      pointerEvents: 'none',
      position: 'relative',
      transitionDuration: `${theme.dropdown.animationDuration}ms`,
      transitionProperty: 'opacity, top',
      background: '#fff',
      boxShadow: theme.dropdown.boxShadow
    },
    isVisible: {
      '&$dropdown': {
        opacity: '1',
        pointerEvents: 'auto',
        top: '0px'
      }
    },
    'pointY-bottom': {
      '&:not($isVisible)': {top: -10}
    },
    'pointY-top': {
      '&:not($isVisible)': {top: 10}
    }
  }),
  {name: 'Dropdown'}
)
class DropdownContainer extends PureComponent {
  static propTypes = {
    isVisible: PropTypes.bool.isRequired,
    onBecomeVisible: PropTypes.func,
    onBecomeInvisible: PropTypes.func,
    hide: PropTypes.func,
    anchorWidth: PropTypes.number,
    anchorFullWidth: PropTypes.bool,
    closeOnClickOutside: PropTypes.bool,
    pointY: PropTypes.oneOf(POINTS_Y),
    padding: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
  }

  static defaultProps = {
    padding: '20px',
    closeOnClickOutside: true
  }

  state = {}

  componentWillReceiveProps(nextProps) {
    if (
      this.props.isVisible !== nextProps.isVisible &&
      nextProps.isVisible &&
      !this.state.pointY
    )
      this.setState({
        pointY: nextProps.pointY
      })
  }

  onClickOutside = () => {
    if (this.props.isVisible) this.props.hide()
  }

  render() {
    const {
      isVisible,
      children,
      anchorWidth,
      anchorFullWidth,
      closeOnClickOutside,
      className,
      style,
      theme,
      classes,
      padding,
      onBecomeVisible,
      onBecomeInvisible
    } = this.props
    const {pointY} = this.state
    let resultStyle = {}
    if (anchorWidth && anchorFullWidth) resultStyle.width = anchorWidth + 'px'
    if (padding) resultStyle.padding = padding
    resultStyle = {
      ...resultStyle,
      ...style
    }
    const content = (
      <VisibilityAnimation
        isVisible={isVisible}
        activeClassName={classes.isVisible}
        animationDuration={theme.dropdown.animationDuration}
        onVisible={onBecomeVisible}
        onInvisible={onBecomeInvisible}>
        <div
          className={classnames(
            className,
            classes.dropdown,
            classes['pointY-' + pointY]
          )}
          style={resultStyle}>
          {children}
        </div>
      </VisibilityAnimation>
    )
    if (!closeOnClickOutside) return content
    return (
      <OnClickOutside handler={this.onClickOutside}>{content}</OnClickOutside>
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
     * CSS класс для контейнера Dropdown
     */
    className: PropTypes.string,
    /**
     * Стили для контейнера Dropdown
     */
    style: PropTypes.object,
    /**
     * CSS класс контейнера оверлея
     */
    overlayClassName: PropTypes.string,
    /**
     * Стили для контейнера оверлея
     */
    overlayStyle: PropTypes.object,
    /**
     * Показывать ли дропдаун
     * Укажите этот параметр, если хотите контроллировать состояние открытия
     */
    isOpened: PropTypes.bool,
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
     * Точка прикрепления контента по оси X
     */
    contentPointX: PropTypes.oneOf(['left', 'right', 'center']),
    /**
     * Точка прикрепления anchor по оси X
     */
    anchorPointX: PropTypes.oneOf(['left', 'right', 'center']),
    /**
     * Точка прикрепления контента по оси Y
     */
    contentPointY: PropTypes.oneOf(['top', 'bottom', 'center']),
    /**
     * Точка прикрепления anchor по оси Y
     */
    anchorPointY: PropTypes.oneOf(['top', 'bottom', 'center']),
    /**
     * Автоматическое позиционирование по оси Y (если выходит за пределы экрана)
     */
    autoPositionY: PropTypes.bool,
    /**
     * Тянуть контент на всю ширину anchor
     */
    anchorFullWidth: PropTypes.bool,
    /**
     * Вставлять ли dropdown внутри body
     */
    appendToBody: PropTypes.bool,
    /**
     * Паддинги
     * Если паддинг не нужен, нужно передать false
     */
    padding: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
  }

  static defaultProps = {
    closeOnClickOutside: true,
    contentPointX: 'left',
    anchorPointX: 'left',
    contentPointY: 'top',
    anchorPointY: 'bottom',
    autoPositionY: true,
    appendToBody: false
  }

  constructor(props) {
    super(props)
    this.Overlay = props.appendToBody ? FixedOverlay : RelativeOverlay
  }

  render() {
    const {
      isOpened,
      anchor,
      children,
      autoPositionY,
      anchorFullWidth,
      closeOnClickOutside,
      contentPointX,
      anchorPointX,
      contentPointY,
      anchorPointY,
      onOpen,
      onClose,
      className,
      style,
      padding,
      overlayClassName,
      overlayStyle,
      appendToBody
    } = this.props
    const dropdownProps = {
      closeOnClickOutside,
      anchorFullWidth,
      className,
      style,
      padding
    }
    const overlayProps = {
      anchor,
      contentPointX,
      anchorPointX,
      autoPositionY,
      contentPointY,
      anchorPointY,
      isOpened,
      onContentOpen: onOpen,
      onContentClose: onClose,
      content: (
        <DropdownContainer {...dropdownProps}>{children}</DropdownContainer>
      )
    }
    if (appendToBody) {
      overlayProps.containerNodeClassName = overlayClassName
      overlayProps.containerNodeStyle = overlayStyle
    } else {
      overlayProps.className = overlayClassName
      overlayProps.style = overlayStyle
    }
    return <this.Overlay {...overlayProps} />
  }
}
