import React from 'react'
import injectSheet, {createTheming} from 'react-jss'

export const fontFamily = {
  Roboto: 'Roboto, sans-serif',
  CorsicaRamblerLX: 'CorsicaRamblerLX, sans-serif',
  Menlo: 'Menlo, Monaco, Courier New, Courier, monospace'
}

export const theme = {
  colors: {
    blue: '#315efb',
    alternativeBlue: '#649dff',
    dark: '#2b2c2d',
    light: '#ffffff',
    red: '#f85656',
    black: '#262626',
    carbone: '#343b4c',
    cloudGray: '#8d96b2',
    argentum: '#e5eaee',
    argentumLight: '#eef2f4'
  }
}

const theming = createTheming('UI_DOCS_THEME')
const {ThemeProvider: Provider, withTheme} = theming

export {
  withTheme
}

export const ThemeProvider = ({children}) => (
  <Provider theme={theme}>
    {children}
  </Provider>
)

export default styles => injectSheet(styles, {theming})
