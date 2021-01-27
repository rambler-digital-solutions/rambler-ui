import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function InfoIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        d="M15 15V0M0 15V0m7.7 9.8h-.4c-.276 0-.5.224-.5.5v.4c0 .276.224.5.5.5h.4c.276 0 .5-.224.5-.5v-.4c0-.276-.224-.5-.5-.5M7.35 9h.3c.276 0 .5-.224.5-.5v-4c0-.276-.224-.5-.5-.5h-.3c-.276 0-.5.224-.5.5v4c0 .276.224.5.5.5m.15-9C3.358 0 0 3.358 0 7.5 0 11.642 3.358 15 7.5 15c4.142 0 7.5-3.358 7.5-7.5C15 3.358 11.642 0 7.5 0m0 1.2c3.474 0 6.3 2.826 6.3 6.3 0 3.474-2.826 6.3-6.3 6.3-3.474 0-6.3-2.826-6.3-6.3 0-3.474 2.826-6.3 6.3-6.3"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

InfoIcon.displayName = 'InfoIcon'
