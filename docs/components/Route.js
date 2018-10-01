import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {Route as DomRoute} from 'react-router-dom'

export default class Route extends PureComponent {
  static propTypes = {
    /**
     * Адрес
     */
    path: PropTypes.string
  }

  Content = null

  async componentDidMount() {
    const {path} = this.props
    const {
      default: Content
    } = await import(/* webpackMode: "lazy" */ `docs/pages${path}/index.md`)
    this.Content = Content
    this.forceUpdate()
  }

  render() {
    return <DomRoute exact path={this.props.path} component={this.Content} />
  }
}
