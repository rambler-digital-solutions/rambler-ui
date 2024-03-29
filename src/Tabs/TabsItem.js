import React, {Component, cloneElement, isValidElement} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {withStyles} from '../theme'
import {isolateMixin, focusSourceMixin} from '../utils/mixins'
import {subscribeFocusEvents} from '../utils/focus-source'
import {TabsContext} from './context'

subscribeFocusEvents()

const setThemeForSelector = colors => ({
  borderColor: colors.border,
  color: colors.text,
  textDecoration: colors.textDecoration
})

const styles = theme => {
  const {sizes, colors} = theme.tabs
  return {
    tab: {
      extend: isolateMixin,
      display: 'inline-block',
      userSelect: 'none',
      whiteSpace: 'nowrap',
      cursor: 'pointer',
      outline: 'none !important',
      borderStyle: 'solid',
      borderWidth: 0,
      background: 'none',
      fontWeight: theme.tabs.fontWeight,
      transitionDuration: theme.tabs.animationDuration,
      transitionProperty: 'color, border-color',
      '&::-moz-focus-inner': {
        border: 'none !important',
        outline: 'none !important'
      },
      '&&': setThemeForSelector(colors.default),
      '&$isEnabled$isSelected': setThemeForSelector(colors.selected),
      '&$isEnabled$isSelected:hover': setThemeForSelector(colors.selectedHover),
      '&$isEnabled$isSelected:active': setThemeForSelector(
        colors.selectedActive
      ),
      '&$isEnabled:hover': setThemeForSelector(colors.hover),
      ...focusSourceMixin(
        'other',
        '&$isEnabled:focus',
        setThemeForSelector(colors.hover)
      ),
      '&$isEnabled:active': setThemeForSelector(colors.active),
      '&$isDisabled': setThemeForSelector(colors.disabled),
      '&$isDisabled$isSelected': setThemeForSelector(colors.disabledSelected)
    },
    ...['top', 'bottom'].reduce(
      (positionResult, position) => ({
        ...positionResult,
        [`position-${position}`]: {
          [`border${position === 'top' ? 'Bottom' : 'Top'}Width`]: theme.tabs
            .borderWidth,
          ...['small', 'medium'].reduce(
            (sizeResult, size) => ({
              ...sizeResult,
              [`&$size-${size}`]: {
                [`padding${position === 'top' ? 'Bottom' : 'Top'}`]: sizes[size]
                  .verticalPadding
              }
            }),
            {}
          )
        }
      }),
      {}
    ),
    'size-small': {
      fontSize: sizes.small.fontSize,
      lineHeight: sizes.small.lineHeight,
      letterSpacing: sizes.small.letterSpacing,
      textTransform: sizes.small.textTransform
    },
    'size-medium': {
      fontSize: sizes.medium.fontSize,
      lineHeight: sizes.medium.lineHeight,
      letterSpacing: sizes.medium.letterSpacing,
      textTransform: sizes.medium.textTransform
    },
    isDisabled: {
      cursor: 'not-allowed',
      pointerEvents: 'none'
    },
    isEnabled: {},
    isSelected: {}
  }
}

class TabsItem extends Component {
  static propTypes = {
    /**
     * Значение, соответствующее этому табу
     */
    value: PropTypes.any,
    /**
     * Css-класс компонента
     */
    className: PropTypes.string,
    /**
     * Стили таба
     */
    style: PropTypes.object,
    /**
     * Контент (обычно просто текст)
     */
    children: PropTypes.node,
    /**
     * Размер компонента (автоматически проставляется компонентом `<Tabs/>`)
     */
    size: PropTypes.oneOf(['small', 'medium']),
    /**
     * Позиционирование таба (автоматически проставляется компонентом `<Tabs/>`)
     */
    position: PropTypes.oneOf(['top', 'bottom']),
    /**
     * Выбран ли этот таб (автоматически проставляется компонентом `<Tabs/>`)
     */
    isSelected: PropTypes.bool,
    /**
     * Отключаем кнопку/ссылку (автоматически проставляется компонентом `<Tabs/>`)
     */
    disabled: PropTypes.bool,
    /**
     * Элемент, который содержит контент, например `<Link />` в случае с `react-router`, или `<a />` если необходима ссылка.
     * Если используется `<NavLink />` с `activeClassName`,
     * нужно в `container` передавать фабрику, которая получает `activeClassName` в аргументах
     */
    container: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    /**
     * Колбек нажатия на элемент (автоматически проставляется компонентом `<Tabs/>`)
     */
    onPress: PropTypes.func
  }

  static defaultProps = {
    size: 'small',
    position: 'top',
    isSelected: false,
    disabled: false
  }

  static contextType = TabsContext

  handleClick = event => {
    const {props} = this
    if (!props.onPress) return
    props.onPress(event, props.value)
  }

  render() {
    const {
      container,
      children,
      className,
      isSelected,
      disabled,
      size,
      position,
      classes,
      value, // eslint-disable-line no-unused-vars
      theme, // eslint-disable-line no-unused-vars
      onPress, // eslint-disable-line no-unused-vars
      ...other
    } = this.props

    const resultClassName = classnames(
      className,
      classes.tab,
      classes[`position-${position}`],
      classes[`size-${size}`],
      disabled ? classes.isDisabled : classes.isEnabled,
      isSelected && classes.isSelected
    )

    const elemProps = {
      ...other,
      className: resultClassName,
      onClick: this.handleClick
    }

    let element
    let isLink
    if (container && isValidElement(container)) {
      element = container
      isLink = true
    } else if (typeof container === 'function') {
      element = container({activeClassName: classes.isSelected})
      isLink = true
    } else {
      element = (
        <button
          type="button"
          disabled={disabled}
          role="tab"
          aria-selected={isSelected}
          aria-controls={`${value}_tab`}
          data-value={value}
        />
      )
    }

    if (isLink) {
      elemProps['aria-disabled'] = disabled
      elemProps.tabIndex = disabled ? -1 : null
    }

    return cloneElement(element, elemProps, children)
  }
}

export default withStyles(styles, {name: 'TabsItem'})(TabsItem)
