import { create } from 'themed-react-jss'
import { create as createJss } from 'jss'
import preset from 'jss-preset-default'
import baseTheme from './baseTheme'
import champTheme from './champTheme'


export const provider = create({
  contextFieldName: 'ruiThemeProvider',
  jss: createJss(preset())
})

provider.defineTheme('baseTheme', baseTheme, {
  isDefault: true
})

provider.defineTheme('champTheme', champTheme, {
  inherit: ['baseTheme']
})

export const jss = provider.jss
export const ApplyTheme = provider.ApplyTheme
export const injectSheet = provider.injectSheet
