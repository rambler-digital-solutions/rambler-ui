import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function FullscreenIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        d="M15 0v15V0zM0 0v15V0zm12.8 12.8H9.5c-.276 0-.5.224-.5.5v.2c0 .276.224.5.5.5h4c.276 0 .5-.224.5-.5v-4c0-.276-.224-.5-.5-.5h-.2c-.276 0-.5.224-.5.5v3.3zm-10.6 0V9.5c0-.276-.224-.5-.5-.5h-.2c-.276 0-.5.224-.5.5v4c0 .276.224.5.5.5h4c.276 0 .5-.224.5-.5v-.2c0-.276-.224-.5-.5-.5H2.2zM12.8 2.2v3.3c0 .276.224.5.5.5h.2c.276 0 .5-.224.5-.5v-4c0-.276-.224-.5-.5-.5h-4c-.276 0-.5.224-.5.5v.2c0 .276.224.5.5.5h3.3zM1.7 6h-.2c-.276 0-.5-.224-.5-.5v-4c0-.276.224-.5.5-.5h4c.276 0 .5.224.5.5v.2c0 .276-.224.5-.5.5H2.2v3.3c0 .276-.224.5-.5.5z"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

FullscreenIcon.displayName = 'FullscreenIcon'
