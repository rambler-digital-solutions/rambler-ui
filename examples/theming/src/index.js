import React from 'react'
import {render} from 'react-dom'
import {ApplyTheme} from 'rambler-ui/theme'
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
  <ApplyTheme theme={theme}>
    <App />
  </ApplyTheme>
)

render(app, document.getElementById('app'))
