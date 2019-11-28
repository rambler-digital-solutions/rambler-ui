import React from 'react'
import SvgIcon from '../SvgIcon'

export default function RamblerSearchIcon(props) {
  return (
    <SvgIcon viewBox="0 0 20 20" {...props}>
      <path
        fillRule="evenodd"
        d="M3.649 8.757A5.223 5.223 0 0 1 8.865 3.54a5.223 5.223 0 0 1 5.217 5.217 5.223 5.223 0 0 1-5.217 5.217 5.223 5.223 0 0 1-5.216-5.217m14.379 8.318l-4.011-4.012a6.686 6.686 0 0 0 1.565-4.306 6.717 6.717 0 1 0-6.717 6.717c1.53 0 2.935-.517 4.064-1.377l4.039 4.039a.5.5 0 0 0 .707 0l.353-.354a.499.499 0 0 0 0-.707"
      />
    </SvgIcon>
  )
}

RamblerSearchIcon.displayName = 'RamblerSearchIcon'
