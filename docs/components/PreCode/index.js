import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import injectSheet, {fontFamily} from 'docs/utils/theming'

@injectSheet(() => ({
  root: {
    padding: '14px 25px 14px 20px',
    overflow: 'auto',
    backgroundColor: 'rgba(238, 242, 244, .5)',
    fontFamily: fontFamily.Menlo,
    fontSize: 13,
    lineHeight: '18px',
    '& code': {
      fontFamily: 'inherit'
    }
  }
}))
export default class PreCode extends PureComponent {
  static propTypes = {
    /**
     * Код
     */
    children: PropTypes.node
  }

  render() {
    const {classes, children} = this.props

    return <pre className={classes.root}>{children}</pre>
  }
}
