import React from 'react'
import SvgIcon from '../SvgIcon'

export default function PhoneIcon(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 15 23">
      <path
        d="M13 15.8H2v-1.3h11V6.3H2V5h11V3.997A1.993 1.993 0 0 0 11.008 2H3.992A2 2 0 0 0 2 3.997v15.006C2 20.109 2.892 21 3.992 21h7.016A2 2 0 0 0 13 19.003V15.8zM.5 3.997A3.5 3.5 0 0 1 3.992.5h7.016A3.493 3.493 0 0 1 14.5 3.997v15.006a3.5 3.5 0 0 1-3.492 3.497H3.992A3.493 3.493 0 0 1 .5 19.003V3.997zM7.5 20a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

PhoneIcon.displayName = 'PhoneIcon'
