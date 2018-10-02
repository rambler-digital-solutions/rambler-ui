import React from 'react'

export default ({color}) => (
  <span
    style={{
      display: 'inline-block',
      verticalAlign: 'middle',
      marginLeft: 5,
      color: color || 'currentColor',
      lineHeight: 1
    }}>
    →
  </span>
)
