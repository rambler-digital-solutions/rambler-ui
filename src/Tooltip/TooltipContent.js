import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import OnClickOutside from '../OnClickOutside'
import VisibilityAnimation from '../VisibilityAnimation'
import {withStyles} from '../theme'
import {POINTS_Y, POINTS_X} from '../constants/overlay'
import {isolateMixin, fontSmoothingMixin} from '../utils/mixins'
import createGetMemoizedRef from '../utils/createGetMemoizedRef'

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
    fontWeight: theme.tooltip.fontWeight,
    boxShadow: theme.tooltip.boxShadow,
    padding: theme.tooltip.padding,
    color: theme.tooltip.colors.default.text,
    letterSpacing: theme.tooltip.letterSpacing,
    boxSizing: 'border-box',
    lineHeight: theme.tooltip.lineHeight,
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
        '& $arrow': {color: theme.tooltip.colors[type].background},
        '&$ytop$yabottom $arrow': {
          borderBottomColor: theme.tooltip.colors[type].arrow
        },
        '&$ybottom$yatop $arrow': {
          borderTopColor: theme.tooltip.colors[type].arrow
        },
        '&$xleft$xaright $arrow': {
          borderRightColor: theme.tooltip.colors[type].arrow
        },
        '&$xright$xaleft $arrow': {
          borderLeftColor: theme.tooltip.colors[type].arrow
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
    arrowClassName: PropTypes.string,
    arrowStyle: PropTypes.object,
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

  getMemoizedRef = createGetMemoizedRef()

  render() {
    const {
      isVisible,
      children,
      className,
      bodyClassName,
      style,
      arrowClassName,
      arrowStyle = {},
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
    const resultArrowStyle = {...arrowStyle}

    if (anchorWidth)
      if (anchorPointX === 'left' && pointX === 'left') {
        resultArrowStyle.left = anchorWidth / 2 + 13 + 'px'
        resultArrowStyle.right = 'auto'
      } else if (anchorPointX === 'right' && pointX === 'right') {
        resultArrowStyle.left = 'auto'
        resultArrowStyle.right = anchorWidth / 2 + 3 + 'px'
      }

    if (anchorHeight)
      if (anchorPointY === 'top' && pointY === 'top') {
        if (anchorPointX === 'left')
          resultArrowStyle.top = anchorHeight / 2 + 3 + 'px'
        if (anchorPointX === 'right')
          resultArrowStyle.top = anchorHeight / 2 - 7 + 'px'
        resultArrowStyle.bottom = 'auto'
      } else if (anchorPointY === 'bottom' && pointY === 'bottom') {
        resultArrowStyle.top = 'auto'
        if (anchorPointX === 'left')
          resultArrowStyle.bottom = anchorHeight / 2 - 7 + 'px'
        if (anchorPointX === 'right')
          resultArrowStyle.bottom = anchorHeight / 2 + 3 + 'px'
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
                ref={this.getMemoizedRef(componentRef, contentRef)}
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
                <div
                  className={classnames(arrowClassName, classes.arrow)}
                  style={resultArrowStyle}
                />
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
