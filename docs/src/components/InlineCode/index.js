import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import injectSheet, {fontFamily} from 'docs/src/utils/theming'

@injectSheet(() => ({
  root: {
    display: 'inline',
    padding: '.2em .3em',
    backgroundColor: 'rgba(238, 242, 244, .5)',
    fontFamily: fontFamily.Menlo,
    fontSize: '92%',
    lineHeight: '18px'
  }
}))
export default class InlineCode extends PureComponent {
  static propTypes = {
    /**
     * Код
     */
    children: PropTypes.node
  }

  render() {
    const {classes, children} = this.props

    return <code className={classes.root}>{children}</code>
  }
}
