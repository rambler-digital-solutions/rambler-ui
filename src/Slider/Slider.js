import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {injectSheet} from '../theme'

@injectSheet(theme => ({
  root: {
    position: 'relative',
    width: '100%',
    height: theme.slider.height,
    background: theme.slider.colors.background
  },
  range: {
    position: 'absolute',
    width: '100%',
    height: theme.slider.height,
    appearance: 'none',
    background: 'transparent',
    margin: 0,
    zIndex: 2,
    '&:focus': {
      outline: 'none'
    },
    '&::-webkit-slider-runnable-track': {
      height: theme.slider.height,
      appearance: 'none'
    },
    '&::-webkit-slider-thumb': {
      border: `5px solid ${theme.slider.thumb.colors.border}`,
      height: '15px',
      width: '15px',
      borderRadius: '15px',
      background: theme.slider.thumb.colors.color,
      cursor: 'pointer',
      appearance: 'none',
      marginTop: '-5px'
    },
    '&::-moz-range-thumb': {
      border: `5px solid ${theme.slider.thumb.colors.border}`,
      height: theme.slider.height,
      width: '5px',
      borderRadius: '15px',
      background: theme.slider.thumb.colors.color,
      cursor: 'pointer',
      marginTop: '-5px'
    },
    '&::-moz-focus-outer': {
      border: 0
    }
  },
  filled: {
    position: 'absolute',
    left: '0',
    background: theme.colors.primary,
    height: theme.slider.height,
    zIndex: 1
  }
}))
export default class Slider extends PureComponent {
  static propTypes = {
    /**
     * Значение слайдера
     */
    value: PropTypes.number,
    /**
     * CSS-класс
     */
    className: PropTypes.string,
    /**
     * Inline-стили
     */
    style: PropTypes.object,
    /**
     * Минимальное значение слайдера
     */
    min: PropTypes.number,
    /**
     * Максимальное значение слайдера
     */
    max: PropTypes.number,
    /**
     * Шаг
     */
    step: PropTypes.number,
    /**
     * Функция, вызывающая при изменении значения `function (event: object, newValue: number) {}`
     */
    onChange: PropTypes.func
  }

  static defaultProps = {
    step: 1
  }

  onChange = event => {
    if (this.props.onChange)
      this.props.onChange(event, Number(event.target.value))
  }

  render() {
    const {
      value,
      classes,
      className,
      min,
      max,
      step,
      style,
      onChange, // eslint-disable-line no-unused-vars
      theme, // eslint-disable-line no-unused-vars
      ...other
    } = this.props
    const rootClassName = classnames(className, classes.root)
    const filledPart = Math.round(value / (max / 100))
    return (
      <div className={rootClassName} style={style}>
        <div className={classes.filled} style={{width: `${filledPart}%`}} />
        <input
          type="range"
          value={value}
          min={min}
          max={max}
          step={step}
          className={classes.range}
          onChange={this.onChange}
          {...other}
        />
      </div>
    )
  }
}
