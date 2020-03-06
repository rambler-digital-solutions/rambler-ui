import React, {PureComponent, createContext, forwardRef} from 'react'
import PropTypes from 'prop-types'
import deepmerge from 'deepmerge'
import jss, {
  create as originalCreateJss,
  createGenerateId as originalCreateGenerateId
} from 'jss'
import {
  createTheming,
  JssProvider,
  SheetsRegistry,
  createUseStyles as originalCreateUseStyles
} from 'react-jss'
import preset from 'jss-preset-default'
import base from './base'
import uuid from '../utils/uuid'

const ThemeContext = createContext({})
const ThemeProviderContext = createContext({})

const RAMBLER_UI_THEME_COUNTER = '__RAMBLER_UI_THEME_COUNTER__'
const RAMBLER_UI_CLASS_NAME_PREFIX = '__RAMBLER_UI_CLASS_NAME_PREFIX__'

const ruiPrefix = 'rui-'

const theming = createTheming(ThemeContext)
const {ThemeProvider: JssThemeProvider, withTheme, useTheme} = theming

export {withTheme, useTheme}

export const createJss = (options = {}) =>
  originalCreateJss({
    ...preset(options),
    ...options
  })

export const createSheetsRegistry = () => new SheetsRegistry()

export const globalSheetsRegistry = createSheetsRegistry()
export const globalJss = createJss()

export const createGenerateId = (themeId = 0) => {
  const generateId = originalCreateGenerateId()
  return (rule, sheet) => {
    const displayNamePrefix = sheet
      ? sheet.options[RAMBLER_UI_CLASS_NAME_PREFIX]
      : ''
    if (!displayNamePrefix) return generateId(rule, sheet)
    const jssId = sheet ? sheet.options.jss.id : globalJss.id
    const jssCounter = jssId === globalJss.id ? '' : `-${jssId}`
    const themeCounter = themeId === 0 ? '' : `-${themeId}`
    return ruiPrefix + displayNamePrefix + rule.key + jssCounter + themeCounter
  }
}

jss.setup({createGenerateId})

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

  mapProps({theme = base, ...props}, context) {
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

export const createUseStyles = (styles, options = {}) =>
  originalCreateUseStyles(styles, {
    theming,
    [RAMBLER_UI_CLASS_NAME_PREFIX]: `${options.name || uuid()}-`
  })

export const withStyles = (styles, options = {}) => Component => {
  const useStyles = createUseStyles(styles, options)
  const StyledComponent = forwardRef((props, ref) => {
    const theme = useTheme()
    const classes = useStyles()
    return <Component {...props} ref={ref} theme={theme} classes={classes} />
  })
  if (options.displayName) StyledComponent.displayName = options.displayName
  return StyledComponent
}
