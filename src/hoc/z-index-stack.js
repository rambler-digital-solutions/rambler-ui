import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import getDisplayName from '../utils/get-display-name'

/**
 * Функция, задающая контекс zIndex
 * 1. Достаем значение zIndex в стеке
 * 2. Прибавляем к нему zIndex и пробрасываем его как props
 * 3. Сохраняем новый zIndex в context
 */
export default function zIndexStack(initialZIndex) {
  return Target =>
    class extends PureComponent {
      static displayName = `zIndexStack(${getDisplayName(Target)})`

      static propTypes = {
        zIndex: PropTypes.number
      }

      static defaultProps = {
        zIndex: initialZIndex
      }

      static contextTypes = {
        ruiZIndex: PropTypes.number
      }

      static childContextTypes = {
        ruiZIndex: PropTypes.number
      }

      zIndex = (this.context.ruiZIndex || 0) + this.props.zIndex

      getChildContext() {
        return {
          ruiZIndex: this.zIndex
        }
      }

      render() {
        return <Target {...this.props} zIndex={this.zIndex} />
      }
    }
}
