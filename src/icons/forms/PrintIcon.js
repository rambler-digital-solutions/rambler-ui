import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function PrintIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        d="M0 15V0v15zM15 0v15V0zm-1.2 5.2H1.2v6.6H3V10c0-.552.448-1 1-1h7c.552 0 1 .448 1 1v1.8h1.8V5.2zm-9.6 7.6h6.6v-2.6H4.2v2.6zM15 12c0 .552-.448 1-1 1h-2c0 .552-.448 1-1 1H4c-.552 0-1-.448-1-1H1c-.552 0-1-.448-1-1V5c0-.552.448-1 1-1h13c.552 0 1 .448 1 1v7zM3.2 3H2V2c0-.552.448-1 1-1h9c.552 0 1 .448 1 1v1h-1.2v-.8H3.2V3z"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

PrintIcon.displayName = 'PrintIcon'
