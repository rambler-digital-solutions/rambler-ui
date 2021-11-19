import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {withStyles} from '../theme'
import {isolateMixin, ifMobile} from '../utils/mixins'

const styles = theme => ({
  success: {
    '& $message': {
      color: theme.colors.success
    }
  },
  warning: {
    '& $message': {
      color: theme.colors.warn
    }
  },
  error: {
    '& $message': {
      color: theme.colors.danger
    }
  },
  message: {
    extend: isolateMixin,
    fontFamily: theme.fontFamily,
    marginTop: theme.inputStatus.marginTop,
    marginLeft: theme.inputStatus.marginLeft,
    fontWeight: theme.inputStatus.fontWeight,
    fontSize: theme.inputStatus.sizes.fontSize,
    lineHeight: theme.inputStatus.sizes.lineHeight + 'px',
    textAlign: 'left',
    ...ifMobile({
      marginTop: theme.inputStatus.mobile.marginTop,
      marginLeft: theme.inputStatus.mobile.marginLeft,
      fontSize: theme.inputStatus.sizes.mobile.fontSize,
      lineHeight: theme.inputStatus.sizes.mobile.lineHeight + 'px'
    })
  }
})

class FieldStatus extends PureComponent {
  static propTypes = {
    /**
     * Отображает текст статуса компонента input.
     * Тип предупреждения.
     */
    type: PropTypes.oneOf(['error', 'warning', 'success']),
    /**
     * Сообщение, которое будет отображаться как статус
     */
    message: PropTypes.node,
    /**
     * Элемент Input относительно которого будет отражаться FieldStatus
     */
    children: PropTypes.node.isRequired,
    /**
     * Дополнительный класс для контейнера
     */
    containerClassName: PropTypes.string,
    /**
     * Дополнительный класс для элемента сообщения
     */
    className: PropTypes.string,
    /**
     * Коллбек, принимающий ссылку на узел DOM
     */
    containerRef: PropTypes.func
  }

  render() {
    const {
      type,
      theme, // eslint-disable-line no-unused-vars
      classes,
      message,
      children,
      containerClassName,
      className,
      containerRef,
      ...otherProps
    } = this.props

    const rootClassName = classnames(
      message && classes[type],
      containerClassName
    )
    const messageClassName = classnames(classes.message, className)

    return (
      <div className={rootClassName} {...otherProps} ref={containerRef}>
        {children}
        {message && <div className={messageClassName}>{message}</div>}
      </div>
    )
  }
}

export default withStyles(styles, {name: 'FieldStatus'})(FieldStatus)
