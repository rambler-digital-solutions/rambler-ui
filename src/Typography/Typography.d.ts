import {PureComponent, HTMLAttributes} from 'react'

export interface BaseTypographyProps<E> extends HTMLAttributes<E> {
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

export interface TypographyProps<E> extends BaseTypographyProps<E> {
  type?: TypographyType
}

export default class Typography<E = HTMLButtonElement> extends PureComponent<
  TypographyProps<E>,
  {}
> {}
