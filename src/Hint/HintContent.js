import React, {PureComponent, cloneElement} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import VisibilityAnimation from '../VisibilityAnimation'
import {POINTS_X, POINTS_Y} from '../constants/overlay'
import {withStyles} from '../theme'
import {isolateMixin} from '../utils/mixins'
import {ios, android} from '../utils/browser'

const isMobileBehavior = ios || android

const styles = theme => ({
  hint: {
    extend: isolateMixin,
    fontFamily: theme.fontFamily,
    position: 'relative',
    color: theme.hint.colors.text,
    borderRadius: theme.hint.borderRadius,
    boxSizing: 'border-box',
    boxShadow: theme.hint.boxShadow,
    paddingTop: 15,
    paddingBottom: 15,
    width: 265,
    backgroundColor: theme.hint.colors.background,
    fontSize: theme.hint.fontSize,
    lineHeight: 1.54,
    opacity: 0.01,
    transitionDuration: `${theme.hint.animationDuration}ms`,
    transitionProperty: 'opacity'
  },
  mobile: {
    width: '100%',
    maxWidth: 480,
    padding: 20,
    fontSize: 14
  },
  arrow: {
    position: 'absolute',
    borderStyle: 'solid',
    borderColor: 'transparent',
    borderWidth: 5,
    borderBottomColor: theme.hint.colors.background,
    zIndex: 100
  },
  isVisible: {
    opacity: 1
  },
  icon: {
    position: 'absolute'
  },
  left: {
    left: -15,
    paddingLeft: 45,
    paddingRight: 15,
    '& $icon': {
      left: 15
    }
  },
  right: {
    left: 15,
    paddingLeft: 15,
    paddingRight: 45,
    '& $icon': {
      right: 15
    }
  },
  top: {
    top: -15,
    '&$mobile': {
      top: 10
    },
    '& $icon': {
      top: 15
    },
    '& $arrow': {
      bottom: '100%'
    }
  },
  bottom: {
    top: 19,
    '&$mobile': {
      top: -10
    },
    '& $icon': {
      bottom: 19
    },
    '& $arrow': {
      top: '100%',
      transform: 'rotate(180deg)'
    }
  }
})

class HintContent extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    icon: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
    isVisible: PropTypes.bool,
    pointX: PropTypes.oneOf(POINTS_X),
    pointY: PropTypes.oneOf(POINTS_Y),
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onBecomeVisible: PropTypes.func,
    onBecomeInvisible: PropTypes.func
  }

  static defaultProps = {
    isVisible: false
  }

  cachedPosition = {}

  get position() {
    const {clientWidth} = document.body
    const {anchorLeft = 0, anchorWidth = 0} = this.props
    const key = `${anchorLeft}-${anchorWidth}-${clientWidth}`
    if (key === this.cachedPosition.key) return this.cachedPosition
    const anchorCenterLeft = anchorLeft + anchorWidth / 2
    let contentLeft
    let arrowLeft
    if (clientWidth < 480 || anchorCenterLeft < 240) {
      contentLeft = 0
      arrowLeft = anchorCenterLeft - 5
    } else if (anchorCenterLeft > clientWidth - 240) {
      contentLeft = clientWidth - 480
      arrowLeft = anchorCenterLeft - 5 + 480 - clientWidth
    } else {
      contentLeft = anchorCenterLeft - 240
      arrowLeft = 240 - 5
    }
    this.cachedPosition = {
      key,
      arrowLeft,
      contentLeft
    }
    return this.cachedPosition
  }

  renderIcon() {
    const {icon, classes, theme} = this.props
    if (isMobileBehavior)
      return (
        <div
          className={classes.arrow}
          style={{left: this.position.arrowLeft}}
        />
      )
    const iconProps = icon.props || {}
    return cloneElement(icon, {
      className: classnames(classes.icon, iconProps.className),
      color: iconProps.color || theme.hint.icon.colors.active
    })
  }

  render() {
    const {
      isVisible,
      className,
      style,
      children,
      pointX,
      pointY,
      theme,
      classes,
      onMouseEnter,
      onMouseLeave,
      onBecomeVisible,
      onBecomeInvisible
    } = this.props

    let contentStyle

    if (isMobileBehavior)
      contentStyle = {
        left: this.position.contentLeft
      }

    return (
      <VisibilityAnimation
        isVisible={isVisible}
        animationDuration={theme.hint.animationDuration}
        onVisible={onBecomeVisible}
        onInvisible={onBecomeInvisible}>
        {({isVisible}) => (
          <div
            className={classnames(
              classes.hint,
              classes[isMobileBehavior ? 'mobile' : pointX],
              classes[pointY],
              isVisible && classes.isVisible,
              className
            )}
            style={{...contentStyle, ...style}}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
            {this.renderIcon()}
            {children}
          </div>
        )}
      </VisibilityAnimation>
    )
  }
}

export default withStyles(styles, {name: 'HintContent'})(HintContent)
