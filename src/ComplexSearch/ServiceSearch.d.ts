import {CSSProperties, PureComponent, ReactNode} from 'react'

declare interface ServiceSearchProps {
  style?: CSSProperties;
  className?: string;
  inputWrapperClassName?: string;
  value?: string;
  searchButton?: ReactNode;
  searchIcon?: ReactNode;
  dropdownStyle?: CSSProperties;
  dropdownClassName?: string;
  placeholder?: string;
  onSearch?: (value: string, options: object) => any;
  onFocus: () => void;
  onBlur?: () => void;
  onSelectItem?: (value) => void;
  onClickItem?: (value) => void;
  onRemoveItem?: (value) => void;
  onHoverItem?: (value) => void;
  onSubmit?: (value: string, options: object) => void;
  onPressEnter?: (value: string, options: object) => void;
  appendToBody?: boolean;
  autoPositionY?: boolean;
  inputProps?: object;
  sourceButtonsProps?: () => any;
  size?: 'small' | 'medium';
  inputLeftIcon?: ReactNode;
}

export default class ServiceSearch extends PureComponent<ServiceSearchProps, {}> {}
