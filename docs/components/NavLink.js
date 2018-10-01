import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import Queue from 'promise-queue'
import {NavLink as DomNavLink, withRouter} from 'react-router-dom'

const queue = new Queue(1)

class NavLink extends PureComponent {
  static propTypes = {
    /**
     * Path to preload
     */
    to: PropTypes.string
  }

  state = {
    loading: false
  }

  async componentDidMount() {
    const {to} = this.props
    await new Promise(resolve => setTimeout(resolve, 0))
    queue.add(
      () => import(/* webpackPrefetch: true */ `docs/pages${to}/index.md`)
    )
  }

  render() {
    const {
      staticContext, // eslint-disable-line no-unused-vars
      ...props
    } = this.props
    return <DomNavLink {...props} />
  }
}

export default withRouter(NavLink)
