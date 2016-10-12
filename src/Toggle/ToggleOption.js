/**
 * Опция компонента переключателя
 */
import React, { Component, PropTypes, cloneElement } from 'react'
import colors from '../variables/colors'
import classnames from 'classnames'
import { injectSheet } from '../theme'
import { fontStyleMixin, middleMixin } from '../style/mixins'

@injectSheet(theme => ({
  ToggleOption: {
    ...middleMixin,
    ...fontStyleMixin(theme.font),
    isolate: true,
    fontSize: 13,
    display: 'block',
    textAlign: 'center',
    padding: '0 15px',
    userSelect: 'none',
    whiteSpace: 'nowrap',
    cursor: 'inherit',
    color: 'inherit',
    '&--size-small': { height: 35 },
    '&--size-medium': {
      height: 45,
      padding: '0 25px'
    },
    '&__icon': {
      display: 'inline-block',
      marginRight: '10px'
    }
  }
}))
export default class ToggleOption extends Component {

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
        sheet: { classes: css }
      } = this.props
      const iconProps = {
        size,
        color: isSelected ? colors.blue : colors.black
      }
      const initialProps = icon.props || {}
      const className = classnames(initialProps.className, css.ToggleOption__icon)
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
    } = this.props
    /* eslint-enable no-unused-vars */
    const resultClassName = classnames(css.ToggleOption, className, css[`ToggleOption--size-${size}`], {
      [css['is-selected']]: isSelected
    })

    return (
      <div { ...other } className={ resultClassName } onClick={this.onClick}>
        { this.renderIcon(icon) }
        { children }
      </div>
    )
  }

}
