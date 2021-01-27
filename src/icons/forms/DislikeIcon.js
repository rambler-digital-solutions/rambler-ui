import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function DislikeIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        d="M0 15V0v15zm15 0V0v15zM2.2 3.363L3.643 1.2H10v6.66l-3.063 3.535-.696 2.087-1.041-.347v-1.852L6.941 7.8H2.2V3.363zm9 4.437h1.6V1.2h-1.6v6.6zM5 9l-.895 1.789c-.069.139-.105.292-.105.447v2.043c0 .431.275.813.684.949l1.368.456c.523.174 1.09-.109 1.264-.632L8 12l2.6-3H13c.553 0 1-.447 1-1V1c0-.553-.447-1-1-1H3.535c-.334 0-.646.167-.832.445L1.168 2.748c-.109.164-.168.357-.168.555V8c0 .553.447 1 1 1h3z"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

DislikeIcon.displayName = 'DislikeIcon'
