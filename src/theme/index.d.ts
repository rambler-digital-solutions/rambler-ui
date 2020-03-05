import {PureComponent} from 'react'
import {Jss, create, SheetsRegistry, GenerateId} from 'jss'
import withStyles, {withTheme, useTheme, createUseStyles} from 'react-jss'
import {Theme} from './base'

export const createJss: typeof create
export const createSheetsRegistry: () => SheetsRegistry
export const globalSheetsRegistry: SheetsRegistry
export const globalJss: Jss
export const createGenerateId: (themeId?: number) => GenerateId

export {withTheme, withStyles, useTheme, createUseStyles}

export interface ApplyThemeProps {
  theme?: Theme | ((theme: Theme) => Theme)
  jss?: Jss
  sheetsRegistry?: SheetsRegistry
  generateId?: GenerateId
}

export class ApplyTheme extends PureComponent<ApplyThemeProps, {}> {}
