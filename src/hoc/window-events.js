import EventEmitter from 'events'
import withProps from 'recompose/withProps'
import {throttle as throttleRaf} from '../utils/raf'

const windowEvents = new EventEmitter
windowEvents.setMaxListeners(0)

window.addEventListener('scroll', throttleRaf((e) => {
  windowEvents.emit('scroll', e)
}), true)

window.addEventListener('resize', throttleRaf((e) => {
  windowEvents.emit('resize', e)
}))

export default withProps(() => ({
  windowEvents
}))
