import React, { Component, PropTypes, cloneElement } from 'react'
import classnames from 'classnames'
import pure from 'recompose/pure'
import QuestionIcon from '../icons/forms/QuestionIcon'
import VisibilityAnimation from '../VisibilityAnimation'
import { FixedOverlay } from '../Overlay'
import { POINTS_X } from '../constants/overlay'
import { injectSheet } from '../theme'
import { fontStyleMixin, isolateMixin } from '../style/mixins'

@pure
@injectSheet((theme) => ({
  hint: {
    ...isolateMixin,
    ...fontStyleMixin(theme.font),
    position: 'relative',
    top: -14,
    boxSizing: 'border-box',
    boxShadow: '0 2px 6px 0 rgba(0, 0, 0, 0.1), 0 -2px 6px 0 rgba(0, 0, 0, 0.1)',
    paddingTop: 15,
    paddingBottom: 20,
    width: 275,
    backgroundColor: '#fff',
    fontSize: 13,
    opacity: 0.01,
    transitionDuration: `${theme.hint.animationDuration}ms`,
    transitionProperty: 'opacity'
  },
  isVisible: {
    opacity: 1
  },
  icon: {
    position: 'absolute',
    top: 14,
    fill: theme.button.types.primary.defaultBg
  },
  left: {
    left: -15,
    paddingLeft: 47,
    paddingRight: 24,
    '& $icon': {
      left: 15
    }
  },
  right: {
    left: 15,
    paddingLeft: 24,
    paddingRight: 47,
    '& $icon': {
      right: 15
    }
  }
}))
class HintContent extends Component {

  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    icon: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
    isVisible: PropTypes.bool.isRequired,
    pointX: PropTypes.oneOf(POINTS_X),
    onMouseLeave: PropTypes.func,
    onBecomeVisible: PropTypes.func,
    onBecomeInvisible: PropTypes.func
  }

  get css() {
    return this.props.sheet.classes
  }

  render() {
    const {
      isVisible,
      className,
      style,
      icon,
      children,
      pointX,
      theme,
      onMouseLeave,
      onBecomeVisible,
      onBecomeInvisible
    } = this.props

    const css = this.css
    const iconProps = icon.props || {}

    const anchor = cloneElement(icon, {
      className: css.icon,
      color: iconProps.color || theme.button.types.primary.defaultBg
    })

    return (
      <VisibilityAnimation
        isVisible={isVisible}
        activeClassName={css.isVisible}
        animationDuration={theme.hint.animationDuration}
        onVisible={onBecomeVisible}
        onInvisible={onBecomeInvisible}>
        <div
          className={classnames(css.hint, css[pointX], className)}
          style={style}
          onMouseLeave={onMouseLeave}>
          {anchor}
          {children}
        </div>
      </VisibilityAnimation>
    )
  }
}

@pure
@injectSheet(() => ({
  icon: {
    display: 'inline-block'
  }
}))
export default class Hint extends Component {

  static propTypes = {
    /**
     * Класс якоря
     */
    className: PropTypes.string,
    /**
     * Стили якоря
     */
    style: PropTypes.object,
    /**
     * Иконка, по-умолчанию `<QuestionIcon />`
     */
    icon: PropTypes.node.isRequired,
    /**
     * Класс контента подсказки
     */
    contentClassName: PropTypes.string,
    /**
     * Стили контента посказки
     */
    contentStyle: PropTypes.object,
    /**
     * Контент для подсказки
     */
    children: PropTypes.node.isRequired,
    /**
     * Флаг показа подсказки. Если ничего не указано, подсказка будет показываться при hover
     */
    isOpened: PropTypes.bool,
    /**
     * Позиция тултипа по оси X: left - слева от якоря, right - справа
     */
    positionX: PropTypes.oneOf(['left', 'right']),
    /**
     * Скрывать при скролле страницы
     */
    closeOnScroll: PropTypes.bool
  };

  static defaultProps = {
    positionX: 'right',
    closeOnScroll: true,
    icon: (
      <QuestionIcon size={16} />
    )
  };

  constructor(props) {
    super(props)

    this.state = {
      isOpened: props.isOpened || false
    }
  }

  get css() {
    return this.props.sheet.classes
  }

  componentWillReceiveProps({ isOpened }) {
    if (isOpened !== undefined && isOpened !== this.props.isOpened)
      if (isOpened)
        this.show()
      else
        this.hide()
  }

  show = () => {
    if (!this.state.isOpened)
      this.setState({
        isOpened: true
      })
  }

  hide = () => {
    if (this.state.isOpened)
      this.setState({
        isOpened: false
      })
  }

  render() {
    const {
      className,
      style,
      contentClassName,
      contentStyle,
      icon,
      children,
      positionX,
      theme,
      closeOnScroll
    } = this.props

    const css = this.css
    const pointX = positionX === 'left' ? 'right' : 'left'
    const iconProps = icon.props || {}

    const anchor = cloneElement(icon, {
      style,
      className: classnames(css.icon, className),
      color: iconProps.color || theme.button.types.primary.defaultBg,
      onMouseEnter: this.show
    })

    return (
      <FixedOverlay
        isOpened={this.state.isOpened}
        anchor={anchor}
        content={
          <HintContent
            className={contentClassName}
            style={contentStyle}
            icon={icon}
            onMouseLeave={this.hide}>
            {children}
          </HintContent>
        }
        autoPositionX={true}
        anchorPointX={pointX}
        contentPointX={pointX}
        anchorPointY="top"
        contentPointY="top"
        cachePositionOptions={false}
        closeOnScroll={closeOnScroll} />
    )
  }

}
