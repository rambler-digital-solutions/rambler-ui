import React from 'react'
import {render} from 'react-dom'
import {ThemeProvider} from 'rambler-ui/theme'
import App from '../common/App'

const app = (
  <ThemeProvider>
    <App />
  </ThemeProvider>
)

render(app, document.getElementById('app'), () => {
  const styles = document.getElementById('server-styles')
  styles.parentNode.removeChild(styles)
})
