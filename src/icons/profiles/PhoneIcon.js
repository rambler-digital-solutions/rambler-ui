import React from 'react'
import SvgIcon from '../SvgIcon'

export default function PhoneIcon(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 12 18">
      <path
        d="M0 18V0h12v18H0zM2 2h8v10H2V2zm3 12h2v2H5v-2z"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

PhoneIcon.displayName = 'PhoneIcon'

PhoneIcon.defaultProps = {
  color: '#262626'
}
