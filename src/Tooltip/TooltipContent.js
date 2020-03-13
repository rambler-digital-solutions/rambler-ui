import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import OnClickOutside from '../OnClickOutside'
import VisibilityAnimation from '../VisibilityAnimation'
import {withStyles} from '../theme'
import {POINTS_Y, POINTS_X} from '../constants/overlay'
import {isolateMixin, fontSmoothingMixin} from '../utils/mixins'

const styles = theme => ({
  content: {
    extend: [isolateMixin, fontSmoothingMixin],
    display: 'inline-block',
    fontFamily: theme.fontFamily,
    opacity: '0.01',
    position: 'relative',
    transitionDuration: `${theme.tooltip.animationDuration}ms`,
    transitionProperty: 'opacity, top, left',
    pointerEvents: 'none'
  },
  arrow: {
    content: '""',
    position: 'absolute',
    borderStyle: 'solid',
    borderColor: 'transparent'
  },
  body: {
    fontSize: theme.tooltip.fontSize,
    color: theme.tooltip.colors.default.text,
    padding: '8px 12px',
    boxSizing: 'border-box',
    lineHeight: 1.4,
    borderRadius: theme.tooltip.borderRadius,
    maxWidth: 320
  },
  isVisible: {
    opacity: '1 !important',
    '&$ytop$yabottom': {
      top: '6px !important'
    },
    '&$ybottom$yatop': {
      top: '-6px !important'
    },
    '&$xleft$xaright': {
      left: '6px !important'
    },
    '&$xright$xaleft': {
      left: '-6px !important'
    }
  },
  ytop: {
    '&$yabottom': {
      '& $arrow': {
        bottom: '100%',
        left: '50%',
        borderWidth: 5,
        transform: 'translate(-5px, 3px)'
      },
      '&$xleft': {
        top: 13,
        left: -13
      },
      '&$xright': {
        top: 13,
        right: -13
      },
      '&$xcenter': {
        top: 13
      }
    }
  },
  ybottom: {
    '&$yatop': {
      '& $arrow': {
        top: '100%',
        left: '50%',
        borderWidth: 5,
        transform: 'translate(-5px, -3px)'
      },
      '&$xleft': {
        top: -13,
        left: -13
      },
      '&$xright': {
        top: -13,
        right: -13
      },
      '&$xcenter': {
        top: -13
      }
    }
  },
  xleft: {
    '&$xaright': {
      '& $arrow': {
        bottom: '50%',
        left: '0',
        borderWidth: 5,
        transform: 'translate(-7px, 5px)'
      },
      '&$ytop': {
        top: -3,
        left: 13
      },
      '&$ybottom': {
        bottom: -3,
        left: 13
      },
      '&$ycenter': {
        left: 13
      }
    }
  },
  xright: {
    '&$xaleft': {
      '& $arrow': {
        top: '50%',
        left: '100%',
        borderWidth: 5,
        transform: 'translate(-3px, -5px)'
      },
      '&$ytop': {
        top: -3,
        left: -13
      },
      '&$ybottom': {
        bottom: -3,
        left: -13
      },
      '&$ycenter': {
        left: -13
      }
    }
  },
  xcenter: {},
  ycenter: {},
  // anchor
  xacenter: {},
  yacenter: {},
  xaleft: {},
  xaright: {},
  yatop: {},
  yabottom: {},
  ...['default', 'error', 'warning', 'success'].reduce(
    (styles, type) => ({
      ...styles,
      [type]: {
        '& $body': {background: theme.tooltip.colors[type].background},
        '&$ytop$yabottom $arrow': {
          borderBottomColor: theme.tooltip.colors[type].background
        },
        '&$ybottom$yatop $arrow': {
          borderTopColor: theme.tooltip.colors[type].background
        },
        '&$xleft$xaright $arrow': {
          borderRightColor: theme.tooltip.colors[type].background
        },
        '&$xright$xaleft $arrow': {
          borderLeftColor: theme.tooltip.colors[type].background
        }
      }
    }),
    {}
  )
})

class TooltipContent extends PureComponent {
  static propTypes = {
    style: PropTypes.object,
    bodyClassName: PropTypes.string,
    isVisible: PropTypes.bool,
    contentRef: PropTypes.func,
    onBecomeVisible: PropTypes.func,
    onClickOutside: PropTypes.func,
    onBecomeInvisible: PropTypes.func,
    pointY: PropTypes.oneOf(POINTS_Y),
    pointX: PropTypes.oneOf(POINTS_X),
    anchorPointY: PropTypes.oneOf(POINTS_Y),
    anchorPointX: PropTypes.oneOf(POINTS_X),
    anchorWidth: PropTypes.number,
    anchorHeight: PropTypes.number,
    status: PropTypes.oneOf(['default', 'success', 'error', 'warning']),
    children: PropTypes.node
  }

  static defaultProps = {
    isVisible: false
  }

  render() {
    const {
      isVisible,
      children,
      className,
      bodyClassName,
      style,
      pointY,
      pointX,
      anchorPointY,
      anchorPointX,
      anchorWidth,
      anchorHeight,
      theme,
      classes,
      status,
      contentRef,
      onClickOutside,
      onBecomeVisible,
      onBecomeInvisible
    } = this.props
    const arrowStyle = {}

    if (anchorWidth)
      if (anchorPointX === 'left' && pointX === 'left') {
        arrowStyle.left = anchorWidth / 2 + 13 + 'px'
        arrowStyle.right = 'auto'
      } else if (anchorPointX === 'right' && pointX === 'right') {
        arrowStyle.left = 'auto'
        arrowStyle.right = anchorWidth / 2 + 3 + 'px'
      }

    if (anchorHeight)
      if (anchorPointY === 'top' && pointY === 'top') {
        if (anchorPointX === 'left')
          arrowStyle.top = anchorHeight / 2 + 3 + 'px'
        if (anchorPointX === 'right')
          arrowStyle.top = anchorHeight / 2 - 7 + 'px'
        arrowStyle.bottom = 'auto'
      } else if (anchorPointY === 'bottom' && pointY === 'bottom') {
        arrowStyle.top = 'auto'
        if (anchorPointX === 'left')
          arrowStyle.bottom = anchorHeight / 2 - 7 + 'px'
        if (anchorPointX === 'right')
          arrowStyle.bottom = anchorHeight / 2 + 3 + 'px'
      }

    return (
      <OnClickOutside handler={onClickOutside}>
        {componentRef => (
          <VisibilityAnimation
            isVisible={isVisible}
            activeClassName={classes.isVisible}
            animationDuration={theme.tooltip.animationDuration}
            onVisible={onBecomeVisible}
            onInvisible={onBecomeInvisible}>
            {({isVisible}) => (
              <div
                ref={element => {
                  if (componentRef) componentRef(element)
                  if (contentRef) contentRef(element)
                }}
                style={{padding: '3px'}}
                className={classnames(
                  className,
                  classes.content,
                  classes['x' + pointX],
                  classes['y' + pointY],
                  classes['xa' + anchorPointX],
                  classes['ya' + anchorPointY],
                  classes[status],
                  isVisible && classes.isVisible
                )}>
                <div className={classes.arrow} style={arrowStyle} />
                <div
                  style={style}
                  className={classnames(bodyClassName, classes.body)}>
                  {children}
                </div>
              </div>
            )}
          </VisibilityAnimation>
        )}
      </OnClickOutside>
    )
  }
}

export default withStyles(styles, {name: 'TooltipContent'})(TooltipContent)
