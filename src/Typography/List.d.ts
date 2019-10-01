import {FC} from 'react'
import {TypographyProps} from './Typography'

export interface ListProps extends Omit<TypographyProps, 'type'> {
  numbered: boolean
}

declare const List: FC<ListProps>

export default Text
