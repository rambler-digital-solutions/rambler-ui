import {PureComponent} from 'react'
import {Jss, SheetsRegistry, GenerateId} from 'jss'
import {Theme} from './create-theme'

export interface ThemeProviderProps {
  theme?: Theme | ((theme: Theme) => Theme)
  jss?: Jss
  sheetsRegistry?: SheetsRegistry
  generateId?: GenerateId
  children: React.ReactNode
}

export default class ThemeProvider extends PureComponent<
  ThemeProviderProps,
  {}
> {}
