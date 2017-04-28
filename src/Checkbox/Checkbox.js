import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import omit from 'lodash/omit'
import TickIcon from '../icons/forms/TickIcon'
import { injectSheet } from '../theme'
import { fontStyleMixin, isolateMixin, middleMixin } from '../style/mixins'

@injectSheet((theme) => ({
  checkbox: {
    ...isolateMixin,
    ...fontStyleMixin(theme.font),
    fontSize: theme.checkbox.font.size,
    overflow: 'hidden',
    position: 'relative',
    display: 'inline-block',
    verticalAlign: 'top',
    '&, & *': {
      transition: 'all .2s'
    },
    '&:hover $fake': {
      borderColor: theme.checkbox.hoverBorderColor
    },
    '&:active $fake': {
      borderColor: theme.checkbox.activeBorderColor
    },
    '&:not($isChecked):active $fake': {
      background: theme.checkbox.activeBgColor,
      borderColor: theme.checkbox.activeBorderColor
    }
  },
  fake: {
    ...middleMixin,
    position: 'absolute',
    boxSizing: 'border-box',
    display: 'inline-block',
    width: theme.checkbox.size,
    height: theme.checkbox.size,
    border: `1px solid ${theme.checkbox.borderColor}`,
    borderRadius: theme.checkbox.borderRadius
  },
  real: {
    position: 'absolute',
    opacity: 0,
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    width: '100%',
    height: '100%',
    cursor: 'pointer',
    zIndex: 1
  },
  label: {
    cursor: 'pointer',
    fontSize: 13,
    lineHeight: '15px',
    fontWeight: 'normal'
  },
  icon: {
    ...isolateMixin,
    position: 'relative',
    left: 1,
    top: -4,
    opacity: 0
  },
  iconright: {
    '& $fake': {
      right: 0
    },
    '& $label': {
      marginRight: theme.checkbox.size + theme.checkbox.iconMargin
    }
  },
  iconleft: {
    '& $fake': {
      left: 0
    },
    '& $label': {
      marginLeft: theme.checkbox.size + theme.checkbox.iconMargin
    }
  },
  isChecked: {
    '& $icon': {
      top: 2,
      opacity: 1
    },
    '& $fake': {
      borderColor: theme.checkbox.checkedBorderColor
    }
  },
  isFocused: {
    '& $fake': {
      borderColor: theme.checkbox.activeBorderColor
    }
  },
  isDisabled: {
    pointerEvents: 'none',
    '& $fake': {
      borderColor: theme.checkbox.disabledBorderColor,
      background: theme.checkbox.disabledBgColor
    },
    '& $label': {
      color: theme.checkbox.disabledColor
    }
  }
}))
export default class Checkbox extends Component {

  static propTypes = {
    /**
     * Имя чекбокса
     */
    name: PropTypes.string,
    /**
     * Отключение чекбокса
     */
    disabled: PropTypes.bool,
    /**
     * CSS-класс контейнера
     */
    className: PropTypes.string,
    /**
     * Стили контейнера
     */
    style: PropTypes.object,
    /**
     * C какой стороны показывать иконку
     */
    iconPosition: PropTypes.oneOf(['left', 'right']),
    /**
     * Поставить галочку изначально
     */
    checked: PropTypes.bool,
    /**
     * Колбек отрабатывающий при изменении checkbox'a
     * `onCheck(event, checked)`
     * Принимает параметры: DOM-события и флаг включения/отключения чекбокса
     */
    onCheck: PropTypes.func,
    /**
     * Стиль чекбокса (квадрат с иконкой)
     */
    checkboxStyle: PropTypes.object,
    /**
     * Класс чекбокса (квадрат с иконкой)
     */
    checkboxClassName: PropTypes.string,
    /**
     * Стиль лейбла
     */
    labelStyle: PropTypes.object,
    /**
     * Класс лейбла
     */
    labelClassName: PropTypes.string
  };

  static defaultProps = {
    iconPosition: 'left',
    disabled: false,
    name: ''
  }

  state = {
    checked: false,
    focused: false
  };

  onChange = (event) => {
    const checked = this.input.checked
    this.setState({ checked })
    if (this.props.onCheck)
      this.props.onCheck(event, checked)
  };

  onFocus = () => {
    this.setFocused(true)
  };

  onBlur = () => {
    this.setFocused(false)
  };

  componentWillMount() {
    this.setChecked(this.props.checked)
  }

  componentWillReceiveProps(nextProps) {
    this.setChecked(nextProps.checked)
  }

  setChecked(checked) {
    this.checked = checked
    this.setState({ checked })
  }

  setFocused(focused) {
    this.focused = focused
    this.setState({ focused })
  }

  render() {
    const {
      name,
      style,
      disabled,
      iconPosition,
      className,
      checkboxClassName,
      checkboxStyle,
      labelClassName,
      labelStyle,
      children,
      theme,
      sheet: { classes: css },
      ...other
    } = omit(this.props, 'onCheck')
    const { checked = false, focused } = this.state
    const stateClasses = {
      [css.isFocused]: focused,
      [css.isChecked]: checked,
      [css.isDisabled]: disabled
    }
    const resultClassName = classnames(css.checkbox, css[`icon${iconPosition}`], className, stateClasses)
    return (
      <div className={resultClassName} style={style}>
        <input
          {...other}
          ref={input => { this.input = input }}
          checked={ checked }
          name={ name }
          type="checkbox"
          className={ css.real }
          disabled={ disabled }
          onChange={ this.onChange }
          onFocus={ this.onFocus }
          onBlur={ this.onBlur } />
        <span className={classnames(css.fake, checkboxClassName)} style={ checkboxStyle }>
          <TickIcon className={ css.icon } size={ 12 } color={ theme.checkbox.activeBorderColor } />
        </span>
        <span className={classnames(css.label, labelClassName)} style={ labelStyle }>
          { children }
        </span>
      </div>
    )

  }
}
