import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function UndoIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        d="M7.852 1.01C5.66.892 3.694 1.866 2.435 3.434L1.427 2.426C1.27 2.27 1 2.381 1 2.603V5.5c0 .276.224.5.5.5h2.897c.223 0 .334-.27.177-.427L3.309 4.308c1.033-1.363 2.69-2.225 4.56-2.096 2.605.18 4.717 2.272 4.916 4.875.225 2.952-1.986 5.45-4.83 5.693-.257.022-.455.24-.455.498v.2c0 .292.25.523.54.5 3.44-.283 6.122-3.246 5.953-6.797-.158-3.31-2.831-5.997-6.141-6.172M0 15V0m15 0v15"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

UndoIcon.displayName = 'UndoIcon'
