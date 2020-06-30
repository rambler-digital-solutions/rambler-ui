import {FC} from 'react'
import {BaseTypographyProps} from './Typography'

export interface OListProps extends BaseTypographyProps<HTMLOListElement> {
  numbered: true
}

export interface UListProps extends BaseTypographyProps<HTMLUListElement> {
  numbered: false
}

export type ListProps = OListProps | UListProps

declare const List: FC<ListProps>

export default Text
