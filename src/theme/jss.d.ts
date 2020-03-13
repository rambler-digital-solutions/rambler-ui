import {Jss, create, SheetsRegistry, GenerateId} from 'jss'
import {withTheme, useTheme} from 'react-jss'

export const createJss: typeof create
export const createSheetsRegistry: () => SheetsRegistry
export const globalSheetsRegistry: SheetsRegistry
export const globalJss: Jss
export const createGenerateId: (themeId?: number) => GenerateId

export {withTheme, useTheme}
