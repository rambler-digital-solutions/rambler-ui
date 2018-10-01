import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import {HashRouter, Switch} from 'react-router-dom'
import index from 'docs/pages'
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
        <SideNav />
        <div>
          <Switch>{flattenRoutes(index)}</Switch>
          <Informer />
          <Footer />
        </div>
      </App>
    </HashRouter>
  </ThemeProvider>
)

render(root, document.getElementById('root'))
