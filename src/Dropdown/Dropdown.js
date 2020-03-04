import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {FixedOverlay, RelativeOverlay} from '../Overlay'
import VisibilityAnimation from '../VisibilityAnimation'
import FocusManager from '../FocusManager'
import OnClickOutside from '../OnClickOutside'
import {POINTS_Y} from '../constants/overlay'
import {injectSheet} from '../theme'
import {isolateMixin} from '../utils/mixins'

const BG_COLOR = '#fff'
const ARROW_SIZE = 5

@injectSheet(
  theme => ({
    dropdown: {
      extend: isolateMixin,
      fontFamily: theme.fontFamily,
      borderRadius: theme.dropdown.borderRadius,
      boxSizing: 'border-box',
      opacity: 0.01,
      pointerEvents: 'none',
      position: 'relative',
      transitionDuration: `${theme.dropdown.animationDuration}ms`,
      transitionProperty: 'opacity, top',
      background: BG_COLOR,
      outline: 'none',
      boxShadow: theme.dropdown.boxShadow
    },
    'pointY-bottom': {
      top: -10
    },
    'pointY-top': {
      top: 10
    },
    'pointX-left': {},
    'pointX-center': {},
    'pointX-right': {},
    isVisible: {
      opacity: 1,
      pointerEvents: 'auto',
      top: 0
    },
    withArrow: {
      '&:before': {
        position: 'absolute',
        border: `${ARROW_SIZE}px solid transparent`,
        pointerEvents: 'none'
      },
      '&$pointY-top:before': {
        content: '""',
        top: -ARROW_SIZE,
        borderTopWidth: 0,
        borderBottomColor: BG_COLOR
      },
      '&$pointY-bottom:before': {
        content: '""',
        bottom: -ARROW_SIZE,
        borderBottomWidth: 0,
        borderTopColor: BG_COLOR
      },
      '&$pointX-left:before': {
        left: 15
      },
      '&$pointX-center:before': {
        left: `calc(50% - ${ARROW_SIZE}px)`
      },
      '&$pointX-right:before': {
        right: 15
      }
    }
  }),
  {name: 'Dropdown'}
)
class DropdownContainer extends PureComponent {
  static propTypes = {
    isVisible: PropTypes.bool,
    onBecomeVisible: PropTypes.func,
    onBecomeInvisible: PropTypes.func,
    hide: PropTypes.func,
    tabIndex: PropTypes.number,
    anchorWidth: PropTypes.number,
    anchorFullWidth: PropTypes.bool,
    onRequestClose: PropTypes.func,
    closeOnClickOutside: PropTypes.bool,
    pointY: PropTypes.oneOf(POINTS_Y),
    padding: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    showArrow: PropTypes.bool
  }

  static defaultProps = {
    padding: '20px',
    isVisible: false,
    closeOnClickOutside: true
  }

  state = {}

  onClickOutside = () => {
    const {props} = this
    if (props.isVisible)
      if (props.onRequestClose) props.onRequestClose()
      else props.hide()
  }

  renderContent = componentRef => {
    const {
      isVisible,
      children,
      anchorWidth,
      anchorFullWidth,
      className,
      style,
      theme,
      classes,
      padding,
      tabIndex,
      onBecomeVisible,
      onBecomeInvisible,
      pointX,
      pointY,
      showArrow
    } = this.props
    let resultStyle = {}
    if (anchorWidth && anchorFullWidth) resultStyle.width = anchorWidth + 'px'
    if (padding) resultStyle.padding = padding
    resultStyle = {
      ...resultStyle,
      ...style
    }
    return (
      <VisibilityAnimation
        isVisible={isVisible}
        animationDuration={theme.dropdown.animationDuration}
        onVisible={onBecomeVisible}
        onInvisible={onBecomeInvisible}>
        {({isVisible}) => (
          <FocusManager tabIndex={tabIndex}>
            {focusRef => (
              <div
                className={classnames(
                  className,
                  classes.dropdown,
                  showArrow && classes.withArrow,
                  classes['pointY-' + pointY],
                  classes['pointX-' + pointX],
                  isVisible && classes.isVisible
                )}
                style={resultStyle}
                ref={element => {
                  focusRef(element)
                  if (componentRef) componentRef(element)
                }}>
                {children}
              </div>
            )}
          </FocusManager>
        )}
      </VisibilityAnimation>
    )
  }

  render() {
    const {closeOnClickOutside} = this.props

    if (!closeOnClickOutside) return this.renderContent()

    return (
      <OnClickOutside handler={this.onClickOutside}>
        {this.renderContent}
      </OnClickOutside>
    )
  }
}

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
     * Коллбек вызывающийся при клике вне контента.
     * Используется в случае если необходим полный контроль состояния открытия/закрытия из вне.
     */
    onRequestClose: PropTypes.func,
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
    padding: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    /**
     * Порядок фокусировки элемента
     */
    tabIndex: PropTypes.number,
    /**
     * Показать стрелку
     */
    showArrow: PropTypes.bool
  }

  static defaultProps = {
    closeOnClickOutside: true,
    contentPointX: 'left',
    anchorPointX: 'left',
    contentPointY: 'top',
    anchorPointY: 'bottom',
    autoPositionY: true,
    appendToBody: false,
    tabIndex: null
  }

  Overlay = this.props.appendToBody ? FixedOverlay : RelativeOverlay

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
      onRequestClose,
      className,
      style,
      padding,
      overlayClassName,
      overlayStyle,
      appendToBody,
      tabIndex,
      showArrow
    } = this.props
    const dropdownProps = {
      onRequestClose,
      closeOnClickOutside,
      anchorFullWidth,
      className,
      style,
      padding,
      tabIndex,
      showArrow
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
