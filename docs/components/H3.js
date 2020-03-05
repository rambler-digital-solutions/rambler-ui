import React from 'react'
import {withStyles, fontFamily} from 'docs/utils/theming'

const styles = {
  root: {
    marginTop: 40,
    marginBottom: 10,
    fontFamily: fontFamily.CorsicaRamblerLX,
    fontSize: 25,
    fontWeight: 500,
    lineHeight: '35px'
  }
}

const H3 = ({classes, children}) => <h3 className={classes.root}>{children}</h3>

export default withStyles(styles)(H3)
