import React, {Component, createContext} from 'react'
import PropTypes from 'prop-types'
import getDisplayName from '../utils/get-display-name'

const ZIndexStackContext = createContext({})

/**
 * Функция, задающая контекс zIndex
 * 1. Достаем значение zIndex в стеке
 * 2. Прибавляем к нему zIndex и пробрасываем его как props
 * 3. Сохраняем новый zIndex в context
 */
export default function zIndexStack(initialZIndex) {
  return Target =>
    class extends Component {
      static displayName = `zIndexStack(${getDisplayName(Target)})`

      static propTypes = {
        zIndex: PropTypes.number
      }

      static defaultProps = {
        zIndex: initialZIndex
      }

      static contextType = ZIndexStackContext

      zIndex = (this.context.ruiZIndex || 0) + this.props.zIndex

      get contextValue() {
        return {
          ruiZIndex: this.zIndex
        }
      }

      render() {
        return (
          <ZIndexStackContext.Provider value={this.contextValue}>
            <Target {...this.props} zIndex={this.zIndex} />
          </ZIndexStackContext.Provider>
        )
      }
    }
}
