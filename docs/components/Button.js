import React from 'react'
import UiButton from 'rambler-ui/Button'
import injectSheet, {fontFamily} from 'docs/utils/theming'

const styles = {
  button: {
    fontFamily: fontFamily.CorsicaRamblerLX,
    fontSize: 15,
    fontWeight: 500,
    letterSpacing: 0,
    textTransform: 'none',
    '& > :first-child': {
      paddingLeft: 25,
      paddingRight: 25,
      height: 40,
      lineHeight: '40px'
    }
  }
}

const Button = ({classes, ...props}) => (
  <UiButton {...props} className={classes.button} rounded />
)

export default injectSheet(styles)(Button)
