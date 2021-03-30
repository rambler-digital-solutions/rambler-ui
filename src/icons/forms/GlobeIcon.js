import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function GlobeIcon(props) {
  return (
    <SvgIcon
      viewBox={size => (size < 20 ? '0 0 15 15' : '0 0 20 20')}
      {...props}>
      {size =>
        size < 20 ? (
          <path
            d="M11.991 11.911C11.943 10.849 11.074 10 10 10V9c0-.552-.448-1-1-1H4V5h2c.552 0 1-.447 1-1V3h1c.869 0 1.601-.557 1.877-1.331C12.175 2.61 13.8 4.868 13.8 7.5c0 1.717-.692 3.274-1.809 4.411M1.2 7.5c0-.405.042-.8.116-1.184L5 10c0 1.105.895 2 2 2h1v1.775c-.165.013-.331.025-.5.025-3.474 0-6.3-2.826-6.3-6.3M7.5 0C3.358 0 0 3.358 0 7.5 0 11.643 3.358 15 7.5 15c4.142 0 7.5-3.357 7.5-7.5C15 3.358 11.642 0 7.5 0"
            fillRule="evenodd"
          />
        ) : (
          <path
            d="M14 15.113V14.5c0-.828-.672-1.5-1.5-1.5H12v-1.5c0-.828-.672-1.5-1.5-1.5H7V8h.5C8.328 8 9 7.329 9 6.5V5h1.5c.723 0 1.327-.512 1.468-1.193C14.593 4.643 16.5 7.102 16.5 10c0 2.075-.981 3.922-2.5 5.113M3.5 10c0-.748.133-1.464.367-2.133L8 12v1c0 1.105.895 2 2 2h1v1.415c-.327.051-.659.085-1 .085-3.584 0-6.5-2.916-6.5-6.5M10 2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8M0 20V0m20 0v20"
            fillRule="evenodd"
          />
        )
      }
    </SvgIcon>
  )
}

GlobeIcon.displayName = 'GlobeIcon'