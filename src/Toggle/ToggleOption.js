/**
 * Опция компонента переключателя
 */
import React, { Component, PropTypes, cloneElement } from 'react'
import classnames from 'classnames'
import omit from 'lodash/omit'
import { injectSheet } from '../theme'
import { fontStyleMixin, isolateMixin, middleMixin } from '../style/mixins'

@injectSheet(theme => ({
  toggleOption: {
    ...middleMixin,
    ...isolateMixin,
    ...fontStyleMixin(theme.font),
    fontSize: theme.toggle.font.size,
    display: 'block',
    textAlign: 'center',
    userSelect: 'none',
    whiteSpace: 'nowrap',
    cursor: 'inherit',
    color: 'inherit'
  },
  'size-small': {
    height: theme.sizes.small.height,
    padding: `0 ${theme.toggle.sizes.small.paddingHr}px`
  },
  'size-medium': {
    height: theme.sizes.medium.height,
    padding: `0 ${theme.toggle.sizes.medium.paddingHr}px`
  },
  icon: {
    display: 'inline-block',
    marginRight: 10
  }
}))
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
    onPress: PropTypes.func
  };

  onClick = (event) => {
    this.props.onPress(event, this.props.value)
    if (this.props.onClick)
      this.props.onClick(event)
  };

  renderIcon(icon) {
    if (icon) {
      const {
        size,
        isSelected,
        theme,
        sheet: { classes: css }
      } = this.props
      const iconProps = {
        size: theme.sizes[size].icon,
        color: isSelected ? theme.toggle.selectedColor : theme.toggle.color
      }
      const initialProps = icon.props || {}
      const className = classnames(initialProps.className, css.icon)
      const resultProps = { ...iconProps, ...initialProps, className }
      return cloneElement(icon, resultProps)
    }
  }

  render() {
    /* eslint-disable no-unused-vars */
    const {
      icon,
      size,
      children,
      className,
      isSelected,
      onPress,
      sheet: { classes: css },
      ...other
    } = omit(this.props, 'theme')
    /* eslint-enable no-unused-vars */
    const resultClassName = classnames(css.toggleOption, css[`size-${size}`], className)
    return (
      <div { ...other } className={ resultClassName } onClick={ this.onClick }>
        { this.renderIcon(icon) }
        { children }
      </div>
    )
  }

}
ToggleOption.displayName = 'ruiToggleOption'
export default ToggleOption
