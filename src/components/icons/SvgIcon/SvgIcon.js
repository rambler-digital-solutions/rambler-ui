import { PropTypes } from 'react'
import { colors } from '../../../../variables'

export default class SvgIcon {

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
     * Элементы, которые отрисуются внутри svg-элемента
     */
    children: PropTypes.node,
    /**
     * Размер иконки
     */
    size: PropTypes.oneOfType([
      PropTypes.oneOf(['small', 'medium', 'large']),
      React.PropTypes.number
    ])
  };

  static defaultProps = {
    color: 'dark',
    viewBox: '0 0 24 24',
    size: 'medium',
    style: {}
  };

  sizeMap = {
    small: 12
    medium: 20
    large: 30
  }

  render() {
    const {
      children,
      color,
      size,
      style,
      ...other
    } = this.props

    const resultColor = colors[color] || color
    const resultSize = this.sizeMap[size] || size
    const resultStyle = {
      width: resultSize,
      height: resultSize,
      display: 'inline-block',
      userSelect: 'none'
      ...style
    }

    return (
      <svg { ...other }
        fill={ resultColor }
        viewBox={ viewBox }
        style={ resultStyle }>
        { children }
      </svg>
    )
  }

}
