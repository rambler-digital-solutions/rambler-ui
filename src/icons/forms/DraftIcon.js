import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function DraftIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        d="M0 15V0v15zM15 0v15V0zm-1.2 12.8H1.2V2.2H8V7c0 .552.448 1 1 1h4.8v4.8zM9.503 2.2L13.8 6.497V6.8H9.2V2.2h.303zM9.586 1H1c-.552 0-1 .448-1 1v11c0 .552.448 1 1 1h13c.552 0 1-.448 1-1V6.414c0-.265-.105-.519-.293-.707l-4.414-4.414C10.105 1.105 9.851 1 9.586 1z"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

DraftIcon.displayName = 'DraftIcon'
