/**
 * Компонент radioButton
 */
import React, { Component, PropTypes } from 'react'

import classnames from 'classnames'
import omit from 'lodash/omit'
import { injectSheet } from '../theme'
import { fontStyleMixin, isolateMixin } from '../style/mixins'

@injectSheet(theme => ({
  normal: {
    ...isolateMixin,
    ...fontStyleMixin(theme.font),
    fontSize: theme.toggle.font.size,
    display: 'inline-block',
    fontize: '1em',
    fonteight: '400',
    cursor: 'pointer',
    '& input': {
      position: 'absolute',
      visibility: 'hidden',
      appearance: 'none'
    },
    '& input:checked + $radio': {
      borderColor: '#315efb'
    },
    '& input:checked + $radio:after': {
      opacity: '1'
    },
    '&--enter radio': {
      borderColor: '#315efb'
    }
  },
  label: {
    display: 'inline-block',
    verticalAlign: 'middle'
  },
  radio: {
    '&:hover': {
      borderColor: '#315efb'
    },
    display: 'inline-block',
    verticalAlign: 'middle',
    position: 'relative',
    boxSizing: 'border-box',
    border: '1px solid #ccc',
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
      backgroundColor: '#315efb',
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
    marginRight: '0px',
    marginLeft: '20px'
  }
}))

export default class RadioButton extends Component {

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
     * Переопределение стандартных стилей input
     */
    inputStyle: PropTypes.object,
    /**
     * Css-класс компонента
     */
    className: PropTypes.string,
    /**
     * Переопределение стандартных стилей label
     */
    labelStyle: PropTypes.object,
    /**
     * Переопределение стандартных стилей
     */
    style: PropTypes.object
  }

  static defaultProps = {
    value: null,
    disabled: false,
    style: {}
  }

  componentDidMount() {
    this.refs.radio.checked = this.props.isSelected
  }

  render() {
    /* eslint-enable no-unused-vars */
    const {
      name,
      value,
      label,
      labelPosition,
      isSelected,
      style,
      sheet: { classes: css },
      ...other
    } = omit(this.props, 'theme')
    /* eslint-enable no-unused-vars */

    const isLabelLeft = labelPosition === 'left'
    const rootClassName = classnames(css.normal)
    const radioClassName = classnames(css.radio, {
      [css.isSelected]: isSelected,
      [css.isLabelLeft]: isLabelLeft })
    const labelClassName = classnames(css.label)

    if (labelPosition === 'right')
      return (
        <label className={rootClassName} style={style}>
          <input
            type="radio"
            ref="radio"
            name={name}
            value={value}
            {...other} />
          <span className={radioClassName}></span>
          <span className={labelClassName}>{this.props.label}</span>
        </label>
      )

    return (
      <label className={rootClassName} style={style}>
      <span
        className={labelClassName}>{this.props.label}</span>
      <input
        type="radio"
        name={name}
        value={value}
        ref="radio" />
      <span className={radioClassName}></span>
      </label>
    )

  }

}
