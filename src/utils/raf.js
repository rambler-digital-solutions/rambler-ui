const prefixes = ['ms', 'moz', 'webkit', 'o']
let lastTime = 0

export function getRequestAnimationFrame() {
  let raf = window.requestAnimationFrame

  prefixes.forEach(prefix => {
    if (window.requestAnimationFrame && window.cancelAnimationFrame) return
    raf = raf || window[prefix + 'RequestAnimationFrame']
  })

  if (!raf)
    raf = callback => {
      const currTime = new Date().getTime()
      const timeToCall = Math.max(0, 16 - (currTime - lastTime))
      const id = window.setTimeout(callback, timeToCall)
      lastTime = currTime + timeToCall
      return id
    }

  return raf
}

export function getCancelAnimationFrame() {
  let cancelRaf = window.cancelAnimationFrame

  prefixes.forEach(prefix => {
    if (window.requestAnimationFrame && window.cancelAnimationFrame) return
    cancelRaf =
      cancelRaf ||
      window[prefix + 'CancelAnimationFrame'] ||
      window[prefix + 'CancelRequestAnimationFrame']
  })

  if (!cancelRaf)
    cancelRaf = id => {
      clearTimeout(id)
    }

  return cancelRaf
}

export function throttle(callback) {
  const raf = getRequestAnimationFrame()
  let pending = false
  let lastArgs

  return (...args) => {
    lastArgs = args
    if (pending) return
    pending = true
    raf(() => {
      callback(...lastArgs)
      pending = false
    })
  }
}
