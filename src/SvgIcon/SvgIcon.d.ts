import {ReactNode, FC, SVGAttributes, Ref} from 'react'
import {Size} from '../'

export interface SvgIconProps extends Omit<SVGAttributes<SVGElement>, 'color'> {
  children?: ReactNode | ((size: number) => ReactNode)
  size?: string | number | Size | 'large' | null
  color?: string | null
  viewbox?: string | ((size: number) => string)
  nodeRef?: Ref<HTMLElement>
}

declare const SvgIcon: FC<SvgIconProps>

export default SvgIcon
