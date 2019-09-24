import {PureComponent, ReactNode} from 'react'

export interface TypographyProps {
  type?:
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
  tagName?: string
  children?: ReactNode
  uppercase?: boolean
}

export default class Typography extends PureComponent<TypographyProps, {}> {}
