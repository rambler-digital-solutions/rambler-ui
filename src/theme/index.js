import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import deepmerge from 'deepmerge'
import {
  create as originalCreateJss,
  createGenerateClassName as originalCreateGenerateClassName
} from 'jss'
import originalInjectSheet, {createTheming, JssProvider, SheetsRegistry} from 'react-jss'
import preset from 'jss-preset-default'
import base from './base'
import uuid from '../utils/uuid'

const RAMBLER_UI_THEME = '__RAMBLER_UI_THEME__'
const RAMBLER_UI_JSS = '__RAMBLER_UI_JSS__'
const RAMBLER_UI_SHEETS_REGISTRY = '__RAMBLER_UI_SHEETS_REGISTRY__'
const RAMBLER_UI_THEME_COUNTER = '__RAMBLER_UI_THEME_COUNTER__'
const RAMBLER_UI_CLASS_NAME_PREFIX = '__RAMBLER_UI_CLASS_NAME_PREFIX__'

const ruiPrefix = 'rui-'

const theming = createTheming(RAMBLER_UI_THEME)
const {ThemeProvider, withTheme} = theming

export {
  withTheme
}

export const createJss = (options = {}) => originalCreateJss({
  ...preset(options),
  ...options
})

export const createSheetsRegistry = () => new SheetsRegistry()

export const globalSheetsRegistry = createSheetsRegistry()
export const globalJss = createJss()

export const createGenerateClassName = (themeId = 0) => {
  const generateClassName = originalCreateGenerateClassName()
  return (rule, sheet) => {
    const displayNamePrefix = sheet ? sheet.options[RAMBLER_UI_CLASS_NAME_PREFIX] : ''
    if (!displayNamePrefix)
      return generateClassName(rule, sheet)
    const jssId = sheet ? sheet.options.jss.id : globalJss.id
    const jssCounter = jssId === globalJss.id ? '' : `-${jssId}`
    const themeCounter = themeId === 0 ? '' : `-${themeId}`
    return ruiPrefix + displayNamePrefix + rule.key + jssCounter + themeCounter
  }
}

export class ApplyTheme extends PureComponent {
  static propTypes = {
    theme: PropTypes.object,
    jss: PropTypes.object,
    sheetsRegistry: PropTypes.object,
    generateClassName: PropTypes.func
  }

  static contextTypes = {
    [RAMBLER_UI_JSS]: PropTypes.object,
    [RAMBLER_UI_SHEETS_REGISTRY]: PropTypes.object
  }

  static childContextTypes = {
    [RAMBLER_UI_JSS]: PropTypes.object,
    [RAMBLER_UI_SHEETS_REGISTRY]: PropTypes.object
  }

  computedProps = this.mapProps(this.props, this.context)

  mapProps({theme = base, ...props}, context) {
    let resultTheme, currTheme, currParentTheme
    const sheetsRegistry = props.sheetsRegistry || context[RAMBLER_UI_SHEETS_REGISTRY] || globalSheetsRegistry
    const jss = props.jss || context[RAMBLER_UI_JSS] || globalJss
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
          resultTheme = parentTheme ? deepmerge(parentTheme, theme) : theme
          currParentTheme = parentTheme
          currTheme = theme
        }
        return resultTheme
      }
    }
  }

  getChildContext() {
    const {jss, sheetsRegistry} = this.computedProps
    return {
      [RAMBLER_UI_JSS]: jss,
      [RAMBLER_UI_SHEETS_REGISTRY]: sheetsRegistry
    }
  }

  render() {
    const {children} = this.props
    const {
      jss,
      sheetsRegistry,
      getResultTheme,
      generateClassName
    } = this.computedProps
    return (
      <JssProvider jss={jss} registry={sheetsRegistry} generateClassName={generateClassName}>
        <ThemeProvider theme={getResultTheme}>
          {children}
        </ThemeProvider>
      </JssProvider>
    )
  }
}

export const injectSheet = (styles, options = {}) =>
  Component => originalInjectSheet(styles, {
    theming,
    [RAMBLER_UI_CLASS_NAME_PREFIX]: `${options.name || uuid()}-`
  })(Component)
