import React from 'react'
import merge from 'lodash/merge'
import {object} from 'prop-types'
import {create as originalCreateJss} from 'jss'
import originalInjectSheet, {createTheming, JssProvider, SheetsRegistry, createGenerateClassName} from 'react-jss'
import preset from 'jss-preset-default'
import compose from 'recompose/compose'
import getContext from 'recompose/getContext'
import withContext from 'recompose/withContext'
import withPropsOnChange from 'recompose/withPropsOnChange'
import base from './base'

const RAMBLER_UI_THEME = '__RAMBLER_UI_THEME__'
const RAMBLER_UI_JSS = '__RAMBLER_UI_JSS__'
const RAMBLER_UI_SHEETS_REGISTRY = '__RAMBLER_UI_SHEETS_REGISTRY__'

const theming = createTheming(RAMBLER_UI_THEME)
const {ThemeProvider} = theming

export {createGenerateClassName}

export const createJss = (options) => {
  const generateClassName = createGenerateClassName()
  return originalCreateJss({
    ...options,
    ...preset(options),
    createGenerateClassName: () => generateClassName
  })
}

export const createSheetsRegistry = () => new SheetsRegistry()

const globalJss = createJss()
const globalSheetsRegistry = createSheetsRegistry()

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
      const shouldAddJssProvider = !!props.jss || !props[RAMBLER_UI_JSS]
      const jss = props.jss || props[RAMBLER_UI_JSS] || globalJss
      const sheetsRegistry = props.sheetsRegistry || props[RAMBLER_UI_SHEETS_REGISTRY] || globalSheetsRegistry
      return {
        jss,
        sheetsRegistry,
        shouldAddJssProvider,
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
)(({jss, sheetsRegistry, getResultTheme, generateClassName, shouldAddJssProvider, children}) => {
  const provider = (
    <ThemeProvider theme={getResultTheme}>
      {children}
    </ThemeProvider>
  )
  if (!shouldAddJssProvider)
    return provider
  return (
    <JssProvider jss={jss} registry={sheetsRegistry} generateClassName={generateClassName}>
      {provider}
    </JssProvider>
  )
})

export const injectSheet = styles => originalInjectSheet(styles, {theming})
