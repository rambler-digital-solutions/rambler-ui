import * as RamblerUI from './index'

describe('rambler-ui', () => {
  it('should have exports', () => {
    expect(typeof RamblerUI).toBe('object')
  })

  it('should not do undefined exports', () => {
    Object.keys(RamblerUI).forEach(exportKey =>
      expect(Boolean(RamblerUI[exportKey])).toBe(true)
    )
  })
})
