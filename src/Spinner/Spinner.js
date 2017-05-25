import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import range from 'lodash/range'
import pure from 'recompose/pure'
import { injectSheet } from '../theme'
import { isolateMixin, middleMixin } from '../style/mixins'

@pure
@injectSheet(theme => ({
  '@keyframes ruiAnimateDot': {
    '20%': {
      transform: 'scale(1)'
    },
    '40%': {
      transform: 'scale(1) translate3d(0, 5px, 0)'
    },
    '100%': {
      transform: 'scale(1)  translate3d(0, 0, 0)'
    }
  },
  spinner: {
    ...isolateMixin,
    ...middleMixin,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    textAlign: 'center',
    pointerEvents: 'none'
  },
  dot: {
    display: 'inline-block',
    verticalAlign: 'middle',
    height: 5,
    width: 5,
    position: 'relative',
    top: -2,
    borderRadius: '50%',
    backgroundColor: theme.spinner.dotColor,
    transition: 'transform .6s ease-out',
    transform: 'translate3d(0, 0, 0)',
    animation: 'ruiAnimateDot .6s ease-out',
    animationFillMode: 'forwards',
    animationIterationCount: 'infinite',
    '&:nth-child(1)': {
      animationDelay: '0s'
    },
    '&:nth-child(2)': {
      animationDelay: '.08s', margin: '0 5px'
    },
    '&:nth-child(3)': {
      animationDelay: '.16s'
    }
  }
}))
export default class Spinner extends Component {

  static propTypes = {
    /**
     * CSS-класс
     */
    className: PropTypes.string,
    /**
     * Inline-стили
     */
    style: PropTypes.object,
    /**
     * Цвет точек
     */
    color: PropTypes.string
  }

  get css() {
    return this.props.sheet.classes
  }

  render() {
    const {
      className,
      style,
      color
    } = this.props

    return (
      <div style={style} className={classnames(this.css.spinner, className)}>
        {range(3).map(i => (
          <div className={this.css.dot} style={{ backgroundColor: color }} key={i} />
        ))}
      </div>
    )
  }

}
