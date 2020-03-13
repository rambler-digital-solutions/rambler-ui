import React from 'react'
import PropTypes from 'prop-types'
import {withStyles, fontFamily} from 'docs/utils/theming'

const styles = {
  root: {
    marginTop: 40,
    marginBottom: 25,
    fontFamily: fontFamily.CorsicaRamblerLX,
    fontSize: 35,
    fontWeight: 500,
    lineHeight: '35px'
  }
}

const H2 = ({classes, children}) => <h2 className={classes.root}>{children}</h2>

H2.propTypes = {
  children: PropTypes.node
}

export default withStyles(styles)(H2)
