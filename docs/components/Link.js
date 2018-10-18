import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import Queue from 'promise-queue'
import {Link as PageLink, NavLink, withRouter} from 'react-router-dom'

const queue = new Queue(1)

class Link extends PureComponent {
  static propTypes = {
    /**
     * Path to preload
     */
    to: PropTypes.string,
    /**
     * Need chunk preload
     */
    preload: PropTypes.string
  }

  static defaultProps = {
    preload: true
  }

  state = {
    loading: false
  }

  async componentDidMount() {
    const {to, preload} = this.props
    if (!preload) return
    await new Promise(resolve => setTimeout(resolve, 0))
    queue.add(() => import(/* webpackPrefetch: true */ `docs/pages${to}`))
  }

  render() {
    const {
      activeClassName,
      staticContext, // eslint-disable-line no-unused-vars
      ...props
    } = this.props
    return activeClassName
      ? <NavLink activeClassName={activeClassName} {...props} />
      : <PageLink {...props} />
  }
}

export default withRouter(Link)
