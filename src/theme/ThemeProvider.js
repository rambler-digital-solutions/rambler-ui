import React, {PureComponent} from 'react'
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

export default class ThemeProvider extends PureComponent {
  static propTypes = {
    theme: PropTypes.object,
    jss: PropTypes.object,
    sheetsRegistry: PropTypes.object,
    generateId: PropTypes.func,
    children: PropTypes.node
  }

  static contextType = ThemeProviderContext

  jss = this.props.jss || this.context.jss || globalJss

  sheetsRegistry =
    this.props.sheetsRegistry ||
    this.context.sheetsRegistry ||
    globalSheetsRegistry

  themeId =
    this.sheetsRegistry[RAMBLER_UI_THEME_COUNTER] == null
      ? (this.sheetsRegistry[RAMBLER_UI_THEME_COUNTER] = 0)
      : ++this.sheetsRegistry[RAMBLER_UI_THEME_COUNTER]

  generateId = this.props.generateId || createGenerateId(this.themeId)

  getResultTheme = parentTheme => {
    const {theme = baseTheme} = this.props
    if (
      this.currentTheme !== theme ||
      this.currentParentTheme !== parentTheme
    ) {
      this.resultTheme = parentTheme ? deepmerge(parentTheme, theme) : theme
      this.currentParentTheme = parentTheme
      this.currentTheme = theme
    }
    return this.resultTheme
  }

  render() {
    const {children} = this.props
    const {jss, sheetsRegistry, getResultTheme, generateId} = this
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
