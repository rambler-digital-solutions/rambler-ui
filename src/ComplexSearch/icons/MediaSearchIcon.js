import React from 'react'
import SvgIcon from '../../icons/SvgIcon'

export default function MediaSearchIcon(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 20 20">
      <path
        fillRule="nonzero"
        d="M13.168 11.107l3.007 3.008a.499.499 0 0 1-.004.714l-.342.342a.501.501 0 0 1-.714.004l-3.008-3.007a4.5 4.5 0 1 1 1.06-1.06zM9.5 11.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
      />
    </SvgIcon>
  )
}

MediaSearchIcon.displayName = 'MediaSearchIcon'
