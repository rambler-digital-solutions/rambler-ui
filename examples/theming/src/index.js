import React from 'react'
import {render} from 'react-dom'
import {ThemeProvider, createTheme, colors} from 'rambler-ui/theme'
import App from './App'

const theme = createTheme({
  colors: Object.assign(colors, {
    primary: '#db7093'
  }),
  button: {
    borderRadius: 5
  }
})

const app = (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
)

render(app, document.getElementById('app'))
