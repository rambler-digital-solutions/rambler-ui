import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {injectSheet} from '../theme'

@injectSheet(theme => ({
  container: {
    position: 'relative',
    width: '100%',
    height: '5px'
  },
  range: {
    position: 'absolute',
    width: '100%',
    height: '5px',
    '-webkit-appearance': 'none',
    background: 'transparent',
    margin: 0,
    // background: '#e8eaf0',
    zIndex: 2,
    '&:focus': {
      outline: 'none'
    },
    '&::-webkit-slider-runnable-track': {
      height: '5px',
      '-webkit-appearance': 'none',
      color: '#315efb'
    },
    '&::-webkit-slider-thumb': {
      border: `5px solid ${theme.colors.primary}`,
      height: '15px',
      width: '15px',
      borderRadius: '15px',
      background: '#ffffff',
      cursor: 'pointer',
      '-webkit-appearance': 'none',
      marginTop: '-5px'
    },
    '&::-moz-range-thumb': {
      border: `5px solid ${theme.colors.primary}`,
      height: '5px',
      width: '5px',
      borderRadius: '15px',
      background: '#ffffff',
      cursor: 'pointer',
      // '-webkit-appearance': 'none',
      marginTop: '-5px'
    },
    '&::-moz-focus-outer': {
      border: 0
    }
  },
  filled: {
    position: 'absolute',
    left: '0',
    background: `${theme.colors.primary}`,
    height: '5px',
    zIndex: 1
  },
  empty: {
    position: 'absolute',
    right: '0',
    background: '#dcdfe7',
    height: '5px',
    zIndex: 1
  }
}))
export default class Slider extends PureComponent {
  static propTypes = {
    /**
     * Значение слайдера
     */
    value: PropTypes.any,
    /**
     * CSS-класс
     */
    className: PropTypes.string,
    /**
     * CSS-id
     */
    id: PropTypes.string,
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
     * Функция, вызывающая при изменении значения `function (event: object, newValue: any) {}`
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
    const {value, classes, id, className, min, max, step} = this.props
    const rootClassName = classnames(className, classes.range)
    const filledPart = Math.round(value / (max / 100))
    return (
      <div className={classes.container}>
        <div className={classes.filled} style={{width: `${filledPart}%`}} />
        <input
          type="range"
          value={value}
          min={min}
          max={max}
          step={step}
          id={id}
          className={rootClassName}
          onChange={this.onChange}
        />
        <div
          className={classes.empty}
          style={{width: `${Math.round(100 - filledPart)}%`}}
        />
      </div>
    )
  }
}
