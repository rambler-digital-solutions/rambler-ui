/**
 * Компонент Step
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TickIcon from '../icons/forms/TickIcon'
import { isolateMixin, ifDesktopSize, middleMixin } from '../style/mixins'
import { injectSheet } from '../theme'

@injectSheet(theme => ({
  step: {
    extend: isolateMixin,
    fontFamily: theme.fontFamily,
    fontSize: theme.step.fontSize,
    display: 'flex',
    alignItems: 'center',
    padding: '10px 0',
    backgroundColor: theme.colors.light,
    textAlign: 'center',
    marginTop: '40px',
    ...ifDesktopSize({
      padding: '0 10px',
      marginTop: 0
    })
  },
  text: {
    '&:hover': {
      marginBottom: '-1px',
      textDecoration: 'underline',
      cursor: 'pointer'
    }
  },
  point: {
    extend: middleMixin,
    display: 'inline-block',
    borderRadius: '50%',
    width: '18px',
    height: '18px',
    marginRight: '10px',
    userSelect: 'none',
    backgroundColor: theme.colors.controls.grey.default
  },
  previous: {
    color: theme.colors.dark,
    '& $point': {
      backgroundColor: theme.colors.primary,
      color: theme.colors.light
    }
  },
  active: {
    color: theme.colors.primary,
    '& $point': {
      backgroundColor: theme.colors.primary,
      color: theme.colors.light,
    },
    '& $text': {
      marginBottom: 0,
      textDecoration: 'none',
      cursor: 'default'
    }
  },
  next: {
    color: theme.colors.controls.grey.default,
    '& $point': {
      backgroundColor: theme.colors.controls.grey.default,
      color: theme.colors.light
    },
    '& $text': {
      marginBottom: 0,
      textDecoration: 'none',
      cursor: 'default'
    }
  }
}))
class Step extends Component {
  static propTypes = {
    /**
     * Значение индекса шага
     */
    index: PropTypes.number.isRequired,
    /**
     * Dom узел. Возвращается иконка, если выбран текущий шаг или номер шага (index + 1)
     */
    icon: PropTypes.node,
    /**
     * Булевый флаг (index > currentValue).
     * currentValue - выбранное значение, которое передали в Stepper
     */
    disabled: PropTypes.bool,
    /**
     * Булевый флаг (index < currentValue).
     * currentValue - выбранное значение, которое передали в Stepper
     */
    completed: PropTypes.bool,
    /**
     * Булевый флаг (index === currentValue).
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
    icon: <TickIcon size={10} color="#fff" style={{height: '8px'}} />,
    style: {}
  }

  render() {
    const {
      index,
      className,
      badgeClassName,
      textClassName,
      style,
      classes: css,
      disabled,
      completed,
      active,
      icon,
      onClick
    } = this.props

    const resultClassName = classnames(
      className,
      css.step,
      {
        [css.previous]: completed,
        [css.active]: active,
        [css.next]: disabled
      }
    )

    return (
      <div className={resultClassName} style={style} onClick={onClick}>
        <span className={classnames(css.point, badgeClassName)}>{(active || disabled) ? index + 1 : icon}</span>
        <span className={classnames(css.text, textClassName)}>{this.props.children}</span>
      </div>
    )
  }
}

Step.displayName = 'ruiStep'

export default Step
