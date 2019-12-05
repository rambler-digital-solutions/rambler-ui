import {Ref, Component, PureComponent, FC} from 'react'

export interface RenderToLayerProps {
  isOpened?: boolean
  zIndex?: number
  onOpen?: () => void | Promise<void>
  onClose?: () => void | Promise<void>
  containerRef?: Ref<HTMLElement>
}

declare const renderToLayer: <T = {}>(
  Target: Component<T> | PureComponent<T> | FC<T>
) => PureComponent<RenderToLayerProps & T>

export default renderToLayer
