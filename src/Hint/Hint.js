import React, {PureComponent, cloneElement} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import QuestionIcon from '../icons/forms/QuestionIcon'
import {FixedOverlay} from '../Overlay'
import {injectSheet} from '../theme'
import {ios, android} from '../utils/browser'
import HintContent from './HintContent'

const isMobileBehavior = ios || android

const styles = {
  icon: {
    display: 'inline-block'
  }
}

class Hint extends PureComponent {
  static propTypes = {
    /**
     * Класс якоря
     */
    className: PropTypes.string,
    /**
     * Стили якоря (Иконки)
     */
    style: PropTypes.object,
    /**
     * Иконка, по-умолчанию `<QuestionIcon />`
     */
    icon: PropTypes.node.isRequired,
    /**
     * Класс контента подсказки
     */
    contentClassName: PropTypes.string,
    /**
     * Стили контента посказки
     */
    contentStyle: PropTypes.object,
    /**
     * Контент для подсказки
     */
    children: PropTypes.node.isRequired,
    /**
     * Флаг показа подсказки. Если ничего не указано, подсказка будет показываться при hover
     */
    isOpened: PropTypes.bool,
    /**
     * Позиция тултипа по оси X: left - слева от якоря, right - справа
     */
    positionX: PropTypes.oneOf(['left', 'right']),
    /**
     * Автоматическое позиционирование по оси Y (если выходит за пределы экрана)
     */
    autoPositionY: PropTypes.bool,
    /**
     * Скрывать при скролле страницы
     */
    closeOnScroll: PropTypes.bool
  }

  static defaultProps = {
    positionX: 'right',
    autoPositionY: true,
    closeOnScroll: true,
    icon: <QuestionIcon size={15} />
  }

  state = {
    isOpened: this.props.isOpened || false
  }

  containerStyle = isMobileBehavior ? {left: 0, right: 0} : null

  componentDidUpdate(prevProps) {
    if (
      this.props.isOpened !== undefined &&
      this.props.isOpened !== prevProps.isOpened
    )
      if (this.props.isOpened) this.show()
      else this.hide()
  }

  show = () => {
    if (this.state.isOpened) clearTimeout(this.hideTimeout)
    else
      this.setState({
        isOpened: true
      })
  }

  hide = () => {
    if (!this.state.isOpened) return
    clearTimeout(this.hideTimeout)
    this.hideTimeout = setTimeout(() => {
      this.setState({
        isOpened: false
      })
    }, 60)
  }

  render() {
    const {
      className,
      style,
      contentClassName,
      contentStyle,
      icon,
      children,
      positionX,
      theme,
      classes,
      autoPositionY,
      closeOnScroll
    } = this.props

    const {isOpened} = this.state
    const pointX = positionX === 'left' ? 'right' : 'left'
    const color =
      icon.props.color ||
      (isOpened
        ? theme.hint.icon.colors.active
        : theme.hint.icon.colors.default)

    const anchor = cloneElement(icon, {
      color,
      style,
      className: classnames(classes.icon, className),
      onMouseEnter: this.show,
      onTouchStart: this.show,
      onMouseLeave: this.hide
    })

    return (
      <FixedOverlay
        isOpened={isOpened}
        anchor={anchor}
        content={
          <HintContent
            className={contentClassName}
            style={contentStyle}
            icon={icon}
            onMouseEnter={this.show}
            onMouseLeave={this.hide}>
            {children}
          </HintContent>
        }
        autoPositionX={!isMobileBehavior}
        autoPositionY={autoPositionY}
        anchorPointX={isMobileBehavior ? 'center' : pointX}
        contentPointX={isMobileBehavior ? 'center' : pointX}
        anchorPointY={isMobileBehavior ? 'bottom' : 'top'}
        contentPointY="top"
        cachePositionOptions={false}
        closeOnScroll={closeOnScroll}
        onContentClose={this.hide}
        containerNodeStyle={this.containerStyle}
      />
    )
  }
}

export default injectSheet(styles, {name: 'Hint'})(Hint)
