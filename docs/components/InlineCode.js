import React from 'react'
import {withStyles, fontFamily} from 'docs/utils/theming'

const styles = {
  root: {
    display: 'inline',
    padding: '.2em .3em',
    backgroundColor: 'rgba(238, 242, 244, .5)',
    fontFamily: fontFamily.Menlo,
    fontSize: '92%',
    lineHeight: '18px'
  }
}

const InlineCode = ({classes, children}) => (
  <code className={classes.root}>{children}</code>
)

export default withStyles(styles)(InlineCode)
