import React from 'react'
import {render} from 'react-dom'
import {ThemeProvider} from 'rambler-ui/theme'
import App from './App'

const app = (
  <ThemeProvider>
    <App />
  </ThemeProvider>
)

render(app, document.getElementById('app'))
