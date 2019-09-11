import React from 'react'
import SvgIcon from '../SvgIcon'

export default function SberbankIcon(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 20 20">
      <rect width="20" height="20" rx="10" fill="#22A330" />
      <path
        d="M1.473 2.323l2.004 1.1L7.96.962c.23.093.45.2.663.32L3.477 4.119 1.072 2.796c.125-.165.258-.323.4-.473zm-.717.941l2.721 1.493 5.69-3.125c.178.129.347.267.507.414L3.477 5.447.474 3.8c.084-.184.178-.362.282-.535zm-.5 1.092l3.221 1.767 6.627-3.637c.136.155.262.317.38.486L3.476 6.813.1 4.96a5.21 5.21 0 01.158-.604zM.014 5.604l3.464 1.904 7.317-4.03c.406.748.635 1.598.635 2.498 0 3.012-2.559 5.453-5.715 5.453C2.558 11.429 0 8.988 0 5.976c0-.125.004-.249.013-.372z"
        transform="translate(4.286 4.286)"
        fill="#FFF"
      />
    </SvgIcon>
  )
}

SberbankIcon.displayName = 'SberbankIcon'

SberbankIcon.defaultProps = {
  color: '#22A330'
}
