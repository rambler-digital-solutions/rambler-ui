import {CSSProperties, ReactNode, FC, SVGProps} from 'react'
import {Size} from '../..'

export interface SvgIconProps extends SVGProps<SVGElement> {
  children?: ReactNode | ((size: number) => ReactNode)
  size?: string | number | Size | 'large'
}

declare const SvgIcon: FC<SvgIconProps>

export default SvgIcon
