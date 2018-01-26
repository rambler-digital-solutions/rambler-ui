import React from 'react'
import merge from 'lodash/merge'
import {object} from 'prop-types'
import {create as originalCreateJss} from 'jss'
import originalInjectSheet, {createTheming, JssProvider, SheetsRegistry} from 'react-jss'
import preset from 'jss-preset-default'
import compose from 'recompose/compose'
import getContext from 'recompose/getContext'
import withContext from 'recompose/withContext'
import withPropsOnChange from 'recompose/withPropsOnChange'
import base from './base'

const RAMBLER_UI_THEME = '__RAMBLER_UI_THEME__'
const RAMBLER_UI_JSS = '__RAMBLER_UI_JSS__'
const RAMBLER_UI_SHEETS_REGISTRY = '__RAMBLER_UI_SHEETS_REGISTRY__'
const RAMBLER_UI_THEME_COUNTER = '__RAMBLER_UI_THEME_COUNTER__'

const theming = createTheming(RAMBLER_UI_THEME)
const {ThemeProvider} = theming

const defaultPrefix = 'rui-'

export const createJss = (options = {}) => originalCreateJss({
  ...preset(options),
  ...options
})

export const createSheetsRegistry = () => new SheetsRegistry()

export const globalSheetsRegistry = createSheetsRegistry()
export const globalJss = createJss()

export const createGenerateClassName = themeId => (rule, sheet) => {
  const prefix = sheet ? (sheet.options.classNamePrefix || defaultPrefix) : defaultPrefix
  const jssId = sheet ? sheet.options.jss.id : globalJss.id
  const jssCounter = jssId === globalJss.id ? '' : `-${jssId}`
  const themeCounter = themeId === 0 ? '' : `-${themeId}`
  return prefix + rule.key + jssCounter + themeCounter
}

/**
 * Делаем совместимым с нашим компонентом ApplyTheme
 */
export const ApplyTheme = compose(
  getContext({
    [RAMBLER_UI_JSS]: object,
    [RAMBLER_UI_SHEETS_REGISTRY]: object
  }),
  withPropsOnChange(
    () => false,
    ({theme = base, ...props}) => {
      // Создаем свойства один раз при создании компонента
      let resultTheme, currTheme, currParentTheme
      const sheetsRegistry = props.sheetsRegistry || props[RAMBLER_UI_SHEETS_REGISTRY] || globalSheetsRegistry
      const jss = props.jss || props[RAMBLER_UI_JSS] || globalJss
      if (sheetsRegistry[RAMBLER_UI_THEME_COUNTER] == null)
        sheetsRegistry[RAMBLER_UI_THEME_COUNTER] = 0
      const themeId = sheetsRegistry[RAMBLER_UI_THEME_COUNTER]++
      const generateClassName = props.generateClassName || createGenerateClassName(themeId)

      return {
        jss,
        sheetsRegistry,
        generateClassName,
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
  ),
  withContext(
    {
      [RAMBLER_UI_JSS]: object,
      [RAMBLER_UI_SHEETS_REGISTRY]: object
    },
    ({jss, sheetsRegistry}) => ({
      [RAMBLER_UI_JSS]: jss,
      [RAMBLER_UI_SHEETS_REGISTRY]: sheetsRegistry
    })
  )
)(({jss, sheetsRegistry, getResultTheme, generateClassName, children}) => (
  <JssProvider jss={jss} registry={sheetsRegistry} generateClassName={generateClassName}>
    <ThemeProvider theme={getResultTheme}>
      {children}
    </ThemeProvider>
  </JssProvider>
))

export const injectSheet = styles => originalInjectSheet(styles, {theming})
