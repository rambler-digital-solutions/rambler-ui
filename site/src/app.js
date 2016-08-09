import 'babel-polyfill'
import { useRouterHistory, IndexRedirect, Router, Route } from 'react-router'
import createHashHistory from 'history/lib/createHashHistory'
import { render } from 'react/lib/ReactDOM'

import ComponentsPage from 'pages/Components'
import InstallPage from 'pages/Install'
import ContributePage from 'pages/Contribute'
import Layout from 'pages/Layout'

import css from './app.css'

render(
  <div className={ css.App }>
    <Router
      history={ useRouterHistory(createHashHistory)() }
      onUpdate={() => { document.getElementById('content').scrollTop = 0 }}
    >
      <Route path="/" component={ Layout }>
        <Route path="components" component={ ComponentsPage }>
          <Route path="*"/>
        </Route>
        <Route path="install" component={ InstallPage } />
        <Route path="contribute" component={ ContributePage } />
        <IndexRedirect to="components"/>
      </Route>
    </Router>
  </div>,
  document.getElementById('root')
)
