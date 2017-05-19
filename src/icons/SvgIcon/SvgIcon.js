import React, { PropTypes, Component } from 'react'

export default class SvgIcon extends Component {

  static propTypes = {
    /**
     * Дополнительный класс для иконки
     */
    className: PropTypes.string,
    /**
     * Дополнительные инлайновые стили для иконки
     */
    style: PropTypes.object,
    /**
     * Цвет иконки
     */
    color: PropTypes.string,
    /**
     * Применять ли свойство `color`, используется исключительно для иконок `icons/profiles`
     */
    applyColor: PropTypes.bool,
    /**
     * Элементы, которые отрисуются внутри svg-элемента
     */
    children: PropTypes.node,
    /**
     * Размер иконки. Может быть строкой или значением в пикселях
     */
    size: PropTypes.oneOfType([
      PropTypes.oneOf(['small', 'medium', 'large']),
      PropTypes.number
    ]),
    /**
     * Атрибут viewBox svg-элемента
     */
    viewBox: PropTypes.string
  };

  static defaultProps = {
    viewBox: '0 0 20 20',
    size: 'medium',
    style: {}
  };

  sizeMap = {
    small: 15,
    medium: 20,
    large: 25
  }

  render() {
    const {
      children,
      color,
      size,
      style,
      viewBox,
      ...other
    } = this.props
    const resultSize = this.sizeMap[size] || size
    const resultStyle = {
      width: resultSize,
      height: resultSize,
      display: 'inline-block',
      userSelect: 'none',
      fill: color,
      ...style
    }

    return (
      <svg { ...other }
        viewBox={ viewBox }
        style={ resultStyle }>
        { children }
      </svg>
    )
  }

}
