/**
 * Module determines focus source (by pointer device or by keyboard/scripts) 
 * and sets an appropriate value ('pointer' or 'other') to <html> attribute 'data-focus-source'
 */
import { canUseDOM } from './DOM'

const pointerStartEvents = [
  'touchstart',
  'pointerdown',
  'mousedown'
]

const pointerEndEvents = [
  'touchend',
  'touchcancel',
  'pointerup',
  'pointercancel',
  'mouseup'
]

const focusEvents = [
  'focusin',
  'focusout'
]

let activePointers = 0
let activeKeys = 0

const handleKeyStartEvent = () => {
  activeKeys++
}

const handleKeyEndEvent = () => {
  activeKeys = Math.max(activeKeys - 1, 0)
}

const handlePointerStartEvent = () => {
  activePointers++
}

const handlePointerEndEvent = event => {
  if (event.touches) {
    activePointers = event.touches.length
    return
  }
  activePointers = Math.max(activePointers - 1, 0)
}

const handleFocusEvent = event => {
  let source = ''
  if (event.type === 'focusin')
    source = activePointers ? 'pointer' : 'other'

  // Source is empty on blur event
  document.documentElement.setAttribute('data-focus-source', source)
}

let subscribed = false
const subscribe = () => {
  // Subscribe only once
  if (subscribed)
    return
  subscribed = true

  document.documentElement.addEventListener('keydown', handleKeyStartEvent)
  document.documentElement.addEventListener('keyup', handleKeyEndEvent)

  pointerStartEvents.forEach(event => {
    document.documentElement.addEventListener(event, handlePointerStartEvent)
  })

  pointerEndEvents.forEach(event => {
    document.documentElement.addEventListener(event, handlePointerEndEvent)
  })

  focusEvents.forEach(event => {
    document.documentElement.addEventListener(event, handleFocusEvent)
  })
}

// Chceking DOM availability to make it work with SSR
if (canUseDOM)
  subscribe()
