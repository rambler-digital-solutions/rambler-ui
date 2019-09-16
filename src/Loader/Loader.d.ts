import {CSSProperties, PureComponent, ReactNode} from 'react'

declare interface LoaderProps {
  className?: string;
  loadingClassName?: string;
  overlayClassName?: string;
  style?: CSSProperties;
  spinnerClassName?: string;
  spinnerColor?: string;
  loading?: boolean | object | Promise<any>;
  children?: ReactNode;
  hideContent?: boolean;
  blurContent?: boolean;
}

export default class Loader extends PureComponent<LoaderProps, {}> {}
