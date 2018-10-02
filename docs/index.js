import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import {HashRouter, Switch} from 'react-router-dom'
import pageList from 'docs/page-list'
import {ThemeProvider} from 'docs/utils/theming'
import App from 'docs/components/App'
import Route from 'docs/components/Route'
import SideNav from 'docs/components/SideNav'
import Footer from 'docs/components/Footer'
import Informer from 'docs/components/Informer'

const flattenRoutes = (routes, acc = []) =>
  routes.reduce(
    (acc, route) => [
      ...acc,
      ...(!route.children && [<Route key={route.path} path={route.path} />]),
      ...(!!route.children && flattenRoutes(route.children))
    ],
    acc
  )

const root = (
  <ThemeProvider>
    <HashRouter>
      <App>
        <SideNav index={pageList} />
        <div>
          <Switch>
            {flattenRoutes(pageList)}
            <Route key="/" path="/" />
          </Switch>
          <Informer />
          <Footer />
        </div>
      </App>
    </HashRouter>
  </ThemeProvider>
)

render(root, document.getElementById('root'))
