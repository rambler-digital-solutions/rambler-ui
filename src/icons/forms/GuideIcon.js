import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function GuideIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        d="M0 15V0m15 0v15M1.481 12.013c2.055.108 3.923.91 5.385 2.171.363.313.905.313 1.268 0 1.462-1.261 3.33-2.063 5.385-2.171.268-.014.481-.225.481-.493V5.521c0-.284-.239-.522-.523-.506C11.129 5.15 9.026 6.19 7.5 7.786 5.974 6.19 3.871 5.15 1.523 5.015 1.239 4.999 1 5.237 1 5.521v5.999c0 .268.213.479.481.493M7.5 1c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2M0 15V0m15 0v15"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

GuideIcon.displayName = 'GuideIcon'
