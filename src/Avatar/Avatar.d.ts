import {PureComponent, ReactElement, HTMLProps} from 'react'

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

export interface AvatarProps<E> extends HTMLProps<E> {
  backgroundColor?: string
  iconBackgroundColor?: string
  src: string
  size?: number
  shape?: AvatarShape
  profileType?: ProfileType
  container?: ReactElement
}

export default class Avatar<E = HTMLDivElement> extends PureComponent<
  AvatarProps<E>,
  {}
> {}
