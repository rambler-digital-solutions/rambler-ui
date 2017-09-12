import EventEmitter from 'events'
import React, {Component} from 'react'
import wrapDisplayName from 'recompose/wrapDisplayName'
import {throttle as throttleRaf} from '../utils/raf'

const events = new EventEmitter
events.setMaxListeners(0)
let handlers

function createHandlers() {
  return {
    scroll: {
      handler: throttleRaf((e) => {
        events.emit('scroll', e)
      }),
      capture: true
    },
    resize: {
      handler: throttleRaf((e) => {
        events.emit('resize', e)
      })
    },
    click: {
      handler: (e) => {
        events.emit('click', e)
      },
      capture: true
    },
    touchstart: {
      handler: (e) => {
        events.emit('touchstart', e)
      },
      capture: true
    }
  }
}

export default function windowEvents(...types) {
  return function wrap(OriginalComponent) {
    return class WrappedComponent extends Component {

      displayName = wrapDisplayName(OriginalComponent, 'windowEvents')

      componentDidMount() {
        handlers = handlers || createHandlers()
        types.forEach((type) => {
          if (!handlers[type].listenersCount) {
            handlers[type].listenersCount = 0
            window.addEventListener(type, handlers[type].handler, handlers[type].capture)
          }
          handlers[type].listenersCount++
        })
      }

      componentWillUnmount() {
        types.forEach((type) => {
          handlers[type].listenersCount--
          if (!handlers[type].listenersCount)
            window.removeEventListener(type, handlers[type].handler, handlers[type].capture)
        })
      }

      render() {
        return <OriginalComponent {...this.props} windowEvents={events} />
      }

    }
  }
}
