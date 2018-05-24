import React from 'react'
import {render} from 'react-dom'
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom'
import {ThemeProvider} from 'docs/src/utils/theming'
import App from 'docs/src/components/App'
import DocPage from 'docs/src/components/DocPage'
import ComponentPage from 'docs/src/components/ComponentPage'
import SideNav from 'docs/src/components/SideNav'
import docPages from './docPages'

const root = (
  <ThemeProvider>
    <HashRouter>
      <App>
        <SideNav pages={docPages} />
        <Switch>
          <Redirect exact from='/' to="components" />
          <Route path='/components' component={ComponentPage} />
          <Route path='*' component={DocPage} />
        </Switch>
      </App>
    </HashRouter>
  </ThemeProvider>
)

render(
  root,
  document.getElementById('root')
)
