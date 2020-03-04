import React from 'react'
import injectSheet, {fontFamily} from 'docs/utils/theming'

const styles = {
  root: {
    padding: '14px 25px 14px 20px',
    overflow: 'auto',
    backgroundColor: 'rgba(238, 242, 244, .5)',
    fontFamily: fontFamily.Menlo,
    fontSize: 13,
    lineHeight: '18px',
    '& code': {
      padding: 0,
      backgroundColor: 'transparent',
      fontFamily: 'inherit'
    }
  }
}

const PreCode = ({classes, children}) => (
  <pre className={classes.root}>{children}</pre>
)

export default injectSheet(styles)(PreCode)
