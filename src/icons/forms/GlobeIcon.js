import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function GlobeIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        d="M11.991 11.911C11.943 10.849 11.074 10 10 10V9c0-.552-.448-1-1-1H4V5h2c.552 0 1-.447 1-1V3h1c.869 0 1.601-.557 1.877-1.331C12.175 2.61 13.8 4.868 13.8 7.5c0 1.717-.692 3.274-1.809 4.411M1.2 7.5c0-.405.042-.8.116-1.184L5 10c0 1.105.895 2 2 2h1v1.775c-.165.013-.331.025-.5.025-3.474 0-6.3-2.826-6.3-6.3M7.5 0C3.358 0 0 3.358 0 7.5 0 11.643 3.358 15 7.5 15c4.142 0 7.5-3.357 7.5-7.5C15 3.358 11.642 0 7.5 0"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

GlobeIcon.displayName = 'GlobeIcon'
