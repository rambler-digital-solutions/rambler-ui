import React from 'react'
import {render} from 'react-dom'
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom'
import pages from 'docs/src/utils/doc-pages'
import {ApplyTheme} from 'rambler-ui/theme'
import {ThemeProvider} from 'docs/src/utils/theming'
import App from 'docs/src/components/App'
import Page from 'docs/src/components/Page'
import SideNav from 'docs/src/components/SideNav'

const flattenRoutes = (routes, acc = []) =>
  routes.reduce((acc, route) => ([
    ...acc,
    <Route
      exact
      key={route.pathname}
      path={route.pathname}
      render={() => <Page {...route} />}
    />,
    ...!!route.children && flattenRoutes(route.children)
  ]), acc)

const root = (
  <ApplyTheme>
    <ThemeProvider>
      <HashRouter>
        <App>
          <SideNav pages={pages} />
          <Switch>
            <Redirect exact from='/' to="components" />
            {flattenRoutes(pages)}
          </Switch>
        </App>
      </HashRouter>
    </ThemeProvider>
  </ApplyTheme>
)

render(
  root,
  document.getElementById('root')
)
