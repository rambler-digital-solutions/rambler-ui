import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function GridIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        d="M0 15V0v15zM15 0v15V0zm-1 11h-3v3h2c.552 0 1-.448 1-1v-2zm-8 3h3v-3H6v3zm-2-3H1v2c0 .552.448 1 1 1h2v-3zM1 9h3V6H1v3zm5 0h3V6H6v3zm5 0h3V6h-3v3zm2-8h-2v3h3V2c0-.552-.448-1-1-1zM6 4h3V1H6v3zM4 4H1V2c0-.552.448-1 1-1h2v3z"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

GridIcon.displayName = 'GridIcon'
