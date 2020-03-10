export {default as withStyles, createUseStyles} from 'react-jss'

export {
  createJss,
  createSheetsRegistry,
  createGenerateId,
  globalJss,
  globalSheetsRegistry,
  withTheme,
  useTheme
} from './jss'

export {default as ThemeProvider} from './ThemeProvider'
export * from './ThemeProvider'

export const colors: object
export const i18n: object

export {default as createTheme} from './create-theme'
export * from './create-theme'
