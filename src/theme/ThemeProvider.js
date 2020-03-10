import React, {PureComponent, createContext} from 'react'
import PropTypes from 'prop-types'
import deepmerge from 'deepmerge'
import {JssProvider} from 'react-jss'
import baseTheme from './base'
import {
  globalJss,
  globalSheetsRegistry,
  createGenerateId,
  JssThemeProvider
} from './jss'

const ThemeProviderContext = createContext({})

const RAMBLER_UI_THEME_COUNTER = '__RAMBLER_UI_THEME_COUNTER__'

export class ThemeProvider extends PureComponent {
  static propTypes = {
    theme: PropTypes.object,
    jss: PropTypes.object,
    sheetsRegistry: PropTypes.object,
    generateId: PropTypes.func,
    children: PropTypes.node
  }

  static contextType = ThemeProviderContext

  computedProps = this.mapProps(this.props, this.context)

  mapProps({theme = baseTheme, ...props}, context) {
    let resultTheme, currTheme, currParentTheme
    const sheetsRegistry =
      props.sheetsRegistry || context.sheetsRegistry || globalSheetsRegistry
    const jss = props.jss || context.jss || globalJss
    if (sheetsRegistry[RAMBLER_UI_THEME_COUNTER] == null)
      sheetsRegistry[RAMBLER_UI_THEME_COUNTER] = 0
    const themeId = sheetsRegistry[RAMBLER_UI_THEME_COUNTER]++
    const generateId = props.generateId || createGenerateId(themeId)

    return {
      jss,
      sheetsRegistry,
      generateId,
      getResultTheme: parentTheme => {
        if (currTheme !== theme || currParentTheme !== parentTheme) {
          resultTheme = parentTheme ? deepmerge(parentTheme, theme) : theme
          currParentTheme = parentTheme
          currTheme = theme
        }
        return resultTheme
      }
    }
  }

  render() {
    const {children} = this.props
    const {jss, sheetsRegistry, getResultTheme, generateId} = this.computedProps
    return (
      <ThemeProviderContext.Provider value={{jss, sheetsRegistry}}>
        <JssProvider
          jss={jss}
          registry={sheetsRegistry}
          generateId={generateId}>
          <JssThemeProvider theme={getResultTheme}>{children}</JssThemeProvider>
        </JssProvider>
      </ThemeProviderContext.Provider>
    )
  }
}
