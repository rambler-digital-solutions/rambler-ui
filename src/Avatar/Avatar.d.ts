import {CSSProperties, PureComponent, ReactElement} from 'react'

export type AvatarShape = 'circle' | 'square' | 'rounded'

export type ProfileType =
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

export interface AvatarProps {
  className?: string
  style?: CSSProperties
  backgroundColor?: string
  iconBackgroundColor?: string
  src: string
  size?: number
  shape?: AvatarShape
  profileType?: ProfileType
  href?: string
  container?: ReactElement
}

export default class Avatar extends PureComponent<AvatarProps, {}> {}
