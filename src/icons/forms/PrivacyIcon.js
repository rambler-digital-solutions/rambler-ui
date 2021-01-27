import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function PrivacyIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        d="M2.658 2.26C2.263 2.406 2 2.78 2 3.2v5.3c0 2.505 3.738 4.618 5.051 5.283.284.144.613.144.898 0C9.262 13.118 13 11.005 13 8.5V3.2c0-.42-.263-.795-.659-.94L7.841.626c-.22-.081-.462-.081-.683 0l-4.5 1.636zM7.5 1.778l4.3 1.564V8.5c0 1.538-2.64 3.322-4.3 4.169-1.662-.844-4.3-2.625-4.3-4.17V3.342l4.3-1.564zM0 15V0v15zM15 0v15V0z"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

PrivacyIcon.displayName = 'PrivacyIcon'
