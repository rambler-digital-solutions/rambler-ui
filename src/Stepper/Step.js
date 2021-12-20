import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TickIcon from '../icons/forms/TickIcon'
import {isolateMixin, ifDesktopWindow, middleMixin} from '../utils/mixins'
import {withStyles} from '../theme'

const defaultIcon = <TickIcon size={15} color="currentColor" />

const styles = theme => ({
  step: {
    extend: isolateMixin,
    fontFamily: theme.stepper.fontFamily,
    fontSize: theme.stepper.fontSize,
    fontWeight: theme.stepper.fontWeight,
    display: 'flex',
    alignItems: 'center',
    padding: '10px 0',
    backgroundColor: theme.stepper.colors.default.background,
    color: theme.stepper.colors.default.color,
    textAlign: 'center',
    zIndex: 1,
    ...ifDesktopWindow({
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
    boxSizing: 'border-box',
    width: theme.stepper.badge.size,
    height: theme.stepper.badge.size,
    marginRight: 10,
    userSelect: 'none',
    fontSize: theme.stepper.badge.fontSize,
    backgroundColor: theme.stepper.colors.default.badge.background,
    border: `1px solid ${theme.stepper.colors.default.badge.border}`,
    color: theme.stepper.colors.default.badge.color,
    fontWeight: theme.stepper.fontWeight
  },
  active: {
    color: theme.stepper.colors.active.color,
    '& $badge': {
      color: theme.stepper.colors.active.badge.color,
      backgroundColor: theme.stepper.colors.active.badge.background,
      fontWeight: '500'
    },
    '& $text': {
      cursor: 'default'
    }
  },
  disabled: {
    color: theme.stepper.colors.disabled.color,
    '& $badge': {
      color: theme.stepper.colors.disabled.badge.color,
      backgroundColor: theme.stepper.colors.disabled.badge.background
    },
    '& $text': {
      cursor: 'default'
    }
  },
  completed: {
    color: theme.stepper.colors.completed.color,
    '& $badge': {
      color: theme.stepper.colors.completed.badge.color,
      backgroundColor: theme.stepper.colors.completed.badge.background
    },
    '& $text': {
      cursor: 'default'
    }
  },
  default: {
    '&:hover&:not(:active)': {
      color: theme.stepper.colors.hover.color,
      '& $badge': {
        color: theme.stepper.colors.hover.badge.color,
        backgroundColor: theme.stepper.colors.hover.badge.background
      }
    },
    '&:active': {
      color: theme.stepper.colors.pressed.color,
      '& $badge': {
        color: theme.stepper.colors.pressed.badge.color,
        backgroundColor: theme.stepper.colors.pressed.badge.background
      }
    }
  }
})

class Step extends Component {
  static propTypes = {
    /**
     * Значение индекса шага, автоматически проставляется компонентом `<Stepper />`
     */
    value: PropTypes.number.isRequired,
    /**
     * Dom узел. Возвращается иконка, если выбран текущий шаг или номер шага (index + 1)
     */
    icon: PropTypes.node,
    /**
     * Недоступный шаг, автоматически проставляется <Stepper /> (index > currentValue).
     * currentValue - выбранное значение, которое передали в `<Stepper />`
     */
    disabled: PropTypes.bool,
    /**
     * Завершенный шаг, автоматически проставляется <Stepper /> (index < currentValue).
     * currentValue - выбранное значение, которое передали в `<Stepper />`
     */
    completed: PropTypes.bool,
    /**
     * Активный шаг, автоматически проставляется <Stepper /> (index === currentValue).
     * currentValue - выбранное значение, которое передали в `<Stepper />`
     */
    active: PropTypes.bool,
    /**
     * Колбэк на клик по элементу, `function (event: object, newValue: any) {}`
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
    style: PropTypes.object,
    /**
     * Контент (обычно просто текст)
     */
    children: PropTypes.node
  }

  static defaultProps = {
    style: {}
  }

  onClick = e => {
    const {disabled, active, value} = this.props
    if (disabled || active) return
    this.props.onClick(e, value)
  }

  render() {
    const {
      value,
      className,
      badgeClassName,
      textClassName,
      classes,
      disabled,
      completed,
      active,
      icon,
      children,
      theme, // eslint-disable-line no-unused-vars
      onClick, // eslint-disable-line no-unused-vars
      ...other
    } = this.props
    const resultClassName = classnames(className, classes.step, {
      [classes.active]: active,
      [classes.disabled]: disabled,
      [classes.completed]: completed,
      [classes.default]: !active && !disabled && !completed
    })
    return (
      <div {...other} className={resultClassName} onClick={this.onClick}>
        <span className={classnames(classes.badge, badgeClassName)}>
          {icon ? icon : completed ? defaultIcon : <span>{value + 1}</span>}
        </span>
        <span className={classnames(classes.text, textClassName)}>
          {children}
        </span>
      </div>
    )
  }
}

export default withStyles(styles, {name: 'Step'})(Step)
