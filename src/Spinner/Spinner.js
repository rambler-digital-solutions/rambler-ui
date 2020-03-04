import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {injectSheet} from '../theme'
import {isolateMixin, middleMixin} from '../utils/mixins'

const getKeyframes = (delay = 0) => ({
  [`${delay}%`]: {
    transform: 'scale(1) translate3d(0, 0, 0)'
  },
  [`${20 + delay}%`]: {
    transform: 'scale(1) translate3d(0, 100%, 0)'
  },
  [`${80 + delay}%`]: {
    transform: 'scale(1) translate3d(0, 0, 0)'
  }
})

const styles = theme => ({
  '@keyframes ruiAnimateDot1': getKeyframes(),
  '@keyframes ruiAnimateDot2': getKeyframes(100 / (600 / 80)),
  '@keyframes ruiAnimateDot3': getKeyframes(100 / (600 / 160)),
  spinner: {
    extend: [isolateMixin, middleMixin],
    display: 'inline-block',
    color: theme.spinner.color,
    verticalAlign: 'middle',
    pointerEvents: 'none',
    fontSize: 5,
    whiteSpace: 'nowrap'
  },
  position: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    textAlign: 'center'
  },
  dot: {
    display: 'inline-block',
    verticalAlign: 'middle',
    height: '1em',
    width: '1em',
    position: 'relative',
    top: `-${2 / 5}em`,
    borderRadius: '50%',
    color: 'inherit!important',
    background: 'currentColor',
    transition: 'transform .6s ease-out',
    transform: 'translate3d(0, 0, 0)',
    animation: '.6s ease-out',
    animationFillMode: 'forwards',
    animationIterationCount: 'infinite',
    '&:nth-child(1)': {
      animationName: '$ruiAnimateDot1'
    },
    '&:nth-child(2)': {
      animationName: '$ruiAnimateDot2',
      margin: '0 1em'
    },
    '&:nth-child(3)': {
      animationName: '$ruiAnimateDot3'
    }
  }
})

class Spinner extends PureComponent {
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
    color: PropTypes.string,
    /**
     * Размер точек
     */
    size: PropTypes.number,
    /**
     * Сделать строчным элементом
     */
    inline: PropTypes.bool
  }

  static defaultProps = {
    inline: false
  }

  render() {
    const {className, style, color, size, inline, classes} = this.props

    const resultStyle = {
      fontSize: size,
      color,
      ...style
    }

    const dot = <span className={classes.dot} />

    return (
      <span
        style={resultStyle}
        className={classnames(
          className,
          classes.spinner,
          !inline && classes.position
        )}>
        {dot}
        {dot}
        {dot}
      </span>
    )
  }
}

export default injectSheet(styles, {name: 'Spinner'})(Spinner)
