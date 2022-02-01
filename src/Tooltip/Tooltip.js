import React, {PureComponent, cloneElement} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {ios} from '../utils/browser'
import {FixedOverlay} from '../Overlay'
import {withStyles} from '../theme'
import TooltipContent from './TooltipContent'

const containerNodeStyle = {'pointer-events': 'none'}

const styles = {
  anchor: {
    display: 'inline-block'
  }
}

class Tooltip extends PureComponent {
  static propTypes = {
    /**
     * Контент тултипа
     */
    content: PropTypes.node,
    /**
     * Элемент вокруг тултипа
     */
    children: PropTypes.node.isRequired,
    /**
     * Css класс обертки тултипа
     */
    className: PropTypes.string,
    /**
     * Стили обертки тултипа
     */
    style: PropTypes.object,
    /**
     * Css класс контента тултипа
     */
    contentClassName: PropTypes.string,
    /**
     * Стили контента тултипа
     */
    contentStyle: PropTypes.object,
    /**
     * Css класс стрелки тултипа
     */
    arrowClassName: PropTypes.string,
    /**
     * Стили стрелки тултипа
     */
    arrowStyle: PropTypes.object,
    /**
     * Сколько мс должен провисеть тултип, прежде чем исчезнуть
     */
    delay: PropTypes.number,
    /**
     * Статус тултипа
     */
    status: PropTypes.oneOf(['default', 'success', 'error', 'warning']),
    /**
     * Флаг показа тултипа.
     * Если вы не указываете его, тултип будет показываться при hover
     */
    isOpened: PropTypes.bool,
    /**
     * Позиция тултипа
     * top - сверху элемента, bottom - снизу элемента
     */
    position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    /**
     * Автоматическое позиционирование, если tooltip не помещается в указанной позиции на экране
     */
    autoPosition: PropTypes.bool,
    /**
     * Закрывать при клике вне тултипа
     */
    closeOnClickOutside: PropTypes.bool,
    /**
     * Скрывать при скролле страницы
     */
    closeOnScroll: PropTypes.bool,
    /**
     * Горизонтальное позиционирование контента тултипа относительно якоря
     * center - контент по центру
     * right - контент слева от якоря
     * left - контент справа от якоря
     *
     * Применяется только если position top или bottom
     */
    positionX: PropTypes.oneOf(['left', 'center', 'right'])
  }

  static defaultProps = {
    position: 'top',
    closeOnClickOutside: false,
    closeOnScroll: true,
    autoPosition: true,
    status: 'default',
    positionX: 'center'
  }

  state = {
    isOpened: this.props.isOpened || false
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.isOpened !== undefined &&
      this.props.isOpened !== prevProps.isOpened
    )
      if (this.props.isOpened) this.show()
      else this.hide()
  }

  onMouseEnter = () => {
    this.show()
  }

  onMouseLeave = () => {
    this.hide()
  }

  clearDelayTimeout() {
    if (this.delayTimeout) {
      clearTimeout(this.delayTimeout)
      this.delayTimeout = null
    }
  }

  show() {
    if (this.state.isOpened) return
    this.clearDelayTimeout()
    this.setState({isOpened: true})
  }

  hide() {
    if (!this.state.isOpened) return
    this.clearDelayTimeout()
    if (!this.props.delay) this.setState({isOpened: false})
    else
      this.delayTimeout = setTimeout(() => {
        this.setState({isOpened: false})
      }, this.props.delay)
  }

  onContentClose = () => {
    if (!this.state.isOpened) return
    this.clearDelayTimeout()
    this.setState({isOpened: false})
  }

  onClickOutside = () => {
    if (!this.props.closeOnClickOutside) return
    this.clearDelayTimeout()
    this.setState({isOpened: false})
  }

  renderAnchor = ref => {
    const {className, style, children, classes} = this.props
    const anchor = (
      <span
        style={style}
        className={classnames(className, classes.anchor)}
        ref={ref}>
        {children}
      </span>
    )
    if (this.props.isOpened !== undefined) return anchor
    return cloneElement(anchor, {
      [ios ? 'onMouseDown' : 'onMouseEnter']: this.onMouseEnter,
      onMouseLeave: this.onMouseLeave
    })
  }

  render() {
    if (!this.props.content) return this.renderAnchor()

    const {
      contentClassName,
      contentStyle,
      arrowClassName,
      arrowStyle,
      content,
      position,
      closeOnScroll,
      status,
      positionX
    } = this.props

    return (
      <FixedOverlay
        isOpened={this.state.isOpened}
        anchor={this.renderAnchor}
        content={
          <TooltipContent
            onClickOutside={this.onClickOutside}
            style={contentStyle}
            bodyClassName={contentClassName}
            arrowClassName={arrowClassName}
            arrowStyle={arrowStyle}
            status={status}>
            {content}
          </TooltipContent>
        }
        autoPositionY={this.props.autoPosition}
        autoPositionX={this.props.autoPosition}
        anchorPointY={
          position === 'top'
            ? 'top'
            : position === 'bottom'
              ? 'bottom'
              : 'center'
        }
        contentPointY={
          position === 'top'
            ? 'bottom'
            : position === 'bottom'
              ? 'top'
              : 'center'
        }
        anchorPointX={
          position === 'left'
            ? 'left'
            : position === 'right'
              ? 'right'
              : positionX
        }
        contentPointX={
          position === 'left'
            ? 'right'
            : position === 'right'
              ? 'left'
              : positionX
        }
        cachePositionOptions={false}
        closeOnScroll={this.props.isOpened === undefined && closeOnScroll}
        onContentClose={this.onContentClose}
        containerNodeStyle={containerNodeStyle}
      />
    )
  }
}

export default withStyles(styles, {name: 'Tooltip'})(Tooltip)
