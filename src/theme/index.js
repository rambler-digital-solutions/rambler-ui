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
const OWN_GENERATE_CLASS_NAME = '__RAMBLER_UI_GENERATE_CLASS_NAME__'

const theming = createTheming(RAMBLER_UI_THEME)
const {ThemeProvider} = theming

function wrapSheetsRegistry(registry) {
  if (registry[OWN_GENERATE_CLASS_NAME])
    return registry
  const generateClassName = createGenerateClassName()
  registry[OWN_GENERATE_CLASS_NAME] = generateClassName
  return registry
}

export {createGenerateClassName}

export const createJss = (options = {}) => {
  const {sheetsRegistry = globalSheetsRegistry, ...otherOptions} = options
  const generateClassName = wrapSheetsRegistry(sheetsRegistry)[OWN_GENERATE_CLASS_NAME]
  return originalCreateJss({
    createGenerateClassName: () => generateClassName,
    ...preset(otherOptions),
    ...otherOptions
  })
}

export const createSheetsRegistry = () => new SheetsRegistry()

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
      const sheetsRegistry = wrapSheetsRegistry(props.sheetsRegistry || props[RAMBLER_UI_SHEETS_REGISTRY] || globalSheetsRegistry)
      const jss = props.jss || props[RAMBLER_UI_JSS] || createJss({sheetsRegistry})
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
