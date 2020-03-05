import React, {createContext} from 'react'
import {
  createTheming,
  createUseStyles as originalCreateUseStyles
} from 'react-jss'

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

const ThemeContext = createContext({})
const theming = createTheming(ThemeContext)
const {ThemeProvider: Provider, withTheme, useTheme} = theming

export {withTheme, useTheme}

export const ThemeProvider = ({children}) => (
  <Provider theme={theme}>{children}</Provider>
)

export const createUseStyles = styles =>
  originalCreateUseStyles(styles, {theming})

export const withStyles = styles => Component => {
  const useStyles = createUseStyles(styles)
  const StyledComponent = props => {
    const theme = useTheme()
    const classes = useStyles()
    return <Component {...props} theme={theme} classes={classes} />
  }
  return StyledComponent
}
