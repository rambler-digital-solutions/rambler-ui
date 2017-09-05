import merge from 'lodash/merge'
import omit from 'lodash/omit'
import {create as createOriginalJss, SheetsRegistry} from 'jss'
import createGenerateClassName from 'jss/lib/utils/createGenerateClassName'
import preset from 'jss-preset-default'
import originalInjectSheet, {createTheming, JssProvider} from 'react-jss'
import * as jssNs from 'react-jss/lib/ns'
import mapProps from 'recompose/mapProps'
import compose from 'recompose/compose'
import withContext from 'recompose/withContext'
import getContext from 'recompose/getContext'
import withPropsOnChange from 'recompose/withPropsOnChange'
import PropTypes from 'prop-types'
import base from './base'

const RAMBLER_UI_THEME = '__RAMBLER_UI_THEME__'
const RAMBLER_UI_JSS = '__RAMBLER_UI_JSS__'
const RAMBLER_UI_SHEETS_REGISTRY = '__RAMBLER_UI_SHEETS_REGISTRY__'
const RAMBLER_UI_JSS_PROVIDER_ID = '__RAMBLER_UI_JSS_PROVIDER_ID__'

const theming = createTheming(RAMBLER_UI_THEME)

export const createJss = () => {
  // Иначе при использовании нескольких ApplyTheme могут быть коллизии
  const generateClassName = createGenerateClassName()
  return createOriginalJss({
    ...preset(),
    createGenerateClassName: () => generateClassName
  })
}
export const createSheetsRegistry = () => new SheetsRegistry()

export const globalJss = createJss()
export const globalSheetsRegistry = createSheetsRegistry()


/**
 * Делаем совместимым с нашим компонентом ApplyTheme
 */
export const ApplyTheme = compose(
  getContext({
    [RAMBLER_UI_JSS]: PropTypes.object,
    [RAMBLER_UI_SHEETS_REGISTRY]: PropTypes.object
  }),
  withPropsOnChange(
    () => false,
    (props) => {
      // Создаем свойства один раз при создании компонента
      let resultTheme, currTheme, currParentTheme
      // https://github.com/cssinjs/react-jss/issues/133
      const providerId = Math.random()
      const sheetsRegistry = props.sheetsRegistry || props[RAMBLER_UI_SHEETS_REGISTRY] || globalSheetsRegistry
      const jss = props.jss || props[RAMBLER_UI_JSS] || globalJss
      const shouldAddJssProvider = !props[RAMBLER_UI_JSS]
      return {
        jss,
        sheetsRegistry,
        shouldAddJssProvider,
        [RAMBLER_UI_JSS_PROVIDER_ID]: providerId,
        getResultTheme: (theme = base) => (parentTheme) => {
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
      [RAMBLER_UI_JSS]: PropTypes.object,
      [RAMBLER_UI_SHEETS_REGISTRY]: PropTypes.object,
      [RAMBLER_UI_JSS_PROVIDER_ID]: PropTypes.number
    },
    (props) => ({
      [RAMBLER_UI_JSS]: props.jss,
      [RAMBLER_UI_SHEETS_REGISTRY]: props.sheetsRegistry
    })
  )
)(({theme, jss, sheetsRegistry, getResultTheme, shouldAddJssProvider, children}) => {
  const provider = <theming.ThemeProvider theme={getResultTheme(theme)} children={children} />
  if (!shouldAddJssProvider)
    return provider
  return <JssProvider jss={jss} registry={sheetsRegistry}>{provider}</JssProvider>
})

export const injectSheet = (styles) => compose(
  getContext({
    [RAMBLER_UI_JSS_PROVIDER_ID]: PropTypes.number
  }),
  withContext(
    {[jssNs.providerId]: PropTypes.number},
    (props) => ({[jssNs.providerId]: props[RAMBLER_UI_JSS_PROVIDER_ID]})
  ),
  originalInjectSheet(styles, {theming}),
  mapProps((props) => omit(props, RAMBLER_UI_JSS_PROVIDER_ID, 'classes'))
)
