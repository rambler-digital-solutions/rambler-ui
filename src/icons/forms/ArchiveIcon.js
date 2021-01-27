import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function ArchiveIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        d="M15 0v15V0zM0 0v15V0zm3.6 3.2h7.8L12.75 5h1.499L12.3 2.4c-.189-.252-.485-.4-.8-.4h-8c-.315 0-.611.148-.8.4L.75 5h1.5L3.6 3.2zM11.414 6c-.265 0-.519.105-.707.293L9 8H6L4.293 6.293C4.105 6.105 3.851 6 3.586 6H0v7c0 .552.448 1 1 1h12.999c.552 0 1-.448 1-1V6h-3.585zm2.385 1.2v5.6H1.2V7.2h2.303L5.21 8.907c.188.188.442.293.707.293h3.166c.265 0 .519-.105.707-.293L11.497 7.2h2.302z"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

ArchiveIcon.displayName = 'ArchiveIcon'
