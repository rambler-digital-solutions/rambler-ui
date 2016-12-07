import { create } from 'themed-react-jss'
import { create as createJss } from 'jss'
import preset from 'jss-preset-default'
import base from './base'
import champ from './champ'


export const provider = create({
  contextFieldName: 'ruiThemeProvider',
  jss: createJss(preset())
})

provider.defineTheme('base', base, {
  isDefault: true
})

provider.defineTheme('champ', champ, {
  inherit: ['base']
})

export const jss = provider.jss
export const ApplyTheme = provider.ApplyTheme
export const injectSheet = provider.injectSheet
