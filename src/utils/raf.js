let lastTime = 0
let raf = window.requestAnimationFrame
let cancelRaf = window.cancelAnimationFrame

const prefixes = ['ms', 'moz', 'webkit', 'o']

prefixes.forEach((prefix) => {
  if (raf && cancelRaf)
    return
  raf = raf || window[prefix + 'RequestAnimationFrame']
  cancelRaf = cancelRaf || window[prefix + 'CancelAnimationFrame'] || window[prefix + 'CancelRequestAnimationFrame']
})

if (!raf)
  raf = (callback) => {
    const currTime = new Date().getTime()
    const timeToCall = Math.max(0, 16 - (currTime - lastTime))
    const id = window.setTimeout(callback, timeToCall)
    lastTime = currTime + timeToCall
    return id
  }

if (!cancelRaf)
  cancelRaf = (id) => { clearTimeout(id) }

export const requestAnimationFrame = raf

export const cancelAnimationFrame = cancelRaf

export function throttle(callback) {
  let pending = false
  let lastArgs
  return (...args) => {
    lastArgs = args
    if (pending)
      return
    pending = true
    raf(() => {
      callback(...lastArgs)
      pending = false
    })
  }
}
