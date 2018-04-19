import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
     * Элементы, которые отрисуются внутри svg-элемента,
     * ожидается `ReactElement` или функция возвращающая его и получающая размер как аргумент `size => ReactElement`
     */
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.func
    ]),
    /**
     * Размер иконки. Может быть строкой или значением в пикселях
     */
    size: PropTypes.oneOfType([
      PropTypes.oneOf(['small', 'medium', 'large']),
      PropTypes.number,
      PropTypes.string
    ]),
    /**
     * Атрибут viewBox svg-элемента
     */
    viewBox: PropTypes.string
  };

  static defaultProps = {
    viewBox: '0 0 20 20',
    size: 'medium',
    style: {},
    color: 'black'
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

    const resultChildren = typeof children === 'function' ?
      children(resultSize) :
      children

    return (
      <svg { ...other } viewBox={ viewBox } style={ resultStyle }>
        { resultChildren }
      </svg>
    )
  }

}
