import React from 'react'
import classnames from 'classnames'
import UiButton from 'rambler-ui/Button'
import {withStyles, fontFamily} from 'docs/utils/theming'

const styles = theme => ({
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
  },
  primary: {
    backgroundColor: '#3662fb',
    '&:hover': {
      backgroundColor: '#274bc8'
    }
  },
  outline: {
    '&:active:active': {
      backgroundColor: 'transparent'
    },
    '&:hover, &:active:active': {
      '&:before': {
        borderColor: '#202531'
      },
      '& > :first-child': {
        color: theme.colors.black
      }
    }
  },
  outlineBlue: {
    composes: '$outline',
    '&:hover, &:active:active': {
      '&:before': {
        borderColor: '#3662fb'
      }
    }
  }
})

const Button = ({type, classes, ...props}) => (
  <UiButton
    {...props}
    rounded
    type={type === 'outlineBlue' ? 'outline' : type}
    className={classnames(classes.button, classes[type])}
  />
)

export default withStyles(styles)(Button)
