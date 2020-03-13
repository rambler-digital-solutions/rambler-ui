import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function AddIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path d="M8.15 6.85V.5c0-.277-.226-.5-.499-.5H7.35a.5.5 0 0 0-.499.5v6.35H.5c-.277 0-.5.226-.5.499v.302a.5.5 0 0 0 .5.499h6.35v6.35c0 .277.226.5.499.5h.302a.5.5 0 0 0 .499-.5V8.15h6.35c.277 0 .5-.226.5-.499V7.35a.5.5 0 0 0-.5-.499H8.15z" />
    </SvgIcon>
  )
}

AddIcon.displayName = 'AddIcon'
