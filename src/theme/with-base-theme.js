import React, {useContext, forwardRef} from 'react'
import {JssProvider} from 'react-jss'
import {
  globalJss,
  globalSheetsRegistry,
  createGenerateId,
  ThemeProviderContext,
  JssThemeProvider
} from './jss'
import baseTheme from './base'

const generateId = createGenerateId()

export default function withBaseTheme(Component) {
  const WithThemeProvider = forwardRef(function WithThemeProvider(props, ref) {
    const context = useContext(ThemeProviderContext)
    if (context.jss) return <Component ref={ref} {...props} />
    return (
      <JssProvider
        jss={globalJss}
        registry={globalSheetsRegistry}
        generateId={generateId}>
        <JssThemeProvider theme={baseTheme}>
          <Component ref={ref} {...props} />
        </JssThemeProvider>
      </JssProvider>
    )
  })
  return WithThemeProvider
}
