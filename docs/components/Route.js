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

  component = null

  async componentDidMount() {
    let {path} = this.props
    const {
      default: component
    } = await import(/* webpackMode: "lazy" */ `docs/pages${path}`)
    this.component = component
    this.forceUpdate()
  }

  render() {
    return <DomRoute exact path={this.props.path} component={this.component} />
  }
}
