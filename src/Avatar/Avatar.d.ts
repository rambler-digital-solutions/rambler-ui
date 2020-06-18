import {PureComponent, ReactElement, HTMLAttributes} from 'react'

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

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  backgroundColor?: string
  iconBackgroundColor?: string
  src: string
  size?: number
  shape?: AvatarShape
  profileType?: ProfileType
  container?: ReactElement
}

export default class Avatar extends PureComponent<AvatarProps, {}> {}
