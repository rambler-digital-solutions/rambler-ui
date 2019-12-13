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
    '&:focus': {
      outline: 'none'
    },
    '&::-webkit-slider-runnable-track': {
      height: theme.slider.height,
      appearance: 'none'
    },
    '&::-webkit-slider-thumb': {
      border: `${theme.slider.height}px solid ${theme.slider.thumb.colors.border}`,
      height: theme.slider.thumb.size,
      width: theme.slider.thumb.size,
      borderRadius: theme.slider.thumb.size,
      background: theme.slider.thumb.colors.color,
      cursor: 'pointer',
      appearance: 'none',
      marginTop: `-${theme.slider.height}px`,
      boxSizing: 'border-box'
    },
    '&::-moz-range-thumb': {
      border: `5px solid ${theme.slider.thumb.colors.border}`,
      height: theme.slider.thumb.size,
      width: theme.slider.thumb.size,
      borderRadius: theme.slider.thumb.size,
      background: theme.slider.thumb.colors.color,
      cursor: 'pointer',
      appearance: 'none',
      marginTop: `-${theme.slider.height}px`,
      boxSizing: 'border-box'
    },
    '&::-ms-thumb': {
      border: `5px solid ${theme.slider.thumb.colors.border}`,
      height: theme.slider.thumb.size,
      width: theme.slider.thumb.size,
      borderRadius: theme.slider.thumb.size,
      background: theme.slider.thumb.colors.color,
      cursor: 'pointer',
      appearance: 'none',
      marginTop: `-${theme.slider.height}px`,
      boxSizing: 'border-box'
    },
    '&::-moz-focus-outer': {
      border: 0
    }
  },
  filled: {
    position: 'absolute',
    left: '0',
    background: theme.colors.primary,
    height: theme.slider.height
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
