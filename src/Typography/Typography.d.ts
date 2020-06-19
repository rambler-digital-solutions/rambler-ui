import {PureComponent, HTMLAttributes} from 'react'

export interface BaseTypographyProps<T = HTMLDivElement>
  extends HTMLAttributes<T> {
  tagName?: string
  uppercase?: boolean
}

export type TypographyType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'text'
  | 'quote'
  | 'epigraph'
  | 'source'
  | 'timestamp'
  | 'description'
  | 'galleryDescription'
  | 'photoSource'
  | 'list'

export interface TypographyProps extends BaseTypographyProps {
  type?: TypographyType
}

export default class Typography extends PureComponent<TypographyProps, {}> {}
