import {FC} from 'react'
import {TypographyProps} from './Typography'

declare const Text: FC<Omit<TypographyProps, 'type'>>

export default Text
