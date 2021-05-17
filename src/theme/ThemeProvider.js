import React, {useContext, useMemo, useCallback, useRef} from 'react'
import PropTypes from 'prop-types'
import deepmerge from 'deepmerge'
import {JssProvider} from 'react-jss'
import {
  globalJss,
  globalSheetsRegistry,
  createGenerateId,
  ThemeProviderContext,
  JssThemeProvider
} from './jss'
import baseTheme from './base'

const RAMBLER_UI_THEME_COUNTER = '__RAMBLER_UI_THEME_COUNTER__'

export default function ThemeProvider(props) {
  const context = useContext(ThemeProviderContext)

  const currentTheme = useRef()
  const currentParentTheme = useRef()
  const resultTheme = useRef()

  const jss = props.jss || context.jss || globalJss

  const sheetsRegistry =
    props.sheetsRegistry || context.sheetsRegistry || globalSheetsRegistry

  const themeContext = useMemo(() => ({jss, sheetsRegistry}), [
    jss,
    sheetsRegistry
  ])

  const themeId = useMemo(
    () =>
      sheetsRegistry[RAMBLER_UI_THEME_COUNTER] == null
        ? (sheetsRegistry[RAMBLER_UI_THEME_COUNTER] = 0)
        : ++sheetsRegistry[RAMBLER_UI_THEME_COUNTER],
    [sheetsRegistry]
  )

  const generateId = useMemo(
    () => props.generateId || createGenerateId(themeId),
    [props.generateId, themeId]
  )

  const getResultTheme = useCallback(
    parentTheme => {
      const {theme = baseTheme} = props
      if (
        currentTheme.current !== theme ||
        currentParentTheme.current !== parentTheme
      ) {
        resultTheme.current = parentTheme
          ? deepmerge(parentTheme, theme)
          : theme
        currentParentTheme.current = parentTheme
        currentTheme.current = theme
      }
      return resultTheme.current
    },
    [props.theme]
  )

  return (
    <ThemeProviderContext.Provider value={themeContext}>
      <JssProvider jss={jss} registry={sheetsRegistry} generateId={generateId}>
        <JssThemeProvider theme={getResultTheme}>
          {props.children}
        </JssThemeProvider>
      </JssProvider>
    </ThemeProviderContext.Provider>
  )
}

ThemeProvider.propTypes = {
  theme: PropTypes.object,
  jss: PropTypes.object,
  sheetsRegistry: PropTypes.object,
  generateId: PropTypes.func,
  children: PropTypes.node
}
