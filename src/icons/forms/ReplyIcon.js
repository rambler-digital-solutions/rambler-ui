import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function ReplyIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        d="M8.9 6.9H2.948L7.57 2.278c.195-.195.195-.512 0-.707l-.14-.141c-.196-.196-.513-.196-.708-.001L1.287 6.864c-.35.35-.35.92 0 1.273l5.435 5.434c.195.195.512.195.707-.001l.141-.141c.195-.195.195-.511 0-.707L2.948 8.1H8.9c2.548 0 4.648 1.954 4.88 4.442.023.259.237.458.497.458h.2c.293 0 .525-.251.5-.542C14.7 9.347 12.08 6.9 8.9 6.9M15 15V0M0 15V0"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

ReplyIcon.displayName = 'ReplyIcon'
