import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import VisibilityAnimation from '../VisibilityAnimation'
import FocusManager from '../FocusManager'
import OnClickOutside from '../OnClickOutside'
import {POINTS_Y, POINTS_X} from '../constants/overlay'
import {withStyles} from '../theme'
import {isolateMixin} from '../utils/mixins'
import createGetMemoizedRef from '../utils/createGetMemoizedRef'

const BG_COLOR = '#fff'
const ARROW_SIZE = 5

const styles = theme => ({
  dropdown: {
    extend: isolateMixin,
    fontFamily: theme.fontFamily,
    borderRadius: theme.dropdown.borderRadius,
    boxSizing: 'border-box',
    opacity: 0.01,
    pointerEvents: 'none',
    position: 'relative',
    transitionDuration: `${theme.dropdown.animationDuration}ms`,
    transitionProperty: 'opacity, top',
    background: BG_COLOR,
    outline: 'none',
    boxShadow: theme.dropdown.boxShadow
  },
  'pointY-bottom': {
    top: -10
  },
  'pointY-top': {
    top: 10
  },
  'pointX-left': {},
  'pointX-center': {},
  'pointX-right': {},
  isVisible: {
    opacity: 1,
    pointerEvents: 'auto',
    top: 0
  },
  withArrow: {
    '&:before': {
      position: 'absolute',
      border: `${ARROW_SIZE}px solid transparent`,
      pointerEvents: 'none'
    },
    '&$pointY-top:before': {
      content: '""',
      top: -ARROW_SIZE,
      borderTopWidth: 0,
      borderBottomColor: BG_COLOR
    },
    '&$pointY-bottom:before': {
      content: '""',
      bottom: -ARROW_SIZE,
      borderBottomWidth: 0,
      borderTopColor: BG_COLOR
    },
    '&$pointX-left:before': {
      left: 15
    },
    '&$pointX-center:before': {
      left: `calc(50% - ${ARROW_SIZE}px)`
    },
    '&$pointX-right:before': {
      right: 15
    }
  }
})

class DropdownContent extends PureComponent {
  static propTypes = {
    isVisible: PropTypes.bool,
    contentRef: PropTypes.func,
    onBecomeVisible: PropTypes.func,
    onBecomeInvisible: PropTypes.func,
    hide: PropTypes.func,
    tabIndex: PropTypes.number,
    anchorWidth: PropTypes.number,
    anchorFullWidth: PropTypes.bool,
    onRequestClose: PropTypes.func,
    closeOnClickOutside: PropTypes.bool,
    pointY: PropTypes.oneOf(POINTS_Y),
    pointX: PropTypes.oneOf(POINTS_X),
    padding: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    showArrow: PropTypes.bool,
    children: PropTypes.node
  }

  static defaultProps = {
    padding: '20px',
    isVisible: false,
    closeOnClickOutside: true
  }

  onClickOutside = () => {
    const {props} = this
    if (props.isVisible)
      if (props.onRequestClose) props.onRequestClose()
      else props.hide()
  }

  getMemoizedRef = createGetMemoizedRef()

  renderContent = componentRef => {
    const {
      isVisible,
      children,
      anchorWidth,
      anchorFullWidth,
      className,
      style,
      theme,
      classes,
      padding,
      tabIndex,
      contentRef,
      onBecomeVisible,
      onBecomeInvisible,
      pointX,
      pointY,
      showArrow
    } = this.props
    let resultStyle = {}
    if (anchorWidth && anchorFullWidth) resultStyle.width = anchorWidth + 'px'
    if (padding) resultStyle.padding = padding
    resultStyle = {
      ...resultStyle,
      ...style
    }
    return (
      <VisibilityAnimation
        isVisible={isVisible}
        animationDuration={theme.dropdown.animationDuration}
        onVisible={onBecomeVisible}
        onInvisible={onBecomeInvisible}>
        {({isVisible}) => (
          <FocusManager tabIndex={tabIndex}>
            {focusRef => (
              <div
                className={classnames(
                  className,
                  classes.dropdown,
                  showArrow && classes.withArrow,
                  classes['pointY-' + pointY],
                  classes['pointX-' + pointX],
                  isVisible && classes.isVisible
                )}
                style={resultStyle}
                ref={this.getMemoizedRef(focusRef, componentRef, contentRef)}>
                {children}
              </div>
            )}
          </FocusManager>
        )}
      </VisibilityAnimation>
    )
  }

  render() {
    const {closeOnClickOutside} = this.props

    if (!closeOnClickOutside) return this.renderContent()

    return (
      <OnClickOutside handler={this.onClickOutside}>
        {componentRef => this.renderContent(componentRef)}
      </OnClickOutside>
    )
  }
}

export default withStyles(styles, {name: 'Dropdown'})(DropdownContent)
