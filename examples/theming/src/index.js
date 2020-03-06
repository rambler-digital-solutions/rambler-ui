import React from 'react'
import {render} from 'react-dom'
import {ThemeProvider} from 'rambler-ui/theme'
import {createTheme} from 'rambler-ui/theme/base'
import colors from 'rambler-ui/theme/base/colors'
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
