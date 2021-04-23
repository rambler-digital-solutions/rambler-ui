import React, {useContext, forwardRef} from 'react'
import {JssContext} from 'react-jss'
import {
  globalJss,
  globalSheetsRegistry,
  createGenerateId,
  ThemeProviderContext,
  JssThemeProvider
} from './jss'
import baseTheme from './base'

const generateId = createGenerateId()
const managers = {}

const globalJssContext = {
  generateId,
  managers,
  jss: globalJss,
  registry: globalSheetsRegistry
}

const getBaseTheme = () => baseTheme

export default function withBaseTheme(Component) {
  const WithThemeProvider = forwardRef(function WithThemeProvider(props, ref) {
    const themeContext = useContext(ThemeProviderContext)
    if (themeContext.jss) return <Component ref={ref} {...props} />
    return (
      <JssContext.Provider value={globalJssContext}>
        <JssThemeProvider theme={getBaseTheme}>
          <Component ref={ref} {...props} />
        </JssThemeProvider>
      </JssContext.Provider>
    )
  })
  return WithThemeProvider
}
