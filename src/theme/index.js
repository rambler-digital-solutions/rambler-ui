import merge from 'lodash/merge'
import {create as originalCreateJss} from 'jss'
import originalInjectSheet, {createTheming, JssProvider, SheetsRegistry, createGenerateClassName} from 'react-jss'
import preset from 'jss-preset-default'
import compose from 'recompose/compose'
import withPropsOnChange from 'recompose/withPropsOnChange'
import base from './base'

const RAMBLER_UI_THEME = '__RAMBLER_UI_THEME__'
const theming = createTheming(RAMBLER_UI_THEME)
const {ThemeProvider} = theming

export {createGenerateClassName}
export const createJss = (options) => originalCreateJss(preset(options))
export const createSheetsRegistry = () => new SheetsRegistry()

/**
 * Делаем совместимым с нашим компонентом ApplyTheme
 */
export const ApplyTheme = compose(
  withPropsOnChange(
    () => false,
    ({theme = base}) => {
      // Создаем свойства один раз при создании компонента
      let resultTheme, currTheme, currParentTheme
      return {
        getResultTheme: (parentTheme) => {
          if (currTheme !== theme || currParentTheme !== parentTheme) {
            resultTheme = merge({}, parentTheme, theme)
            currParentTheme = parentTheme
            currTheme = theme
          }
          return resultTheme
        }
      }
    }
  )
)(({jss, sheetsRegistry, getResultTheme, generateClassName, children}) => {
  const provider = (
    <ThemeProvider theme={getResultTheme}>
      {children}
    </ThemeProvider>
  )
  if (!jss)
    return provider
  return (
    <JssProvider jss={jss} registry={sheetsRegistry} generateClassName={generateClassName}>
      {provider}
    </JssProvider>
  )
})

export const injectSheet = styles => originalInjectSheet(styles, {theming})
