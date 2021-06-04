export {default as withStyles} from 'react-jss'

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

export type Control = {
  default: string
  disabled: string
  icon: string
  background: string
  lightBackground: string
  activeBackground: string
  outline: string
  fieldOutline: string
  iconBackground: string
  placeholder: string
  fieldIcon: string
  disabledText: string
}

export type Controls = {
  grey: Control
}

export type Colors = {
  arrowBlueDark: string
  black: string
  blueDark: string
  blueLight: string
  controls: Controls
  danger: string
  dark: string
  fullDark: string
  light: string
  primary: string
  primaryDark: string
  purpleDeep: string
  snackbarBlueDark: string
  success: string
  warn: string
}

export const colors: Colors
export const i18n: object

export {default as createTheme} from './create-theme'
export * from './create-theme'
