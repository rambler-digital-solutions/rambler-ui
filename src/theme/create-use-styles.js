import {createUseStyles as originalCreateUseStyles} from 'react-jss'
import {theming, RAMBLER_UI_DISPLAY_NAME_PREFIX} from './jss'
import uuid from '../utils/uuid'

export const createUseStyles = (styles, options = {}) =>
  originalCreateUseStyles(styles, {
    theming,
    [RAMBLER_UI_DISPLAY_NAME_PREFIX]: `${options.name || uuid()}-`
  })
