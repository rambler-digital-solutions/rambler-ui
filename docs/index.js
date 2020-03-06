import '@babel/polyfill'
import React from 'react'
import {render} from 'react-dom'
import {HashRouter, Switch} from 'react-router-dom'
import {ThemeProvider as UIThemeProvider} from 'rambler-ui/theme'
import pageList from 'docs/page-list'
import {ThemeProvider as DocsThemeProvider} from 'docs/utils/theming'
import App from 'docs/components/App'
import Route from 'docs/components/Route'
import SideNav from 'docs/components/SideNav'
import Footer from 'docs/components/Footer'
import Informer from 'docs/components/Informer'

const flattenRoutes = (routes, acc = []) =>
  routes.reduce(
    (acc, route) =>
      acc.concat(
        route.children ? (
          flattenRoutes(route.children)
        ) : (
          <Route key={route.path} path={route.path} />
        )
      ),
    acc
  )

const root = (
  <UIThemeProvider>
    <DocsThemeProvider>
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
    </DocsThemeProvider>
  </UIThemeProvider>
)

render(root, document.getElementById('root'))
