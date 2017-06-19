/**
 * Компонент radioButton
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import classnames from 'classnames'
import omit from 'lodash/omit'
import { injectSheet } from '../theme'
import { fontStyleMixin, isolateMixin, middleMixin} from '../style/mixins'

@injectSheet(theme => ({
  root: {
    ...isolateMixin,
    ...middleMixin,
    ...fontStyleMixin(theme.font),
    fontSize: theme.radio.fontSize,
    display: 'inline-block',
    width: '100%',
    cursor: 'pointer',
    position: 'relative',
    color: theme.radio.colors.default.background,
    '& input': {
      position: 'absolute',
      opacity: '0',
      appearance: 'none'
    },
    '& input:checked + $radio': {
      borderColor: theme.radio.colors.checked.border
    },
    '& input:checked + $radio:after': {
      opacity: 1
    }
  },
  label: {
    display: 'inline-block',
    verticalAlign: 'middle'
  },
  radio: {
    '&:hover': {
      borderColor: theme.radio.colors.hover.border
    },
    display: 'inline-block',
    verticalAlign: 'middle',
    position: 'relative',
    boxSizing: 'border-box',
    border: `1px solid ${theme.radio.colors.default.border}`,
    borderRadius: '50%',
    width: 16,
    height: 16,
    marginTop: -1,
    marginRight: 20,
    textAlign: 'center',
    transition: 'border-color 0.1s ease',
    '&:after': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      display: 'inline-block',
      borderRadius: '50%',
      content: '""',
      backgroundColor: theme.radio.colors.default.background,
      opacity: 0,
      transition: 'opacity 0.1s ease',
      margin: '-3px 0 0 -3px',
      width: 6,
      height: 6
    },
    '@media (max-width: 768px)': {
      width: 18,
      height: 18,
      '&:after': {
        margin: '-4px 0 0 -4px',
        width: 8,
        height: 8
      }
    }
  },
  isLabelLeft: {
    margin: 0,
    position: 'absolute',
    right: 0,
    top: 0
  },
  isDisabled: {
    pointerEvents: 'none',
    color: theme.radio.colors.disabled.color,
    '& $radio': {
      borderColor: theme.radio.colors.disabled.border,
      '&:after': {
        background: theme.radio.colors.disabled.background
      }
    }
  }
}))
class RadioButton extends Component {

  static propTypes = {
    /**
    * Выбранное значение radioButton
    */
    value: PropTypes.any.isRequired,
    /**
     * Если true, radioButoon задизэйблен
     */
    disabled: PropTypes.bool,
    /**
     * Css-класс root-компонента(radioButton)
     */
    className: PropTypes.string,
    /**
     * Css-класс span-radio
     */
    radioClassName: PropTypes.string,
    /**
     * Css-класс span-label
     */
    labelClassName: PropTypes.string,
    /**
    * Переопределение стандартных стилей компонента radioButton
    */
    style: PropTypes.object,
    /**
     * Переопределение стандартных стилей label
     */
    labelStyle: PropTypes.object,
    /**
     * Колбэк onChange на input
     */
    onChange: PropTypes.func,
    /**
     * Колбэк onFocus на input
     */
    onFocus: PropTypes.func,
   /**
    * Колбэк onBlur на input
    */
    onBlur: PropTypes.func,
    /**
     * Колбэк onClick на input
     */
    onClick: PropTypes.func
  }

  static defaultProps = {
    value: null,
    disabled: false,
    style: {},
    labelStyle: {}
  }

  componentDidMount() {
    this.refs.radio.checked = this.props.isSelected
  }

  componentDidUpdate() {
    this.refs.radio.checked = this.props.isSelected
  }

  render() {
    /* eslint-enable no-unused-vars */
    const {
      name,
      value,
      children,
      labelPosition,
      disabled,
      className,
      radioClassName,
      labelClassName,
      style,
      labelStyle,
      sheet: { classes: css },
      ...other
    } = omit(this.props, ['theme', 'isSelected'])
    /* eslint-enable no-unused-vars */
    const isLabelLeft = labelPosition === 'left'

    const rootClassName = classnames(css.root, className, {
      [css.isDisabled]: disabled })

    const resultRadioClassName = classnames(css.radio, radioClassName, {
      [css.isLabelLeft]: isLabelLeft })

    const resultLabelClassName = classnames(css.label, labelClassName)

    const labelElem = <span className={resultLabelClassName} style={labelStyle}>{children}</span>

    return (
      <label className={rootClassName} style={style}>
        { isLabelLeft === true &&
          labelElem
        }
        <input
          type="radio"
          ref="radio"
          name={name}
          value={value}
          disabled={disabled}
          {...other} />
        <span className={resultRadioClassName}></span>
        { isLabelLeft === false &&
          labelElem
        }
      </label>
    )

  }

}

RadioButton.displayName = 'ruiRadioButton'
export default RadioButton
