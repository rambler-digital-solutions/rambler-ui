import React from 'react'
import PropTypes from 'prop-types'

const sizeMap = {
  small: 15,
  medium: 20,
  large: 25
}

export default function SvgIcon({
  children,
  color,
  size,
  style,
  viewBox,
  nodeRef,
  ...other
}) {
  const resultSize = sizeMap[size] || size

  const resultStyle = {
    width: resultSize,
    height: resultSize,
    display: 'inline-block',
    userSelect: 'none',
    fill: color,
    ...style
  }

  const resultChildren =
    typeof children === 'function' ? children(resultSize) : children

  return (
    <svg {...other} ref={nodeRef} viewBox={viewBox} style={resultStyle}>
      {resultChildren}
    </svg>
  )
}

SvgIcon.propTypes = {
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
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
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
  viewBox: PropTypes.string,
  /**
   * Коллбэк для передачи ссылки на ноду svg элемента
   */
  nodeRef: PropTypes.func
}

SvgIcon.defaultProps = {
  viewBox: '0 0 20 20',
  size: 'medium',
  style: {},
  color: 'black'
}
