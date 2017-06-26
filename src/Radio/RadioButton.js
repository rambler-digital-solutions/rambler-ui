/**
 * Компонент radioButton
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import omit from 'lodash/omit'
import { injectSheet } from '../theme'
import { isolateMixin } from '../style/mixins'

@injectSheet(theme => ({
  root: {
    ...isolateMixin,
    fontFamily: theme.fontFamily,
    fontSize: theme.radio.fontSize,
    display: 'flex',
    width: '100%',
    cursor: 'pointer',
    position: 'relative',
    color: theme.radio.colors.default.text,
    '& input': {
      fontFamily: theme.fontFamily,
      position: 'absolute',
      opacity: '0',
      appearance: 'none',
      pointerEvents: 'none'
    },
    '& input:checked + $radio': {
      borderColor: theme.radio.colors.checked.dotBorder
    },
    '& input:active + $radio': {
      background: theme.radio.colors.active.dotBackground
    }
  },
  label: {
    display: 'inline-block',
    verticalAlign: 'middle',
    lineHeight: 1.43
  },
  radio: {
    '&:hover': {
      borderColor: theme.radio.colors.hover.dotBorder
    },
    flex: `0 0 ${theme.radio.radioSize}px`,
    display: 'inline-block',
    verticalAlign: 'middle',
    position: 'relative',
    boxSizing: 'border-box',
    background: theme.radio.colors.default.dotBackground,
    border: `1px solid ${theme.radio.colors.default.dotBorder}`,
    borderRadius: '50%',
    width: theme.radio.radioSize,
    height: theme.radio.radioSize,
    marginRight: theme.radio.labelMargin,
    marginTop: 1,
    textAlign: 'center',
    transition: `all ${theme.radio.animationDuration}ms`,
    '& svg': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      fill: theme.radio.colors.default.dot,
      transition: `all ${theme.radio.animationDuration}ms`,
      transform: 'scale(0.5, 0.5)',
      opacity: 0,
      width: theme.radio.dotSize,
      height: theme.radio.dotSize,
      marginTop: -theme.radio.dotSize / 2,
      marginLeft: -theme.radio.dotSize / 2
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
    color: theme.radio.colors.disabled.text,
    '& $radio': {
      borderColor: theme.radio.colors.disabled.dotBorder + '!important',
      '& svg': {
        fill: theme.radio.colors.disabled.dot
      }
    }
  },
  isChecked: {
    '& $radio svg': {
      opacity: 1,
      transform: 'scale(1, 1)'
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
      isSelected,
      sheet: { classes: css },
      ...other
    } = omit(this.props, 'theme')

    const isLabelLeft = labelPosition === 'left'

    const rootClassName = classnames(css.root, className, {
      [css.isDisabled]: disabled,
      [css.isChecked]: isSelected
    })

    const resultRadioClassName = classnames(css.radio, radioClassName, {
      [css.isLabelLeft]: isLabelLeft
    })

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
        <span className={resultRadioClassName}>
          <svg viewBox="0 0 10 10">
            <circle cx="5" cy="5" r="5" />
          </svg>
        </span>
        { isLabelLeft === false &&
          labelElem
        }
      </label>
    )

  }

}

RadioButton.displayName = 'ruiRadioButton'
export default RadioButton
