import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom'
import pages from 'docs/page-list'
import {ThemeProvider} from 'docs/utils/theming'
import App from 'docs/components/App'
import Page from 'docs/components/Page'
import SideNav from 'docs/components/SideNav'

const flattenRoutes = (routes, acc = []) =>
  routes.reduce(
    (acc, route) => [
      ...acc,
      <Route
        exact
        key={route.pathname}
        path={route.pathname}
        render={() => <Page {...route} />}
      />,
      ...(!!route.children && flattenRoutes(route.children))
    ],
    acc
  )

const root = (
  <ThemeProvider>
    <HashRouter>
      <App>
        <SideNav pages={pages} />
        <Switch>
          <Redirect exact from="/" to="components" />
          {flattenRoutes(pages)}
        </Switch>
      </App>
    </HashRouter>
  </ThemeProvider>
)

render(root, document.getElementById('root'))
