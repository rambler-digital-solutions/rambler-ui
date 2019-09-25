import {PureComponent, ReactNode} from 'react'
import {TypographyType} from '../index'

export interface TypographyProps {
  type?: TypographyType
  tagName?: string
  children?: ReactNode
  uppercase?: boolean
}

export default class Typography extends PureComponent<TypographyProps, {}> {}
