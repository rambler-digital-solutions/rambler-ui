import { createProvider, createJss as createOriginalJss } from 'themed-react-jss'
import defaultProps from 'recompose/defaultProps'
import preset from 'jss-preset-default'
import base from './base'

export const createJss = () => createOriginalJss(preset())
export const provider = createProvider({contextFieldName: 'RamblerUI'})
export const ApplyTheme = defaultProps({theme: base, jss: createJss()})(provider.ApplyTheme)
export const injectSheet = provider.injectSheet
