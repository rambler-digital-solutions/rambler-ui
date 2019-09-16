import {CSSProperties, PureComponent, ReactNode} from 'react'

declare interface FixedOverlayProps {
  isOpened: boolean;
  anchorPointX: 'left' | 'right' | 'center';
  anchorPointY: 'top' | 'bottom' | 'center';
  contentPointX: 'left' | 'right' | 'center';
  contentPointY: 'top' | 'bottom' | 'center';
  autoPositionX?: boolean;
  autoPositionY?: boolean;
  anchor: ReactNode;
  content: ReactNode;
  contentWrapperRef?: () => any;
  onContentClose?: () => any;
  onContentOpen?: () => any;
  getWindowSize?: () => any;
  getElementRect?: () => any;
  getYScroll?: () => any;
  getXScroll?: () => any;
  cachePositionOptions?: boolean;
  closeOnScroll?: boolean;
  containerNodeClassName?: string;
  containerNodeStyle?: CSSProperties;
}

export default class FixedOverlay extends PureComponent<FixedOverlayProps, {}> {}
