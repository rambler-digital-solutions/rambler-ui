import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function MonologIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        d="M0 15V0v15zm15 0V0v15zM2 3c-.552 0-1 .447-1 1v7c0 .553.448 1 1 1h5l3.2 2.4c.33.247.8.012.8-.4v-2h1c.552 0 1-.447 1-1V4c0-.553-.448-1-1-1H2zm.2 1.2h9.6v6.6h-2v1.8l-2.4-1.8H2.2V4.2z"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

MonologIcon.displayName = 'MonologIcon'
