import {PureComponent} from 'react'
import {JSS, create, SheetsRegistry, GenerateClassName} from 'jss'
import injectSheet, {withTheme} from 'react-jss'
import {Theme} from './base'

export const createJss: typeof create
export const createSheetsRegistry: () => SheetsRegistry
export const globalSheetsRegistry: SheetsRegistry
export const globalJss: JSS
export const createGenerateClassName: (themeId?: number) => GenerateClassName

export {withTheme, injectSheet}

export interface ApplyThemeProps {
  theme?: Theme | ((theme: Theme) => Theme)
  jss?: JSS
  sheetsRegistry?: SheetsRegistry
  generateClassName?: GenerateClassName
}

export class ApplyTheme extends PureComponent<ApplyThemeProps, {}> {}
