import {CSSProperties, ReactNode, FC} from 'react'
import {Size} from '../..'

export interface SvgIconProps {
  className?: string
  style?: CSSProperties
  color?: string
  children?: ReactNode | ((size: number) => ReactNode)
  size: string | number | Size | 'large'
  viewBox: string
}

declare const SvgIcon: FC<SvgIconProps>

export default SvgIcon
