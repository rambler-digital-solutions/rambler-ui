import React from 'react'
import { render } from 'react-dom'
import { ApplyTheme } from 'rambler-ui/theme'
import App from '../common/App'

const app = (
  <ApplyTheme>
    <App />
  </ApplyTheme>
)

render(app, document.getElementById('app'), () => {
  const styles = document.getElementById('server-styles')
  styles.parentNode.removeChild(styles)
})
