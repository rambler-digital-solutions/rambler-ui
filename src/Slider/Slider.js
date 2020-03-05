import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {withStyles} from '../theme'
import {isolateMixin} from '../utils/mixins'

const styles = theme => ({
  root: {
    extend: isolateMixin,
    position: 'relative',
    boxSizing: 'border-box',
    width: '100%',
    height: theme.slider.thumb.size,
    padding: `${(theme.slider.thumb.size - theme.slider.height) / 2}px 0`
  },
  range: {
    position: 'absolute',
    width: '100%',
    margin: 0,
    marginTop: (theme.slider.height - theme.slider.thumb.size) / 2,
    padding: 0,
    height: theme.slider.thumb.size,
    background: 'transparent',
    '-webkit-appearance': 'none',
    '&:focus': {
      outline: 'none'
    },
    '&::-webkit-slider-runnable-track': {
      width: '100%',
      height: theme.slider.height,
      border: 'none'
    },
    '&::-webkit-slider-thumb': {
      boxSizing: 'border-box',
      border: `${theme.slider.height}px solid ${theme.slider.thumb.colors.border}`,
      height: theme.slider.thumb.size,
      width: theme.slider.thumb.size,
      borderRadius: '50%',
      background: theme.slider.thumb.colors.color,
      cursor: 'pointer',
      marginTop: (theme.slider.height - theme.slider.thumb.size) / 2,
      '-webkit-appearance': 'none'
    },
    '&::-moz-range-track': {
      width: '100%',
      height: theme.slider.height,
      border: 'none'
    },
    '&::-moz-range-thumb': {
      boxSizing: 'border-box',
      border: `${theme.slider.height}px solid ${theme.slider.thumb.colors.border}`,
      height: theme.slider.thumb.size,
      width: theme.slider.thumb.size,
      borderRadius: '50%',
      background: theme.slider.thumb.colors.color,
      cursor: 'pointer'
    },
    '&::-moz-focus-outer': {
      border: 0
    },
    '&::-ms-track': {
      width: '100%',
      height: theme.slider.height,
      background: 'transparent',
      borderColor: 'transparent',
      borderWidth: `${(theme.slider.thumb.size - theme.slider.height) / 2}px 0`,
      color: 'transparent'
    },
    '&::-ms-thumb': {
      boxSizing: 'border-box',
      border: `${theme.slider.height}px solid ${theme.slider.thumb.colors.border}`,
      height: theme.slider.thumb.size,
      margin: 0,
      width: theme.slider.thumb.size,
      borderRadius: '50%',
      background: theme.slider.thumb.colors.color,
      cursor: 'pointer'
    },
    '&::-ms-fill-lower': {
      background: 'transparent'
    },
    '&::-ms-fill-upper': {
      background: 'transparent'
    }
  },
  track: {
    position: 'absolute',
    width: '100%',
    background: theme.slider.colors.background,
    height: theme.slider.height
  },
  fill: {
    position: 'absolute',
    background: theme.slider.colors.fill,
    height: theme.slider.height
  }
})

class Slider extends PureComponent {
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
    min: 0,
    max: 100,
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
    const filledWidth = ((value - min) / (max - min)) * 100
    return (
      <div className={rootClassName} style={style}>
        <div className={classes.track} />
        <div className={classes.fill} style={{width: `${filledWidth}%`}} />
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

export default withStyles(styles, {name: 'Slider'})(Slider)
