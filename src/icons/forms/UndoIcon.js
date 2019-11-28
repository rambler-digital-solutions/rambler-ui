import React from 'react'
import SvgIcon from '../SvgIcon'

export default function UndoIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path d="M3.375 4.375C4.321 3.12 5.809 2.3 7.5 2.3c2.867 0 5.2 2.333 5.2 5.2a5.208 5.208 0 0 1-4.742 5.18.5.5 0 0 0-.458.497v.302c0 .292.25.523.542.499a6.5 6.5 0 1 0-5.61-10.546L1.355 2.355C1.159 2.159 1 2.215 1 2.49v3.02c0 .27.215.49.49.49h3.02c.27 0 .338-.152.135-.355l-1.27-1.27z" />
    </SvgIcon>
  )
}

UndoIcon.displayName = 'UndoIcon'
