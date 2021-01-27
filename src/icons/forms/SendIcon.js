import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function SendIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        d="M0 15V0v15zM15 0v15V0zM3 7.5L.854 13.58c-.303.86.607 1.644 1.412 1.216l12.072-6.413c.707-.376.707-1.39 0-1.766L2.266.204C1.461-.224.551.56.854 1.42L3 7.5zm-.844-5.996L13.442 7.5 2.156 13.496l1.999-5.663c.076-.216.076-.45 0-.666L2.156 1.504z"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

SendIcon.displayName = 'SendIcon'
