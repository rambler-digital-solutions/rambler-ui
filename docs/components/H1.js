import React from 'react'
import injectSheet, {fontFamily} from 'docs/utils/theming'

const styles = {
  root: {
    margin: 0,
    fontFamily: fontFamily.Roboto,
    fontSize: 40,
    fontWeight: 300,
    lineHeight: '50px',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }
}

const H1 = ({classes, style, children}) => (
  <h1 className={classes.root} style={style}>
    {children}
  </h1>
)

export default injectSheet(styles)(H1)
