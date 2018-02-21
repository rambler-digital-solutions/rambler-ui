/**
 * Компонент Step
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TickIcon from '../icons/forms/TickIcon'
import { isolateMixin, ifDesktopSize, middleMixin } from '../style/mixins'
import { injectSheet } from '../theme'

const defaultIcon = <TickIcon size={10} color="currentColor" />

@injectSheet(theme => ({
  step: {
    extend: isolateMixin,
    fontFamily: theme.stepper.fontFamily,
    fontSize: theme.stepper.fontSize,
    display: 'flex',
    alignItems: 'center',
    padding: '10px 0',
    backgroundColor: theme.stepper.colors.default.backgroundColor,
    color: theme.stepper.colors.default.color,
    textAlign: 'center',
    marginTop: '40px',
    ...ifDesktopSize({
      padding: '0 10px',
      marginTop: 0
    })
  },
  text: {
    cursor: 'pointer'
  },
  badge: {
    extend: middleMixin,
    display: 'inline-block',
    borderRadius: '50%',
    width: '18px',
    height: '18px',
    marginRight: '10px',
    userSelect: 'none',
    fontSize: theme.stepper.badge.fontSize,
    backgroundColor: theme.stepper.colors.default.badge.backgroundColor,
    color: theme.stepper.colors.default.badge.color
  },
  active: {
    color: theme.stepper.colors.active.color,
    '& $badge': {
      backgroundColor: theme.stepper.colors.active.badge.backgroundColor,
      color: theme.stepper.colors.active.badge.color
    },
    '& $text': {
      cursor: 'default'
    }
  },
  disabled: {
    color: theme.stepper.colors.disabled.color,
    '& $badge': {
      backgroundColor: theme.stepper.colors.disabled.badge.backgroundColor,
      color: theme.stepper.colors.disabled.badge.color
    },
    '& $text': {
      cursor: 'default'
    }
  }
}), {name: 'Step'})
class Step extends Component {
  static propTypes = {
    /**
     * Значение индекса шага, автоматически проставляется <Stepper />
     */
    value: PropTypes.number.isRequired,
    /**
     * Dom узел. Возвращается иконка, если выбран текущий шаг или номер шага (index + 1)
     */
    icon: PropTypes.node,
    /**
     * Недоступный шаг, автоматически проставляется <Stepper /> (index > currentValue).
     * currentValue - выбранное значение, которое передали в Stepper
     */
    disabled: PropTypes.bool,
    /**
     * Завершенный шаг, автоматически проставляется <Stepper /> (index < currentValue).
     * currentValue - выбранное значение, которое передали в Stepper
     */
    completed: PropTypes.bool,
    /**
     * Активный шаг, автоматически проставляется <Stepper /> (index === currentValue).
     * currentValue - выбранное значение, которое передали в Stepper
     */
    active: PropTypes.bool,
    /**
     * Колбэк на клик по элементу.
     * Если нет, то проставляется автоматически
     */
    onClick: PropTypes.func,
    /**
     * Css класс компонента
     */
    className: PropTypes.string,
    /**
     * Css класс кружочка
     */
    badgeClassName: PropTypes.string,
    /**
     * Css класс текста
     */
    textClassName: PropTypes.string,
    /**
     *  Объект css стилей компонента
     */
    style: PropTypes.object
  }

  static defaultProps = {
    style: {}
  }

  onClick = e => {
    const {disabled, active, value} = this.props
    if (disabled || active)
      return
    this.props.onClick(e, value)
  }

  render() {
    const {
      value,
      className,
      badgeClassName,
      textClassName,
      style,
      classes: css,
      disabled,
      completed,
      active,
      icon
    } = this.props
    const resultClassName = classnames(
      className,
      css.step,
      {
        [css.active]: active,
        [css.disabled]: disabled
      }
    )
    return (
      <div className={resultClassName} style={style} onClick={this.onClick}>
        <span className={classnames(css.badge, badgeClassName)}>{icon ? icon : (completed ? defaultIcon : value + 1)}</span>
        <span className={classnames(css.text, textClassName)}>{this.props.children}</span>
      </div>
    )
  }
}

Step.displayName = 'ruiStep'

export default Step
