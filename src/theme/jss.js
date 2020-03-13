import {createContext} from 'react'
import jss, {
  create as originalCreateJss,
  createGenerateId as originalCreateGenerateId
} from 'jss'
import {createTheming, SheetsRegistry} from 'react-jss'
import preset from 'jss-preset-default'

export const RAMBLER_UI_CLASS_NAME_PREFIX = 'rui-'
export const RAMBLER_UI_DISPLAY_NAME_PREFIX =
  '__RAMBLER_UI_DISPLAY_NAME_PREFIX__'

export const ThemeContext = createContext({})
export const ThemeProviderContext = createContext({})

export const theming = createTheming(ThemeContext)

export const {ThemeProvider: JssThemeProvider, withTheme, useTheme} = theming

export const createJss = (options = {}) =>
  originalCreateJss({
    ...preset(options),
    ...options
  })

export const createSheetsRegistry = () => new SheetsRegistry()

export const globalJss = createJss()
export const globalSheetsRegistry = createSheetsRegistry()

export const createGenerateId = (themeId = 0) => {
  const generateId = originalCreateGenerateId()
  return (rule, sheet) => {
    const displayNamePrefix = sheet
      ? sheet.options[RAMBLER_UI_DISPLAY_NAME_PREFIX]
      : ''
    if (!displayNamePrefix) return generateId(rule, sheet)
    const jssId = sheet ? sheet.options.jss.id : globalJss.id
    const jssCounter = jssId === globalJss.id ? '' : `-${jssId}`
    const themeCounter = themeId === 0 ? '' : `-${themeId}`
    return (
      RAMBLER_UI_CLASS_NAME_PREFIX +
      displayNamePrefix +
      rule.key +
      jssCounter +
      themeCounter
    )
  }
}

jss.setup({createGenerateId})
