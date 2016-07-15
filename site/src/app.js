import 'babel-polyfill'
import { Router, Route, hashHistory, IndexRedirect } from 'react-router'
import { render } from 'react/lib/ReactDOM'
import useScroll from 'scroll-behavior'

import ComponentsPage from 'pages/Components'
import InstallPage from 'pages/Install'
import ContributePage from 'pages/Contribute'
import Layout from 'pages/Layout'

import css from './app.css'

const history = useScroll(hashHistory, (prevLocation, location) =>
  !prevLocation || location.pathname !== prevLocation.pathname
)

render(
  <div className={ css.App }>
    <Router history={ history }>
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
