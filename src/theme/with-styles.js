import React, {forwardRef} from 'react'
import {useTheme} from './jss'
import createUseStyles from './create-use-styles'

export default function withStyles(styles, options = {}) {
  return Component => {
    const useStyles = createUseStyles(styles, options)
    const StyledComponent = forwardRef((props, ref) => {
      const theme = useTheme()
      const classes = useStyles()
      return <Component {...props} ref={ref} theme={theme} classes={classes} />
    })
    if (options.displayName) StyledComponent.displayName = options.displayName
    return StyledComponent
  }
}
