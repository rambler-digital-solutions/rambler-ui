import React, {Component, cloneElement} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {withStyles} from '../theme'
import {isolateMixin, middleMixin} from '../utils/mixins'

const styles = theme => ({
  toggleOption: {
    extend: [isolateMixin, middleMixin],
    fontFamily: theme.fontFamily,
    display: 'inline-block',
    textAlign: 'center',
    userSelect: 'none',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    color: 'inherit',
    outline: 'none !important',
    background: 'transparent',
    '&::-moz-focus-inner': {
      border: 'none !important',
      outline: 'none !important'
    }
  },
  'size-small': {
    fontSize: theme.toggle.sizes.small.fontSize,
    height: theme.toggle.sizes.small.height,
    lineHeight: theme.toggle.sizes.small.height - 2 + 'px',
    padding: `0 ${theme.toggle.sizes.small.paddingHr}px`
  },
  'size-medium': {
    fontSize: theme.toggle.sizes.medium.fontSize,
    height: theme.toggle.sizes.medium.height,
    lineHeight: theme.toggle.sizes.medium.height - 2 + 'px',
    padding: `0 ${theme.toggle.sizes.medium.paddingHr}px`
  },
  icon: {
    display: 'inline-block',
    marginRight: 10
  }
})

class ToggleOption extends Component {
  static propTypes = {
    /**
     * Значение, соответствующее этой опции
     */
    value: PropTypes.any.isRequired,
    /**
     * Css-класс компонента
     */
    className: PropTypes.string,
    /**
     * Стили перелючателя
     */
    style: PropTypes.object,
    /**
     * Контент (обычно просто текст)
     */
    children: PropTypes.node,
    /**
     * Иконка
     */
    icon: PropTypes.node,
    /**
     * Коллбек клика на кнопку, в качестве аргументов принимает объект события
     */
    onClick: PropTypes.func,
    /**
     * Размер компонента (автоматически проставляется компонентом `<Toggle/>`)
     */
    size: PropTypes.oneOf(['small', 'medium']),
    /**
     * Выбрана ли эта опция (автоматически проставляется компонентом `<Toggle/>`)
     */
    isSelected: PropTypes.bool,
    /**
     * Колбек нажатия на кнопку (автоматически проставляется компонентом `<Toggle/>`)
     */
    onPress: PropTypes.func,
    /**
     * Колбек, принимающий ссылку на ноду (автоматически проставляется компонентом `<Toggle/>`)
     */
    nodeRef: PropTypes.func
  }

  onClick = event => {
    this.props.onPress(event, this.props.value)
    if (this.props.onClick) this.props.onClick(event)
  }

  renderIcon(icon) {
    if (icon) {
      const {size, isSelected, theme, classes} = this.props
      const iconProps = {
        size: theme.toggle.sizes[size].icon,
        color: isSelected ? theme.toggle.selectedColor : theme.toggle.color
      }
      const initialProps = icon.props || {}
      const className = classnames(initialProps.className, classes.icon)
      const resultProps = {...iconProps, ...initialProps, className}
      return cloneElement(icon, resultProps)
    }
  }

  render() {
    const {
      icon,
      size,
      children,
      className,
      nodeRef,
      classes,
      isSelected, // eslint-disable-line no-unused-vars
      onPress, // eslint-disable-line no-unused-vars
      theme, // eslint-disable-line no-unused-vars
      ...other
    } = this.props

    const resultClassName = classnames(
      classes.toggleOption,
      classes[`size-${size}`],
      className
    )

    return (
      <button
        type="button"
        tabIndex="0"
        {...other}
        className={resultClassName}
        onClick={this.onClick}
        ref={nodeRef}>
        {this.renderIcon(icon)}
        {children}
      </button>
    )
  }
}

export default withStyles(styles, {
  name: 'ToggleOption',
  displayName: 'ruiToggleOption'
})(ToggleOption)
