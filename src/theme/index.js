import React, {PureComponent, createContext} from 'react'
import PropTypes from 'prop-types'
import deepmerge from 'deepmerge'
import jss, {
  create as originalCreateJss,
  createGenerateId as originalCreateGenerateId
} from 'jss'
import originalInjectSheet, {
  createTheming,
  JssProvider,
  SheetsRegistry
} from 'react-jss'
import preset from 'jss-preset-default'
import base from /* preval */ './base'
import uuid from '../utils/uuid'

const RamblerUIThemeContext = createContext({})
const ApplyThemeContext = createContext({})

const RAMBLER_UI_THEME_COUNTER = '__RAMBLER_UI_THEME_COUNTER__'
const RAMBLER_UI_CLASS_NAME_PREFIX = '__RAMBLER_UI_CLASS_NAME_PREFIX__'

const ruiPrefix = 'rui-'

const theming = createTheming(RamblerUIThemeContext)
const {ThemeProvider, withTheme} = theming

export {withTheme}

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

export class ApplyTheme extends PureComponent {
  static propTypes = {
    theme: PropTypes.object,
    jss: PropTypes.object,
    sheetsRegistry: PropTypes.object,
    generateId: PropTypes.func
  }

  static contextType = ApplyThemeContext

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
      <ApplyThemeContext.Provider value={{jss, sheetsRegistry}}>
        <JssProvider
          jss={jss}
          registry={sheetsRegistry}
          generateId={generateId}>
          <ThemeProvider theme={getResultTheme}>{children}</ThemeProvider>
        </JssProvider>
      </ApplyThemeContext.Provider>
    )
  }
}

export const injectSheet = (styles, options = {}) => Component => {
  const StyledComponent = originalInjectSheet(styles, {
    theming,
    injectTheme: true,
    [RAMBLER_UI_CLASS_NAME_PREFIX]: `${options.name || uuid()}-`
  })(Component)
  if (options.displayName) StyledComponent.displayName = options.displayName
  return StyledComponent
}
