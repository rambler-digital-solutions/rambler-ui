import {FC} from 'react'
import {TypographyProps} from './Typography'

declare const Quote: FC<Omit<TypographyProps, 'type'>>

export default Quote
