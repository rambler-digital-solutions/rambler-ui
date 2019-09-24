import {CSSProperties, PureComponent, ReactNode} from 'react'

export interface AvatarProps {
  className?: string
  style?: CSSProperties
  backgroundColor?: string
  iconBackgroundColor?: string
  src: string
  size?: number
  shape?: 'circle' | 'square' | 'rounded'
  profileType?:
    | 'facebook'
    | 'championat'
    | 'google'
    | 'instagram'
    | 'livejournal'
    | 'mailru'
    | 'odnoklassniki'
    | 'pgumosru'
    | 'rambler'
    | 'twitter'
    | 'vkontakte'
  href?: string
  container?: ReactNode
}

export default class Avatar extends PureComponent<AvatarProps, {}> {
  render(): ReactNode
}
