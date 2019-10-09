import React, {PureComponent} from 'react'
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

const ApplyThemeContext = React.createContext({})

// const RAMBLER_UI_THEME = '__RAMBLER_UI_THEME__'
const RAMBLER_UI_JSS = '__RAMBLER_UI_JSS__'
const RAMBLER_UI_SHEETS_REGISTRY = '__RAMBLER_UI_SHEETS_REGISTRY__'
const RAMBLER_UI_THEME_COUNTER = '__RAMBLER_UI_THEME_COUNTER__'
const RAMBLER_UI_CLASS_NAME_PREFIX = '__RAMBLER_UI_CLASS_NAME_PREFIX__'

const ruiPrefix = 'rui-'

// const theming = createTheming(RAMBLER_UI_THEME)
const theming = createTheming(ApplyThemeContext)
// console.log('theming: ', theming)
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
// console.log('globalJss: ', globalJss)

export const createGenerateId = (themeId = 0) => {
  // console.log('themeId in cGId: ', themeId)
  const generateId = originalCreateGenerateId()
  // console.log('generateId func: ', generateId)
  return (rule, sheet) => {
    // console.log('rule and sheet: ', {rule, sheet});
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

  // static contextType = ApplyThemeContext

  // static contextTypes = {
  //   [RAMBLER_UI_JSS]: PropTypes.object,
  //   [RAMBLER_UI_SHEETS_REGISTRY]: PropTypes.object
  // }

  // static childContextTypes = {
  //   [RAMBLER_UI_JSS]: PropTypes.object,
  //   [RAMBLER_UI_SHEETS_REGISTRY]: PropTypes.object
  // }

  computedProps = this.mapProps(this.props, this.context)

  mapProps({theme = base, ...props}, context) {
    let resultTheme, currTheme, currParentTheme
    const sheetsRegistry =
      props.sheetsRegistry ||
      context[RAMBLER_UI_SHEETS_REGISTRY] ||
      globalSheetsRegistry
    const jss = props.jss || context[RAMBLER_UI_JSS] || globalJss
    // console.log('jss: ', jss)
    if (sheetsRegistry[RAMBLER_UI_THEME_COUNTER] == null)
      sheetsRegistry[RAMBLER_UI_THEME_COUNTER] = 0
    const themeId = sheetsRegistry[RAMBLER_UI_THEME_COUNTER]++
    const generateId = props.generateId || createGenerateId(themeId)
    // console.log('theme in mapProps: ', theme)
    // console.log('this.context: ', this.context)

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

  // getChildContext() {
  //   const {jss, sheetsRegistry} = this.computedProps
  //   return {
  //     [RAMBLER_UI_JSS]: jss,
  //     [RAMBLER_UI_SHEETS_REGISTRY]: sheetsRegistry
  //   }
  // }

  render() {
    const {children} = this.props
    const {jss, sheetsRegistry, getResultTheme, generateId} = this.computedProps
    // console.log('this.computedProps: ', this.computedProps)
    // const jssProviderProps = {
    //   jss,
    //   registry: sheetsRegistry,
    //   generateId
    // }
    // console.log('jss provider props: ', jssProviderProps)
    // const resultTheme = getResultTheme()
    // console.log('result theme: ', resultTheme)
    return (
      <JssProvider jss={jss} registry={sheetsRegistry} generateId={generateId}>
        <ThemeProvider theme={getResultTheme}>{children}</ThemeProvider>
      </JssProvider>
    )
    // return container
  }
}

ApplyTheme.contextType = ApplyThemeContext

export const injectSheet = (styles, options = {}) => Component =>
  originalInjectSheet(styles, {
    theming,
    [RAMBLER_UI_CLASS_NAME_PREFIX]: `${options.name || uuid()}-`
  })(Component)

// export const injectSheet = (styles, options = {}) => Component => {
// console.log('=====injectSheet=====')
// console.log('styles: ', styles)
// console.log('options: ', options, ' uuid: ', uuid())
// return originalInjectSheet(styles, {
//   theming,
//   [RAMBLER_UI_CLASS_NAME_PREFIX]: `${options.name || uuid()}-`
// })(Component)
// }
