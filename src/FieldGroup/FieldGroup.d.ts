import {CSSProperties, PureComponent} from 'react'

export interface FieldGroupProps {
  className?: string
  style?: CSSProperties
  size?: 'small' | 'medium'
  variation?: 'regular' | 'awesome' | 'promo'
  status?: 'error' | 'warning' | 'success' | null
  disabled?: boolean
  showDivider?: boolean
}

export default class FieldGroup extends PureComponent<FieldGroupProps, {}> {}
