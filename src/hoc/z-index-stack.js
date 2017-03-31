import {PropTypes} from 'react'
import compose from 'recompose/compose'
import getContext from 'recompose/getContext'
import withProps from 'recompose/withProps'
import withContext from 'recompose/withContext'

/**
 * Функция, задающая контекс zIndex
 * 1. Достаем значение zIndex в стеке
 * 2. Прибавляем к нему zIndex и пробрасываем его как props
 * 3. Сохраняем новый zIndex в context
 */
export default function zIndexStack(initialZIndex) {
  return compose(
    getContext({
      ruiZIndex: PropTypes.number
    }),
    withProps(({ruiZIndex}) => ({
      zIndex: (ruiZIndex || 0) + initialZIndex
    })),
    withContext({
      ruiZIndex: PropTypes.number
    }, ({zIndex}) => ({
      ruiZIndex: zIndex
    }))
  )
}

