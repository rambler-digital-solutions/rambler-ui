/**
 * Компонент radioButton
 */
import React, { Component, PropTypes } from 'react'

import classnames from 'classnames'
import omit from 'lodash/omit'
import { injectSheet } from '../theme'
import { fontStyleMixin, isolateMixin, middleMixin} from '../style/mixins'

@injectSheet(theme => ({
  normal: {
    ...isolateMixin,
    ...middleMixin,
    ...fontStyleMixin(theme.font),
    fontSize: theme.radio.font.size,
    display: 'inline-block',
    width: '100%',
    cursor: 'pointer',
    position: 'relative',
    '& input': {
      position: 'absolute',
      opacity: '0',
      appearance: 'none'
    },
    '& input:checked + $radio': {
      borderColor: theme.radio.activeRadioColor
    },
    '& input:checked + $radio:after': {
      opacity: '1'
    },
    '&--enter radio': {
      borderColor: theme.radio.activeRadioColor
    }
  },
  label: {
    display: 'inline-block',
    verticalAlign: 'middle'
  },
  radio: {
    '&:hover': {
      borderColor: theme.radio.activeRadioColor
    },
    display: 'inline-block',
    verticalAlign: 'middle',
    position: 'relative',
    boxSizing: 'border-box',
    border: theme.radio.baseRadioBorder,
    borderRadius: '50%',
    width: '16px',
    height: '16px',
    marginTop: '-1px',
    marginRight: '20px',
    textAlign: 'center',
    transition: 'border-color 0.1s ease',
    '&:after': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      display: 'inline-block',
      borderRadius: '50%',
      content: '""',
      backgroundColor: theme.radio.activeRadioColor,
      opacity: 0,
      transition: 'opacity 0.1s ease',
      margin: '-3px 0 0 -3px',
      width: '6px',
      height: '6px'
    },
    '@media (max-width: 768px)': {
      width: '18px',
      height: '18px',
      '&:after': {
        margin: '-4px 0 0 -4px',
        width: '8px',
        height: '8px'
      }
    }
  },
  isLabelLeft: {
    margin: '0',
    position: 'absolute',
    right: '0',
    top: '0'
  },
  isDisabled: {
    opacity: '0.5',
    pointerEvents: 'none'
  }
}))
class RadioButton extends Component {

  static propTypes = {
    /**
     * Выбран если значение true
     */
    checked: PropTypes.bool,
    /**
     * Если true, radioButoon задизэйблен
     */
    disabled: PropTypes.bool,
    /**
     * Выбранное значение radioButton
     */
    value: PropTypes.any,
    /**
     * Css-класс компонента
     */
    className: PropTypes.string,
    /**
     * Переопределение стандартных стилей label
     */
    labelStyle: PropTypes.object,
    /**
     * Переопределение стандартных стилей компонента radioButton
     */
    style: PropTypes.object,
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
      style,
      disabled,
      labelStyle,
      sheet: { classes: css },
      ...other
    } = omit(this.props, ['theme', 'isSelected'])
    /* eslint-enable no-unused-vars */
    const isLabelLeft = labelPosition === 'left'
    const rootClassName = classnames(css.normal, {
      [css.isDisabled]: disabled })
    const radioClassName = classnames(css.radio, {
      [css.isLabelLeft]: isLabelLeft })
    const labelClassName = classnames(css.label)
    const labelElem = <span className={labelClassName} style={labelStyle}>{children}</span>

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
          {...other} />
        <span className={radioClassName}></span>
        { isLabelLeft === false &&
          labelElem
        }
      </label>
    )

  }

}

RadioButton.displayName = 'ruiRadioButton'
export default RadioButton
