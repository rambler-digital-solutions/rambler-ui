import {CSSProperties, PureComponent} from 'react'

declare interface SimpleSearchProps {
  style?: CSSProperties;
  className?: string;
  inputWrapperClassName?: string;
  value?: string;
  showSearchButton?: boolean;
  placeholder?: string;
  onSearch?: (value: string, options: object) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onSubmit?: (value: string, options: object) => void;
  onPressEnter?: (value: string, options: object) => void;
  inputProps?: object;
  sourceButtonsProps?: () => any;
  searchButtonProps?: object;
  size?: 'small' | 'medium';
  sourceType?: boolean;
  serviceTooltipLabel?: string;
}

export default class SimpleSearch extends PureComponent<SimpleSearchProps, {}> {}
