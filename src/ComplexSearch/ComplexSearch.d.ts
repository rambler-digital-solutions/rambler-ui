import {CSSProperties, PureComponent, ReactNode} from 'react'

declare interface ComplexSearchProps {
  style?: CSSProperties;
  className?: string;
  inputWrapperClassName?: string;
  value?: string;
  searchButton?: ReactNode;
  searchButtonStyle?: CSSProperties;
  searchButtonClassName?: string;
  searchIcon?: ReactNode;
  inputLeftIcon?: ReactNode;
  dropdownStyle?: CSSProperties;
  dropdownClassName?: string;
  division?: string;
  placeholder?: string;
  onSearch?: (value: string, options: object) => void | any;
  onFocus?: () => any;
  onBlur?: () => any;
  onSelectItem?: (value) => any;
  onClickItem?: (value) => any;
  onRemoveItem?: (value) => any;
  onHoverItem?: (value) => any;
  onSubmit?: (value: string, options: object) => any;
  onPressEnter?: (value: string, options: object) => any;
  appendToBody?: boolean;
  autoPositionY?: boolean;
  inputProps?: object;
  sourceButtonsProps?: () => any;
  serviceTooltipLabel?: string;
  searchButtonProps?: object;
  sourceType?: boolean;
  size?: 'small' | 'medium';
}

export default class ComplexSearch extends PureComponent<ComplexSearchProps, {}> {}
