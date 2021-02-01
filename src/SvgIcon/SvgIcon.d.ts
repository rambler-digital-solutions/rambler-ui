import {ReactNode, FC, SVGAttributes, Ref} from 'react'
import {Size} from '../'

export interface SvgIconProps extends SVGAttributes<SVGElement> {
  children?: ReactNode | ((size: number) => ReactNode)
  size?: string | number | Size | 'large'
  viewbox?: string | ((size: number) => string)
  nodeRef?: Ref<HTMLElement>
}

declare const SvgIcon: FC<SvgIconProps>

export default SvgIcon
