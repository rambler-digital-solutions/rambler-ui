import React, {Component} from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'docs/src/utils/theming'

@injectSheet(() => ({
  root: {

  }
}))
export default class DocPage extends Component {
  static propTypes = {
    classes: PropTypes.object
  }

  render() {
    const {classes} = this.props

    return (
      <div className={classes.root}>
        Doc
      </div>
    )
  }
}
