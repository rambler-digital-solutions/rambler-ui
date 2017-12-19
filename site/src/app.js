import { render } from 'react-dom'
import { Redirect, Router, Route, Switch } from 'react-router-dom'
import createHashHistory from 'history/createHashHistory'

import ComponentsPage from 'pages/Components'
import InstallPage from 'pages/Install'
import ContributePage from 'pages/Contribute'
import Layout from 'pages/Layout'

import css from './app.css'

const hashHistory = createHashHistory()
hashHistory.listen(() => {
  const content = document.getElementById('content')
  if (!content) return
  content.scrollTop = 0
})

render(
  <div className={ css.App }>
    <Router history={ hashHistory }>
      <Switch>
        <Redirect exact from="/" to="components" />
        <Route render={(props) => (
          <Layout {...props}>
            <Route exact path="/components" component={ ComponentsPage } />
            <Route path="/components/:component" component={ ComponentsPage } />
            <Route path="/install" component={ InstallPage } />
            <Route path="/contribute" component={ ContributePage } />
          </Layout>
        )} />
      </Switch>
    </Router>
  </div>,
  document.getElementById('root')
)
