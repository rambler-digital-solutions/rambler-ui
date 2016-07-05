import { provideDocModules } from 'utils'

const reqContext = require.context('../../src', true, /^\.\/.+\/__doc__\/index\.js$/)
export default provideDocModules(reqContext)
