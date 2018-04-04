import React from 'react'
import { render } from 'react-dom'
import { ApplyTheme } from 'rambler-ui/theme'
import App from './App'

const app = (
  <ApplyTheme>
    <App />
  </ApplyTheme>
)

render(app, document.getElementById('app'))
