import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function FullscreenExitIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        d="M15 0v15V0zM0 0v15V0zm4.8 4.8H1.5c-.276 0-.5.224-.5.5v.2c0 .276.224.5.5.5h4c.276 0 .5-.224.5-.5v-4c0-.276-.224-.5-.5-.5h-.2c-.276 0-.5.224-.5.5v3.3zm5.4 0V1.5c0-.276-.224-.5-.5-.5h-.2c-.276 0-.5.224-.5.5v4c0 .276.224.5.5.5h4c.276 0 .5-.224.5-.5v-.2c0-.276-.224-.5-.5-.5h-3.3zm-5.4 5.4v3.3c0 .276.224.5.5.5h.2c.276 0 .5-.224.5-.5v-4c0-.276-.224-.5-.5-.5h-4c-.276 0-.5.224-.5.5v.2c0 .276.224.5.5.5h3.3zM9.7 14h-.2c-.276 0-.5-.224-.5-.5v-4c0-.276.224-.5.5-.5h4c.276 0 .5.224.5.5v.2c0 .276-.224.5-.5.5h-3.3v3.3c0 .276-.224.5-.5.5z"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

FullscreenExitIcon.displayName = 'FullscreenExitIcon'
