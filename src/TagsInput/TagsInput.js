/**
 * Компонент TagsInput
 */
import React, { PureComponent, cloneElement } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import omit from 'lodash/omit'
import debounce from 'lodash/debounce'
import { injectSheet } from '../theme'
import { isolateMixin } from '../style/mixins'
import windowEvents from '../hoc/window-events'

const afterBorderColor = borderColor => ({
  '&:after': {
    borderColor,
    transform: 'scaleX(1)'
  }
})

@injectSheet(theme => ({
  root: {
    extend: isolateMixin,
    position: 'relative',
    background: theme.field.colors.default.background,
    boxSizing: 'border-box',
    fontFamily: theme.fontFamily,
    userSelect: 'none',
    overflow: 'hidden',
    outline: 0,
    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      border: '0 solid transparent',
      pointerEvents: 'none',
      outline: 0
    },
    '&:before': {
      borderColor: theme.field.colors.default.outline
    },
    '&:after': {
      transition: `all ${theme.field.animationDuration}ms ease`
    },
    '&:hover:before': {
      borderColor: theme.field.colors.hover.outline
    },
    '&:focus': afterBorderColor(theme.field.colors.focus.border)
  },
  input: {
    display: 'flex',
    flexWrap: 'wrap',
    minHeight: '100%',
    maxHeight: '100%',
    marginLeft: -theme.field.tag.sideMargin,
    fontFamily: theme.fontFamily,
    boxSizing: 'border-box',
    fontWeight: 400,
    fontSize: theme.field.fontSize,
    lineHeight: 'normal',
    '$isDisabled &': {
      pointerEvents: 'none'
    }
  },
  isDisabled: {
    background: theme.field.colors.disabled.background,
    color: theme.field.colors.disabled.text,
    cursor: 'not-allowed',
    '&:before': {
      borderColor: theme.field.colors.disabled.outline + '!important'
    }
  },
  withStatusLine: {
    '&:after': {
      borderWidth: '0 0 2px',
      transform: 'scaleX(0.6)'
    }
  },
  withOutline: {
    paddingLeft: theme.input.padding + 1,
    paddingRight: theme.input.padding + 1,
    '&:before': {
      borderRadius: theme.field.borderRadius,
      borderWidth: 1
    }
  },
  regular: {
    composes: ['$withOutline'],
    '&:after': {
      borderRadius: theme.field.borderRadius,
      borderWidth: 1
    }
  },
  awesome: {
    composes: ['$withOutline', '$withStatusLine']
  },
  promo: {
    composes: ['$withStatusLine'],
    '&:before': {
      borderBottomWidth: 1
    }
  },
  ...['medium', 'small'].reduce((result, size) => ({
    ...result,
    [size]: {
      maxHeight: theme.field.sizes[size].height,
      minHeight: theme.field.sizes[size].height,
      fontSize: theme.field.sizes[size].fontSize,
      paddingTop: (theme.field.sizes[size].height - theme.field.tag.lineHeight) / 2 - theme.field.sizes[size].tagVerticalMargin,
      paddingBottom: (theme.field.sizes[size].height - theme.field.tag.lineHeight) / 2,
      '& $item': {
        marginTop: theme.field.sizes[size].tagVerticalMargin
      },
      '&$withLeftIcon$regular, &$withLeftIcon$awesome': {
        paddingLeft: theme.field.sizes[size].withIconPadding + 1
      },
      '&$withRightIcon$regular, &$withRightIcon$awesome': {
        paddingRight: theme.field.sizes[size].withIconPadding + 1
      },
      '&$withLeftIcon$promo': {
        paddingLeft: theme.field.sizes[size].withIconPadding + 1 - theme.input.padding
      },
      '&$withRightIcon$promo': {
        paddingRight: theme.field.sizes[size].withIconPadding + 1 - theme.input.padding
      },
      '&$regular $iconLeft, &$awesome $iconLeft': {
        left: theme.field.sizes[size].iconMargin
      },
      '&$promo $iconLeft': {
        left: 0
      },
      '&$regular $iconRight, &$awesome $iconRight': {
        right: theme.field.sizes[size].iconMargin
      },
      '&$promo $iconRight': {
        right: 0
      }
    }
  }), {}),
  isOpened: {
    maxHeight: 'none'
  },
  success: {
    '&&': afterBorderColor(theme.colors.success)
  },
  error: {
    '&&': afterBorderColor(theme.colors.danger)
  },
  warning: {
    '&&': afterBorderColor(theme.colors.warn)
  },
  icon: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    margin: 'auto'
  },
  iconLeft: {
    composes: '$icon'
  },
  iconRight: {
    composes: '$icon'
  },
  withLeftIcon: {},
  withRightIcon: {},
  item: {
    '&&': {
      flex: '0 1 auto',
      alignSelf: 'flex-start',
      whiteSpace: 'nowrap',
      maxWidth: `calc(100% - ${theme.field.tag.sideMargin}px)`,
      marginLeft: theme.field.tag.sideMargin,
      lineHeight: theme.field.tag.lineHeight + 'px'
    },
  },
  placeholder: {
    composes: '$item',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: theme.field.colors.default.placeholder,
    cursor: 'default',
    '$isDisabled &': {
      color: theme.field.colors.disabled.placeholder
    }
  },
  more: {
    composes: '$item',
    color: theme.field.tag.colors.default.more,
    cursor: 'default',
    '$isDisabled &&': {
      color: theme.field.tag.colors.disabled.more
    }
  },
  isClickable: {
    cursor: 'pointer',
    '&:hover, &:active': {
      color: theme.field.tag.colors.hover.more
    }
  },
  isHidden: {
    '&&': {
      order: 1,
      visibility: 'hidden'
    }
  }
}))
@windowEvents('resize')
export default class TagsInput extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      visibleItemsCount: null,
      containerWidth: null
    }
    this.items = []
    this.container = null
    this.moreButton = null
  }

  static propTypes = {
    /**
     *  Элементы инпута, обязаны быть компонентами типа <TagsInputItem />
     */
    children:	PropTypes.node,
    /**
    *  Значение placeholder для input
    */
    placeholder: PropTypes.string,
    /**
    * Задизэйблить input true или false
    */
    disabled: PropTypes.bool,
    /**
     * Размер инпута
     */
    size: PropTypes.oneOf(['small', 'medium']),
    /**
     * Разновидность инпута
     */
    variation: PropTypes.oneOf(['regular', 'awesome', 'promo']),
    /**
     * Валидация input'a
     */
    status: PropTypes.oneOf(['error', 'warning', 'success', null]),
    /**
     * Класс контейнера
     */
    className: PropTypes.string,
    /**
     * Класс элемента input
     */
    inputClassName: PropTypes.string,
    /**
     * Открыт/Закрыт список элементов
     */
    isOpened: PropTypes.bool,
    /**
     * Переопределение стандартных стилей input
     */
    inputStyle: PropTypes.object,
    /**
    * Переопределение стилей контейнера
    */
    style: PropTypes.object,
    /**
    * Коллбек вызывающийся при изменении состояния
    */
    onChange: PropTypes.func,
    /**
    * Коллбек вызывающийся при нажатии на кнопку "еще"
    */
    onMoreClick: PropTypes.func,
    /**
     *  icon слева
     */
    iconLeft: PropTypes.node,
    /**
     *  icon справа
     */
    iconRight: PropTypes.node
  };

  static defaultProps = {
    status: null,
    size: 'medium',
    variation: 'awesome'
  };

  componentDidMount() {
    this.props.windowEvents.on('resize', this.handleWindowResize, false)
    if (!this.props.isOpened)
      this.setVisibleItemsCount()
  }

  componentWillUpdate(nextProps) {
    if (React.Children.count(nextProps.children) === 0)
      this.items = []
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.props.isOpened && this.shouldVisibleItemsCountReset(this.state, prevState, this.props, prevProps))
      this.setVisibleItemsCount()
  }

  componentWillUnmount() {
    this.props.windowEvents.removeListener('resize', this.handleWindowResize, false)
  }

  handleWindowResize = debounce(() => {
    this.setState({ containerWidth: this.container.getBoundingClientRect().width })
  }, 400)

  shouldVisibleItemsCountReset(state, prevState, props, prevProps) {
    if (state.containerWidth !== prevState.containerWidth)
      return true
    const items = React.Children.toArray(props.children)
    const prevItems = React.Children.toArray(prevProps.children)
    let itemsCount = items.length
    if (itemsCount !== prevItems.length)
      return true
    while(itemsCount--)
      if (items[itemsCount].props.children !== prevItems[itemsCount].props.children)
        return true
    return false
  }

  setVisibleItemsCount() {
    const items = this.items.filter(item => item)
    const itemsCount = items.length
    if (itemsCount < 1) {
      this.setState({visibleItemsCount: null})
      return
    }
    const containerWidth = this.container.getBoundingClientRect().width
    const moreButtonWidth = this.moreButton.getBoundingClientRect().width + 20
    let firstLineItemsCount = 0
    let itemsWidthSum = 0
    const itemsWidths = []
    while(firstLineItemsCount < itemsCount) {
      const itemWidth = this.items[firstLineItemsCount].getBoundingClientRect().width + 20
      if (itemsWidthSum + itemWidth > containerWidth)
        break
      itemsWidths.push(itemWidth)
      itemsWidthSum += itemWidth
      firstLineItemsCount += 1
    }
    if (firstLineItemsCount < itemsCount) {
      let availableSpace = containerWidth - itemsWidthSum
      while(availableSpace < moreButtonWidth) {
        const itemWidth = itemsWidths[firstLineItemsCount]
        availableSpace += itemWidth
        firstLineItemsCount -= 1
      }
    }
    this.setState({visibleItemsCount: firstLineItemsCount < itemsCount ? firstLineItemsCount : null})
  }

  saveItemsRefs = (ref, index, length) => {
    this.items.length = length
    this.items[index] = ref
  }

  saveContainerRef = (ref) => {
    this.container = ref
  }

  saveMoreButtonRef = (ref) => {
    this.moreButton = ref
  }

  onItemClick = (event, value) => {
    if (!this.props.onChange) return
    event.stopPropagation()
    const values = React.Children.toArray(this.props.children).map(item => item.props.value)
    this.props.onChange(values.filter(item => item !== value))
  }

  renderIcon(icon, className) {
    if (!icon) return null
    const {disabled, theme, size} = this.props
    return cloneElement(icon, {
      color: disabled ? theme.field.colors.disabled.text : (icon.props.color || theme.field.colors.default.text),
      size: icon.props.size || theme.field.sizes[size].icon,
      className: classnames(icon.props.className, className)
    })
  }

  render() {
    const {
      children,
      className,
      placeholder,
      style,
      disabled,
      inputStyle,
      inputClassName,
      size,
      variation,
      iconLeft,
      iconRight,
      status,
      sheet: { classes },
      isOpened,
      onMoreClick,
      ...other
    } = omit(this.props, ['theme', 'windowEvents', 'onChange'])

    const {visibleItemsCount} = this.state
    const resultClassName = classnames(
      className,
      classes.root,
      classes[variation],
      disabled && classes.isDisabled,
      isOpened && classes.isOpened,
      classes[size],
      classes[status],
      iconLeft && classes.withLeftIcon,
      iconRight && classes.withRightIcon
    )
    const count = React.Children.count(children)
    const items = React.Children.map(children, (child, index) => {
      if (!child.type || child.type.displayName !== 'ruiTagsInputItem')
        throw new Error('Child component should be instance of <TagsInputItem />')
      return cloneElement(child, {
        nodeRef: (ref) => {this.saveItemsRefs(ref, index, count)},
        className: classnames(classes.item, visibleItemsCount !== null && visibleItemsCount <= index && !isOpened && classes.isHidden),
        key: child.props.children,
        onClick: 'value' in child.props && !disabled ? this.onItemClick : null,
        disabled
      })
    })
    const moreCount = visibleItemsCount === null ? 0 : items.length - visibleItemsCount

    return (
      <div
        className={resultClassName}
        style={style}
        tabIndex={disabled ? null : 0}
        {...other}
      >
        {this.renderIcon(iconLeft, classes.iconLeft)}
        <div
          ref={this.saveContainerRef}
          className={classnames(inputClassName, classes.input)}
          style={inputStyle}
        >
          {items.length > 0
            ? items
            : placeholder && <div className={classes.placeholder}>{placeholder}</div>
          }
          {!isOpened &&
            <div
              className={classnames(classes.more, onMoreClick && classes.isClickable, moreCount === 0 && classes.isHidden)}
              role="button"
              ref={this.saveMoreButtonRef}
              onClick={onMoreClick}
            >
              + еще {moreCount}
            </div>
          }
        </div>
        {this.renderIcon(iconRight, classes.iconRight)}
      </div>
    )
  }
}
