import { create } from 'themed-react-jss'
import { create as createJss } from 'jss'
import isolate from 'jss-isolate'
import preset from 'jss-preset-default'
import baseTheme from './baseTheme'


export const provider = create({
  contextFieldName: 'ruiThemeProvider',
  jss: createJss({ plugins: preset().concat(isolate) })
})

provider.defineTheme('baseTheme', baseTheme, {
  isDefault: true
})

export const ApplyTheme = provider.ApplyTheme
export const injectSheet = provider.injectSheet
