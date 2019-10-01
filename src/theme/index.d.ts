import {PureComponent} from 'react'

export interface ApplyThemeProps {
  theme?: object
  jss?: object
  sheetsRegistry?: object
  generateClassName?: () => any
}

export class ApplyTheme extends PureComponent<ApplyThemeProps, {}> {}
